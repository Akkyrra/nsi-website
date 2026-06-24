"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "MEDIA" | "REPORT" | "EVENT" | "BOOK" | "NEWSLETTER";

interface NewsItem {
  date: string;
  category: Category;
  title: string;
  href: string;
  external: boolean;
}

// ── ニュース一覧 ──────────────────────────────────────────
// 追加するときは先頭に追記（新しい順）
const newsItems: NewsItem[] = [
  {
    date: "2025.06.24",
    category: "MEDIA",
    title: "NSIの開設、そして第一弾レポートの発表についてプレスリリースを配信しました",
    href: "#",
    external: false,
  },
  {
    date: "2025.06.24",
    category: "REPORT",
    title: "#001 ファン資本の再設計 公開",
    href: "/reports",
    external: false,
  },
];
// ────────────────────────────────────────────────────────

const categoryColors: Record<Category, string> = {
  MEDIA:      "text-sky-600     bg-sky-50    border-sky-200",
  REPORT:     "text-gold        bg-amber-50  border-amber-200",
  EVENT:      "text-emerald-600 bg-emerald-50 border-emerald-200",
  BOOK:       "text-violet-600  bg-violet-50  border-violet-200",
  NEWSLETTER: "text-navy        bg-navy/5    border-navy/20",
};

const ALL = "ALL" as const;
type Filter = typeof ALL | Category;

export default function NewsPage() {
  const [active, setActive] = useState<Filter>(ALL);

  const filters: Filter[] = [ALL, "MEDIA", "REPORT", "NEWSLETTER", "EVENT", "BOOK"];

  const filtered =
    active === ALL ? newsItems : newsItems.filter((n) => n.category === active);

  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            News / New Strategy Institute
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            NSIからのお知らせ
          </h1>
          <p className="font-inter text-base text-white/55 max-w-2xl leading-relaxed">
            レポートの発表、メディアへの取材対応、各種寄稿や発刊など、NSIの発信活動についてお知らせいたします。
          </p>
        </div>
      </section>

      {/* ── List ── */}
      <section style={{ backgroundColor: "#f9f8f5" }} className="py-20 lg:py-28 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-inter text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded border transition-colors ${
                  active === f
                    ? "bg-navy text-white border-navy"
                    : "text-navy/50 border-navy/20 hover:border-navy/50 hover:text-navy/80 bg-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* News list */}
          {filtered.length === 0 ? (
            <p className="font-inter text-sm text-navy/40">
              該当するニュースはありません。
            </p>
          ) : (
            <ul className="flex flex-col divide-y divide-navy/10">
              {filtered.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 hover:opacity-70 transition-opacity"
                  >
                    {/* Date */}
                    <span className="font-inter text-xs text-navy/40 tracking-widest shrink-0 w-24">
                      {item.date}
                    </span>

                    {/* Category badge */}
                    <span
                      className={`font-inter text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded border shrink-0 ${categoryColors[item.category]}`}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <span className="font-inter text-sm font-medium text-navy group-hover:text-gold transition-colors flex items-center gap-1.5">
                      {item.title}
                      {item.external && (
                        <svg
                          className="w-3 h-3 text-navy/30 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
