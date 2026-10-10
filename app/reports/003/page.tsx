import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportToc from "./ReportToc";
import FigToggle from "./FigToggle";
import DownloadForm from "./DownloadForm";
import "./report-003.css";

// Source: NSI_Report_003_Intangible_Integration10.html (final draft).
// Everything up to (not including) the closing CTA section; that section is
// JSX below because it hosts the PDF-download form.
const htmlBefore = `
<section class="hero">
  <div class="hero-bg" aria-hidden="true">
    <svg viewBox="0 0 1400 800" width="100%" height="100%" preserveAspectRatio="xMaxYMid slice">
      <g><g class="tw tw1"><circle cx="939.4" cy="685.2" r="0.48" fill="#FFFFFF" fill-opacity="0.25"/><circle cx="1310.5" cy="254.2" r="0.60" fill="#FFFFFF" fill-opacity="0.32"/><circle cx="534.4" cy="107.0" r="0.91" fill="#FFEFD6" fill-opacity="0.50"/><circle cx="536.9" cy="574.5" r="0.45" fill="#FFFFFF" fill-opacity="0.43"/><circle cx="1109.7" cy="331.9" r="0.50" fill="#FFFFFF" fill-opacity="0.42"/><circle cx="141.9" cy="761.6" r="0.47" fill="#FFFFFF" fill-opacity="0.27"/><circle cx="374.2" cy="38.8" r="0.46" fill="#DCE7FF" fill-opacity="0.52"/><circle cx="576.2" cy="21.2" r="1.01" fill="#FFFFFF" fill-opacity="0.32"/><circle cx="1048.2" cy="155.4" r="0.51" fill="#FFFFFF" fill-opacity="0.32"/><circle cx="400.5" cy="559.9" r="0.66" fill="#FFEFD6" fill-opacity="0.58"/><circle cx="845.2" cy="665.4" r="0.83" fill="#FFFFFF" fill-opacity="0.54"/><circle cx="1299.2" cy="188.0" r="0.65" fill="#FFEFD6" fill-opacity="0.27"/><circle cx="776.6" cy="256.3" r="0.51" fill="#DCE7FF" fill-opacity="0.58"/><circle cx="576.6" cy="102.5" r="0.74" fill="#DCE7FF" fill-opacity="0.40"/></g><g class=""><circle cx="1020.4" cy="163.5" r="0.85" fill="#DCE7FF" fill-opacity="0.41"/><circle cx="772.9" cy="228.4" r="0.73" fill="#FFEFD6" fill-opacity="0.28"/><circle cx="1102.2" cy="799.2" r="0.75" fill="#FFFFFF" fill-opacity="0.29"/><circle cx="1201.2" cy="741.0" r="0.45" fill="#FFFFFF" fill-opacity="0.43"/><circle cx="88.1" cy="544.1" r="0.62" fill="#FFFFFF" fill-opacity="0.31"/><circle cx="870.3" cy="91.0" r="0.89" fill="#FFFFFF" fill-opacity="0.59"/><circle cx="150.0" cy="0.0" r="0.70" fill="#DCE7FF" fill-opacity="0.25"/><circle cx="26.3" cy="360.7" r="0.45" fill="#DCE7FF" fill-opacity="0.31"/><circle cx="881.9" cy="503.4" r="0.55" fill="#FFEFD6" fill-opacity="0.28"/><circle cx="189.5" cy="477.2" r="0.48" fill="#FFFFFF" fill-opacity="0.53"/><circle cx="984.2" cy="414.0" r="0.54" fill="#DCE7FF" fill-opacity="0.56"/><circle cx="1247.1" cy="633.7" r="0.52" fill="#FFFFFF" fill-opacity="0.25"/><circle cx="423.7" cy="409.7" r="0.49" fill="#FFFFFF" fill-opacity="0.56"/><circle cx="130.2" cy="354.4" r="0.63" fill="#DCE7FF" fill-opacity="0.41"/><circle cx="225.1" cy="698.6" r="0.45" fill="#FFFFFF" fill-opacity="0.50"/><circle cx="438.8" cy="162.6" r="0.79" fill="#FFFFFF" fill-opacity="0.43"/><circle cx="304.2" cy="212.2" r="0.48" fill="#FFEFD6" fill-opacity="0.28"/><circle cx="29.9" cy="109.3" r="0.84" fill="#FFFFFF" fill-opacity="0.50"/><circle cx="797.2" cy="122.5" r="0.49" fill="#FFEFD6" fill-opacity="0.29"/><circle cx="849.0" cy="496.2" r="0.63" fill="#DCE7FF" fill-opacity="0.29"/><circle cx="1326.9" cy="236.0" r="0.69" fill="#DCE7FF" fill-opacity="0.32"/><circle cx="842.3" cy="364.0" r="0.50" fill="#FFEFD6" fill-opacity="0.48"/><circle cx="1131.6" cy="403.5" r="1.02" fill="#FFEFD6" fill-opacity="0.44"/><circle cx="18.3" cy="747.1" r="0.99" fill="#DCE7FF" fill-opacity="0.54"/><circle cx="806.0" cy="318.1" r="0.47" fill="#FFFFFF" fill-opacity="0.55"/><circle cx="722.4" cy="643.9" r="0.61" fill="#FFFFFF" fill-opacity="0.38"/><circle cx="1393.4" cy="788.3" r="0.84" fill="#DCE7FF" fill-opacity="0.55"/><circle cx="1350.7" cy="9.3" r="0.57" fill="#FFEFD6" fill-opacity="0.37"/><circle cx="352.8" cy="419.2" r="0.60" fill="#DCE7FF" fill-opacity="0.27"/><circle cx="1341.3" cy="416.2" r="0.50" fill="#FFFFFF" fill-opacity="0.51"/><circle cx="233.3" cy="269.9" r="0.48" fill="#FFFFFF" fill-opacity="0.30"/><circle cx="1112.8" cy="217.9" r="0.70" fill="#FFFFFF" fill-opacity="0.60"/><circle cx="872.9" cy="598.1" r="0.59" fill="#FFFFFF" fill-opacity="0.31"/><circle cx="1079.9" cy="774.4" r="0.47" fill="#FFFFFF" fill-opacity="0.31"/><circle cx="607.2" cy="580.8" r="0.46" fill="#FFFFFF" fill-opacity="0.39"/><circle cx="243.1" cy="467.1" r="0.46" fill="#FFFFFF" fill-opacity="0.41"/><circle cx="886.6" cy="258.3" r="0.94" fill="#FFFFFF" fill-opacity="0.48"/><circle cx="360.3" cy="625.4" r="0.88" fill="#FFFFFF" fill-opacity="0.27"/><circle cx="351.4" cy="470.6" r="0.58" fill="#FFEFD6" fill-opacity="0.35"/><circle cx="1249.9" cy="34.3" r="0.67" fill="#DCE7FF" fill-opacity="0.38"/><circle cx="88.3" cy="787.9" r="0.55" fill="#FFEFD6" fill-opacity="0.38"/><circle cx="1325.2" cy="139.5" r="0.79" fill="#DCE7FF" fill-opacity="0.47"/><circle cx="1347.4" cy="277.2" r="0.46" fill="#FFFFFF" fill-opacity="0.47"/></g><g class="tw tw0"><circle cx="204.6" cy="382.0" r="0.79" fill="#DCE7FF" fill-opacity="0.36"/><circle cx="1334.7" cy="71.2" r="0.57" fill="#FFFFFF" fill-opacity="0.59"/><circle cx="874.6" cy="584.2" r="0.87" fill="#FFFFFF" fill-opacity="0.55"/><circle cx="1317.0" cy="388.3" r="0.55" fill="#DCE7FF" fill-opacity="0.57"/><circle cx="724.7" cy="212.9" r="0.45" fill="#DCE7FF" fill-opacity="0.31"/><circle cx="857.2" cy="240.7" r="0.70" fill="#FFFFFF" fill-opacity="0.41"/><circle cx="1372.7" cy="14.2" r="0.94" fill="#FFFFFF" fill-opacity="0.35"/><circle cx="856.9" cy="572.2" r="0.50" fill="#FFFFFF" fill-opacity="0.42"/><circle cx="80.7" cy="281.4" r="0.95" fill="#DCE7FF" fill-opacity="0.23"/><circle cx="1329.5" cy="150.5" r="0.46" fill="#FFFFFF" fill-opacity="0.46"/><circle cx="55.4" cy="328.7" r="1.02" fill="#FFFFFF" fill-opacity="0.42"/></g></g>
      <path d="M860,140 L1030,232 L1180,168 L1262,372" fill="none" stroke="#9DB4FF" stroke-opacity=".2" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/>
      <g><circle cx="860" cy="140" r="1.7" fill="#fff" fill-opacity=".78"/><circle cx="1030" cy="232" r="1.9" fill="#fff" fill-opacity=".78"/><circle cx="1180" cy="168" r="1.6" fill="#fff" fill-opacity=".78"/><circle cx="1262" cy="372" r="1.8" fill="#fff" fill-opacity=".78"/><circle cx="250" cy="168" r="1.5" fill="#fff" fill-opacity=".66"/><circle cx="560" cy="652" r="1.4" fill="#fff" fill-opacity=".66"/><circle cx="1120" cy="640" r="1.6" fill="#fff" fill-opacity=".66"/></g>
    </svg>
  </div>
  <div class="hero-inner">
    <span class="eyebrow mono">NSI REPORT #003 / THESIS</span>
    <h1>Intangible<br>Integration</h1>
    <p class="mono" style="font-size:.8rem; letter-spacing:.04em; color:var(--silver); margin:-1rem 0 1.6rem;">From Communication Design to Multiplier Deployment</p>
    <p class="jp-copy">コミュニケーションビジネスが次に取り組むべきは、<br>「Intangibles（無形資産）」をめぐる統合である。</p>
    <p class="desc">広告会社は、メディア、メッセージ、顧客接点、データを統合してきた。しかし、活動のあとに残るブランド、顧客との関係性、生活者の中での語り（ナラティブ）、データ、組織知は、いまも別々に管理されている。無形資産が企業価値の源泉となる時代に、次に必要な一手とは。広告産業のインテグレーションの歴史を紐解きつつ、Intangible Integrationとそれに基づくMultiplier Deploymentというコンセプトを、コミュニケーションデザイン（IMC）のあとに来るものとして構想する。</p>
    <p class="mono" style="font-size:.78rem; letter-spacing:.03em; color:var(--silver); margin-top:1.8rem;">天野 彬 / Akira Amano — DCXforce Chief Strategy Officer, New Strategy Institute Founding Director</p>
    <div class="scroll-cue"><span class="bar"></span>SCROLL</div>
  </div>
</section>

<section class="section section--paper" id="summary">
  <div class="essay">
    <span class="eyebrow">EXECUTIVE SUMMARY</span>
    <h2 class="chapter-jp" style="margin-top:1rem;">次の統合の対象は、無形資産そのものである。</h2>
    <ol class="summary-list">
      <li><span class="sn">01</span><p>広告産業の歴史は、分断を統合してきた歴史だった。媒体とメッセージ、接点と体験と文脈、データと実行機能——広告会社は、その時代ごとに市場へ向かう活動を束ね直すことで存在意義を更新してきた。</p></li>
      <li><span class="sn">02</span><p>しかし統合の中心にあったのは、キャンペーンや顧客接点という「フロー」と、それを支える提供機能だった。活動のあとに何が残り、誰が保有し、次にどう再配置するかという「ストック」の問いは、提供機能の統合ほどには中心課題になってこなかった。</p></li>
      <li><span class="sn">03</span><p>無形資産経済の進展と、コーポレートガバナンスをめぐる制度改革は、企業にストックを統合する経営を求め始めている。技術・知財・人的資本は経営の言葉に翻訳されつつある一方、ブランド・顧客関係・物語といった市場側の資産は、いまも資本配分の議論から抜け落ちている。</p></li>
      <li><span class="sn">04</span><p>そのための経営原理がIntangible Integrationであり、それを動かす経営実践がMultiplier Deploymentである。それは、#001が示した市場側の資本（Fandomain Capital）を、企業側の能力や学習とつなぎ、次の投資の対象として捉える試みでもある。本稿は、広告産業のインテグレーション史を出発点に、コミュニケーションデザイン（IMC）のあとに来るものとして、それらを構想する。</p></li>
    </ol>
  </div>
</section>

<section class="section section--dark" id="s1">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num">01</span>
      <div class="chapter-titles">
        <span class="chapter-en">PROLOGUE</span>
        <h2 class="chapter-jp">統合の先に、何が残ったか</h2>
      </div>
    </div>
    <p>制作は、かつてないほど速くなった。コピーは数分で数十案が生まれ、画像は指示するそばから複数のバリエーションが返ってくる。分析も、レポーティングも、運用の最適化も、AIが担う範囲は日々広がっている。</p>
    <p>しかし、キャンペーンが終わったあと、何が残るかという問いに、AIは答えを持たない。</p>
    <p>生成されたOutputの量が増えても、そこから生まれる信頼、顧客との関係、蓄積されたデータ、組織に残る学習は、自動的には増えない。AIが埋めているのは制作と運用の限界費用であって、資産形成の空白ではない。</p>
    <p>さらに、AIが情報の入口として生活者の発見・比較・選択に介在するようになるほど、個々のOutputそのものは差別化要因になりにくくなる。似た精度の答えを、似た速さで、誰もが生成できるようになるからだ。そのとき希少になるのは、企業についてすでに蓄積された信頼、語られ方、顧客との関係、そして固有の学習である。</p>
    <p>効率化されたフローと、形成されないストックの落差は、これから一段と大きくなる。</p>
    <p class="pull"><span>AIはアウトプットを増やす。</span><span>資産は自動的には増えない。</span></p>
  </div>
</section>

<section class="section section--paper" id="s2">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num" style="color:var(--silver);">02</span>
      <div class="chapter-titles">
        <span class="chapter-en">A Brief History—and the Limits—of Integration</span>
        <h2 class="chapter-jp">統合の歴史としての広告産業</h2>
      </div>
    </div>
    <p class="lede">広告会社の歴史は「統合」の歴史である。しかし、高度に統合されたはずのマーケティングの実践には、いまだ埋まらない溝が存在する。</p>

    <p>広告産業は、これまでも繰り返し「統合」を掲げることで、その時代ごとの分断に応えてきた。AIが持ち込んだのは、この落差そのものというより、落差の速度である。だからこそ、この歴史を振り返ることには意味がある。</p>
    <p>広告会社の歴史は、制作物や媒体の技術史としてだけでなく、「市場と企業のあいだに生じる分断を、そのつど統合し直してきた産業の歴史」として読むことができる。この歴史は、大きく３つの統合の過程と捉え返すことができる。ただし、この1.0〜3.0は、厳密な年代区分ではなく、前の段階が消えて次の段階に置き換わるという意味でもない。それぞれの取り組みは重なり合いながら進み、そのなかで「何を統合するか」が広がってきた。本稿は、その広がりをこう整理する。</p>

    <h3 style="font-size:1.2rem; margin:2.4rem 0 .8rem;">1.0　伝え方の統合（IMCからコミュニケーションデザインへ）</h3>
    <p>最初の統合は、伝え方の統合だった。テレビ、新聞、雑誌、屋外広告、そして後にデジタル媒体——チャネルごとに分断されがちなメッセージを、戦略的に一貫させる。ドン・シュルツが唱えたIntegrated Marketing Communications（IMC）は、広告、販売促進、PR、ダイレクトマーケティングといった手段を、生活者から見て一つの声として届くよう調整する考え方として広がった。</p>
    <p>このIMCという考え方が広がるなかで、専門機能を束ねる代理店の組織が生まれた。代理店の組織例として、インターパブリック・グループは1997年にMcCann-Erickson WorldGroup（のちのMcCann Worldgroup）を発足させた。広告、メディア、CRM、イベント、販促といった専門会社を一つのグループに置き、複数の機能を横断して広告主に提供する体制である。ただし、これは提供する機能を束ねるという側面も強く、次の2.0と重なる例である。</p>
    <p>企業の側でも、一つのブランドの考え方を、複数の接点に展開する実践が現れた。Coca-Colaは2009年、グローバルな統合マーケティングの共通の土台として「Open Happiness」を打ち出し、テレビに加え、店頭、販促、屋外、印刷物、デジタル、音楽へと展開した。どの接点で出会っても同じ約束として届くようにする試みであり、IMCが目指した姿を、企業の実践に見ることができる。</p>
    <p>日本では2000年代後半以降、デジタルとソーシャルメディアの浸透を背景に、この統合はさらに一段押し広げられる。広告表現をつくる仕事を、生活者との接点、体験、文脈、そして行動の連鎖を設計する仕事として捉え直す、コミュニケーションデザインという考え方である。問いは「何を、どの媒体で伝えるか」から、「人がどこで出会い、どう心が動き、何を語り、どう行動するか」へと移った。設計の対象が、メッセージから、生活者の体験と関係そのものへと広がったのである。本稿が§06で改めて向き合うのは、このコミュニケーションデザイン（IMC）が切り拓いた地平の、その先に何を設計するかという問いである。</p>

    <h3 style="font-size:1.2rem; margin:2.4rem 0 .8rem;">2.0　提供機能から、商品・サービス・事業へ</h3>
    <p>次の統合は、広告会社が提供する機能の統合であり、同時に、その仕事が商品・サービス・事業の側へ広がっていく過程でもあった。大きくは二つの波に整理できる。</p>
    <p>第一の波は、2010年代に現れた、事業や商品・サービスの開発に踏み込む先駆的な動きである。たとえばAnomalyは、広告の受託に閉じず、クライアントの事業課題そのものや、自ら商品・IPに投資する事業モデルを掲げた。R/GAは、Nikeの「Nike+」に代表されるデジタルの商品・サービス体験の設計を手がけ、のちにスタートアップを支援するR/GA Venturesを立ち上げた。AKQAは、Nikeの店舗サービス「Nike+ Trial Zone」のように、店舗での体験をサービスとして設計する仕事にも踏み込んだ。ここでは、クリエイティビティの対象が、表現から、商品やサービス、事業そのものの設計へ広がっている。Anomalyの自社IPへの投資は、本稿が3.0で扱う「資産を自ら持ち、育てる」という発想の萌芽でもある。</p>
    <p>第二の波は、近年の大手グループによる、基盤の統合である。顧客接点と体験を一つの旅として束ねる360°／カスタマージャーニーの発想、データと実行を接続するCX・コマース統合を経て、データ、制作、CX、運用、そしてAIを一つの基盤に載せる構想へと進んでいる。WPP Open、Publicis Power of One、Omnicom Omniなどは、その現在地を示す例である。各社の位置づけは異なるが、提供機能をつなぎ直すという方向は共通している。</p>

    <p>IMCやブランド経営は、長期的な顧客関係やブランド資産の形成を、実はすでに視野に入れてきた。2.0の先駆者たちも、広告の受託にとどまらず、事業や商品に深く関わってきた。しかし、案件ごとの予算設計、契約、効果測定という日々の運用のなかでは、そこで形成されたはずの資産が誰に残り、次の投資でどう使われるかを、共通の経営課題として扱う枠組みは、まだ十分ではない。リアルタイム最適化は、現在の投資効率を引き上げる。しかし、そこから生まれるブランド、顧客関係、データ、コンテンツの権利、組織の学習が、キャンペーンの外側へどう持ち越されるかは、依然として別の設計問題として残されている。理論が扱ってこなかったのではない。実務の運用が、そこまで実装されてこなかったのである。</p>
    <p>360°が示したのは、空間的な統合だった。次に必要なのは、365日という時間的な統合である。</p>
    <p class="pull"><span>フローの統合から、ストックの統合へ。</span><span>360°の統合から、365日の蓄積へ。</span></p>

    <h3 style="font-size:1.2rem; margin:2.4rem 0 .8rem;">3.0　無形資産の統合（Intangible Integration）</h3>
    <p>そして今、広告産業は三つ目の統合に直面しつつある。対象はメディアでも、提供機能でもない。活動の結果として企業と市場に分散して残る、無形資産そのものである。ブランド、顧客関係、ナラティブ、データ、組織の学習——これらを個別に保有するのではなく、互いに価値を生む一つの系として接続し、次の成長へ再配置すること。本稿がIntangible Integrationと呼ぶのは、この第三の統合である。なお3.0は、歴史的に確立した段階ではなく、本稿が提案し、今後検証していく構想である。</p>
    <p>その実現には、一つの条件がある。評価言語をつなぐことだ。広告・マーケティングが日常的に扱ってきたブランドや顧客関係は、いまも主として「費用」の言葉で語られている。一方、ファイナンスと経営の言葉は、これらの市場側の資産を、資本配分や投資判断のなかでどう扱うかについて、まだ十分な運用の型を持っていない。マーケティングとファイナンスが同じ資産を同じ言葉で議論できなければ、資産を接続する設計は、経営の意思決定に載らない。</p>
    <p>メディアの統合は、チャネルという分断に答えた。機能の統合は、提供機能という分断に答えた。無形資産の統合が答えようとしているのは、活動と資産、そして市場と経営のあいだにある分断である。これは特定の一社の持ち場の宣言ではなく、無形資産経済に直面する広告産業全体が、次に取り組むべき課題である。以上の三つの統合を、一枚にまとめると次のようになる。</p>
  </div>

  <div class="evidence" style="border-top:3px solid var(--cobalt); padding-top:1.6rem; margin-top:.5rem;">
    <h3 style="font-size:1.15rem; margin-bottom:1rem;">広告産業は、何を統合の対象としてきたか</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th class="mono">統合</th><th>呼称</th><th>統合の対象</th><th>代表例</th></tr></thead>
        <tbody>
          <tr><td class="mono">1.0</td><td>伝え方の統合<br>（IMCからコミュニケーションデザインへ）</td><td>チャネルを越えたメッセージ・接点・体験</td><td>IMC（ドン・シュルツ）<br>McCann-Erickson WorldGroupの発足（1997年、代理店の組織例）<br>Coca-Cola「Open Happiness」（2009年）</td></tr>
          <tr><td class="mono">2.0</td><td>提供機能から、<br>商品・サービス・事業へ</td><td>事業・商品・サービスの設計、データ・制作・CX・運用の基盤</td><td>2010年代：Anomaly、R/GA、AKQA<br>近年：WPP Open、Publicis Power of One、Omnicom Omni</td></tr>
          <tr><td class="mono">3.0</td><td>無形資産の統合<br>（Intangible Integration）</td><td>活動のあとに残る価値と、その次の投資での使われ方</td><td>本稿が提案し、今後検証する構想（Multiplier Deployment）</td></tr>
        </tbody>
      </table>
    </div>
    <p class="small" style="margin-top:.8rem;">統合の対象は、フロー（媒体・接点・機能）から、ストック（無形資産）へと重心を移してきた。各段階は重なり合いながら進み、一つの実例が一つの段階だけに収まるとは限らない。</p>
  </div>

  <div class="essay">
    <p class="small">注記：ここに挙げた以外にも、各社は統合に取り組んでいる。WPP、Publicis、Omnicom、Havasといった大手グループは、クリエイティブ、メディア、データ、CX、コマース、AIを一つの運用基盤に統合する道を進んでいる。電通と博報堂DYホールディングスは、成長・事業変革、顧客接点、関係価値、データ基盤へと職能を広げている。Accenture Songはマーケティングを全社的な能力として位置づけ直し、Landor、Interbrandはブランドと事業・財務価値を接続する評価の言語を持つ。WARCが提示する「The Multiplier Effect」も、長期的なクリエイティブの基盤づくりと短期のパフォーマンスを一つの投資として捉える、重要な到達点の一つである<sup>[8]</sup>。</p>

    <div class="box">
      <span class="box-label">THE FRONTIER</span>
      <p>広告・マーケティングの外側にも、無形資産を戦略・組織・成果に接続しようとする、より基礎的な理論的到達点がある。ロバート・キャプランとデビッド・ノートンが1992年に提示したバランスト・スコアカード（BSC）は、財務指標だけで経営を評価することの限界を指摘し、財務、顧客、内部プロセス、学習と成長という四つの視点から戦略を測定する枠組みを提示した<sup>[9]</sup>。さらに2004年の戦略マップは、人的資本、情報資本、組織資本といった無形資産が、内部プロセスの改善を通じて顧客への提供価値を高め、それが最終的に財務成果へとつながるという、無形資産から財務成果までの因果の連鎖を、一枚の地図として描き出した<sup>[10]</sup>。無形資産を財務成果に接続するという問い自体は、この戦略マップにおいてすでに大きな到達点を得ている。</p>
      <p>本稿は、これらの既存の到達点を退けるものではない。BSC・戦略マップが扱うのは、主に企業の内部にある無形資産（人的資本、情報資本、組織資本）を、全社レベルの戦略目標のカスケードとして設計する視点である。本稿がその上に加えたいのは、企業と市場のあいだに分散する資産——ブランド、顧客関係、ナラティブ、コミュニティ——について、誰が次に使えるのか、そのために予算・権利・データ・責任をどう配置するのかを、個別の案件や投資判断の単位まで具体化することである。世界で初めて無形資産の統合を提唱するということではない。むしろ、すでにある重要な理論的到達点を、広告・マーケティングの実務で日々動く単位にまで接続することが、本稿の試みである。</p>
    </div>
  </div>
</section>

<section class="section section--light" id="s3">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num">03</span>
      <div class="chapter-titles">
        <span class="chapter-en">The Intangible Economy</span>
        <h2 class="chapter-jp">経済の重心は、すでに無形へ移った</h2>
      </div>
    </div>
    <p class="lede">なぜ今、無形資産の統合が経営課題になるのか。</p>

    <p>先進国企業の投資と価値創造において、ソフトウェア・データ、研究開発、ブランド、デザイン、人的資本、組織資本の比重は高まり続けている。ジョナサン・ハスケルとスティアン・ウェストレイクが『無形資産が経済を支配する』で描いたのは、21世紀初頭、主要先進国において無形投資が有形投資を上回るようになったという「静かな革命」である<sup>[1]</sup>。無形資産が最近になって重要になったというより、価値創造の中心はすでに有形資産から無形資産へ移り、会計・開示・経営の側がその現実を追いかけている、と捉えるほうが正確だろう。</p>

    <p>この文脈で、広告・マーケティング業界にとって古典的な問いが、あらためて意味を持つ。広告費は「費用」なのか、それとも「投資」なのか。</p>
    <p class="pull"><span>「費用か投資か」は、</span><span>何が残ったかで事後的に決まる。</span></p>
    <p style="margin-top:-1.5rem;" class="small">[2] 天野彬「無形資産」朝日新聞adv.マーケティングキーワード連載より、著者本人の主張を引用。</p>
    <p>もっとも、これは「成果が出なければ投資ではなかった」という意味ではない。実を結ばなかった研究開発も、投資であることに変わりはない。問われるべきは、支出の結果を「投資」と呼べるかどうかではなく、そこで何が形成され、次にどう使われたかまで、企業が確かめているかどうかである。</p>

    <p>広告やブランド構築、人材育成への支出は、会計上、その期の費用として処理されることが多い。一方で、その活動によって形成されたブランド、顧客との関係、データ、知識やノウハウは、その後も企業の収益力を支え続ける可能性がある。会計上「費用」であることと、経済的な意味で将来への「投資」であることは矛盾しない。支出が費用のまま終わったのか、投資になったのかは、支出の名目ではなく、支出後に何が残ったかによって、事後的に決まる。</p>

    <p>ハスケルらは無形投資の特徴を、拡張性（Scalability）、埋没性（Sunkenness）、波及性（Spillovers）、相乗効果（Synergies）の「4S」として整理した<sup>[1]</sup>。ブランドはその縮図である。広く展開しやすい反面、回収は容易でなく、商品力やデータ、顧客基盤、組織能力と組み合わさって初めて収益力へ転換する。無形資産は、保有しているかどうかより、どう組み合わせるかで価値が決まる。</p>

    <p>必ずしも、すべてを金額換算する必要はない。重要なのは、何に投じたかという「フロー」、何が蓄積されたかという「ストック」、どの事業成果へ転換されたかという「リターン」を分けて観測することだ。多くの企業が把握しているのはフローとリターンであり、見落とされがちなのはストックのほうである。</p>

    <p>無形投資の内訳は、数字としても確認できる。World Intellectual Property Organization（WIPO）とLuiss Business Schoolの調査では、29カ国を対象に集計した2023年の無形資産投資のうち、Organizational Capital（組織資本）が30.5%と最大のカテゴリーを占めた<sup>[6]</sup>。次いでR&amp;Dが20.8%、Software / Databasesが18.3%、Brands（ブランド）が14.7%、Designが11.0%、残るその他の知的財産生産物が4.7%となっている。R&amp;Dが組織資本に次ぐ第2位を占めていることは、本稿の主張にとってもむしろ都合がよい。技術への投資は、それ単独で完結するのではなく、ブランドや市場理解に転化して初めて、企業価値に結びつく。この転化の経路こそ、§05で扱うIntangible Integrationの主題である。</p>
    <div class="stat-pair">
      <div class="stat"><span class="num">30.5%</span><span class="cap">Organizational Capital</span></div>
      <div class="stat"><span class="num">14.7%</span><span class="cap">Brands</span></div>
    </div>
  </div>

  <figure class="evidence">
    <div class="fig-scroll" style="--fig-w:1160px">
<svg viewBox="0 0 1160 280" role="img" aria-labelledby="fig2-title">
      <title id="fig2-title">無形投資の主要カテゴリー</title>
      <text x="30" y="34" fill="#667181" font-family="IBM Plex Mono" font-size="12" letter-spacing="1">FIG. 2 — COMPOSITION OF INTANGIBLE INVESTMENT</text>
      <g transform="translate(60,66)">
        <rect x="0"   y="0" width="317" height="46" fill="#315CF5"/>
        <rect x="317" y="0" width="216" height="46" fill="#5B7CF7"/>
        <rect x="533" y="0" width="190" height="46" fill="#AAB4C4"/>
        <rect x="723" y="0" width="153" height="46" fill="#7057E8"/>
        <rect x="876" y="0" width="114" height="46" fill="#D8DEE8"/>
        <rect x="990" y="0" width="50"  height="46" fill="#EDF1F7" stroke="#C5CDDA"/>
        <g font-family="IBM Plex Mono" font-size="10.2" fill="#151A22">
          <text x="10" y="65">Org. Capital</text><text x="10" y="78" fill="#667181">30.5%</text>
          <text x="327" y="65">R&amp;D</text><text x="327" y="78" fill="#667181">20.8%</text>
          <text x="543" y="65">Software /</text><text x="543" y="78" fill="#667181">Databases 18.3%</text>
          <text x="733" y="65">Brands</text><text x="733" y="78" fill="#667181">14.7%</text>
          <text x="886" y="65">Design</text><text x="886" y="78" fill="#667181">11.0%</text>
          <text x="994" y="65" font-size="9">Other IP</text><text x="994" y="78" fill="#667181" font-size="9">4.7%</text>
        </g>
      </g>
      <g font-family="IBM Plex Mono" font-size="11" fill="#667181">
        <line x1="783" y1="175" x2="1040" y2="175" stroke="#D8DEE8"/>
        <text x="783" y="197">従来のマーケティングが</text>
        <text x="783" y="211">触れてきた領域（Brands, Design）</text>
        <line x1="60" y1="215" x2="653" y2="215" stroke="#D8DEE8"/>
        <text x="60" y="237">経営・技術部門が扱ってきた領域（Org. Capital, R&amp;D, Software / Databases）</text>
      </g>
    </svg>
</div>
    <figcaption>WIPO×Luiss（2023年、29カ国）の無形投資構成比。6カテゴリーの実数（合計100%）<sup>[6]</sup>。</figcaption>
  </figure>

  <div class="essay">
    <p>これは企業価値や個々の施策の効果を示す比率ではなく、集計対象国における投資構成比である。同調査はブランドを特集し、ブランド投資の効果が品質、R&amp;D、デザイン、組織資本、データとの補完関係に依存することを明記している。ここから導きたいのは「ブランドより組織資本の方が重要だ」という結論ではない。無形資産は、他の資産との組み合わせのなかで初めて価値を持つ、ということである。</p>

    <p>制度も、この産業構造の変化を追いかけ始めている。2026年7月21日に施行された改訂コーポレートガバナンス・コードは、原則4－1において、取締役会が経営戦略や経営計画を策定・公表する際、設備・研究開発・人的資本・知的財産等の無形資産への投資を含む成長投資や事業ポートフォリオの見直しなど、経営資源の配分に関して具体的に何を実行するのかを説明するよう求めている<sup>[7]</sup>。これを踏まえ、政府の検討会が取りまとめた「価値創造を加速する知財・無形資産投資・活用のガイダンス」は、取締役会が直面する構造的なボトルネックを、いくつかの観点から整理している<sup>[5]</sup>。</p>

    <div class="box">
      <span class="box-label">GOVERNANCE SHIFT</span>
      <p>成長の道筋を描けているか。中長期の価格決定力やゲームチェンジのために、市場における自社の立ち位置を踏まえた参入障壁を構築できているか。知財・無形資産への投資が、短期的には利益を押し下げて見えるというジレンマに、経営戦略としてどう向き合うか。攻めの参入障壁を築くための部門連携と人的配置ができているか。そして、中長期の成長に関心を持つ投資家へ向けて、何をどう発信するか。</p>
      <p>これらはいずれも、無形資産への投資を「議論すべき経営アジェンダ」として、取締役会の言葉に翻訳しようとする試みである。ただし、この整理のなかで扱われている無形資産は、技術・知財・人的資本・組織資本が中心であり、ブランドや顧客関係といった市場側の資産は、明示的な対象としては、まだ十分に位置づけられていない。</p>
    </div>

    <p>ここで注意すべきは、二つの混同を避けることである。第一に、会計上認識される無形資産と、経済・経営上の無形資産は同じではない。第二に、広告宣伝費を一律に資産計上すべきだという主張は、本稿の立場ではない。問われているのは計上の方法ではなく、何が形成され、どのような競争優位や将来の事業成果につながるのかを、経営の言葉で説明できるかどうかである。</p>
  </div>

</section>

<section class="section section--paper" id="s4">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num" style="color:var(--silver);">04</span>
      <div class="chapter-titles">
        <span class="chapter-en">The Missing Market-side Assets</span>
        <h2 class="chapter-jp">市場で生まれる資産は、経営から見えにくい</h2>
      </div>
    </div>
    <p class="lede">無形資産経営の議論に、何が欠けているのか。</p>

    <p>無形資産論において、技術、知的財産、研究開発、人的資本、組織能力などに比べて、ブランドや顧客にまつわる議論は豊富とは言えない。実際、知財・無形資産ガバナンスに関するガイダンスが挙げる事例は、味の素の取締役会における無形資産議題化、TDKの技術力・組織文化を軸にした企業価値算定、旭化成や富士通における知財部門の戦略的な機能拡張など、いずれも技術・知財・組織側の実践である。しかしブランドや顧客関係を、市場側で形成される無形資産として正面から扱う事例は、こうした公式のガイダンスのなかにほとんど見当たらない。</p>

    <p>ブランドと企業価値の接続を論じる試みが、なかったわけではない。ブランド評価の実務はブランドを財務価値の言葉で語ってきたし、ブランドとパフォーマンスの関係をめぐる研究も蓄積されている。WIPOの2026年版の調査も、ブランド投資の効果が他の無形資産との補完関係に依存することを示した。空白は、接続が論じられていないことにあるのではない。</p>
    <p>欠けているのは、運用の仕組みである。市場側で生まれる資産を、権利の設計、組織の能力、資源配分、そして次回の投資判断まで含めて、継続的に扱う仕組みが、多くの企業でまだ十分にできていない。広告・マーケティングは市場側の資産を日常的に扱ってきたが、それをストック、減耗、所有、再投資という経営の手続きに載せてはこなかった。経営の側は無形資産ガバナンスの手続きを整えつつあるが、そこで扱われるのは主に技術・知財・組織である。両者のあいだで、市場側の資産は「論じられるが、運用されない」状態に置かれている。ここに、無形資産経営のミッシングリンクがある。</p>

    <p>さらに、ブランドや関係資本は、企業の内側だけに存在するのではない。顧客、クリエイター、コミュニティ、プラットフォーム、代理店・パートナーに分散している。したがって重要なのは、単純な「所有」だけではない。アクセス、利用権、可搬性、継承可能性、そして影響力である。</p>

    <p>ブランドという資産の性質を考えれば、これは驚くことではない。特許やデータ、業務プロセスが比較的企業の内部に保有されるのに対し、ブランドの実体は生活者の記憶と認識のなかに宿る。企業が単独で所有し、完全に制御できる資産ではない。維持する働きかけを止めれば、競合や生活環境の変化のなかで、その結びつきは目減りしていく。だからこそブランドは、一度形成すれば終わるという資産ではなく、継続的な投資を必要とするタイプの資産である。</p>
    <p>この性質は、経営の言葉との相性を悪くする。技術や特許は、権利の帰属も、減価償却の期間も、比較的明確に定義できる。しかしブランドや顧客との関係は、誰のものかという問いに、単純な答えを持たない。この定義しづらさこそが、市場側の資産が資本配分の議論から抜け落ちてきた、実務上の理由の一つである。</p>
    <p>たとえば、クリエイターとの協働から生まれたコンテンツの二次利用権は、誰がどの範囲で持つのか。生活者が投稿したUGCは、企業がどこまで再利用してよいのか。プラットフォーム上に蓄積された反応データは、契約が終了したあとも参照できるのか。担当者が異動したとき、選定基準や交渉の経緯は、組織のなかにどう引き継がれるのか。これらはいずれも、「誰が所有しているか」という問いだけでは答えが出ない。所有していなくても継続的にアクセスできるのか、利用権はどこまで及ぶのか、契約や担当者が変わっても資産は同じ形で持ち越せるのか、そしてその資産は次の意思決定にどれだけの影響力を持つのか——この四つの問いに答えを持たない限り、市場側の資産は、経営の言葉で語ることができない。</p>
  </div>

  

  <div class="essay">
    <div class="case-box">
      <span class="box-label"><span>仮想ケース</span><b>新しい商品カテゴリーに参入する消費財企業</b></span>
      <p>グローバルに事業を展開するある消費財企業が、自社の研究開発を起点に、これまで扱ってこなかった新しい商品カテゴリーへ参入したとする。商品の開発、小売での展開、EC、クリエイターとの協働、顧客との接点づくりへ、複数年にわたって投資する計画である。</p>
      <p>初年度の売上や購入者数は、各部門の報告から把握できる。しかし、この投資が市場に残したものは、同じ精度では見えていない。生活者のあいだに生まれた信頼と、商品の語られ方。クリエイターや小売パートナーとの協働関係。同意を得た範囲で使える顧客理解。研究開発へ戻すべき使用実態のフィードバック。そして、各市場で得た学習。これらは、商品部門、各国の拠点、複数の代理店、各プラットフォームのあいだに分かれて蓄積されており、互いに照合されることも、翌期の資本配分の議論に載ることもない。</p>
      <p>その結果、次の海外市場や次の商品への投資判断は、先に得た学習をほとんど踏まえないまま行われる。ある市場で検証した伝え方や使用シーンの理解は引き継がれず、同じ検証が、別の予算で繰り返される。新しい市場での立ち上がりも、本来より遅れかねない。これは、商品が売れたかどうかとは別の問題である。</p>
      <p>ここで問われているのは、誰のものかという一点ではない。生活者やクリエイターが生み出したものは、企業が一方的に自社のものにできるわけではない。同意や許諾の範囲を確かめ、適切にアクセスし、そこから得た学習を組織のなかで引き継ぐ。その設計が、次の判断に使える状態を決める。</p>
      <p>この状態は、部門のあいだ、年度のあいだ、そして次の投資とのあいだで、価値がつながれていないものとして整理できる。その理論的な整理は§06で行い、この同じケースの経営会議の場面にも、そこで戻る。</p>
      <p class="small">※仮想のケースであり、特定の企業の事実や数値を示すものではない。</p>
    </div>
  </div>
</section>

<section class="section section--light" id="s5">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num">05</span>
      <div class="chapter-titles">
        <span class="chapter-en">Intangible Integration</span>
        <h2 class="chapter-jp">無形資産経営の次の課題は、「統合」である</h2>
      </div>
    </div>
    <p class="lede">複数の無形資産を、どのように一つの価値創造システムとして捉えるか。</p>

    <div class="box">
      <span class="box-label">DEFINITION — Intangible Integration</span>
      <p style="font-family:var(--serif); font-size:1.08rem; font-weight:600; color:var(--ink);">ブランド、顧客関係、コンテンツ／ナラティブ、データ／学習、組織能力、技術／R&amp;Dなどの無形資産を、個別に保有・管理するのではなく、相互に価値を生む一つの系として統合する経営原理。</p>
    </div>

    <p>重要なのは、すべてを一部署や一社に集約することではない。Integrationとは所有権の集中ではなく、異なる所有者、部門、パートナーに分散した資産のあいだに、接続、利用、継承、再投資のルールを設けることである。</p>
    <p>本稿が接続に注目する無形資産の領域は、次の六つである。ブランド、顧客との関係、コンテンツ／語り、データ／学習、組織能力、技術／R&amp;D。これはWIPOの正式な六分類ではない。WIPOとLuissの統計が示す主な無形投資の分野（組織資本、R&amp;D、ソフトウェア・データベース、ブランド、デザインなど）<sup>[6]</sup>を起点に、市場で形成される顧客との関係やコンテンツ・語りまで追えるよう、NSIが実務上、組み替えて補った見取り図である。顧客との関係やコンテンツ・語りは、WIPOの独立した計測カテゴリーではない。したがって六領域は、網羅的でも排他的でもなく、WIPOの分類とも一対一には対応しない。人的資本などは、複数の領域にまたがって現れる。</p>
    <p>この見取り図の市場側には、NSIの第一弾である#001が捉えたFandomain Capitalがある。ブランドがファンダムの文化的領域に築く無形資産であり、企業が発信するだけでは形成されない。生活者の体験、語りと共鳴、そして再解釈と深化を通じて、信頼と意味が市場のなかに厚みを持っていく。PESOやAI Signalは、その過程が起きる情報環境である。したがってFandomain Capitalは、フォロワー数のことでも、企業が持つ顧客リストのことでもない。#001がファンの体験と語りのなかで資本が育つ過程を描いたのに対し、本稿は、その市場側の価値を、技術・データ・組織能力といった企業側の力とどう接続し、次の投資判断に生かすかを問う。</p>
  </div>

  <figure class="evidence" style="margin:2.6rem auto;">
    <div class="fig-scroll" style="--fig-w:1160px">
<svg viewBox="0 0 1160 560" role="img" aria-labelledby="fig3-title fig3-desc">
      <title id="fig3-title">六つの無形資産領域と、市場側に育つFandomain Capital</title>
      <desc id="fig3-desc">左に、ブランド、顧客との関係、コンテンツ・語りの三つの領域を置き、その下に広がる薄い面として、#001のFandomain Capitalを示す。Fandomain Capitalは三つの領域にまたがる市場側の蓄積であり、七つ目の領域ではない。右に、データ・学習、組織能力、技術・研究開発の三つの企業側の領域を置く。企業側から市場側へ、製品・体験の質を通じて形成を支え得る矢印が一本ある。両側をあわせて、次の投資の対象として見る。</desc>
      <defs>
        <marker id="f3Arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#315CF5"/></marker>
        <marker id="f3Down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,0 L5,10 z" fill="#53617A"/></marker>
      </defs>
      <text x="20" y="28" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1" fill="#667181">FIG. 3 — 六つの領域と、市場に育つ資本</text>

      
      <rect x="20" y="52" width="590" height="340" rx="34" fill="#FFF7E6" stroke="#E3C07A" stroke-width="1.6" stroke-dasharray="7 7"/>
      <path d="M42,343 C130,335 205,349 312,341 S500,334 590,344" fill="none" stroke="#E3C07A" stroke-opacity=".7" stroke-width="1.3"/>
      <rect x="46" y="38" width="282" height="28" rx="14" fill="#E9A23B"/>
      <text x="62" y="57" fill="#3D2A06" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="600" letter-spacing="1">FANDOMAIN CAPITAL<tspan font-family="Noto Sans JP, sans-serif" font-size="12" letter-spacing="0" dx="6" font-weight="500">（#001）</tspan></text>
      <text x="48" y="100" font-family="Noto Sans JP, sans-serif" font-size="18" font-weight="700" fill="#6B4710">市場で育つ</text>
      <text x="48" y="121" font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#8A6A2A">生活者の体験・語り・再解釈のなかで形成される</text>

      
      <circle cx="118" cy="182" r="46" fill="#F6D28F"/>
      <circle cx="118" cy="182" r="29" fill="#E9A23B"/>
      
      <circle cx="293" cy="182" r="34" fill="#E4694F" fill-opacity=".72"/>
      <circle cx="337" cy="182" r="34" fill="#F09A84" fill-opacity=".72"/>
      
      <path d="M450,182 C470,140 492,140 512,182 S554,224 578,182" fill="none" stroke="#C74B7C" stroke-width="13" stroke-linecap="round"/>
      <path d="M450,204 C470,162 492,162 512,204 S554,246 578,204" fill="none" stroke="#C74B7C" stroke-opacity=".38" stroke-width="13" stroke-linecap="round"/>

      <g text-anchor="middle" font-family="Noto Sans JP, sans-serif">
        <text x="118" y="268" font-size="19" font-weight="700" fill="#151A22">ブランド</text>
        <text x="118" y="285" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing=".5" fill="#667181">BRAND CAPITAL</text>
        <text x="118" y="307" font-size="13" fill="#3B4455">例：想起・信頼・選好、</text>
        <text x="118" y="326" font-size="13" fill="#3B4455">価格決定力</text>

        <text x="315" y="268" font-size="19" font-weight="700" fill="#151A22">顧客との関係</text>
        <text x="315" y="285" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing=".5" fill="#667181">RELATIONSHIP CAPITAL</text>
        <text x="315" y="307" font-size="13" fill="#3B4455">例：継続して購入・相談・</text>
        <text x="315" y="326" font-size="13" fill="#3B4455">協働してくれる関係</text>

        <text x="512" y="268" font-size="19" font-weight="700" fill="#151A22">コンテンツ・語り</text>
        <text x="512" y="285" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing=".5" fill="#667181">NARRATIVE / CONTENT CAPITAL</text>
        <text x="512" y="307" font-size="13" fill="#3B4455">例：生活者が語り継ぎ、</text>
        <text x="512" y="326" font-size="13" fill="#3B4455">意味が更新されていく物語</text>
      </g>
      <g font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#6B4710">
        <text x="48" y="366">三つの領域にまたがって、生活者の体験と再解釈を通じて育つ蓄積。</text>
        <text x="48" y="385">七つ目の領域ではなく、企業が単独で保有できるものでもない。</text>
      </g>

      
      <rect x="730" y="52" width="410" height="340" rx="6" fill="#EEF2FE" stroke="#C3CFF3" stroke-width="1.5"/>
      <text x="756" y="92" font-family="Noto Sans JP, sans-serif" font-size="18" font-weight="700" fill="#1E3265">企業が築く</text>
      <text x="756" y="113" font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#53617A">投資と学習で、商品・体験の質を支える</text>
      <line x1="756" y1="206" x2="1114" y2="206" stroke="#D5DDF5"/>
      <line x1="756" y1="291" x2="1114" y2="291" stroke="#D5DDF5"/>

      
      <g fill="#315CF5">
        <rect x="756" y="136" width="58" height="11" rx="3"/>
        <rect x="756" y="152" width="58" height="11" rx="3" fill-opacity=".68"/>
        <rect x="756" y="168" width="58" height="11" rx="3" fill-opacity=".4"/>
      </g>
      
      <polygon points="785,229 811,244 811,274 785,289 759,274 759,244" transform="translate(0,-6)" fill="#7057E8"/>
      <polygon points="785,247 797,254 797,267 785,274 773,267 773,254" transform="translate(0,-6)" fill="#D4CCFA"/>
      
      <polygon points="785,312 807,347 785,382 763,347" transform="translate(0,3)" fill="#1F8FA3"/>
      <polygon points="785,330 794,347 785,364 776,347" transform="translate(0,3)" fill="#CDEBF0"/>

      <g font-family="Noto Sans JP, sans-serif">
        <text x="842" y="152" font-size="19" font-weight="700" fill="#151A22">データ・学習</text>
        <text x="842" y="169" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing=".5" fill="#667181">DATA / LEARNING CAPITAL</text>
        <text x="842" y="190" font-size="13" fill="#3B4455">例：同意の範囲で得た顧客理解と、検証の蓄積</text>

        <text x="842" y="237" font-size="19" font-weight="700" fill="#151A22">組織能力</text>
        <text x="842" y="254" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing=".5" fill="#667181">ORGANIZATIONAL CAPITAL</text>
        <text x="842" y="275" font-size="13" fill="#3B4455">例：判断基準・連携の仕組み、組織の文化</text>

        <text x="842" y="322" font-size="19" font-weight="700" fill="#151A22">技術・研究開発</text>
        <text x="842" y="339" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing=".5" fill="#667181">TECHNOLOGY / R&amp;D CAPITAL</text>
        <text x="842" y="360" font-size="13" fill="#3B4455">例：技術・特許、商品・サービスの開発力</text>
      </g>

      
      <line x1="727" y1="222" x2="616" y2="222" stroke="#315CF5" stroke-width="2.2" marker-end="url(#f3Arr)"/>
      <g text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11.5" fill="#26344E">
        <text x="671" y="166">製品・体験の</text>
        <text x="671" y="183">質を通じて</text>
        <text x="671" y="200">形成を支え得る</text>
      </g>

      
      <path d="M20,404 L20,416 L1140,416 L1140,404" fill="none" stroke="#53617A" stroke-width="1.6"/>
      <line x1="580" y1="416" x2="580" y2="446" stroke="#53617A" stroke-width="1.6" marker-end="url(#f3Down)"/>
      <rect x="270" y="450" width="620" height="84" rx="8" fill="#11151C"/>
      <text x="580" y="487" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">次の投資の対象として見る</text>
      <text x="580" y="513" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#C7CEDA">市場側の資本と、企業側の能力・学習を、同じ投資判断の上で扱う</text>
      <text x="912" y="496" font-family="IBM Plex Mono, monospace" font-size="12" fill="#667181">→ FIG. 5</text>
    </svg>
</div>
    <figcaption>六つの領域は、WIPOの分類を起点にNSIが整理した実務上の見取り図である。左の薄い面が、#001のFandomain Capital。ブランド・顧客との関係・コンテンツ／語りにまたがって市場側に育つ蓄積であり、七つ目の領域ではない。</figcaption>
  </figure>

  <div class="essay">
    <p>この図は、左から右へ読む。左は、生活者の体験と語りのなかで市場に育つ三つの領域で、その下に広がる面がFandomain Capitalである。右は、企業が投資と学習を通じて築く三つの領域で、技術や組織能力といった企業側の投資は、商品・体験の質を通じて、市場側の形成を支え得る。そして、両側を同じ投資判断の上で見る。これが本稿の出発点である。</p>
    <p>価値は、この両側のあいだを移動する。たとえば、顧客との対話から得た理解が、商品開発の判断基準として組織に蓄積されると、次の商品の企画や、その売り方が変わる。ただし、こうした移動だけで増幅するとは限らない。複数の資産が組み合わさることで、別々に使うより大きな成果が生まれ、その成果が次の投資へ持ち越されるとき、増幅が起きうる。その条件は§06のFIG. 4で整理し、複数の資産を次の投資でどう組み合わせて使うかという流れは、§06のFIG. 5で示す。FIG. 3が「何が、どこで形成されるか」の見取り図であるのに対し、FIG. 5は「残った価値を、次の投資でどう使うか」の流れを示す。統合とは、まずこの移動の経路を、意図して設計することである。</p>
    <p class="pull"><span>資産を並べることは、統合ではない。</span><span>価値が移動し、次の生産性を変える回路が必要だ。</span></p>
  </div>

  <div class="essay">
    <p>こうした回路を経営のなかで動かすには、まず土台が要る。公開事例から二つを見ておきたい。</p>

    <div class="case-box">
      <span class="box-label"><span>CASE 1</span><b>味の素株式会社 — ガバナンスに組み込む</b></span>
      <p>味の素は、2021年度に指名委員会等設置会社へ移行したのを機に、中長期の企業価値に大きく影響を及ぼすと考える「7つの重要な経営事項」を設定し、取締役会で継続的に審議する体制を敷いた。2023年度の取締役会実効性評価では、中期ASV経営2030ロードマップが掲げる「ありたい姿」を実現するために、審議事項そのものを見直すべきだという意見が出され、2024年度には複数回の議論を経て事項の再設計が行われている。</p>
      <p>新しい経営事項の柱の一つに「ポートフォリオと資源配分および無形資産」が置かれ、事業・地域・機能にまたがるポートフォリオ戦略や資源再配分と並んで、人財・技術・知財といった無形資産への投資とその価値向上が、個別の審議対象として組み込まれた<sup>[3]</sup>。ここで示されているのは、無形資産への投資を単発の予算項目としてではなく、取締役会が継続的に見直し、審議し続ける経営アジェンダとして制度化するという実践である。</p>
    </div>

    <div class="case-box">
      <span class="box-label"><span>CASE 2</span><b>株式会社丸井グループ — 時間軸で可視化する</b></span>
      <p>丸井グループは、人的資本投資の単年度あたりの償却費と、そこから生まれる限界利益を、単年度比較として時系列で開示している。投資額を10年で償却したと仮定したコストと、そこから生まれる収入（限界利益）を並べると、投資を本格化させてから3年目にあたる2019年3月期に、収入が初めてコストを上回る。さらに、本中期経営計画の最終年度にあたる2026年3月期には、収入がコストの5倍に達する見込みだと試算されている<sup>[4]</sup>。</p>
      <p>ここで可視化されているのは、知財・無形資産への投資が短期的には費用として財務指標を押し下げる一方、中長期的には収益に転換するという構造そのものである。「成長の糧に投資するほど、短期的には利益が悪化して見える」という知財・無形資産投資特有のジレンマに対し、丸井グループは、時間軸を明示することで正面から応えている。</p>
    </div>
    <p class="small">出典：味の素・丸井の各事例は、内閣府「価値創造を加速する知財・無形資産投資・活用のガイダンス」（2026年）付属資料に掲載された図版を基にしている。</p>

    <p>味の素は議論の場を、丸井グループは時間軸の可視化を、それぞれ仕組みとして整えた。いずれも、六つの資産が相互に変換される過程そのものを示す事例ではない。資産を接続し再配置するための、経営の土台をつくった例である。議論する場があり、時間軸で成果を確かめる手段がある。この二つが揃って初めて、市場側の資産を含めた接続と再配置を、経営の意思決定に載せることができる。次章では、その上で何が起きれば価値が増幅するのかという原理に踏み込む。</p>
  </div>
</section>

<section class="section section--paper" id="s6" style="padding-bottom:0;">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num" style="color:var(--silver);">06</span>
      <div class="chapter-titles">
        <span class="chapter-en">From Communication Design to Multiplier Deployment</span>
        <h2 class="chapter-jp">Communication DesignからMultiplier Deploymentへ</h2>
      </div>
    </div>
    <p class="lede">市場における意味と関係を設計してきたCommunication Designを、無形資産時代の経営技法へどう更新するか。</p>

    <p>§02で見たように、Communication Designは、広告表現をつくる仕事を、メッセージ、接点、体験、文脈、関係を横断して設計する仕事へと広げた、重要な理論的更新だった。しかし、その対象は主として市場へ向かうコミュニケーションであり、時間軸はキャンペーンや顧客体験の単位に置かれていた。活動によって形成されたブランド、関係、データ、ナラティブ、組織学習を誰が保有し、どう次の投資へ戻すかという問いは、理論そのものが扱わなかったというより、案件ごとの予算・契約・評価という実務の運用のなかで、十分には定着してこなかった。</p>
    <p>この限界は、Communication Designの側の失敗ではない。むしろ、それだけ広告会社の職能を経営に近づけた理論的更新だったからこそ、次の限界が見えてきたと言うべきだろう。メッセージから接点へ、接点から体験へ、体験から関係へと、Communication Designが扱う範囲はすでに十分に広がっている。残された空白は、その活動の「あと」に生まれる資産を、企業がどう保有し、どう次の意思決定に戻すかという一点である。</p>
    <p>Multiplier DeploymentはCommunication Designを否定しない。その成果を市場側の能力として内包しながら、設計対象を「コミュニケーション」から「無形資産の形成・接続・再配置」へ、意思決定を「表現と体験」から「資源配分とガバナンス」へと広げる。</p>
    <p class="pull"><span>Communication Designが「どのように意味と行動を生むか」を問うなら、</span><span>Multiplier Deploymentは「生まれた価値をどこに残し、次の生産性へどう戻すか」を問う。</span></p>
  </div>

  <div class="evidence">
    <div class="tbl-wrap">
      <table>
        <thead><tr><th></th><th>Communication Design</th><th>Multiplier Deployment</th></tr></thead>
        <tbody>
          <tr><td>中心課題</td><td>意味、接点、体験、関係をどう設計するか</td><td>投資から何を残し、どの資産へ接続し、どう再配置するか</td></tr>
          <tr><td>対象</td><td>メッセージ、接点、体験、文脈</td><td>無形資産間の相互作用と資源配置</td></tr>
          <tr><td>基本単位</td><td>市場へ向かうフロー</td><td>フローからストックへの変換回路</td></tr>
          <tr><td>時間軸</td><td>キャンペーン、顧客体験</td><td>蓄積、減耗、再投資、将来の選択肢</td></tr>
          <tr><td>成果</td><td>認知、態度、行動変容、関係形成</td><td>成長、価格決定力、資本効率、リスク低減、次の投資の生産性</td></tr>
          <tr><td>意思決定</td><td>CMO、ブランド責任者、クリエイティブ責任者</td><td>CEO、CSO、CMO、CFO、取締役会を含む横断判断</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="section--dark fullbleed">
  <div class="essay">
    <span class="eyebrow" style="margin-bottom:1.2rem; display:inline-flex;">MULTIPLIER LOGIC — DEPLOYMENTの作動原理</span>
    <h3 style="color:#fff; font-size:1.5rem; margin-bottom:1.4rem;">無形資産の統合は、なぜ企業価値の増幅につながるのか。</h3>
    <p>論理の核は、一本である。複数の価値が組み合わさって、当期の成果を助ける。これがSynergyである。そこで形成され、蓄積された価値を次の投資で使い、さらに新しい蓄積につなげる。これがCompoundingである。その結果、次に同じ投資額、同じ時間をかけても成果が高まるなら、その働きをMultiplierと呼び、本稿はこれを検証の対象として置く。</p>
    <p>「残る」ことと「蓄積する」ことは、同じではない。認知や好意が薄れながらも長く続くのは、効果が残存しているということであり、それだけでは蓄積ではない。残るだけでなく、次回使える形になって初めて、蓄積と呼べる。そして、その蓄積を再び投資に投じ、新たな蓄積を生む循環が、Compoundingである。</p>
    </div>

  <figure class="evidence" style="margin:2.6rem auto;">
    <div class="fig-scroll" style="--fig-w:900px">
<svg viewBox="0 0 900 380" role="img" aria-labelledby="fig4-title fig4-desc">
      <title id="fig4-title">Synergy × Compounding マトリクス</title>
      <desc id="fig4-desc">横軸にSynergy（弱・強）、縦軸にCompounding（弱・強）をとった四象限。両方が弱いと単発的な成果、Synergyのみ強いと一回限りのSynergy、Compoundingのみ強いと蓄積はあるが単一資産にとどまる。両方が強い右下の象限でのみ、Multiplierの成立条件が揃う。</desc>
      <g font-family="IBM Plex Mono" font-size="12" fill="#C7CEDA">
        <text x="450" y="30" text-anchor="middle" letter-spacing="1">FIG. 4 — SYNERGY × COMPOUNDING</text>
      </g>
      <g transform="translate(220,60)">
        <rect x="0" y="0" width="230" height="150" fill="#1B2230" stroke="#2A3245"/>
        <rect x="230" y="0" width="230" height="150" fill="#1B2230" stroke="#2A3245"/>
        <rect x="0" y="150" width="230" height="150" fill="#1B2230" stroke="#2A3245"/>
        <rect x="230" y="150" width="230" height="150" fill="#243057" stroke="#315CF5" stroke-width="2"/>
        <g font-family="Noto Sans JP" font-size="13" fill="#C7CEDA" text-anchor="middle">
          <text x="115" y="80">単発的な成果</text>
          <text x="345" y="80">一回限りのSynergy</text>
          <text x="115" y="230">蓄積はあるが単一資産</text>
          <text x="345" y="222" font-weight="700" fill="#fff">Multiplierの</text>
          <text x="345" y="242" font-weight="700" fill="#fff">成立条件が揃う</text>
        </g>
        <text x="-15" y="80" text-anchor="end" font-family="IBM Plex Mono" font-size="10.5" fill="#8B95A6">Compounding 弱</text>
        <text x="-15" y="230" text-anchor="end" font-family="IBM Plex Mono" font-size="10.5" fill="#8B95A6">Compounding 強</text>
        <text x="115" y="-15" text-anchor="middle" font-family="IBM Plex Mono" font-size="10.5" fill="#8B95A6">Synergy 弱</text>
        <text x="345" y="-15" text-anchor="middle" font-family="IBM Plex Mono" font-size="10.5" fill="#8B95A6">Synergy 強</text>
      </g>
    </svg>
</div>
    <figcaption style="color:#8B95A6;">SynergyとCompoundingが、ともに強いとき、Multiplierの成立条件が揃う。どちらか一方だけでは揃わない。</figcaption>
  </figure>

  <div class="essay">
    <p>この関係は、二つの軸で整理できる。Synergyが弱ければ、成果は単発にとどまる。Synergyが強くても、Compoundingが弱ければ、組み合わせの効果は一回限りで終わる。蓄積があっても、組み合わせる資産が単一であれば、価値の掛け合わせは起きない。SynergyとCompoundingの両方が強いとき、初めてMultiplierの成立条件が揃う。どちらか一方だけでは足りない。</p>
    <p>ただし、条件が揃うことは、Multiplierが実際に起きることの証明ではない。§04のケースで言えば、先に参入した市場で検証した使用シーンの理解を、次の市場の立ち上げに再利用できたとする。同じ予算で、検証にかけていた分を、まだ学習の足りない部分へ回せるなら、次の投資の生産性は高まりうる。それが実際に起きたかどうかは、仮説として置き、次の投資の結果で測って確かめるほかない。過去の効果が長続きしているだけでは、次の投資の効率までは変わらない。</p>
    <p>既存のブランド×パフォーマンス研究は、こうしたMultiplierの一部の経路をすでに示している先行的な足場として位置づけられる。例えばWARCが提示する「The Multiplier Effect」という視座も、長期的なクリエイティブの基盤づくりと短期のパフォーマンスとを一つの投資として捉え、ブランド資産がパフォーマンス広告の効率を高める経路を示している<sup>[8]</sup>。ただしそれは複数の無形資産間の変換全体の一部である。</p>
    <p>測定の対象は、当期の売上・利益、活動後に残った価値、他の価値への波及、将来の選択肢を増やす価値、そして、減耗や流出、プラットフォーム依存、担当者交代による喪失に分けて考える。</p>
  </div>

  <div class="essay">
    <h4 style="color:#fff; font-size:1.15rem; margin:2.4rem 0 1rem;">Multiplierの反対側にある、三つの断絶</h4>
    <p>Multiplierを妨げる断絶は、大きく三つある。部門や拠点、代理店のあいだで価値が分かれてしまう「部門間の分断」（Silo）。単年度の成果で評価され、次期のための蓄積が評価されない「単年度の評価」（Short-termism）。そして、形成された価値が、次に使える形で保たれない「次に使えない状態」（Leakage）である。</p>
    <p>§04の消費財企業では、この三つが重なっていた。信頼と語られ方、協働関係、顧客理解、使用実態の学習が、商品部門、各国の拠点、代理店、プラットフォームに分かれて蓄積され、互いに照合されなかった（部門間の分断）。成果は初年度の売上で評価され、次の市場のための学習や協働関係を残すことは、評価の対象になっていなかった（単年度の評価）。そして、同意や許諾の範囲、アクセスの条件が整理されないまま、市場で得た顧客理解や学習は、次の市場や次の商品の判断では使えなかった（次に使えない状態）。したがってMultiplier Deploymentとは、価値を増やすだけでなく、同意・許諾の範囲、適切なアクセス、学習の引き継ぎをあらかじめ設計し、この三つの断絶を防ぐ技法でもある。</p>
    <p>ただし、なぜこの三つの断絶が生まれるのかを、担当者の意識の問題として片づけるべきではない。そこには、たいてい相応の理由がある。今期の売上で評価される担当者が、来期のための資産形成費まで負担させられるという、評価とコストの時間差。利用権を広く確保しようとするほど、契約や交渉にかかる費用が増えるという、権利設計のコスト。社外の関係を過度に管理しようとすると、かえって自発性や信頼を損なうという、統制の逆効果。そして、データを維持し続ける費用が、それを再利用する便益を上回ってしまうという、保有コストの問題である。これらは怠慢ではなく、多くの場合、個々の判断としては合理的な選択の積み重ねである。</p>
    <p>だからこそ、統合すべき対象は選ぶ必要がある。原則はこうだ。</p>
    <p class="pull"><span>統合の対象は、戦略上の利用先があり、</span><span>維持・調整に要する費用を上回る価値が見込める資産から選ぶ。</span></p>
    <p>すべての接続を増やすことが目的ではない。むしろ、どの資産を、どこまで蓄積・接続するかを絞り込むことのほうが、実務としては重要になる。そのためには、誰が維持・調整の費用を負担し、誰がそこから便益を得て、誰が次回の利用を決めるのかまで、あらかじめ設計しておく必要がある。この三者が異なる部門や役職にまたがるとき、断絶はもっとも生まれやすい。</p>
  </div>
</div>

<section class="section section--paper" id="s6b">
  <div class="essay">
    <div class="box" style="border-left:4px solid var(--cobalt);">
      <span class="box-label">DEFINITION — Multiplier Deployment</span>
      <p style="font-family:var(--serif); font-weight:600; color:var(--ink); font-size:1.02rem;">資本・能力・データ・権利を連動させて戦略配置し、複数の無形資産の正の相互作用を、その場限りで終わらせず時間を超えて蓄積・再配置することで、次の投資の生産性を高める経営実践。</p>
      <p class="mono" style="font-size:.85rem; color:var(--muted); margin-top:1rem;">Multiplier Deployment is the deliberate allocation and orchestration of capital, capabilities, data and rights so that cross-asset synergies persist, compound over time, and raise the productivity of future investment.</p>
    </div>
    <p>Multiplier Deployment（残る価値を、次の投資に組み込む経営実践）は、次の四つの手順で進める。</p>
    <ol class="numlist" style="margin:1.6rem 0 2rem;">
      <li><span class="n">01</span><div><strong>何が残るかを確かめる</strong>今回の活動のあとに、どんな無形資産が存在し、誰が保有・アクセスし、次回使えるかを調べる。</div></li>
      <li><span class="n">02</span><div><strong>次にどう効くか仮説を立てる</strong>投資の当期成果に加え、どの資産が次の投資の精度・効率を変えるのかを考える。</div></li>
      <li><span class="n">03</span><div><strong>残ったものを組み合わせて使う</strong>予算、人材、データ、権利、協働相手をそろえて、次の企画へ投入する。</div></li>
      <li><span class="n">04</span><div><strong>確かめて、次に回す</strong>当期の成果、残った価値、失ったもの、次の投資の効き方を検証し、次の資本配分と意思決定へ戻す。</div></li>
    </ol>
    <p>この四つの手順は、実務の進め方である。手順1と2で、何が残り、次にどう効くかを確かめる。3で、残ったものを組み合わせて次の投資に使い、4で、実際に次の投資の効き方が変わったかを検証する。</p>
    <p class="pull" style="margin-bottom:3.2rem;"><span>入口はPL、診断は無形資産、出口は次の投資判断。</span></p>
  </div>

  <div class="fullbleed" style="background:var(--ice); padding-block:clamp(3rem,6vw,4.5rem);">
  <div class="essay" style="max-width:var(--evidence); text-align:center; margin-bottom:1.6rem;">
    <span class="eyebrow" style="justify-content:center;">今回の活動から、次の投資へ</span>
  </div>
  <figure class="evidence" style="margin:0 auto;">
    <div class="fig-scroll" style="--fig-w:1160px">
<svg viewBox="0 0 1160 430" role="img" aria-labelledby="fig5-title fig5-desc">
      <title id="fig5-title">今回の活動から、次の投資へ</title>
      <desc id="fig5-desc">今回の活動、当期の成果、次に使える価値、次の投資の順に進み、次の投資の生産性を確かめて、次の活動へ戻る循環。四つの手順が番号で対応している。</desc>
      <defs>
        <marker id="f5F" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#315CF5"/></marker>
        <marker id="f5R" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7057E8"/></marker>
      </defs>
      <text x="30" y="30" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1" fill="#667181">FIG. 5 — 今回の活動から、次の投資へ</text>
      <g stroke="#315CF5" stroke-width="1.8" fill="none">
        <line x1="252" y1="132" x2="338" y2="132" marker-end="url(#f5F)"/>
        <line x1="542" y1="132" x2="628" y2="132" marker-end="url(#f5F)"/>
        <line x1="832" y1="132" x2="908" y2="132" marker-end="url(#f5F)"/>
      </g>
      <path d="M1010,178 C 1010,320 150,320 150,182" stroke="#7057E8" stroke-width="1.8" fill="none" stroke-dasharray="1 7" stroke-linecap="round" marker-end="url(#f5R)"/>
      <g><rect x="50" y="90" width="200" height="84" rx="8" fill="#EDF1F7" stroke="#315CF5" stroke-width="1.6"/>
        <text x="150" y="126" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="18" font-weight="700" fill="#151A22">今回の活動</text>
        <text x="150" y="152" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#53617A">施策・投資</text></g>
      <g><rect x="340" y="90" width="200" height="84" rx="8" fill="#EDF1F7" stroke="#315CF5" stroke-width="1.6"/>
        <text x="440" y="126" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="18" font-weight="700" fill="#151A22">当期の成果</text>
        <text x="440" y="152" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#53617A">売上・反応など</text></g>
      <g><rect x="630" y="90" width="200" height="84" rx="8" fill="#EDF1F7" stroke="#315CF5" stroke-width="1.6"/>
        <text x="730" y="126" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="18" font-weight="700" fill="#151A22">次に使える価値</text>
        <text x="730" y="152" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#53617A">ブランド・関係・データ・学習</text></g>
      <g><rect x="910" y="90" width="200" height="84" rx="8" fill="#EDF1F7" stroke="#315CF5" stroke-width="1.6"/>
        <text x="1010" y="126" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="18" font-weight="700" fill="#151A22">次の投資</text>
        <text x="1010" y="152" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="12.5" fill="#53617A">予算・人材・権利を投入</text></g>
      <g><circle cx="585" cy="132" r="14" fill="#7057E8"/><text x="585" y="137" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="600" fill="#fff">1</text></g>
      <g><circle cx="870" cy="132" r="14" fill="#7057E8"/><text x="870" y="137" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="600" fill="#fff">2</text></g>
      <g><circle cx="1086" cy="90" r="14" fill="#7057E8"/><text x="1086" y="95" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="600" fill="#fff">3</text></g>
      <g><circle cx="580" cy="280" r="14" fill="#7057E8"/><text x="580" y="285" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="600" fill="#fff">4</text></g>
      <text x="580" y="318" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="14" font-weight="700" fill="#7057E8">次の投資の生産性を確かめ、次の活動へ回す</text>
      <g font-family="Noto Sans JP, sans-serif" font-size="14.5" fill="#26344E">
        <text x="40" y="384"><tspan font-weight="700" fill="#7057E8">1</tspan>　何が残るかを確かめる</text>
        <text x="330" y="384"><tspan font-weight="700" fill="#7057E8">2</tspan>　次にどう効くか仮説を立てる</text>
        <text x="640" y="384"><tspan font-weight="700" fill="#7057E8">3</tspan>　残ったものを組み合わせて使う</text>
        <text x="940" y="384"><tspan font-weight="700" fill="#7057E8">4</tspan>　確かめて、次に回す</text>
      </g>
    </svg>
</div>
    <figcaption style="text-align:center;">今回の活動が残した価値を、次の投資で組み合わせて使い、その生産性を確かめて次に回す。番号は、本文の四つの手順に対応する。</figcaption>
  </figure>
  </div>

  <div class="essay">
    <div class="case-box">
      <span class="box-label"><span>仮想ケース（続き）</span><b>経営会議で、何を見て決めるか</b></span>
      <p>§04の消費財企業に戻る。新カテゴリーへの参入から二年目の経営会議で、次の海外市場への参入と、次の商品への投資配分が議題に上がる。</p>
      <p><strong>当期の売上だけを見る場合。</strong>カテゴリーの売上は計画を上回っている。議論は、売上の大きかった市場へ、前年と同じ比率で販促と開発の予算を配分し続けるかどうかに集まる。次の市場の担当は、検証を一から行う前提で、立ち上げの計画を組む。研究開発には、売上の数字以外の知見が戻ってこない。</p>
      <p><strong>残る価値と利用条件を確認して決める場合。</strong>同じ会議に、今期の投資が何を残したかが、併せて示される。市場でどのような信頼と語られ方が育ったか。これは、FIG. 3で薄い面として示した、市場側の蓄積にあたる。協働したクリエイターや小売パートナーとの関係を、次の市場でも続けられるか。同意の範囲内で使える顧客理解は何で、次の市場へどこまで持ち込めるか。使用実態の学習は、研究開発の次の仕様に返されているか。そのうえで、次の市場では検証済みの部分を再利用して立ち上げを早め、浮いた予算を、まだ学習の足りない部分に回す。研究開発の優先順位も、市場で得た使用実態にもとづいて見直す。</p>
      <p>変わるのは、予算の総額よりも、配分の理由である。何を再利用し、何を新たに確かめ、次の利用条件を誰が決めるのか。それを会議の場で説明できる状態にすることが、ここでの設計である。ただし、立ち上げが実際に早まったか、投資の効き方が変わったかは、仮説として置き、次の期の結果で測って確かめる。</p>
      <p class="small">※仮想のケースであり、特定の企業の事実や数値を示すものではない。効果を実証するものでもない。</p>
    </div>
  </div>

  <div class="essay">
    <div class="box" style="margin-top:2.6rem;">
      <span class="box-label">会議で使えるチェッククエスチョン</span>
      <ol style="margin:0; padding-left:1.2rem; display:grid; gap:.55rem; font-size:.92rem; color:var(--muted);">
        <li>今回の投資は、当期成果以外に何を残すのか。</li>
        <li>形成される資産は、誰が保有・アクセスし、誰が次に使えるのか。</li>
        <li>一つの活動が、複数の資産形成につながる設計になっているか。</li>
        <li>形成された資産は、次の投資の効率や精度をどう変えるのか。</li>
        <li>減耗・流出・依存を、誰が継続的に管理するのか。</li>
      </ol>
    </div>
  </div>
</section>

<section class="section section--dark" id="s7">
  <div class="essay">
    <div class="chapter-head">
      <span class="chapter-num">07</span>
      <div class="chapter-titles">
        <span class="chapter-en">What Can Advertising Leave for the Company?</span>
        <h2 class="chapter-jp">広告は、企業に何を残せるか</h2>
      </div>
    </div>
    <p class="lede">施策は成功した。それでも、次の企画に使える価値が見えない。</p>

    <p>広告施策の結果報告は、たいてい前向きなものだ。売上は計画を上回り、反応も良かった。そこで、CFOが尋ねる。「この成果から、来期の投資に使えるものは何が残ったのか」。答えに詰まる場面は、決して珍しくない。成果は報告できても、その成果が生んだ関係やデータ、学習が、次の投資でどう使われるのかは、誰も説明できないからだ。</p>
    <p>この問いは、広告・マーケティングの投資を、当期の売上だけでなく、次の事業成長へつなげたい経営者や事業責任者に向けたものである。CMOとCFO、事業責任者が、同じ会議で同じ図を見ながら話せること。本稿は、それを想定して書いている。</p>

    <p>NSIとDCXforceは、この問いに、次の立ち位置で向き合っていく。当期の売上・利益に、施策がどう効いたのかをまず見る。そのうえで、活動のあとに残る価値と、それを次に使える条件を確かめる。そして、その価値を次の商品や市場への投資にどう組み込み、実際に投資の効き方が変わったかまで追う。</p>

    <p>もちろん、これに近い問いに取り組んでいるのは、私たちだけではない。ブランド評価、事業変革、統合マーケティングなど、すでに多くの会社が、それぞれの方法で向き合っている。私たちが仕事の中心に置くのは、当期の施策が何を残し、複数の価値を次の投資にどう組み込むか、という一点である。</p>

    <p>NSIの三部作は、この問いに向かって積み上げてきた。#001は、ブランドがファンダムの文化的領域に築くFandomain Capitalを、生活者の体験・語り・再解釈のなかで市場に育つ資本として示した。#002は、インフルエンサーマーケティングを題材に、施策のあとに残る価値の蓄積を扱った。そして#003は、その市場側の価値を、企業側の能力や学習と統合し、次の投資へ配置する考え方を示した。三部作を通じて変わらなかったのは、問いの向きである。「いくら使ったか」ではなく、「何が残り、次にどう使えるか」を問う。</p>
    <p>この問いを、私たちは、具体的な事業・投資の現場で検証していく。</p>
  </div>
</section>

<div class="fullbleed" style="background:var(--ink);">
  <p class="pull pull--full" style="color:#fff;"><span>統合とは、一つにまとめることではない。</span><span>互いの価値が増幅する配置をつくることだ。</span></p>
</div>

<section class="section section--paper">
  <div class="essay references">
    <span class="eyebrow">REFERENCES</span>
    <ol style="margin-top:1.2rem;">
      <li>ジョナサン・ハスケル、スティアン・ウェストレイク著、山形浩生訳『無形資産が経済を支配する——資本のない資本主義の正体』（東洋経済新報社、2020年）</li>
      <li>天野彬「無形資産」（朝日新聞adv.マーケティングキーワード連載）<a href="https://adv.asahi.com/series/commentary/16869420">adv.asahi.com</a></li>
      <li>味の素グループ ASVレポート2025（内閣府「価値創造を加速する知財・無形資産投資・活用のガイダンス」付属資料2を加工引用）</li>
      <li>株式会社丸井グループ HP「投資家情報－経営方針－人的資本投資」2026年6月時点情報（同上）</li>
      <li>内閣府知的財産戦略推進事務局「価値創造を加速する知財・無形資産投資・活用のガイダンス」（2026年8月3日）</li>
      <li>World Intellectual Property Organization and Luiss Business School. World Intangible Investment Highlights 2026: Better Data for Better Business and Policy. wipo.int</li>
      <li>株式会社東京証券取引所「コーポレートガバナンス・コード」改訂（2026年7月21日施行）原則4－1　<a href="https://www.jpx.co.jp/corporate/news/news-releases/1020/20260721-01.html">jpx.co.jp</a></li>
      <li>WARC, "The Multiplier Effect" (WARC, in-focus analysis)</li>
      <li>Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures that Drive Performance," <em>Harvard Business Review</em> (1992)</li>
      <li>Robert S. Kaplan and David P. Norton, <em>Strategy Maps: Converting Intangible Assets into Tangible Outcomes</em> (Harvard Business School Press, 2004)</li>
    </ol>

    <div class="author-box">
      <img class="avatar" src="/amano.jpg" alt="天野彬" width="72" height="72">
      <div>
        <h4>天野 彬 / Akira Amano</h4>
        <p>New Strategy Institute（NSI）Founding Director。DCXforce 執行役員 Chief Strategy Officer。東京大学大学院学際情報学府修士課程修了（M.A.）。株式会社電通にてデジタルマーケティングの研究開発・コンサルティングを主導。日本経済新聞電子版Think! エキスパートコメンテーター、日本広告学会理事、明治学院大学非常勤講師。</p>
      </div>
    </div>
  </div>
</section>
`;

