"use client";

import { useState } from "react";

const reports = [
  {
    category: "SNS MARKETING",
    title: "#001 ファン資本の再設計――\nAI時代のSNSマーケティングを、運用から資本形成へ",
  },
];

type NewsletterState = "idle" | "submitting" | "success" | "error";

export default function ThreeColumnSection() {
  const [nlState, setNlState] = useState<NewsletterState>("idle");

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNlState("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/mlgkzjov", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setNlState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setNlState("error");
      }
    } catch {
      setNlState("error");
    }
  }

  return (
    <section className="bg-white py-20 lg:py-24 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {/* Latest Reports */}
        <div id="reports">
          <h3 className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8 pb-4 border-b border-navy/10">
            Latest Reports
          </h3>
          <ul className="flex flex-col gap-6">
            {reports.map((report) => (
              <li key={report.title} className="group cursor-pointer">
                <span className="inline-block font-inter text-[10px] font-semibold tracking-wider uppercase text-gold bg-gold/10 px-2 py-0.5 rounded mb-2">
                  {report.category}
                </span>
                <p className="font-playfair text-base font-semibold text-navy leading-snug group-hover:text-gold transition-colors">
                  {report.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/reports"
            className="mt-8 inline-flex items-center gap-1 font-inter text-xs font-semibold text-navy tracking-widest uppercase hover:text-gold transition-colors group"
          >
            ALL REPORTS <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Podcast */}
        <div id="podcast">
          <h3 className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8 pb-4 border-b border-navy/10">
            Podcast
          </h3>
          <div className="flex flex-col items-start gap-3 py-4">
            <p className="font-playfair text-3xl font-bold text-navy">
              Coming Soon.
            </p>
            <p className="font-inter text-xs text-navy/45 tracking-wide">
              まもなく配信開始予定
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div id="newsletter">
          <h3 className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8 pb-4 border-b border-navy/10">
            NewsLetter
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h4 className="font-playfair text-xl font-bold text-navy leading-snug">
                NSI Newsletter
              </h4>
              <p className="font-inter text-xs text-gold leading-relaxed">
                On AI-driven social trends, hype narratives, and marketing strategy.
              </p>
              <p className="font-inter text-xs text-navy/55 leading-relaxed">
                AIが駆動するソーシャルトレンド、熱狂を生むナラティブ、そしてマーケティング戦略を読み解く。
              </p>
            </div>

            {nlState === "success" ? (
              <div className="border border-gold/30 rounded px-5 py-6 text-center flex flex-col gap-2">
                <p className="font-inter text-xs font-semibold text-gold tracking-widest uppercase">
                  Thank You
                </p>
                <p className="font-inter text-sm text-navy/70 leading-relaxed">
                  ご登録ありがとうございます。<br />最新のニュースレターをお届けします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="お名前"
                  required
                  className="font-inter text-sm text-navy placeholder:text-navy/35 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors w-full"
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="所属（会社名・団体名）"
                  className="font-inter text-sm text-navy placeholder:text-navy/35 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="font-inter text-sm text-navy placeholder:text-navy/35 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors w-full"
                />
                {nlState === "error" && (
                  <p className="font-inter text-xs text-red-500">
                    送信に失敗しました。再度お試しください。
                  </p>
                )}
                <button
                  type="submit"
                  disabled={nlState === "submitting"}
                  className="font-inter text-sm font-semibold bg-navy text-gold px-5 py-3 rounded hover:bg-navy/85 transition-colors tracking-widest uppercase disabled:opacity-50"
                >
                  {nlState === "submitting" ? "送信中..." : "登録する"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
