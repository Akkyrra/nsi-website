import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const books = [
  "新世代のビジネスはスマホの中から生まれる",
  "SNS変遷史",
  "シェアしたがる心理",
  "情報メディア白書（共著）",
  "広告白書（共著）",
];

const mediaLinks = [
  { label: "Forbes JAPAN コラム", href: "#" },
  { label: "日経電子版 Think!", href: "#" },
  { label: "X（Twitter）", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function ProfilePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            Profile
          </p>
          <h1 className="font-playfair text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
            天野 彬
            <span className="block text-3xl lg:text-4xl mt-2 font-normal tracking-wide">
              Akira Amano
            </span>
          </h1>
          <p className="font-inter text-sm font-medium text-gold tracking-widest mt-6">
            Chief Strategy Officer, DCXforce
          </p>
        </div>
      </section>

      {/* Profile — 2 column */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Photo */}
          <div className="w-full">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/天野プロフィール写真.JPG"
                alt="天野 彬 プロフィール写真"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Right — Bio */}
          <div className="flex flex-col gap-6 pt-2">
            <p className="font-inter text-sm font-semibold text-navy tracking-wide">
              株式会社DCXforce 執行役員 Chief Strategy Officer
            </p>
            <div className="w-8 h-0.5 bg-gold" />
            <div className="font-inter text-base text-navy/70 leading-[2] flex flex-col gap-5">
              <p>
                一橋大学社会学部卒業、東京大学大学院学際情報学府修士課程修了（M.A.）ののち、2012年に株式会社電通へ入社。SNSを中心としたデジタルマーケティング分野の研究開発・戦略コンサルティングを牽引。
              </p>
              <p>
                2026年4月より株式会社DCXforceへ参画、執行役員CSOに就任。
              </p>
              <p>
                日本広告学会理事、明治学院大学社会学部非常勤講師を務め、実務と学術を架橋する活動に従事。日経電子版Think! エキスパートコメンテーター、Forbes JAPANオフィシャルコラムニストとして、広告マーケティング分野のオピニオン発信にも取り組む。TikTok for Business Japan Awards 2024 Creative Category審査員。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-12">
            Books
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((title) => (
              <li
                key={title}
                className="bg-white border-l-4 border-navy px-6 py-5 rounded-r-lg"
              >
                <p className="font-playfair text-base font-semibold text-navy leading-snug">
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Media & Links */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-12">
            Media &amp; Links
          </p>
          <div className="flex flex-wrap gap-4">
            {mediaLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-sm font-medium text-navy border border-navy px-6 py-3 rounded hover:bg-navy hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                {link.label}
                <span className="text-gold group-hover:text-gold group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
