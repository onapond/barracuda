/**
 * Image optimization script (Windows-compatible)
 * 반드시 프로젝트 루트에서 실행: node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import { readdir, stat, unlink, writeFile, readFile } from 'fs/promises'

const IMAGE_DIR = 'public/images'
const MAX_WIDTH = 1920
const JPEG_QUALITY = 85
const SKIP_BELOW_BYTES = 100 * 1024

// 경로는 항상 '/' 구분자 사용
function toSlash(p) {
  return p.replace(/\\/g, '/')
}

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = toSlash(`${dir}/${entry.name}`)
    if (entry.isDirectory()) {
      files.push(...(await getImages(fullPath)))
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

const images = await getImages(IMAGE_DIR)
const renames = []
let totalSavedBytes = 0

console.log(`\n총 ${images.length}개 이미지 처리 시작...\n`)

for (const imgPath of images) {
  const ext = imgPath.split('.').pop().toLowerCase()
  const fileStat = await stat(imgPath)

  if (fileStat.size < SKIP_BELOW_BYTES) {
    continue
  }

  const isPng = ext === 'png'
  const outputPath = isPng ? imgPath.replace(/\.png$/i, '.jpg') : imgPath

  try {
    const inputBuffer = await readFile(imgPath)
    const buffer = await sharp(inputBuffer)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
      .toBuffer()

    await writeFile(outputPath, buffer)

    if (isPng) {
      await unlink(imgPath)
      renames.push({
        from: imgPath.replace('public', ''),
        to: outputPath.replace('public', ''),
      })
    }

    const saved = fileStat.size - buffer.length
    totalSavedBytes += saved
    const pct = ((saved / fileStat.size) * 100).toFixed(1)
    const tag = isPng ? 'PNG→JPG' : '  OPT  '
    console.log(
      `${tag}  ${imgPath.replace('public/images/', '')}` +
      `  (${(fileStat.size / 1024 / 1024).toFixed(2)}MB → ${(buffer.length / 1024 / 1024).toFixed(2)}MB, -${pct}%)`
    )
  } catch (err) {
    console.error(`  ERROR  ${imgPath}: ${err.message}`)
  }
}

console.log(`\n${'─'.repeat(60)}`)
console.log(`총 절감: ${(totalSavedBytes / 1024 / 1024).toFixed(1)}MB`)

if (renames.length > 0) {
  console.log(`\n=== PNG→JPG 변환 목록 ===`)
  for (const { from, to } of renames) {
    console.log(`  ${from}  →  ${to}`)
  }
}
