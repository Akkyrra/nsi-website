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
              New Strategy Instituteは、企業の競争優位を持続させるための戦略的知見を提供します。資本市場の論理から企業文化の再構築まで、一貫した視点で事業変革を支援します。
            </p>
            <a
              href="/about"
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
              <h2 className="font-playfair text-xl lg:text-2xl font-bold text-white leading-snug mb-3">
                資本効率と物語の統合——
                新時代の企業価値創造論
              </h2>
              <p className="font-inter text-xs text-white/60 leading-relaxed">
                財務指標を超えたナラティブ戦略が、いかに長期的な企業価値の蓄積に寄与するかを考察する、NSI独自の分析レポート。
              </p>
            </div>
            <div className="border-t border-white/20 pt-5">
              <a
                href="/reports"
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
