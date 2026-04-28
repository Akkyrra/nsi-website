"use client";

const reports = [
  {
    category: "Corporate Finance",
    title: "資本効率と企業文化の相関関係",
    date: "2025年4月",
  },
  {
    category: "Narrative Strategy",
    title: "上場企業のナラティブ設計——IRから採用まで",
    date: "2025年3月",
  },
  {
    category: "M&A",
    title: "統合後100日のカルチャー・インテグレーション",
    date: "2025年2月",
  },
  {
    category: "Market Analysis",
    title: "日本型スタートアップの資本戦略の変容",
    date: "2025年1月",
  },
];

const podcasts = [
  {
    guest: "田中 誠一 / 経営戦略コンサルタント",
    title: "価値創造の再定義——財務と物語の統合",
    episode: "Ep.12",
  },
  {
    guest: "山田 花子 / VC Partner",
    title: "スタートアップが見落としがちな資本の本質",
    episode: "Ep.11",
  },
  {
    guest: "佐藤 龍一 / CFO",
    title: "上場企業のIR戦略と長期投資家の獲得",
    episode: "Ep.10",
  },
  {
    guest: "鈴木 彩 / 組織デザイナー",
    title: "カルチャーをデザインするとはどういうことか",
    episode: "Ep.9",
  },
];

export default function ThreeColumnSection() {
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
                <p className="font-playfair text-base font-semibold text-navy leading-snug group-hover:text-gold transition-colors mb-1">
                  {report.title}
                </p>
                <p className="font-inter text-xs text-navy/45">{report.date}</p>
              </li>
            ))}
          </ul>
          <a
            href="#reports"
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
          <ul className="flex flex-col gap-6">
            {podcasts.map((pod) => (
              <li key={pod.title} className="group cursor-pointer">
                <span className="font-inter text-[10px] text-navy/45 uppercase tracking-wider">
                  {pod.episode}
                </span>
                <p className="font-playfair text-base font-semibold text-navy leading-snug group-hover:text-gold transition-colors mb-1">
                  {pod.title}
                </p>
                <p className="font-inter text-xs text-navy/55">{pod.guest}</p>
              </li>
            ))}
          </ul>
          <a
            href="#podcast"
            className="mt-8 inline-flex items-center gap-1 font-inter text-xs font-semibold text-navy tracking-widest uppercase hover:text-gold transition-colors group"
          >
            ALL EPISODES <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Newsletter */}
        <div id="newsletter">
          <h3 className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8 pb-4 border-b border-navy/10">
            NewsLetter
          </h3>
          <div className="flex flex-col gap-6">
            <p className="font-inter text-sm text-navy/65 leading-relaxed">
              戦略・マーケティング・ファイナンスの最前線を届けます。
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="font-inter text-sm text-navy placeholder:text-navy/35 border border-navy/20 rounded px-4 py-3 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors w-full"
              />
              <button
                type="submit"
                className="font-inter text-sm font-semibold bg-navy text-gold px-5 py-3 rounded hover:bg-navy/85 transition-colors tracking-widest uppercase"
              >
                登録する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
