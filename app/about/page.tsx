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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            Why We Started
          </p>
          <p className="font-inter text-base lg:text-lg text-navy/70 leading-[2] max-w-2xl">
            マーケティングとファイナンスは、これまで別の言語で語られてきました。
            <br />
            SNSの熱狂はPL（損益）には現れても、BS（貸借対照表）には届かなかった。
            <br />
            NSIは、その間にある「見えない価値」を可視化し、
            <br />
            経営が使える"物差し"をつくることを目的として設立されました。
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

      {/* Our Relationship */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            Our Relationship
          </p>
          <p className="font-inter text-base lg:text-lg text-navy/70 leading-[2] max-w-2xl">
            NSIはDCXforceの下部組織として、戦略の解像度を引き上げる役割を担います。
            <br />
            左脳的な分析と、右脳的な熱量ある打ち手。
            <br />
            それらが統合された「Brand Capital Strategy」をもって、
            <br />
            クライアント・パートナー各社との協業を成功に導きます。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/reports"
            className="font-inter text-sm font-semibold bg-gold text-navy px-8 py-4 rounded hover:bg-gold/85 transition-colors tracking-widest uppercase"
          >
            レポートを読む
          </a>
          <a
            href="/contact"
            className="font-inter text-sm font-semibold border border-white text-white px-8 py-4 rounded hover:bg-white/10 transition-colors tracking-widest uppercase"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