export default function Report003Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      <div className="nsi003">
        <a href="#main" style={{ position: "absolute", left: "-9999px" }}>
          本文へ
        </a>

        <ReportToc />

        <main id="main">
          <div dangerouslySetInnerHTML={{ __html: htmlBefore }} />

          {/* ============ IN PRACTICE / DOWNLOAD ============ */}
          <section className="section section--light" id="dl">
            <div className="essay">
              <span className="eyebrow">IN PRACTICE</span>
              <h2 className="chapter-jp" style={{ marginTop: "1rem" }}>
                Intangible Integrationを
                <br />
                実践するために
              </h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                活動のあとに残る価値を、次の投資判断に組み込む。その設計と検証を、事業の現場で進めていく。
              </p>
              <p style={{ marginTop: "2rem" }}>たとえば、次のような状況から始められる。</p>
              <ul
                style={{
                  margin: "1rem 0 0",
                  paddingLeft: "1.3rem",
                  display: "grid",
                  gap: ".6rem",
                  color: "var(--muted)",
                }}
              >
                <li>販促費は増えているのに、指名購入や継続購入が伸びない</li>
                <li>ブランドの強みを、新商品や価格設定に十分活かせていない</li>
                <li>顧客・コンテンツ・データが分散し、施策のたびに学習が途切れる</li>
              </ul>
              <p style={{ marginTop: "1.4rem" }}>
                対話を通じて整理できるのは、既存の資産と断絶の所在、優先的に検証すべき投資仮説、そして次の判断と測定の設計である。
              </p>
              <div className="cta-actions" style={{ justifyContent: "flex-start", marginTop: "1.8rem" }}>
                <a
                  className="btn btn-primary"
                  href="mailto:a.amano@dcxforce.co.jp?subject=Intangible%20Integration%E3%81%AE%E5%AE%9F%E8%B7%B5%E3%81%AE%E7%9B%B8%E8%AB%87"
                >
                  Intangible Integrationの実践を相談する
                </a>
              </div>

              <DownloadForm />

              <p style={{ marginTop: "2.4rem" }}>
                <a href="/reports/002">NSI REPORT #002 を読む ↗</a>
              </p>
            </div>
          </section>
        </main>

        <FigToggle />
      </div>

      <Footer />
    </>
  );
}
