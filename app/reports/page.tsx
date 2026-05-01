"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormState = "idle" | "submitting" | "success" | "error";

const industries = [
  "事業会社（広告主）",
  "広告・PR会社",
  "コンサルティング会社",
  "メディア・出版",
  "その他",
];

const companySizes = [
  "〜50名",
  "51〜300名",
  "301名以上",
];

export default function ReportsPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/maqvyknz", {
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
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4">
            Reports
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            NSI Research Reports
          </h1>
          <p className="font-inter text-base text-white/55 max-w-xl leading-relaxed">
            以下のフォームにご入力いただくと、レポートのPDFをメールにてお送りします。
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — description */}
          <div className="flex flex-col gap-6">
            <div className="w-8 h-0.5 bg-gold" />
            <p className="font-playfair text-2xl lg:text-3xl font-bold text-navy leading-snug">
              資本効率と物語の統合——
              <br />新時代の企業価値創造論
            </p>
            <p className="font-inter text-sm text-navy/65 leading-relaxed">
              財務指標を超えたナラティブ戦略が、いかに長期的な企業価値の蓄積に寄与するかを考察する、NSI独自の分析レポート。マーケティングとファイナンスの交差点から、新しい経営の物差しを提示します。
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "全30ページ（PDF形式）",
                "無料ダウンロード",
                "登録後、メールにてPDFリンクをお届け",
              ].map((item) => (
                <li key={item} className="font-inter text-sm text-navy/70 flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div>
            {state === "success" ? (
              <div className="border border-gold/30 rounded-2xl p-10 flex flex-col items-center gap-4 text-center">
                <span className="text-gold text-4xl">✓</span>
                <h2 className="font-playfair text-2xl font-bold text-navy">
                  ありがとうございます
                </h2>
                <p className="font-inter text-sm text-navy/65 leading-relaxed">
                  ありがとうございます。PDFのダウンロードリンクをメールでお送りします。
                  <br />
                  届かない場合は迷惑メールフォルダをご確認ください。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* お名前 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/60 uppercase tracking-widest">
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
                  <label className="font-inter text-xs font-semibold text-navy/60 uppercase tracking-widest">
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

                {/* 役職 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/60 uppercase tracking-widest">
                    役職 <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="マーケティング部長"
                    className="font-inter text-sm text-navy placeholder:text-navy/30 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                {/* 業種 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/60 uppercase tracking-widest">
                    業種 <span className="text-gold">*</span>
                  </label>
                  <select
                    name="industry"
                    required
                    defaultValue=""
                    className="font-inter text-sm text-navy border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-navy/30">
                      選択してください
                    </option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 会社規模 */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/60 uppercase tracking-widest">
                    会社規模 <span className="text-gold">*</span>
                  </label>
                  <select
                    name="size"
                    required
                    defaultValue=""
                    className="font-inter text-sm text-navy border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-navy/30">
                      選択してください
                    </option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                {/* メールアドレス */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs font-semibold text-navy/60 uppercase tracking-widest">
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

                {/* Error message */}
                {state === "error" && (
                  <p className="font-inter text-xs text-red-500">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="font-inter text-sm font-semibold bg-navy text-white px-6 py-4 rounded hover:bg-navy/85 transition-colors tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {state === "submitting" ? "送信中..." : "レポートを受け取る →"}
                </button>

                <p className="font-inter text-xs text-navy/35 leading-relaxed">
                  ご入力いただいた情報はレポートの送付にのみ使用します。
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
