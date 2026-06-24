import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ファン資本の再設計 | NSI Report #001 | New Strategy Institute",
  description:
    "AI時代のSNSマーケティングをファン資本（Fandomin Capital）で再定義。運用から資本形成へ、ナラティブ設計の5つの診断軸と実装フレームワークを解説。著：天野彬（DCXforce CSO）。",
  alternates: {
    canonical: "https://nsi.dcxforce.co.jp/reports/001",
  },
  openGraph: {
    type: "article",
    title: "ファン資本（Fandomin Capital）の再設計 | NSI Report #001",
    description:
      "AI時代のSNSマーケティングをファン資本で再定義する。5つの診断軸と実装フレームワーク。著：天野彬 / DCXforce CSO。",
    url: "https://nsi.dcxforce.co.jp/reports/001",
    siteName: "New Strategy Institute",
    locale: "ja_JP",
    images: [
      {
        url: "https://nsi.dcxforce.co.jp/reports/001-og.png",
        width: 1200,
        height: 630,
        alt: "NSI Report #001 ファン資本の再設計",
      },
    ],
    publishedTime: "2026-06-23",
    authors: ["天野彬"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ファン資本の再設計 | NSI Report #001",
    description:
      "AI時代のSNS戦略をファン資本で捉え直す。天野彬（DCXforce CSO）による分析報告。",
    images: ["https://nsi.dcxforce.co.jp/reports/001-og.png"],
    creator: "@a_amano_tweets",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Report",
      "@id": "https://nsi.dcxforce.co.jp/reports/001",
      headline:
        "ファン資本（Fandomin Capital）の再設計：AI時代のSNSマーケティング戦略",
      description:
        "AI時代のSNSマーケティングをファン資本（Fandomin Capital）という経営概念で再定義。5つの診断軸と180日検証プログラムを提示。",
      datePublished: "2026-06-23",
      dateModified: "2026-06-23",
      inLanguage: "ja-JP",
      author: {
        "@type": "Person",
        name: "天野彬",
        jobTitle: "Chief Strategy Officer",
        affiliation: {
          "@type": "Organization",
          name: "DCXforce",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "New Strategy Institute by DCXforce",
        url: "https://nsi.dcxforce.co.jp",
      },
      isPartOf: {
        "@type": "WebSite",
        name: "New Strategy Institute",
        url: "https://nsi.dcxforce.co.jp",
      },
    }),
  },
};

export default function Report001Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
