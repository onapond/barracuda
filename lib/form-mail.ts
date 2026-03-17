const RESEND_API_URL = "https://api.resend.com/emails";

type SendFormEmailInput = {
  subject: string;
  replyTo?: string;
  textLines: string[];
  htmlSections: Array<[label: string, value: string]>;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(sections: Array<[label: string, value: string]>) {
  const rows = sections
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;font-weight:600;vertical-align:top;border-bottom:1px solid #e5e7eb;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;vertical-align:top;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
      <h1 style="font-size:20px;margin:0 0 16px;">Barracuda Form Submission</h1>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;">
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

export async function sendFormEmail(input: SendFormEmailInput) {
  const apiKey = getRequiredEnv("RESEND_API_KEY");
  const fromEmail = getRequiredEnv("BARRACUDA_FORM_FROM_EMAIL");
  const toEmail = getRequiredEnv("BARRACUDA_FORM_TO_EMAIL");

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: input.subject,
      reply_to: input.replyTo,
      text: input.textLines.join("\n"),
      html: buildHtml(input.htmlSections),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${body}`);
  }
}
