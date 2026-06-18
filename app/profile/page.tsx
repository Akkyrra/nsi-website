import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const amano = {
  name: "天野 彬",
  nameEn: "Akira Amano",
  title: "CSO, DCXforce",
  photo: "/IMG_0043.JPG",
  bio: [
    "一橋大学社会学部卒業、東京大学大学院学際情報学府修士課程修了（M.A.）ののち、2012年に株式会社電通へ入社。SNSを中心としたデジタルマーケティング分野の研究開発・戦略コンサルティングを牽引。",
    "2026年4月より株式会社DCXforceへ参画、執行役員CSOに就任。",
    "日本広告学会理事、明治学院大学社会学部非常勤講師を務め、実務と学術を架橋する活動に従事。日経電子版Think! エキスパートコメンテーター、Forbes JAPANオフィシャルコラムニストとして、広告マーケティング分野のオピニオン発信にも取り組む。TikTok for Business Japan Awards 2024 Creative Category審査員。",
  ],
  books: [
    "新世代のビジネスはスマホの中から生まれる",
    "SNS変遷史",
    "シェアしたがる心理",
    "情報メディア白書（共著）",
    "広告白書（共著）",
  ],
  mediaLinks: [
    { label: "日経電子版 Think!", href: "https://www.nikkei.com/topics/EVP01074" },
    { label: "X（Twitter）", href: "https://x.com/akira_amano" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akira-amano-60649638/" },
  ],
};

const ishikawa = {
  name: "石川 淳",
  nameEn: "Atsushi Ishikawa",
  title: "東京富士大学大学院客員教授（マーケティング）、一般社団法人アカデミックグルーヴ理事・共同創設者",
  photo: "/ishikawa.jpg",
  bio: [
    "1980年電通入社。新聞の担当から始まり、営業局で大手家庭用品会社の新聞雑誌と広報を担当。1998年に青山学院の社会人大学院でMBAを取得した後、2004年から東京大学（広報室）、2007年から電通総研（後に事務局長）、2012年から財務省（広報室）と、各出向先で一貫して広報業務に従事。",
    "この間、企業や公共機関の存在意義、価値について思考を深めていった。そのカギとなる「ブランド」について特に関心を持ち、無形固定資産としてのブランドが企業競争力と収益力の枢要を占めることを見て、その価値の科学的算定が企業結合での正確なデューデリジェンスおよび「のれん」を計上した後の減損・増価評価に不可欠だという問題提起をするに至った。",
    "現在は東京富士大学大学院客員教授（マーケティング）、一般社団法人アカデミックグルーヴ（理事・共同創設者）。",
  ],
};

export default function ProfilePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4">
            Member Profile
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            NSI Knowledge Contributors
          </h1>
          <p className="font-inter text-base text-white/55 max-w-2xl leading-relaxed">
            レポート、ニュースレター、ポッドキャスト、その他の各種発信活動に携わるNSIのメンバー、パートナーをご紹介します。
          </p>
        </div>
      </section>

      {/* Member grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">

            {/* Member card — Akira Amano */}
            <article className="flex flex-col gap-0 border border-navy/10 rounded-2xl overflow-hidden">

              {/* Card header: photo + name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch">
                {/* Photo */}
                <div className="w-full overflow-hidden" style={{ minHeight: "360px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={amano.photo}
                    alt={`${amano.name} プロフィール写真`}
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: "360px" }}
                  />
                </div>

                {/* Name block */}
                <div className="bg-navy flex flex-col justify-center px-8 py-10 gap-4">
                  <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Founding Director
                  </p>
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-white leading-tight">
                      {amano.name}
                    </h2>
                    <p className="font-inter text-sm text-white/60 mt-1 tracking-wide">
                      {amano.nameEn}
                    </p>
                  </div>
                  <div className="w-8 h-px bg-gold" />
                  <p className="font-inter text-xs text-gold tracking-widest uppercase leading-relaxed">
                    {amano.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="px-8 py-8 flex flex-col gap-5 border-t border-navy/10">
                <p className="font-inter text-xs font-semibold text-navy/40 tracking-widest uppercase">
                  Biography
                </p>
                {amano.bio.map((para, i) => (
                  <p key={i} className="font-inter text-sm text-navy/70 leading-[1.9]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Books */}
              <div className="px-8 py-8 border-t border-navy/10" style={{ backgroundColor: "#f9f9f9" }}>
                <p className="font-inter text-xs font-semibold text-navy/40 tracking-widest uppercase mb-5">
                  Books
                </p>
                <ul className="flex flex-col gap-2">
                  {amano.books.map((title) => (
                    <li key={title} className="font-inter text-sm text-navy/70 flex items-start gap-2">
                      <span className="text-gold mt-1 flex-shrink-0">—</span>
                      {title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Media links */}
              <div className="px-8 py-8 border-t border-navy/10">
                <p className="font-inter text-xs font-semibold text-navy/40 tracking-widest uppercase mb-5">
                  Media &amp; Links
                </p>
                <div className="flex flex-wrap gap-3">
                  {amano.mediaLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-xs font-medium text-navy border border-navy/30 px-4 py-2 rounded hover:bg-navy hover:text-white hover:border-navy transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <span className="text-gold group-hover:text-gold group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                  ))}
                </div>
              </div>

            </article>

            {/* Member card — Atsushi Ishikawa */}
            <article className="flex flex-col gap-0 border border-navy/10 rounded-2xl overflow-hidden">

              {/* Card header: photo + name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch">
                {/* Photo */}
                <div className="w-full overflow-hidden" style={{ minHeight: "360px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ishikawa.photo}
                    alt={`${ishikawa.name} プロフィール写真`}
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: "360px" }}
                  />
                </div>

                {/* Name block */}
                <div className="bg-navy flex flex-col justify-center px-8 py-10 gap-4">
                  <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Senior Fellow
                  </p>
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-white leading-tight">
                      {ishikawa.name}
                    </h2>
                    <p className="font-inter text-sm text-white/60 mt-1 tracking-wide">
                      {ishikawa.nameEn}
                    </p>
                  </div>
                  <div className="w-8 h-px bg-gold" />
                  <p className="font-inter text-xs text-gold/80 leading-relaxed">
                    {ishikawa.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="px-8 py-8 flex flex-col gap-5 border-t border-navy/10">
                <p className="font-inter text-xs font-semibold text-navy/40 tracking-widest uppercase">
                  Biography
                </p>
                {ishikawa.bio.map((para, i) => (
                  <p key={i} className="font-inter text-sm text-navy/70 leading-[1.9]">
                    {para}
                  </p>
                ))}
              </div>

            </article>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
