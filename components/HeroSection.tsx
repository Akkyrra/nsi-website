export default function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 xl:gap-16 items-center">

          {/* Left — 60% */}
          <div>
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-5">
              NEW STRATEGY INSTITUTE — OUR MISSION
            </p>
            <h1 className="font-playfair text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug text-navy mb-5">
              事業価値を蓄積するための戦略を再設計する——
              ファイナンスからナラティブまで、
              我々はその全体を構想します。
            </h1>
            <p className="font-inter text-sm text-navy/65 leading-relaxed mb-7 max-w-lg">
              New Strategy Institute by DCXforceは、企業・事業のグロース戦略を研究し、その知見を提供するシンクタンクです。ソーシャル、ファイナンス、AI、ナラティブ…の交差点から、新しい局面を切り開くための包括的な変革プランを描き出します。
            </p>
            <a
              href="/about"
              id="gtm-about-nsi"
              className="font-inter text-sm font-semibold text-white bg-navy px-5 py-2.5 rounded hover:bg-navy/85 transition-colors inline-flex items-center gap-2 group"
            >
              About NSI
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right — 40% Featured Report Card */}
          <div className="w-full bg-navy rounded-2xl p-7 lg:p-8 flex flex-col gap-5">
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Featured Report
            </p>
            <div>
              <p className="font-inter text-xs text-gold/60 tracking-widest uppercase mb-2">
                Influencer Marketing · #002
              </p>
              <h2 className="font-playfair text-xl lg:text-2xl font-bold text-white leading-snug mb-3">
                インフルエンサー施策が終わったあと、
                ブランドに何が残るか
              </h2>
              <p className="font-inter text-xs text-white/60 leading-relaxed">
                再生数・保存数で終わらせず、ブランド想起、再利用できる表現、クリエイターとの関係を、次の起用・企画・評価へつなぐための実務設計を論じる。
              </p>
            </div>
            <div className="border-t border-white/20 pt-5">
              <a
                href="/reports/002"
                className="font-inter text-xs font-semibold text-gold tracking-widest uppercase hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                READ REPORT
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
