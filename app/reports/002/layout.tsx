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
    card: "summary_large_image",
    title: "インフルエンサー施策が終わったあと、ブランドに何が残るか | NSI Report #002",
    description:
      "再生数・保存数で終わらせず、次の起用・企画・評価へつなぐための実務設計。",
    creator: "@a_amano_tweets",
    images: ["https://nsi.dcxforce.co.jp/NSI.png"],
  },
};

export default function Report002Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
