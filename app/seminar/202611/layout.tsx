import type { Metadata } from "next";

const URL = "https://nsi.dcxforce.co.jp/seminar/202611";
const OG_IMAGE = "https://nsi.dcxforce.co.jp/seminar/202611/assets/ogp.png";
const TITLE =
  "天野彬が読み解く AI時代のSNSマーケティング｜New Strategy Institute セミナー";
const DESCRIPTION =
  "天野彬（DCXforce 執行役員CSO／New Strategy Institute Founding Director）が、NSIレポート#001〜#003の論点を60分で解説するオンラインセミナー。2026年11月20日（金）12:00–13:00、参加無料。";
const START_DATE = "2026-11-20T12:00:00+09:00";
const END_DATE = "2026-11-20T13:00:00+09:00";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "New Strategy Institute",
    locale: "ja_JP",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": URL,
  name: "天野彬が読み解く AI時代のSNSマーケティング",
  description: DESCRIPTION,
  startDate: START_DATE,
  endDate: END_DATE,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: URL,
  },
  image: [OG_IMAGE],
  organizer: {
    "@type": "Organization",
    name: "DCXforce / New Strategy Institute",
    url: "https://nsi.dcxforce.co.jp",
  },
  performer: {
    "@type": "Person",
    name: "天野彬",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
    availability: "https://schema.org/InStock",
    url: URL,
  },
};

export default function Seminar202611Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@600;700&display=swap"
        rel="stylesheet"
      />
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
