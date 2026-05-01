"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormState = "idle" | "submitting" | "success" | "error";

const contactTypes = [
  "レポートについて",
  "業務依頼",
  "協業・提携",
  "取材・登壇",
  "その他",
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdobwjn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-6">
            Contact
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            お問い合わせ
          </h1>
          <p className="font-inter text-base text-white/55 leading-relaxed max-w-xl">
            レポートのご質問、業務依頼、取材・登壇依頼など、
            <br className="hidden sm:block" />
            お気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-[640px]">

            {state === "success" ? (
              <div className="border border-gold/30 rounded-2xl p-12 flex flex-col items-center gap-5 text-center">
                <span className="text-gold text-5xl">✓</span>
                <h2 className="font-playfair text-2xl font-bold text-navy">
                  送信完了
                </h2>
                <p className="font-inter text-sm text-navy/65 leading-[1.9]">
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認のうえ、担当者よりご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">

                {/* お名前 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/55 uppercase tracking-widest">
                    お名前 <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    className="font-inter text-sm text-navy placeholder:text-navy/30 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                {/* 会社名 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/55 uppercase tracking-widest">
                    会社名 <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="株式会社〇〇"
                    className="font-inter text-sm text-navy placeholder:text-navy/30 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                {/* メールアドレス */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/55 uppercase tracking-widest">
                    メールアドレス <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="font-inter text-sm text-navy placeholder:text-navy/30 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                {/* お問い合わせ種別 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/55 uppercase tracking-widest">
                    お問い合わせ種別 <span className="text-gold">*</span>
                  </label>
                  <select
                    name="type"
                    required
                    defaultValue=""
                    className="font-inter text-sm text-navy border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      選択してください
                    </option>
                    {contactTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* メッセージ */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/55 uppercase tracking-widest">
                    メッセージ <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="お問い合わせ内容をご記入ください"
                    className="font-inter text-sm text-navy placeholder:text-navy/30 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {state === "error" && (
                  <p className="font-inter text-xs text-red-500">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="font-inter text-sm font-semibold bg-navy text-white px-6 py-4 rounded hover:bg-navy/85 transition-colors tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === "submitting" ? "送信中..." : "送信する →"}
                </button>

                <p className="font-inter text-xs text-navy/35 text-center leading-relaxed">
                  ご入力いただいた情報はお問い合わせへの返答以外の目的には使用しません。
                </p>

              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
