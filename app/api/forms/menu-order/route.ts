import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/form-mail";

type MenuOrderPayload = {
  name?: string;
  phone?: string;
  email?: string;
  pickupDate?: string;
  pickupTime?: string;
  orderType?: string;
  orderDetails?: string;
  _honey?: string;
};

export async function POST(request: Request) {
  let payload: MenuOrderPayload;

  try {
    payload = (await request.json()) as MenuOrderPayload;
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
    ["orderType", payload.orderType],
    ["orderDetails", payload.orderDetails],
  ] as const;

  const missingField = requiredFields.find(([, value]) => !value?.trim());
  if (missingField) {
    return NextResponse.json({ error: `Missing field: ${missingField[0]}` }, { status: 400 });
  }

  try {
    await sendFormEmail({
      subject: "[Barracuda] 주문 요청",
      replyTo: payload.email,
      textLines: [
        `이름: ${payload.name}`,
        `연락처: ${payload.phone}`,
        `이메일: ${payload.email}`,
        `희망 수령일: ${payload.pickupDate || "-"}`,
        `희망 수령 시간: ${payload.pickupTime || "-"}`,
        `주문 유형: ${payload.orderType}`,
        "",
        "[주문 내용]",
        payload.orderDetails ?? "",
      ],
      htmlSections: [
        ["이름", payload.name ?? ""],
        ["연락처", payload.phone ?? ""],
        ["이메일", payload.email ?? ""],
        ["희망 수령일", payload.pickupDate || "-"],
        ["희망 수령 시간", payload.pickupTime || "-"],
        ["주문 유형", payload.orderType ?? ""],
        ["주문 내용", payload.orderDetails ?? ""],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send menu order email.", error);
    return NextResponse.json({ error: "Failed to submit form." }, { status: 500 });
  }
}
