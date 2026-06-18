import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            About New Strategy Institute
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
            価値が共鳴する戦略を、設計する。
          </h1>
          <p className="font-inter text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
            New Strategy Instituteは、DCXforceが運営するシンクタンクです。
            ソーシャルメディア起点のマーケティング知を体系化し、
            ブランドを資本として捉える新しい戦略フレームを構築します。
          </p>
        </div>
      </section>

      {/* Why We Started */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
          <div>
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase md:sticky md:top-28">
              Why We Started
            </p>
          </div>
          <p className="font-inter text-base lg:text-lg text-navy/70 leading-[2] max-w-2xl">
            マーケティングとファイナンスは、これまで別の言語で語られてきました。
            SNSの熱狂はPL（損益）には現れても、BS（貸借対照表）には届かなかった。
            NSIは、その間にある「見えない価値」を可視化し、
            経営が使える&quot;物差し&quot;をつくることを目的として設立されました。
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-12">
            What We Do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "知の体系化",
                body: "ソーシャルな消費行動の変化、AIの動向、ファイナンスの知見を踏まえたマーケティング知の構造化",
              },
              {
                title: "フレームの確立と提示",
                body: "無形資産価値を測る新しい評価フレーム「Brand Capital Strategy」の確立と提示",
              },
              {
                title: "実装との往復",
                body: "クライアントワークと研究を往復させ、戦略の実装精度を高める",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-l-4 border-navy rounded-r-xl px-8 py-8 flex flex-col gap-4 shadow-sm"
              >
                <h3 className="font-playfair text-xl font-bold text-navy">
                  {card.title}
                </h3>
                <p className="font-inter text-sm text-navy/65 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4">
            Focus Areas
          </p>
          <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-14 max-w-2xl leading-snug">
            4つの領域の交差点に、次の戦略がある。
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { en: "Social", jp: "ソーシャル", body: "SNS上の消費行動・熱狂・ナラティブの構造を読み解く" },
              { en: "Finance", jp: "ファイナンス", body: "無形資産とブランド価値を資本の論理で評価する" },
              { en: "AI", jp: "人工知能", body: "AIが情報を媒介する時代の評判形成メカニズムを捉える" },
              { en: "Narrative", jp: "ナラティブ", body: "語られ、共有される物語を戦略の中核に据える" },
            ].map((area) => (
              <div key={area.en} className="bg-navy px-7 py-10 flex flex-col gap-4 hover:bg-navy/80 transition-colors">
                <span className="font-playfair text-3xl font-bold text-gold">{area.en}</span>
                <span className="font-inter text-xs text-white/40 tracking-widest uppercase">{area.jp}</span>
                <p className="font-inter text-sm text-white/65 leading-relaxed mt-2">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Relationship */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
          <div>
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase md:sticky md:top-28">
              Our Relationship
            </p>
          </div>
          <p className="font-inter text-base lg:text-lg text-navy/70 leading-[2] max-w-2xl">
            NSIはDCXforceの下部組織として、戦略の解像度を引き上げる役割を担います。
            左脳的な分析と、右脳的な熱量ある打ち手。
            それらが統合された「Brand Capital Strategy」をもって、
            クライアント・パートナー各社との協業を成功に導きます。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/reports"
            className="font-inter text-base font-semibold bg-gold text-navy px-10 py-5 rounded hover:bg-gold/85 transition-colors tracking-widest uppercase"
          >
            レポートを読む
          </a>
          <a
            href="/#newsletter"
            className="font-inter text-base font-semibold border-2 border-gold text-gold px-10 py-5 rounded hover:bg-gold/10 transition-colors tracking-widest uppercase whitespace-nowrap"
          >
            ニュースレターに登録する
          </a>
          <a
            href="/contact"
            className="font-inter text-base font-semibold border-2 border-white text-white px-10 py-5 rounded hover:bg-white/10 transition-colors tracking-widest uppercase"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
