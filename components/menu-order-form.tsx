"use client";

import { useEffect, useState } from "react";
import { subpageContent } from "@/data/site-content";

const FORM_ENDPOINT = "https://formsubmit.co/4everlll@naver.com";
const SUCCESS_PARAM = "menu";

export function MenuOrderForm() {
  const { orderForm } = subpageContent.menu;
  const [returnUrl, setReturnUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("submitted", SUCCESS_PARAM);
    setReturnUrl(currentUrl.toString());
    setIsSuccess(new URLSearchParams(window.location.search).get("submitted") === SUCCESS_PARAM);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">주문 요청</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">{orderForm.title}</h2>
        <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">{orderForm.description}</p>
        {isSuccess ? (
          <p className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-sm leading-7 text-[var(--color-foreground)]">
            {orderForm.successMessage}
          </p>
        ) : null}
      </div>
      <form
        action={FORM_ENDPOINT}
        method="POST"
        className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"
        onSubmit={() => {
          setIsSubmitting(true);
        }}
      >
        <input type="hidden" name="_subject" value="[Baracuda] 주문 요청" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={returnUrl} />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid gap-5 sm:grid-cols-2">
          {orderForm.fields.map((field) => (
            <label key={field.name} className="block text-sm text-[var(--color-muted)]">
              <span className="mb-3 block text-xs uppercase tracking-[0.24em]">{field.label}</span>
              <input
                name={field.name}
                type={field.type}
                placeholder={"placeholder" in field ? field.placeholder : undefined}
                required={field.name !== "pickupDate" && field.name !== "pickupTime"}
                className="w-full rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-foreground)]"
              />
            </label>
          ))}
          <label className="block text-sm text-[var(--color-muted)]">
            <span className="mb-3 block text-xs uppercase tracking-[0.24em]">주문 유형</span>
            <select
              name="orderType"
              required
              defaultValue=""
              className="w-full rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-foreground)]"
            >
              <option value="" disabled>
                주문 유형을 선택해 주세요.
              </option>
              {orderForm.orderTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="mt-5 block text-sm text-[var(--color-muted)]">
          <span className="mb-3 block text-xs uppercase tracking-[0.24em]">{orderForm.messageField.label}</span>
          <textarea
            name={orderForm.messageField.name}
            rows={6}
            placeholder={orderForm.messageField.placeholder}
            required
            className="w-full rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-background)] px-4 py-3 text-sm leading-7 text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-foreground)]"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting || !returnUrl}
          className="mt-6 inline-flex rounded-full border border-[var(--color-foreground)]/20 bg-[var(--color-foreground)] px-5 py-3 text-sm uppercase tracking-[0.24em] text-[var(--color-background)] transition hover:bg-transparent hover:text-[var(--color-foreground)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "보내는 중.." : orderForm.submitLabel}
        </button>
      </form>
    </div>
  );
}
