"use client";

import { useState } from "react";
import { subpageContent } from "@/data/site-content";

type SubmitState = "idle" | "submitting" | "success" | "error";
const FORM_ENDPOINT = "/api/forms/menu-order";

export function MenuOrderForm() {
  const { orderForm } = subpageContent.menu;
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">주문 요청</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">{orderForm.title}</h2>
        <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">{orderForm.description}</p>
        {submitState === "success" ? (
          <p className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-sm leading-7 text-[var(--color-foreground)]">
            {orderForm.successMessage}
          </p>
        ) : null}
        {submitState === "error" ? (
          <p className="mt-6 rounded-[1.5rem] border border-red-300 bg-red-50 px-5 py-4 text-sm leading-7 text-red-700">
            {errorMessage || "주문 요청 전송에 실패했습니다. 잠시 후 다시 시도해 주세요."}
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
          const payload = Object.fromEntries(formData.entries());

          const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            const data = (await response.json().catch(() => null)) as { error?: string } | null;
            setSubmitState("error");
            setErrorMessage(data?.error || "주문 요청 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
            return;
          }

          form.reset();
          setSubmitState("success");
        }}
      >
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
          disabled={submitState === "submitting"}
          className="mt-6 inline-flex rounded-full border border-[var(--color-foreground)]/20 bg-[var(--color-foreground)] px-5 py-3 text-sm uppercase tracking-[0.24em] text-[var(--color-background)] transition hover:bg-transparent hover:text-[var(--color-foreground)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitState === "submitting" ? "보내는 중.." : orderForm.submitLabel}
        </button>
      </form>
    </div>
  );
}
