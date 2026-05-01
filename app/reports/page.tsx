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

const companySizes = ["〜50名", "51〜300名", "301名以上"];

function DownloadForm() {
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

  if (state === "success") {
    return (
      <div className="bg-navy rounded-2xl p-8 lg:p-10 flex flex-col items-center gap-6 text-center">
        <span className="text-gold text-5xl">✓</span>
        <p className="font-playfair text-xl font-bold text-white">
          ありがとうございます。
        </p>
        <p className="font-inter text-sm text-white/65 leading-relaxed">
          PDFのダウンロードリンクをメールでお送りします。
          <br />
          届かない場合は迷惑メールフォルダをご確認ください。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy rounded-2xl p-8 lg:p-10">
      <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-6">
        PDFをダウンロードする
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* お名前 */}
        <div className="flex flex-col gap-1.5">
          <label className="font-inter text-xs font-semibold text-white/50 uppercase tracking-widest">
            お名前 <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="山田 太郎"
            className="font-inter text-sm text-navy bg-white placeholder:text-navy/30 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-gold transition-all"
          />
        </div>

        {/* 会社名 */}
        <div className="flex flex-col gap-1.5">
          <label className="font-inter text-xs font-semibold text-white/50 uppercase tracking-widest">
            会社名 <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="株式会社〇〇"
            className="font-inter text-sm text-navy bg-white placeholder:text-navy/30 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-gold transition-all"
          />
        </div>

        {/* 役職 */}
        <div className="flex flex-col gap-1.5">
          <label className="font-inter text-xs font-semibold text-white/50 uppercase tracking-widest">
            役職 <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="マーケティング部長"
            className="font-inter text-sm text-navy bg-white placeholder:text-navy/30 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-gold transition-all"
          />
        </div>

        {/* 業種 */}
        <div className="flex flex-col gap-1.5">
          <label className="font-inter text-xs font-semibold text-white/50 uppercase tracking-widest">
            業種 <span className="text-gold">*</span>
          </label>
          <select
            name="industry"
            required
            defaultValue=""
            className="font-inter text-sm text-navy bg-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-gold transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>
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
          <label className="font-inter text-xs font-semibold text-white/50 uppercase tracking-widest">
            会社規模 <span className="text-gold">*</span>
          </label>
          <select
            name="size"
            required
            defaultValue=""
            className="font-inter text-sm text-navy bg-white rounded px-4 py-3 outline-none focus:ring-2 focus:ring-gold transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>
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
          <label className="font-inter text-xs font-semibold text-white/50 uppercase tracking-widest">
            メールアドレス <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="font-inter text-sm text-navy bg-white placeholder:text-navy/30 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-gold transition-all"
          />
        </div>

        {/* Error */}
        {state === "error" && (
          <p className="font-inter text-xs text-red-400">
            送信に失敗しました。時間をおいて再度お試しください。
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={state === "submitting"}
          className="mt-2 w-full font-inter text-sm font-semibold bg-gold text-navy px-6 py-4 rounded hover:bg-gold/85 transition-colors tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "送信中..." : "PDFをダウンロードする →"}
        </button>

        <p className="font-inter text-xs text-white/30 leading-relaxed text-center">
          ご入力いただいた情報はレポートの送付にのみ使用します。
        </p>
      </form>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            Reports / New Strategy Institute
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            戦略の知を、形にする。
          </h1>
          <p className="font-inter text-base text-white/55 max-w-2xl leading-relaxed">
            NSIが発行するリサーチレポートは、ソーシャル・ファイナンス・ナラティブの交差点から、事業価値を蓄積するための実践知を提示します。
          </p>
        </div>
      </section>

      {/* ── Featured Report ── */}
      <section style={{ backgroundColor: "#f9f8f5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-12">
            Featured Report
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
            {/* Left — Report info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-inter text-xs font-semibold text-navy/40 tracking-widest uppercase mb-4">
                  Digital Strategy · 2025.05
                </p>
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-navy leading-snug mb-6">
                  顧客起点の経営変革：CDPを戦略資産として活用する条件
                </h2>
                <div className="w-10 h-0.5 bg-gold mb-6" />
                <p className="font-inter text-base text-navy/65 leading-relaxed">
                  顧客データ基盤の整備にとどまらず、戦略・意思決定・KPI設計までを変革するためのフレームを提示。国内外企業の事例を分析。
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-inter text-xs text-navy/40 uppercase tracking-widest w-20">
                    著者
                  </span>
                  <span className="font-inter text-sm font-semibold text-navy">
                    天野 彬
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-inter text-xs text-navy/40 uppercase tracking-widest w-20">
                    ページ数
                  </span>
                  <span className="font-inter text-sm font-semibold text-navy">
                    全32ページ
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-inter text-xs text-navy/40 uppercase tracking-widest w-20">
                    形式
                  </span>
                  <span className="font-inter text-sm font-semibold text-navy">
                    PDF（無料）
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Download form */}
            <div>
              <DownloadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter banner ── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Newsletter
            </p>
            <p className="font-playfair text-2xl lg:text-3xl font-bold text-white">
              戦略の最前線を、メールで届ける。
            </p>
            <p className="font-inter text-sm text-white/50 leading-relaxed">
              戦略・マーケティング・ファイナンスの最新知見をお届けします。
            </p>
          </div>
          <a
            href="/#newsletter"
            className="flex-shrink-0 font-inter text-sm font-semibold border border-gold text-gold px-8 py-4 rounded hover:bg-gold/10 transition-colors tracking-widest uppercase whitespace-nowrap"
          >
            登録する →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
