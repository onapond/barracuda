"use client";

import { useState } from "react";
import { subpageContent } from "@/data/site-content";

type SubmitState = "idle" | "submitting" | "success" | "error";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/4everlll@naver.com";

export function SpaceInquiryForm() {
  const { inquiryForm } = subpageContent.space;
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">문의 폼</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">{inquiryForm.title}</h2>
        <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">{inquiryForm.description}</p>
        {submitState === "success" ? (
          <p className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-sm leading-7 text-[var(--color-foreground)]">
            {inquiryForm.successMessage}
          </p>
        ) : null}
        {submitState === "error" ? (
          <p className="mt-6 rounded-[1.5rem] border border-red-300 bg-red-50 px-5 py-4 text-sm leading-7 text-red-700">
            {errorMessage || "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요."}
          </p>
        ) : null}
      </div>
      <form
        className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"
        onSubmit={async (event) => {
          event.preventDefault();
          setSubmitState("submitting");
          setErrorMessage("");

          const form = event.currentTarget;
          const formData = new FormData(form);
          formData.append("_subject", "[Barracuda] 공간 문의");
          formData.append("_template", "table");
          formData.append("_captcha", "false");
          formData.append("_honey", "");
          const replyTo = formData.get("email");
          if (typeof replyTo === "string" && replyTo.length > 0) {
            formData.append("_replyto", replyTo);
          }

          const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: formData,
          });

          if (!response.ok) {
            setSubmitState("error");
            setErrorMessage("문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
            return;
          }

          form.reset();
          setSubmitState("success");
        }}
      >
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid gap-5 sm:grid-cols-2">
          {inquiryForm.fields.map((field) => (
            <label key={field.name} className="block text-sm text-[var(--color-muted)]">
              <span className="mb-3 block text-xs uppercase tracking-[0.24em]">{field.label}</span>
              <input
                name={field.name}
                type={field.type}
                placeholder={"placeholder" in field ? field.placeholder : undefined}
                required={field.type !== "number"}
                min={field.type === "number" ? 1 : undefined}
                className="w-full rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-foreground)]"
              />
            </label>
          ))}
        </div>
        <label className="mt-5 block text-sm text-[var(--color-muted)]">
          <span className="mb-3 block text-xs uppercase tracking-[0.24em]">{inquiryForm.messageField.label}</span>
          <textarea
            name={inquiryForm.messageField.name}
            rows={6}
            placeholder={inquiryForm.messageField.placeholder}
            required
            className="w-full rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-background)] px-4 py-3 text-sm leading-7 text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-foreground)]"
          />
        </label>
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="mt-6 inline-flex rounded-full border border-[var(--color-foreground)]/20 bg-[var(--color-foreground)] px-5 py-3 text-sm uppercase tracking-[0.24em] text-[var(--color-background)] transition hover:bg-transparent hover:text-[var(--color-foreground)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitState === "submitting" ? "보내는 중..." : inquiryForm.submitLabel}
        </button>
      </form>
    </div>
  );
}
