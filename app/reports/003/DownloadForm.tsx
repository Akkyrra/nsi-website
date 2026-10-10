"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoejwezq";

export default function DownloadForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed || formState === "submitting") return;
    setFormState("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
        setAgreed(false);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const busy = formState === "submitting";

  return (
    <div style={{ marginTop: "3.4rem", paddingTop: "2.4rem", borderTop: "1px solid var(--line)" }}>
      <h3 style={{ fontSize: "1.15rem" }}>PDF版レポートをダウンロードする</h3>

      {formState === "success" ? (
        <div className="dl-thanks" id="reports_003_complete" role="status">
          <span className="box-label">THANK YOU</span>
          <p>
            ご記入ありがとうございました。
            <br />
            追って担当者からメールでご送付いたします。
          </p>
        </div>
      ) : (
        <form className="dl-form" style={{ marginTop: "1.4rem" }} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="お名前" aria-label="お名前" autoComplete="name" required />
          <input type="text" name="company" placeholder="会社名" aria-label="会社名" autoComplete="organization" required />
          <input type="email" name="email" placeholder="メールアドレス" aria-label="メールアドレス" autoComplete="email" required />
          <input type="text" name="title" placeholder="役職" aria-label="役職" autoComplete="organization-title" />

          <input type="hidden" name="report" value="NSI Report #003 Intangible Integration" />
          <input type="hidden" name="_subject" value="【NSI Report #003】資料ダウンロード申込" />
          {/* honeypot: hidden from people, filled in by bots */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

          <label className="check">
            <input
              type="checkbox"
              name="consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <span>
              <a href="https://dcxforce.co.jp/privacy-policy/#link1" target="_blank" rel="noopener noreferrer">
                プライバシーポリシー
              </a>
              に同意する
            </span>
          </label>

          {formState === "error" && (
            <p className="err" role="alert">
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}

          <button
            type="submit"
            id="gtm-reports-003-submit"
            className="btn btn-primary"
            style={{ justifySelf: "start" }}
            disabled={busy || !agreed}
          >
            {busy ? "送信中..." : "PDFをダウンロード"}
          </button>
          <p className="note">ご入力いただいた情報は、資料の送付および関連するご案内の目的にのみ使用します。</p>
        </form>
      )}
    </div>
  );
}
