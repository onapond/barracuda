import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/form-mail";

type SpaceInquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  expectedGuests?: string;
  message?: string;
  _honey?: string;
};

export async function POST(request: Request) {
  let payload: SpaceInquiryPayload;

  try {
    payload = (await request.json()) as SpaceInquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload._honey) {
    return NextResponse.json({ ok: true });
  }

  const requiredFields = [
    ["name", payload.name],
    ["phone", payload.phone],
    ["email", payload.email],
    ["eventType", payload.eventType],
    ["message", payload.message],
  ] as const;

  const missingField = requiredFields.find(([, value]) => !value?.trim());
  if (missingField) {
    return NextResponse.json({ error: `Missing field: ${missingField[0]}` }, { status: 400 });
  }

  try {
    await sendFormEmail({
      subject: "[Barracuda] 공간 문의",
      replyTo: payload.email,
      textLines: [
        `이름: ${payload.name}`,
        `연락처: ${payload.phone}`,
        `이메일: ${payload.email}`,
        `행사 유형: ${payload.eventType}`,
        `희망 일정: ${payload.eventDate || "-"}`,
        `예상 인원: ${payload.expectedGuests || "-"}`,
        "",
        "[문의 내용]",
        payload.message ?? "",
      ],
      htmlSections: [
        ["이름", payload.name ?? ""],
        ["연락처", payload.phone ?? ""],
        ["이메일", payload.email ?? ""],
        ["행사 유형", payload.eventType ?? ""],
        ["희망 일정", payload.eventDate || "-"],
        ["예상 인원", payload.expectedGuests || "-"],
        ["문의 내용", payload.message ?? ""],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send space inquiry email.", error);
    return NextResponse.json({ error: "Failed to submit form." }, { status: 500 });
  }
}
