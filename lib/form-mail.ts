const DEFAULT_FORM_RECIPIENT = "4everlll@naver.com";
const FORMSUBMIT_AJAX_URL = "https://formsubmit.co/ajax";

type SendFormEmailInput = {
  subject: string;
  replyTo?: string;
  textLines: string[];
  htmlSections: Array<[label: string, value: string]>;
};

function getRecipientEmail() {
  return process.env.BARRACUDA_FORM_TO_EMAIL || DEFAULT_FORM_RECIPIENT;
}

function buildFormPayload(input: SendFormEmailInput) {
  const formData = new FormData();

  formData.set("_subject", input.subject);
  formData.set("_captcha", "false");
  formData.set("_template", "table");
  formData.set("message", input.textLines.join("\n"));

  if (input.replyTo?.trim()) {
    formData.set("_replyto", input.replyTo.trim());
  }

  for (const [label, value] of input.htmlSections) {
    formData.set(label, value);
  }

  return formData;
}

export async function sendFormEmail(input: SendFormEmailInput) {
  const recipientEmail = getRecipientEmail();
  const response = await fetch(`${FORMSUBMIT_AJAX_URL}/${encodeURIComponent(recipientEmail)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: buildFormPayload(input),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`FormSubmit request failed (${response.status}): ${body}`);
  }
}

