import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const amano = {
  name: "天野 彬",
  nameEn: "Akira Amano",
  title: "Chief Strategy Officer, DCXforce",
  titleJa: "株式会社DCXforce 執行役員 Chief Strategy Officer",
  photo: "/天野プロフィール写真.JPG",
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
    { label: "Forbes JAPAN コラム", href: "#" },
    { label: "日経電子版 Think!", href: "#" },
    { label: "X（Twitter）", href: "#" },
    { label: "LinkedIn", href: "#" },
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
            Members
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight">
            NSI Members
          </h1>
        </div>
      </section>

      {/* Members grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Grid — 1 col now, will naturally expand to 2 col */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">

            {/* Member card — Akira Amano */}
            <article className="flex flex-col gap-0 border border-navy/10 rounded-2xl overflow-hidden">

              {/* Card header: photo + name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch">
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] sm:aspect-auto sm:min-h-[360px]">
                  <Image
                    src={amano.photo}
                    alt={`${amano.name} プロフィール写真`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Name block */}
                <div className="bg-navy flex flex-col justify-center px-8 py-10 gap-4">
                  <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Member
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
                      className="font-inter text-xs font-medium text-navy border border-navy/30 px-4 py-2 rounded hover:bg-navy hover:text-white hover:border-navy transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <span className="text-gold group-hover:text-gold group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                  ))}
                </div>
              </div>

            </article>

            {/* Placeholder — coming soon */}
            <div className="hidden xl:flex items-center justify-center border border-dashed border-navy/20 rounded-2xl min-h-[400px]">
              <p className="font-inter text-sm text-navy/30 tracking-widest">
                メンバーは順次追加予定です
              </p>
            </div>

          </div>

          {/* Mobile: "coming soon" note */}
          <p className="xl:hidden font-inter text-sm text-navy/30 tracking-wide text-center mt-12">
            メンバーは順次追加予定です
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
