const APPLY_URL =
  "https://events.teams.microsoft.com/event/1697b476-1c46-4513-938f-400fdc77b110@b7fd505d-de85-43e2-a633-c5295f12869d?source=copyLinkLegacyShareLinkDialog";

// Source: seminar-202611/index.html (body content only; <head> metadata is
// handled by layout.tsx, asset paths point at /seminar/202611/assets/).
const html = `
<header style="background: #0F2440">
<div style="max-width: 1120px; margin: 0 auto; padding: 18px 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
<div style="display: flex; align-items: center; gap: 20px">
<img src="/seminar/202611/assets/dcx-logo-white.png" alt="DCXforce" style="height: 28px; width: auto; display: block">
<div style="font-size: 15px; color: #C9D3E3">×</div>
<div style="font-size: 15px; font-weight: 500; letter-spacing: 0.04em; color: #FFFFFF">New Strategy Institute</div>
</div>
<a href="${APPLY_URL}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 24px; background: #8A6A1E; color: #FFFFFF; font-size: 15px; font-weight: 700; text-decoration: none">無料で申し込む</a>
</div>
</header>

<section>
<div style="max-width: 1120px; margin: 0 auto; padding: clamp(56px, 9vw, 96px) 24px 88px; display: flex; flex-direction: column; gap: 36px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: 0.22em; color: #8A6A1E">NEW STRATEGY INSTITUTE｜ONLINE SEMINAR</div>
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="font-family: 'Noto Serif JP', serif; font-size: clamp(20px, 3.2vw, 32px); font-weight: 700; color: #0F2440; letter-spacing: 0.04em">天野彬が読み解く</div>
<h1 style="margin: 0; font-size: clamp(34px, 7vw, 72px); line-height: 1.25; font-weight: 900; color: #0F2440">AI時代のSNSマーケティング</h1>
<div style="font-family: 'Noto Serif JP', serif; font-size: clamp(22px, 4.2vw, 40px); line-height: 1.4; font-weight: 700">ファンの熱量をブランド価値につなぐには</div>
</div>
<div style="width: 120px; height: 5px; background: #8A6A1E"></div>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px 24px">
<div style="background: #0F2440; color: #FFFFFF; padding: 14px 26px; font-size: clamp(18px, 3vw, 26px); font-weight: 900; line-height: 1.4">2026年11月20日（金）12:00–13:00</div>
<div style="font-size: 20px; font-weight: 700; color: #0F2440">オンライン／参加無料／定員300名</div>
</div>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 20px">
<a href="${APPLY_URL}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; min-height: 60px; padding: 0 48px; background: #8A6A1E; color: #FFFFFF; font-size: 18px; font-weight: 700; text-decoration: none">無料で申し込む</a>
<div style="font-size: 14px; color: #4F5664">見逃し配信あり｜申し込み者全員にNSIレポート#001〜#003のPDF版をお届け</div>
</div>
</div>
</section>

<section style="background: #FFFFFF; border-top: 1px solid #E2E1DC; border-bottom: 1px solid #E2E1DC">
<div style="max-width: 880px; margin: 0 auto; padding: clamp(56px, 8vw, 88px) 24px; display: flex; flex-direction: column; gap: 22px; font-size: 18px; line-height: 2">
<p style="margin: 0; font-family: 'Noto Serif JP', serif; font-size: clamp(20px, 3vw, 26px); line-height: 1.7; font-weight: 700; color: #0F2440">SNSで話題を生み、数字を伸ばす。そのあと、ブランドには何が残るのでしょうか。</p>
<p style="margin: 0">無形資産にまつわる議論が注目を集める中で、この問いの重要性は日に日に増しています。</p>
<p style="margin: 0">AIが情報との出会い方を変えるいま、ファンの語り、クリエイターとの関係、生活者のブランド想起は、SNS施策の成果を考えるうえで欠かせません。本セミナーでは天野彬が、NSIレポート#001〜#003の論点を60分でつなぎ、ファンの熱量をブランド価値として捉え、次の投資に生かすための視点を解説します。</p>
</div>
</section>

<section>
<div style="max-width: 1120px; margin: 0 auto; padding: clamp(56px, 9vw, 96px) 24px; display: flex; flex-direction: column; gap: 40px">
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 13px; font-weight: 700; letter-spacing: 0.22em; color: #8A6A1E">PROGRAM</div>
<h2 style="margin: 0; font-size: clamp(26px, 4vw, 36px); font-weight: 900; color: #0F2440">この60分でわかること</h2>
</div>
<div style="display: flex; flex-direction: column; border-top: 2px solid #0F2440">
<div style="display: flex; flex-wrap: wrap; gap: 12px 40px; padding: 32px 0; border-bottom: 1px solid #D9D8D2">
<div style="flex: 0 0 120px; font-family: 'Noto Serif JP', serif; font-size: 48px; line-height: 1; font-weight: 700; color: #8A6A1E">01</div>
<div style="flex: 999 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
<div style="font-size: 24px; line-height: 1.5; font-weight: 700; color: #0F2440">AI時代、ファンの語りはブランドにどう影響するか</div>
<div style="font-size: 17px; color: #3A404B">NSI Report #001をもとに、SNS上の関係性を一時的な反応ではなく、蓄積される価値として捉え直します。</div>
</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 12px 40px; padding: 32px 0; border-bottom: 1px solid #D9D8D2">
<div style="flex: 0 0 120px; font-family: 'Noto Serif JP', serif; font-size: 48px; line-height: 1; font-weight: 700; color: #8A6A1E">02</div>
<div style="flex: 999 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
<div style="font-size: 24px; line-height: 1.5; font-weight: 700; color: #0F2440">インフルエンサー施策のあと、何を残すべきか</div>
<div style="font-size: 17px; color: #3A404B">NSI Report #002をもとに、話題化や再生数の先に残るブランド想起、表現、クリエイターとの関係を考えます。</div>
</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 12px 40px; padding: 32px 0; border-bottom: 1px solid #D9D8D2">
<div style="flex: 0 0 120px; font-family: 'Noto Serif JP', serif; font-size: 48px; line-height: 1; font-weight: 700; color: #8A6A1E">03</div>
<div style="flex: 999 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 10px">
<div style="font-size: 24px; line-height: 1.5; font-weight: 700; color: #0F2440">残った価値を、次の投資にどうつなぐか</div>
<div style="font-size: 17px; color: #3A404B">NSI Report #003をもとに、ブランドや顧客との関係を無形資産として捉え、経営の判断につなげる視点を紹介します。</div>
</div>
</div>
</div>
</div>
</section>

<section style="background: #0F2440; color: #FFFFFF">
<div style="max-width: 1120px; margin: 0 auto; padding: clamp(56px, 8vw, 88px) 24px; display: flex; flex-direction: column; gap: 32px">
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 13px; font-weight: 700; letter-spacing: 0.22em; color: #8A6A1E">FOR</div>
<h2 style="margin: 0; font-size: clamp(26px, 4vw, 36px); font-weight: 900">こんな方におすすめ</h2>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px">
<div style="border: 1px solid rgba(255,255,255,0.28); padding: 28px; font-size: 19px; line-height: 1.7; font-weight: 700">SNSやインフルエンサー施策が単発で終わっていると感じる方</div>
<div style="border: 1px solid rgba(255,255,255,0.28); padding: 28px; font-size: 19px; line-height: 1.7; font-weight: 700">ファンの語りやブランドへの蓄積を、短期の数字とあわせて捉えたい方</div>
<div style="border: 1px solid rgba(255,255,255,0.28); padding: 28px; font-size: 19px; line-height: 1.7; font-weight: 700">SNS投資の中長期的な意味を、経営層に説明したい方</div>
</div>
</div>
</section>

<section id="apply">
<div style="max-width: 1120px; margin: 0 auto; padding: clamp(56px, 9vw, 96px) 24px; display: flex; flex-direction: column; gap: 36px">
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 13px; font-weight: 700; letter-spacing: 0.22em; color: #8A6A1E">OVERVIEW</div>
<h2 style="margin: 0; font-size: clamp(26px, 4vw, 36px); font-weight: 900; color: #0F2440">開催概要</h2>
</div>
<div style="border-top: 2px solid #0F2440; font-size: 18px">
<div style="display: flex; flex-wrap: wrap; gap: 4px 32px; padding: 22px 4px; border-bottom: 1px solid #D9D8D2"><div style="flex: 0 0 150px; font-weight: 700; color: #0F2440">日時</div><div style="flex: 999 1 400px; font-weight: 700">2026年11月20日（金）12:00–13:00</div></div>
<div style="display: flex; flex-wrap: wrap; gap: 4px 32px; padding: 22px 4px; border-bottom: 1px solid #D9D8D2"><div style="flex: 0 0 150px; font-weight: 700; color: #0F2440">形式</div><div style="flex: 999 1 400px">オンライン／参加無料／定員300名</div></div>
<div style="display: flex; flex-wrap: wrap; gap: 4px 32px; padding: 22px 4px; border-bottom: 1px solid #D9D8D2"><div style="flex: 0 0 150px; font-weight: 700; color: #0F2440">見逃し配信</div><div style="flex: 999 1 400px">お申し込みいただいた方に、後日視聴方法をご案内します。</div></div>
<div style="display: flex; flex-wrap: wrap; gap: 4px 32px; padding: 22px 4px; border-bottom: 1px solid #D9D8D2; background: #F1E7CC"><div style="flex: 0 0 150px; font-weight: 700; color: #0F2440">申し込み者特典</div><div style="flex: 999 1 400px; font-weight: 700">NSIレポート#001〜#003のPDF版をまとめてお届けします。</div></div>
</div>
<div style="display: flex; justify-content: center; padding-top: 8px">
<a href="${APPLY_URL}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; min-height: 64px; padding: 0 64px; background: #8A6A1E; color: #FFFFFF; font-size: 19px; font-weight: 700; text-decoration: none">無料で申し込む</a>
</div>
</div>
</section>

<section style="background: #FFFFFF; border-top: 1px solid #E2E1DC">
<div style="max-width: 1120px; margin: 0 auto; padding: clamp(56px, 9vw, 96px) 24px; display: flex; flex-direction: column; gap: 36px">
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 13px; font-weight: 700; letter-spacing: 0.22em; color: #8A6A1E">SPEAKER</div>
<h2 style="margin: 0; font-size: clamp(26px, 4vw, 36px); font-weight: 900; color: #0F2440">講師</h2>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start">
<img src="/seminar/202611/assets/amano.jpg" alt="天野 彬" style="flex: 0 0 300px; width: 300px; max-width: 100%; height: 360px; object-fit: cover; object-position: 50% 25%; display: block">
<div style="flex: 999 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 16px">
<div style="font-size: 34px; font-weight: 700; letter-spacing: 0.08em; color: #0F2440">天野 彬</div>
<p style="margin: 0; font-size: 17px; line-height: 2; color: #2A2F38">株式会社DCXforce 執行役員CSO／New Strategy Institute Founding Director。東京大学大学院学際情報学府修士課程修了（M.A.）電通でSNSを中心としたデジタルマーケティングの研究開発・戦略コンサルティングを牽引。著書は『新世代のビジネスはスマホから生まれる』『SNS変遷史』『広告白書（共著）』『情報メディア白書（共著）』など多数。日経電子版Think! エキスパートコメンテーター、日本広告学会理事。</p>
</div>
</div>
</div>
</section>

<footer style="background: #0B1A2F; color: #DCE3EE">
<div style="max-width: 1120px; margin: 0 auto; padding: 40px 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; font-size: 14px">
<div style="display: flex; align-items: center; gap: 16px"><span style="font-weight: 700; color: #8A6A1E; letter-spacing: 0.1em">主催</span><span style="font-size: 16px; font-weight: 700; color: #FFFFFF">DCXforce／New Strategy Institute</span></div>
<div style="display: flex; gap: 24px"><a href="https://dcxforce.co.jp/privacy-policy/" style="color: #DCE3EE">プライバシーポリシー</a><a href="https://nsi.dcxforce.co.jp/" style="color: #DCE3EE">New Strategy Institute</a></div>
</div>
</footer>
`;

export default function Seminar202611Page() {
  return (
    <div
      className="seminar-202611"
      style={{
        fontFamily: "'Noto Sans JP', system-ui, sans-serif",
        color: "#14171C",
        background: "#F7F6F2",
        lineHeight: 1.8,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .seminar-202611 img { max-width: 100%; }
        .seminar-202611 a { color: #0F2440; }
        .seminar-202611 a:hover { color: #1A3A66; }
        .seminar-202611 a[target='_blank']:hover { opacity: .88; }
      `,
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
