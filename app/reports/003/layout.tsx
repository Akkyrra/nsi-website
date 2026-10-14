import type { Metadata } from "next";

const URL = "https://nsi.dcxforce.co.jp/reports/003";
const OG_IMAGE = "https://nsi.dcxforce.co.jp/reports/003-og.png";
const TITLE = "Intangible Integration | NSI Report #003 | New Strategy Institute";
const OG_TITLE = "Intangible Integration | NSI Report #003";
const DESCRIPTION =
  "広告産業のインテグレーション史から、Intangible IntegrationとMultiplier Deploymentという新しい経営実践を構想する。広告は、企業に何を残せるか——その問いに挑む、NSI第一期三部作の完結編。";
const PUBLISHED = "2026-10-10";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    type: "article",
    title: OG_TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "New Strategy Institute",
    locale: "ja_JP",
    publishedTime: PUBLISHED,
    authors: ["天野彬"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NSI Report #003 Intangible Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    creator: "@a_amano_tweets",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Report",
  "@id": URL,
  headline: "Intangible Integration：From Communication Design to Multiplier Deployment",
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
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
};

export default function Report003Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
