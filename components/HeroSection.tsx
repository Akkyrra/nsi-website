export default function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-6">
              NEW STRATEGY INSTITUTE — OUR MISSION
            </p>
            <h1 className="font-playfair text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight text-navy mb-6">
              事業価値を蓄積するための戦略を再設計する——
              <br className="hidden sm:block" />
              ファイナンスからナラティブまで、
              <br className="hidden sm:block" />
              我々はその全体を構想します。
            </h1>
            <p className="font-inter text-base text-navy/65 leading-relaxed mb-8 max-w-md">
              New Strategy Instituteは、企業の競争優位を持続させるための戦略的知見を提供します。資本市場の論理から企業文化の再構築まで、一貫した視点で事業変革を支援します。
            </p>
            <a
              href="/about"
              className="font-inter text-sm font-semibold text-white bg-navy px-5 py-2 rounded hover:bg-navy/85 transition-colors inline-flex items-center gap-2 group"
            >
              About NSI
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right — Featured Report Card */}
          <div className="w-full bg-navy rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Featured Report
            </p>
            <div>
              <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">
                資本効率と物語の統合——
                <br />
                新時代の企業価値創造論
              </h2>
              <p className="font-inter text-sm text-white/65 leading-relaxed">
                財務指標を超えたナラティブ戦略が、いかに長期的な企業価値の蓄積に寄与するかを考察する、NSI独自の分析レポート。
              </p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <a
                href="#reports"
                className="font-inter text-sm font-semibold text-gold tracking-widest uppercase hover:text-white transition-colors inline-flex items-center gap-2 group"
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
