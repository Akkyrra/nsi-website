import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "インフルエンサー施策が終わったあと、ブランドに何が残るか | NSI Report #002 | New Strategy Institute",
  description:
    "インフルエンサー施策が終わったあと、ブランドに何が残るか。再生数・保存数で終わらせず、次の起用・企画・評価へつなぐための実務設計。NSI Report #002。著：天野彬（DCXforce CSO）。",
  alternates: {
    canonical: "https://nsi.dcxforce.co.jp/reports/002",
  },
  openGraph: {
    type: "article",
    title: "インフルエンサー施策が終わったあと、ブランドに何が残るか | NSI Report #002",
    description:
      "再生数・保存数で終わらせず、次の起用・企画・評価へつなぐための実務設計。著：天野彬 / DCXforce CSO。",
    url: "https://nsi.dcxforce.co.jp/reports/002",
    siteName: "New Strategy Institute",
    locale: "ja_JP",
    publishedTime: "2026-08-31",
    authors: ["天野彬"],
    images: [
      {
        url: "https://nsi.dcxforce.co.jp/NSI.png",
        alt: "New Strategy Institute by DCXforce",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "インフルエンサー施策が終わったあと、ブランドに何が残るか | NSI Report #002",
    description:
      "再生数・保存数で終わらせず、次の起用・企画・評価へつなぐための実務設計。天野彬（DCXforce CSO）による分析報告。",
    creator: "@a_amano_tweets",
    images: ["https://nsi.dcxforce.co.jp/NSI.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Report",
      "@id": "https://nsi.dcxforce.co.jp/reports/002",
      headline: "インフルエンサー施策が終わったあと、ブランドに何が残るか",
      description:
        "再生数・保存数の報告だけで施策を終えず、ブランド想起、再利用できる表現、クリエイターとの関係、次回に生かせる学びまで、企画段階で「何を残すか」を決めておくための実務フレームワーク。",
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      image: "https://nsi.dcxforce.co.jp/NSI.png",
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

export default function Report002Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
