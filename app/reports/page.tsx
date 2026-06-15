import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            NSIが発行するリサーチレポートは、ソーシャル・ファイナンス・ナラティブの交差点から、事業価値を蓄積するためのマーケティング戦略を提示します。
          </p>
        </div>
      </section>

      {/* ── Featured Report ── */}
      <section style={{ backgroundColor: "#f9f8f5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-12">
            Featured Report
          </p>

          <div className="max-w-3xl flex flex-col gap-10">
            {/* Report info */}
            <div>
              <p className="font-inter text-xs font-semibold text-navy/40 tracking-widest uppercase mb-4">
                SNS Marketing · #001
              </p>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-navy leading-snug mb-6">
                ファン資本の再設計――<br />
                AI時代のSNSマーケティングを、<br className="hidden sm:block" />運用から資本形成へ
              </h2>
              <div className="w-10 h-0.5 bg-gold mb-6" />
              <p className="font-inter text-base text-navy/65 leading-relaxed">
                SNSの「運用」は手段に過ぎない。ファンを資本として捉え直し、AI時代における持続的なブランド価値の形成を論じる。
              </p>
            </div>

            {/* Metadata */}
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
                  形式
                </span>
                <span className="font-inter text-sm font-semibold text-navy">
                  Web（無料）
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="/reports/001"
                className="inline-block font-inter text-sm font-semibold bg-navy text-gold px-8 py-4 rounded tracking-widest uppercase hover:bg-navy/85 transition-colors"
              >
                レポートを読む →
              </a>
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
              NSI Newsletter
            </p>
            <p className="font-inter text-sm text-white/50 leading-relaxed">
              AIが駆動するソーシャルトレンド、熱狂を生むナラティブ、そしてマーケティング戦略を読み解くためのニュースレター
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
