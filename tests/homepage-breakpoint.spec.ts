import fs from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";

type Failure = {
  selector: string;
  text: string;
  overflow: boolean;
  clientWidth: number;
  scrollWidth: number;
  clientHeight: number;
  scrollHeight: number;
};

type ReportRow = {
  width: number;
  status: "pass" | "fail";
  screenshot: string;
  failures: Failure[];
};

const widths = [360, 768, 1024, 1440] as const;
const outputDir = path.join(process.cwd(), ".qa-homepage");
const report: ReportRow[] = [];

function ensureOutputDir() {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function collectFailures(page: import("@playwright/test").Page): Promise<Failure[]> {
  return page.locator("main h1, main h2, main h3").evaluateAll((elements) => {
    return elements
      .map((element) => {
        const text = (element.textContent ?? "").replace(/\s+/g, " ").trim();
        const overflow = element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1;

        return {
          selector: element.tagName.toLowerCase(),
          text,
          overflow,
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
          clientHeight: element.clientHeight,
          scrollHeight: element.scrollHeight,
        };
      })
      .filter((item) => item.overflow);
  });
}

test("homepage breakpoint qa", async ({ page }) => {
  ensureOutputDir();

  for (const width of widths) {
    await page.setViewportSize({ width, height: 1800 });
    await page.goto("/", { waitUntil: "networkidle" });

    const screenshotName = `homepage-${width}.png`;
    await page.screenshot({
      path: path.join(outputDir, screenshotName),
      fullPage: true,
    });

    const failures = await collectFailures(page);
    report.push({
      width,
      status: failures.length ? "fail" : "pass",
      screenshot: screenshotName,
      failures,
    });
  }

  fs.writeFileSync(path.join(outputDir, "homepage-breakpoint-report.json"), JSON.stringify(report, null, 2));

  expect(report.some((row) => row.status === "fail")).toBeFalsy();
});
