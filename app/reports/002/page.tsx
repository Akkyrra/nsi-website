"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reportCss = `
  :root {
    --navy: #0a1628;
    --navy-mid: #0f2040;
    --coral: #c45c3a;
    --coral-light: #e08a67;
    --coral-text: #a9472f;
    --coral-btn: #a9472f;
    --teal: #1a6b5a;
    --teal-light: #3f9c84;
    --white: #faf8f3;
    --off-white: #f0ece0;
    --gray: #625d53;
    --gray-soft: #8a8578;
    --text: #1a1612;
    --ivory: #f7f3ea;
    --blue-gray: #bcc7d6;
    --coral-bright: #ff8063;
  }
  .report-002-root * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  .report-002-root {
    background: var(--white);
    color: var(--text);
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    line-height: 1.85;
    overflow-x: hidden;
    font-size: 16px;
  }

  .hero { min-height: 100vh; background: var(--navy); display: flex; flex-direction: column; justify-content: flex-end; padding: 0 5vw 8vh; position: relative; overflow: hidden; }
  .hero-bg { position:absolute; inset:0; background: radial-gradient(ellipse 55% 55% at 82% 15%, rgba(196,92,58,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 15% 85%, rgba(26,107,90,0.08) 0%, transparent 60%); }
  .hero-lines { position:absolute; inset:0; background-image: repeating-linear-gradient(0deg, rgba(196,92,58,0.06) 0px, rgba(196,92,58,0.06) 1px, transparent 1px, transparent 92px); }
  .hero-meta { font-family:'IBM Plex Mono',monospace; font-size:0.7rem; color:var(--coral-light); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:2.2rem; opacity:0; animation:fadeUp002 0.8s ease 0.2s forwards; }
  .hero-title { font-family:'Shippori Mincho',serif; font-size:clamp(2.2rem,5vw,4.3rem); font-weight:700; color:var(--white); line-height:1.4; letter-spacing:-0.01em; margin-bottom:1.4rem; opacity:0; animation:fadeUp002 0.8s ease 0.4s forwards; }
  .hero-title em { font-style:normal; font-family:'Shippori Mincho',serif; color:var(--coral-light); }
  .hero-subtitle { font-family:'IBM Plex Mono',monospace; font-size:0.85rem; color:rgba(250,248,243,0.6); letter-spacing:0.04em; margin-bottom:3.5rem; opacity:0; animation:fadeUp002 0.8s ease 0.6s forwards; }
  .hero-tagline { font-family:'Shippori Mincho',serif; font-size:1.35rem; font-weight:600; color:var(--white); max-width:560px; line-height:1.9; padding-left:1.5rem; border-left:2px solid var(--coral); opacity:0; animation:fadeUp002 0.8s ease 0.8s forwards; }
  .hero-scroll { position:absolute; bottom:2.5rem; right:5vw; display:flex; flex-direction:column; align-items:center; gap:0.5rem; opacity:0; animation:fadeUp002 0.8s ease 1.2s forwards; }
  .hero-scroll span { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(250,248,243,0.35); letter-spacing:0.2em; text-transform:uppercase; writing-mode:vertical-rl; }
  .scroll-line { width:1px; height:56px; background:linear-gradient(to bottom,var(--coral),transparent); animation:scrollPulse002 2s ease infinite; }
  @keyframes scrollPulse002 { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.1)} }
  @keyframes fadeUp002 { from{opacity:0; transform:translateY(16px);} to{opacity:1; transform:translateY(0);} }

  .report-002-root .reveal { opacity:1; transform:none; transition:opacity 0.7s ease, transform 0.7s ease; }

  .summary { background:var(--off-white); padding:7rem 5vw; }
  .section-label { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--coral-text); letter-spacing:0.22em; text-transform:uppercase; margin-bottom:2.5rem; display:flex; align-items:center; gap:1rem; }
  .section-label::after { content:''; flex:1; max-width:60px; height:1px; background:var(--coral-text); }
  .section-label.on-dark { color:var(--coral-light); }
  .section-label.on-dark::after { background:var(--coral-light); }
  .summary-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:rgba(10,22,40,0.12); max-width:1100px; }
  .summary-item { background:var(--off-white); padding:2.6rem; position:relative; }
  .summary-num { font-family:'DM Serif Display',serif; font-size:3rem; color:rgba(196,92,58,0.16); position:absolute; top:1.4rem; right:1.8rem; line-height:1; }
  .summary-item h3 { font-family:'Shippori Mincho',serif; font-size:1.08rem; font-weight:700; color:var(--navy); margin-bottom:0.9rem; line-height:1.6; }
  .summary-item p { font-size:0.92rem; color:var(--gray); line-height:1.9; }

  .chapter { padding:7rem 5vw; position:relative; }
  .chapter-dark { background:var(--navy); color:var(--white); }
  .chapter-mid { background:var(--navy-mid); color:var(--white); }
  .chapter-light { background:var(--white); }
  .chapter-header { display:grid; grid-template-columns:auto 1fr; gap:2.5rem; align-items:start; margin-bottom:4rem; max-width:1100px; }
  .chapter-num { font-family:'DM Serif Display',serif; font-size:clamp(4rem,8vw,7rem); line-height:0.85; color:rgba(196,92,58,0.14); letter-spacing:-0.03em; }
  .chapter-dark .chapter-num, .chapter-mid .chapter-num, .framework-section .chapter-num { color:rgba(196,92,58,0.2); }
  .chapter-title h2 { font-family:'Shippori Mincho',serif; font-size:clamp(1.4rem,2.6vw,2.05rem); font-weight:700; line-height:1.55; margin-bottom:0.5rem; color:var(--navy); }
  .chapter-dark .chapter-title h2, .chapter-mid .chapter-title h2, .framework-section .chapter-title h2 { color:var(--white); }
  .chapter-title .chapter-sub { font-family:'IBM Plex Mono',monospace; font-size:0.72rem; color:var(--coral-text); letter-spacing:0.08em; }
  .chapter-dark .chapter-title .chapter-sub, .chapter-mid .chapter-title .chapter-sub, .framework-section .chapter-title .chapter-sub { color:var(--coral-light); }
  .chapter-subtitle { font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:500; color:var(--gray); margin-top:0.4rem; }
  .chapter-dark .chapter-subtitle, .chapter-mid .chapter-subtitle, .framework-section .chapter-subtitle { color:rgba(250,248,243,0.55); }
  .chapter-body { max-width:1100px; display:grid; grid-template-columns:1fr 1fr; gap:3.5rem; }
  .chapter-body.wide { grid-template-columns:3fr 2fr; }
  .chapter-body.single { grid-template-columns:1fr; max-width:820px; }
  .body-text { font-size:1.03rem; line-height:2.05; }
  .chapter-dark .body-text, .chapter-mid .body-text, .framework-section .body-text { color:rgba(250,248,243,0.88); }
  .body-text p + p { margin-top:1.4rem; }
  .body-text h4 { font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:700; color:var(--navy); margin:2rem 0 0.7rem; }
  .chapter-dark .body-text h4, .chapter-mid .body-text h4, .framework-section .body-text h4 { color:var(--white); }
  .pull-quote { font-family:'Shippori Mincho',serif; font-size:clamp(1.1rem,1.8vw,1.5rem); font-weight:700; line-height:1.8; color:var(--navy); padding:2.2rem 2.8rem; border-left:3px solid var(--coral); background:rgba(196,92,58,0.07); }
  .chapter-dark .pull-quote, .chapter-mid .pull-quote, .framework-section .pull-quote { color:var(--white); background:rgba(196,92,58,0.1); }
  .small-note { font-size:0.85rem; color:var(--gray); line-height:1.9; margin-top:0.75rem; }
  .chapter-dark .small-note, .chapter-mid .small-note, .framework-section .small-note { color:rgba(250,248,243,0.75); }
  .cite { font-size:0.72rem; color:var(--coral-text); text-decoration:none; }
  .chapter-dark .cite, .chapter-mid .cite, .framework-section .cite { color:var(--coral-bright); }

  .finding { border-left:2px solid var(--teal); padding:0.2rem 0 0.2rem 1.3rem; margin:1.8rem 0; max-width:1100px; }
  .finding .f-label { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--teal); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.5rem; }
  .finding p { font-size:0.95rem; color:var(--text); line-height:1.95; }
  .finding.limit { border-left-color:var(--gray-soft); }
  .finding.limit .f-label { color:var(--gray); }
  .chapter-dark .finding p, .chapter-mid .finding p, .framework-section .finding p { color:rgba(250,248,243,0.85); }

  .table-wrap { max-width:1100px; overflow-x:auto; margin-top:2.5rem; }
  .term-table { width:100%; min-width:640px; border-collapse:collapse; font-size:0.88rem; }
  .term-table th { font-family:'IBM Plex Mono',monospace; font-size:0.62rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--coral-text); text-align:left; padding:0.9rem 1.1rem; border-bottom:1px solid rgba(10,22,40,0.18); white-space:nowrap; }
  .term-table td { padding:1rem 1.1rem; border-bottom:1px solid rgba(10,22,40,0.09); color:var(--text); vertical-align:top; }
  .term-table td.label { font-family:'Shippori Mincho',serif; font-weight:700; color:var(--navy); white-space:nowrap; }
  .term-table tr:last-child td { border-bottom:none; }
  .chapter-dark .term-table th, .chapter-mid .term-table th, .framework-section .term-table th { color:var(--coral-bright); border-bottom-color:rgba(255,255,255,0.22); }
  .chapter-dark .term-table td, .chapter-mid .term-table td, .framework-section .term-table td { color:var(--blue-gray); border-bottom-color:rgba(255,255,255,0.12); }
  .chapter-dark .term-table td.label, .chapter-mid .term-table td.label, .framework-section .term-table td.label { color:var(--ivory); }
  .lvl { display:inline-block; font-size:0.74rem; padding:0.2rem 0.6rem; border-radius:3px; font-family:'IBM Plex Mono',monospace; white-space:nowrap; }
  .lvl-high { background:rgba(26,107,90,0.14); color:var(--teal); }
  .lvl-mid { background:rgba(196,92,58,0.14); color:var(--coral-text); }
  .lvl-mixed { background:rgba(98,93,83,0.12); color:var(--gray); }
  .lvl-low { background:transparent; border:1px dashed rgba(98,93,83,0.4); color:var(--gray); }

  .case-setup { max-width:1100px; margin-top:3rem; border:1px solid rgba(10,22,40,0.15); background:var(--off-white); padding:2.2rem 2.5rem; }
  .chapter-dark .case-setup, .chapter-mid .case-setup, .framework-section .case-setup { background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.15); }
  .case-setup .case-tag { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--coral-text); letter-spacing:0.18em; text-transform:uppercase; margin-bottom:1rem; }
  .chapter-dark .case-setup .case-tag, .chapter-mid .case-setup .case-tag, .framework-section .case-setup .case-tag { color:var(--coral-light); }
  .case-setup h4 { font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:700; color:var(--navy); margin-bottom:1.2rem; }
  .chapter-dark .case-setup h4, .chapter-mid .case-setup h4, .framework-section .case-setup h4 { color:var(--white); }
  .case-fields { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:1.2rem; }
  .case-field .cf-label { font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:var(--gray); letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.3rem; }
  .case-field .cf-val { font-size:0.9rem; color:var(--text); line-height:1.6; }
  .chapter-dark .case-field .cf-val, .chapter-mid .case-field .cf-val, .framework-section .case-field .cf-val { color:rgba(250,248,243,0.85); }

  .kiori-tag { display:flex; align-items:center; gap:0.85rem; font-family:'IBM Plex Mono',monospace; font-size:0.82rem; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; color:var(--coral-text); margin-bottom:1.1rem; }
  .kiori-tag img { width:40px; height:40px; flex-shrink:0; }
  .chapter-dark .kiori-tag, .chapter-mid .kiori-tag, .framework-section .kiori-tag { color:var(--coral-light); }
  .kiori-thumb { width:44px; height:auto; flex-shrink:0; border-radius:4px; }
  .case-setup-flex { display:flex; gap:2.5rem; align-items:center; max-width:1100px; margin-top:3rem; }
  .case-setup-flex .kiori-package { flex-shrink:0; width:180px; }
  .case-setup-flex .kiori-package img { width:100%; height:auto; display:block; filter:drop-shadow(0 12px 28px rgba(0,0,0,0.35)); }
  .case-setup-flex .case-setup { margin-top:0; flex:1; }
  .kiori-resolution-flex { display:flex; gap:2.5rem; align-items:flex-start; max-width:1100px; margin-top:3rem; }
  .kiori-resolution-flex .kiori-package { flex-shrink:0; width:150px; }
  .kiori-resolution-flex .kiori-package img { width:100%; height:auto; display:block; filter:drop-shadow(0 10px 22px rgba(10,22,40,0.18)); }
  .kiori-resolution-flex .kiori-resolution-body { flex:1; }
  @media (max-width:700px) {
    .case-setup-flex, .kiori-resolution-flex { flex-direction:column; }
    .case-setup-flex .kiori-package, .kiori-resolution-flex .kiori-package { width:130px; }
  }

  .wipo-column { max-width:1100px; margin-top:4rem; border:1px solid rgba(63,156,132,0.3); background:rgba(63,156,132,0.06); padding:2.4rem 2.8rem; }
  .wipo-column .wc-tag { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--teal-light); letter-spacing:0.18em; text-transform:uppercase; margin-bottom:1rem; }
  .wipo-column h4 { font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:700; color:#ffffff; margin-bottom:1rem; }
  .wipo-column p { font-size:0.9rem; color:rgba(250,248,243,0.75); line-height:1.95; }
  .wipo-column p + p { margin-top:1rem; }
  .wipo-stats { display:flex; gap:2.5rem; margin:1.4rem 0; flex-wrap:wrap; }
  .wipo-stats .ws-item .ws-num { font-family:'DM Serif Display',serif; font-size:1.8rem; color:var(--teal-light); line-height:1; }
  .wipo-stats .ws-item .ws-label { font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:rgba(250,248,243,0.55); margin-top:0.3rem; }

  .stage-list { max-width:1100px; margin-top:2.5rem; display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(63,156,132,0.15); }
  .stage-item { background:var(--navy-mid); padding:1.8rem 1.6rem; }
  .stage-item .st-num { font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:rgba(250,248,243,0.4); letter-spacing:0.1em; text-transform:uppercase; margin-bottom:0.8rem; }
  .stage-item.final .st-num { color:var(--teal-light); }
  .stage-item h5 { font-family:'Shippori Mincho',serif; font-size:0.96rem; font-weight:700; color:#ffffff; margin-bottom:0.6rem; line-height:1.5; }
  .stage-item p { font-size:0.82rem; color:rgba(250,248,243,0.55); line-height:1.8; }
  @media (max-width:700px) { .stage-list { grid-template-columns:1fr; } .wipo-stats { gap:1.5rem; } }

  .doc-card-grid { max-width:1100px; margin-top:3rem; display:grid; grid-template-columns:repeat(3,1fr); gap:1.4rem; }
  .doc-card { background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.14); border-radius:6px; padding:1.8rem 1.6rem; }
  .doc-card .dc-timing { font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--coral-bright); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:0.9rem; }
  .doc-card h4 { font-family:'Shippori Mincho',serif; font-size:1.15rem; font-weight:700; color:var(--ivory); margin-bottom:0.7rem; line-height:1.5; }
  .doc-card .dc-add { font-size:0.95rem; color:var(--ivory); font-weight:500; line-height:1.7; margin-bottom:0.8rem; }
  .doc-card .dc-options { font-size:0.9rem; color:var(--blue-gray); line-height:2; }
  .doc-card .dc-field { font-size:0.9rem; color:var(--blue-gray); margin-bottom:0.4rem; }
  .doc-card .dc-field .dc-blank { display:inline-block; min-width:120px; border-bottom:1px dotted rgba(188,199,214,0.5); }
  @media (max-width:860px) { .doc-card-grid { grid-template-columns:1fr; } }

  .case-band { max-width:1100px; margin-top:2rem; display:grid; grid-template-columns:1fr 1fr; gap:2px; background:rgba(10,22,40,0.1); }
  .cb-col { background:var(--white); padding:2.2rem 2rem; }
  .cb-col.after { background:rgba(26,107,90,0.05); }
  .cb-label { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:1rem; }
  .cb-col.before .cb-label { color:var(--gray); }
  .cb-col.after .cb-label { color:var(--teal); }
  .cb-col h5 { font-family:'Shippori Mincho',serif; font-size:1rem; font-weight:700; color:var(--navy); margin-bottom:1rem; }
  .cb-col p { font-size:0.88rem; color:var(--text); line-height:1.85; margin-bottom:1rem; }
  .cb-mini { display:grid; grid-template-columns:auto 1fr; gap:0.4rem 0.8rem; font-size:0.82rem; }
  .cb-mini dt { font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--gray); text-transform:uppercase; letter-spacing:0.04em; padding-top:0.15rem; }
  .cb-mini dd { color:var(--text); }
  .cb-col.after .cb-mini dd { color:var(--navy); font-weight:500; }

  .legend-row { display:flex; gap:1.6rem; flex-wrap:wrap; margin-top:1.2rem; font-family:'IBM Plex Mono',monospace; font-size:0.68rem; color:rgba(250,248,243,0.6); }
  .legend-row .dot { display:inline-block; width:8px; height:8px; border-radius:50%; margin-right:0.4rem; }

  .framework-section { background:var(--navy); padding:7rem 5vw; }
  .framework-definition { background:rgba(196,92,58,0.08); border:1px solid rgba(196,92,58,0.3); padding:2.6rem 3rem; margin-bottom:4rem; position:relative; }
  .framework-definition::before { content:'"'; font-family:'DM Serif Display',serif; font-size:7rem; color:rgba(196,92,58,0.14); position:absolute; top:-0.8rem; left:1.8rem; line-height:1; }
  .framework-definition p { font-family:'Shippori Mincho',serif; font-size:clamp(1rem,1.6vw,1.2rem); color:var(--white); line-height:2; }
  .framework-definition strong { color:var(--coral-bright); font-weight:700; }
  .flow-diagram { width:100%; max-width:780px; margin:0 auto 0.5rem; display:block; }

  .layer-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:rgba(63,156,132,0.18); max-width:1100px; margin-top:3rem; }
  .layer-item { background:var(--navy-mid); padding:2rem 1.6rem; border-top:2px solid var(--gray-soft); }
  .layer-item.market { border-top-color:var(--teal-light); }
  .layer-item.relation { border-top-color:var(--teal-light); }
  .layer-item .li-tag { font-family:'IBM Plex Mono',monospace; font-size:0.58rem; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:0.9rem; color:rgba(250,248,243,0.7); }
  .layer-item.market .li-tag { color:var(--teal-light); }
  .layer-item.relation .li-tag { color:var(--teal-light); }
  .layer-item h4 { font-family:'Shippori Mincho',serif; font-size:0.96rem; font-weight:700; color:var(--white); margin-bottom:0.6rem; }
  .layer-item p { font-size:0.84rem; color:rgba(250,248,243,0.6); line-height:1.85; }

  .dissip-list { max-width:1100px; margin-top:3rem; display:grid; grid-template-columns:repeat(3,1fr); gap:2.2rem; }
  .dissip-item { border-top:2px solid var(--gray-soft); padding-top:1.2rem; }
  .dissip-item .d-tag { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--coral-text); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.7rem; }
  .dissip-item h3 { font-family:'Shippori Mincho',serif; font-size:1.02rem; font-weight:700; color:var(--navy); margin-bottom:0.8rem; }
  .dissip-item p { font-size:0.9rem; color:var(--gray); line-height:1.9; }
  .chapter-dark .dissip-item h3, .chapter-mid .dissip-item h3, .framework-section .dissip-item h3 { color:var(--ivory); }
  .chapter-dark .dissip-item p, .chapter-mid .dissip-item p, .framework-section .dissip-item p { color:var(--blue-gray); }

  .sidebar-box { border:1px solid rgba(10,22,40,0.15); background:var(--off-white); padding:2.2rem; }
  .sidebar-box .sb-label { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--navy); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:1rem; opacity:0.65; }
  .sidebar-box h4 { font-family:'Shippori Mincho',serif; font-size:1rem; font-weight:700; color:var(--navy); margin-bottom:1rem; }
  .sidebar-box p, .sidebar-box li { font-size:0.88rem; color:var(--gray); line-height:1.9; }
  .sidebar-box ul { padding-left:1.2rem; margin-top:0.6rem; }

  .reverse-steps { max-width:1100px; margin-top:3rem; display:flex; align-items:stretch; gap:0; flex-wrap:wrap; }
  .rstep { flex:1; min-width:200px; background:var(--white); border:1px solid rgba(10,22,40,0.14); padding:1.8rem 1.5rem; }
  .rstep .rs-num { font-family:'DM Serif Display',serif; font-size:1.6rem; color:rgba(196,92,58,0.35); margin-bottom:0.7rem; }
  .rstep h4 { font-family:'Shippori Mincho',serif; font-size:0.95rem; font-weight:700; color:var(--navy); margin-bottom:0.5rem; line-height:1.5; }
  .rstep p { font-size:0.85rem; color:var(--gray); line-height:1.8; }
  .rarrow { display:flex; align-items:center; justify-content:center; width:40px; font-family:'IBM Plex Mono',monospace; font-size:1.1rem; color:var(--coral-text); flex-shrink:0; }
  .exec-order { max-width:1100px; margin-top:1.5rem; display:flex; align-items:center; gap:0.6rem; font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:var(--gray); flex-wrap:wrap; }
  .exec-order .arw { color:var(--coral-text); }

  .question-cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.4rem; max-width:1100px; margin-top:3rem; }
  .question-card { background:var(--white); padding:2.2rem 2rem; border-bottom:3px solid var(--navy); }
  .qc-tag { font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:var(--coral-text); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:0.7rem; }
  .question-card h3 { font-family:'Shippori Mincho',serif; font-size:1.02rem; font-weight:700; color:var(--navy); margin-bottom:0.8rem; line-height:1.6; }
  .question-card p { font-size:0.88rem; color:var(--gray); line-height:1.85; }

  .next-report { max-width:1100px; margin-top:4rem; border:1px solid rgba(201,168,76,0.35); background:rgba(201,168,76,0.07); padding:2.2rem 2.6rem; }
  .next-report .nr-tag { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:#c9a84c; letter-spacing:0.18em; text-transform:uppercase; margin-bottom:0.6rem; }
  .next-report h4 { font-family:'Shippori Mincho',serif; font-size:1.08rem; font-weight:700; color:var(--white); margin-bottom:0.6rem; }
  .next-report p { font-size:0.88rem; color:rgba(250,248,243,0.65); max-width:600px; line-height:1.9; }

  .cta-section { background:var(--navy); padding:7rem 5vw; text-align:center; position:relative; overflow:hidden; }
  .cta-bg { position:absolute; inset:0; background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(196,92,58,0.09) 0%,transparent 70%); }
  .cta-section h2 { font-family:'Shippori Mincho',serif; font-size:clamp(1.6rem,3.2vw,2.6rem); color:var(--white); font-weight:700; margin-bottom:1.4rem; line-height:1.6; position:relative; }
  .cta-section > p { color:rgba(250,248,243,0.7); max-width:520px; margin:0 auto 3.5rem; line-height:2; position:relative; }
  .cta-buttons { display:flex; gap:1.2rem; justify-content:center; flex-wrap:wrap; position:relative; margin-top:2.5rem; }
  .btn-primary { background:var(--coral-btn); color:var(--white); padding:0.95rem 2.2rem; font-family:'IBM Plex Mono',monospace; font-size:0.78rem; letter-spacing:0.08em; text-transform:uppercase; text-decoration:none; font-weight:500; transition:background 0.2s; display:inline-flex; align-items:center; gap:0.7rem; border:none; cursor:pointer; }
  .btn-primary:hover { background:var(--coral); }
  .btn-secondary { border:1px solid rgba(196,92,58,0.5); color:var(--coral-light); padding:0.95rem 2.2rem; font-family:'IBM Plex Mono',monospace; font-size:0.78rem; letter-spacing:0.08em; text-transform:uppercase; text-decoration:none; transition:border-color 0.2s, background 0.2s; display:inline-flex; align-items:center; gap:0.7rem; }
  .btn-secondary:hover { border-color:var(--coral); background:rgba(196,92,58,0.1); }
  .download-form { max-width:520px; margin:0 auto; position:relative; background:rgba(255,255,255,0.04); border:1px solid rgba(196,92,58,0.2); padding:2.6rem; text-align:left; }
  .download-form h3 { font-family:'Shippori Mincho',serif; font-size:1.08rem; color:var(--white); margin-bottom:0.5rem; font-weight:700; }
  .download-form .form-sub { font-family:'IBM Plex Mono',monospace; font-size:0.64rem; color:var(--coral-light); letter-spacing:0.08em; margin-bottom:1.8rem; }
  .form-group { margin-bottom:1.1rem; }
  .form-group label { display:block; font-size:0.76rem; color:rgba(250,248,243,0.6); margin-bottom:0.4rem; }
  .form-group input { width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(196,92,58,0.25); color:var(--white); padding:0.8rem 1rem; font-family:'Noto Sans JP',sans-serif; font-size:0.92rem; outline:none; transition:border-color 0.2s; }
  .form-group input::placeholder { color:rgba(250,248,243,0.3); }
  .form-group input:focus { border-color:var(--coral); }
  .form-submit { width:100%; background:var(--coral-btn); color:var(--white); border:none; padding:0.95rem; font-family:'IBM Plex Mono',monospace; font-size:0.78rem; letter-spacing:0.08em; text-transform:uppercase; font-weight:500; cursor:pointer; margin-top:0.4rem; transition:background 0.2s; }
  .form-submit:hover { background:var(--coral); }
  .form-note { font-size:0.74rem; color:rgba(250,248,243,0.65); margin-top:0.9rem; line-height:1.7; }
  .form-checkbox { display:flex; align-items:flex-start; gap:0.6rem; margin:1.2rem 0 0.5rem; }
  .form-checkbox input[type="checkbox"] { margin-top:0.2rem; width:16px; height:16px; flex-shrink:0; accent-color:var(--coral-btn); }
  .form-checkbox label { font-size:0.84rem; color:rgba(250,248,243,0.75); line-height:1.6; }
  .form-checkbox a { color:var(--coral-light); text-decoration:underline; }

  .references { background:var(--off-white); padding:5rem 5vw; }
  .refs-list { max-width:900px; list-style:none; counter-reset:refnum; }
  .refs-list li { counter-increment:refnum; font-size:0.85rem; color:var(--gray); line-height:1.9; padding:0.7rem 0 0.7rem 2rem; position:relative; border-bottom:1px solid rgba(10,22,40,0.08); }
  .refs-list li::before { content:"[" counter(refnum) "]"; position:absolute; left:0; color:var(--coral-text); font-family:'IBM Plex Mono',monospace; font-size:0.78rem; }
  .refs-list a { color:var(--navy); }
  .refs-list .unconfirmed { font-size:0.76rem; color:var(--gray); }

  footer { background:var(--navy-mid); padding:2.5rem 5vw; display:flex; align-items:center; justify-content:space-between; border-top:1px solid rgba(196,92,58,0.15); flex-wrap:wrap; gap:1rem; }
  .footer-logo { font-family:'IBM Plex Mono',monospace; font-size:0.7rem; color:rgba(250,248,243,0.45); letter-spacing:0.1em; }
  .footer-copy { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:rgba(250,248,243,0.55); }

  @media (max-width:860px) {
    .chapter-header { grid-template-columns:1fr; gap:0.8rem; }
    .chapter-num { font-size:2.6rem; }
    .chapter-body, .chapter-body.wide { grid-template-columns:1fr; gap:2rem; }
    .summary-grid { grid-template-columns:1fr; }
    .layer-grid { grid-template-columns:1fr 1fr; }
    .dissip-list { grid-template-columns:1fr; }
    .case-band { grid-template-columns:1fr; }
    .reverse-steps { flex-direction:column; }
    .rarrow { width:100%; height:26px; transform:rotate(90deg); }
    .chapter, .summary, .framework-section, .cta-section, .references { padding:4.5rem 6vw; }
  }

  @media (max-width:560px) {
    .layer-grid { grid-template-columns:1fr; }
    .dissip-list { grid-template-columns:1fr; }
  }
`;

const htmlBefore = `
<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-lines"></div>
  <div class="hero-meta">NSI REPORT #002</div>
  <h1 class="hero-title">インフルエンサー施策が終わったあと、<br><em>ブランドに何が残るか</em></h1>
  <div class="hero-subtitle">再生数・保存数で終わらせず、次の起用・企画・評価へつなぐための実務設計</div>
  <div class="hero-tagline">何を測り、何を残し、次に何を変えるか。<br>実証研究とケーススタディから明らかにする。</div>
  <div class="hero-scroll"><span>SCROLL</span><div class="scroll-line"></div></div>
</section>

<!-- EXECUTIVE SUMMARY -->
<section class="summary" id="summary">
  <div class="section-label">EXECUTIVE SUMMARY</div>
  <div class="chapter-body single reveal" style="margin-bottom:2.5rem;">
    <div class="body-text">
      <p style="font-family:'Shippori Mincho',serif; font-size:1.15rem; font-weight:700; color:var(--navy);">何を残すかが決まっていなければ、何が残ったかも測れない。</p>
      <p style="margin-top:1rem;">再生数や保存数の報告だけで施策を終えず、ブランド想起、再利用できる表現、クリエイターとの関係、次回に生かせる学びまで、企画段階で「何を残すか」を決めておく。</p>
    </div>
  </div>
  <div class="summary-grid reveal">
    <div class="summary-item">
      <div class="summary-num">01</div>
      <h3>成果指標は、ひとつではない</h3>
      <p>認知、態度、エンゲージメント、購買意向、購買は、観測される場所も施策からの距離も異なる。ひとつの「成果」という箱に入れてしまうと、成功の基準は揺れてしまう。</p>
    </div>
    <div class="summary-item">
      <div class="summary-num">02</div>
      <h3>その場の成果と、次に残る価値は別である</h3>
      <p>その施策の成果が大きくても、次に使えるものが残らない施策はある。反対に、成果は小さくても、次の判断を変える学びが残る施策もある。この2軸を分けることで、施策の価値は違って見えてくる。</p>
    </div>
    <div class="summary-item">
      <div class="summary-num">03</div>
      <h3>成果が次につながらない、三つの理由</h3>
      <p>期待した反応や変化が生まれない。生まれた成果や学びが次へ引き継がれない。繰り返すうちに、信頼や新鮮さがすり減る。施策は、この三つのどこかで次への接続を失う。</p>
    </div>
    <div class="summary-item">
      <div class="summary-num">04</div>
      <h3>残したい価値から、施策を逆算する</h3>
      <p>誰を起用するかから始めるのではなく、施策後に何を残すかを先に決める。そこから、必要な変化、投稿の内容、起用する相手を逆算する。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 1 -->
<section class="chapter chapter-mid" id="ch1">
  <div class="chapter-header reveal">
    <div class="chapter-num">01</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 01</div>
      <h2>「成果が出た」と「次に生かせるものが残った」は違う</h2>
    </div>
  </div>

  <div class="chapter-body single reveal">
    <div class="body-text">
      <p>再生数は目標を超えた。それでも、社内の評価は割れる。半年前と同じクリエイターを起用したのに、今回は反応が鈍い。担当者が異動すると、成功の理由まで引き継がれず、次の担当者はまたゼロから学び直す。</p>
      <p>問題は、クリエイターの選定だけではない。狙った成果と、評価に使う指標が噛み合っていないのである。<strong>失敗と結論づける前に、狙った成果と評価指標が一致していたかを確かめたい。</strong></p>
    </div>
  </div>

  <div class="section-label on-dark reveal" style="margin-top:4rem;">THE CENTRAL DISTINCTION</div>
  <div class="chapter-body single reveal" style="margin-bottom:2.5rem;">
    <div class="body-text"><p>「成果が出なかった」と「次に生かせるものが残らなかった」は、同じではない。この2軸を分けて見ることが、本レポート全体の評価フレームになる。</p></div>
  </div>

  <div class="reveal" style="max-width:820px; margin:0 auto;">
    <svg width="100%" viewBox="0 0 680 500" xmlns="http://www.w3.org/2000/svg">
      <line x1="140" y1="40" x2="140" y2="440" stroke="rgba(250,248,243,0.35)" stroke-width="1.2"/>
      <line x1="140" y1="440" x2="640" y2="440" stroke="rgba(250,248,243,0.35)" stroke-width="1.2"/>
      <text x="390" y="472" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="13" fill="rgba(250,248,243,0.75)" letter-spacing="0.04em">その施策の成果 →</text>
      <text x="94" y="240" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="13" fill="rgba(250,248,243,0.75)" letter-spacing="0.04em" transform="rotate(-90 94 240)">次に残る価値 →</text>

      <rect x="150" y="250" width="230" height="180" fill="rgba(98,93,83,0.10)" stroke="rgba(98,93,83,0.4)" stroke-width="1"/>
      <text x="265" y="322" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="16" font-weight="700" fill="#ffffff">再設計領域</text>
      <text x="265" y="345" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11.5" fill="rgba(250,248,243,0.6)">成果も学びも、次に持ち越せない</text>

      <rect x="400" y="250" width="230" height="180" fill="rgba(196,92,58,0.14)" stroke="#c45c3a" stroke-width="1.2"/>
      <text x="515" y="312" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="17" font-weight="700" fill="#ffffff">短期成果型</text>
      <text x="515" y="336" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11.5" fill="rgba(250,248,243,0.75)">当期は動いたが、次には残らない</text>
      <text x="515" y="358" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="10" fill="rgba(232,138,103,0.95)">KIORI・シナリオA</text>

      <rect x="150" y="50" width="230" height="180" fill="rgba(26,107,90,0.14)" stroke="#1a6b5a" stroke-width="1.2"/>
      <text x="265" y="127" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="17" font-weight="700" fill="#ffffff">学習蓄積型</text>
      <text x="265" y="151" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11.5" fill="rgba(250,248,243,0.75)">成果は小さいが、学びが次に活きる</text>

      <rect x="400" y="50" width="230" height="180" fill="rgba(196,92,58,0.10)" stroke="#c9a84c" stroke-width="1.6"/>
      <rect x="400" y="50" width="230" height="180" fill="rgba(26,107,90,0.10)" stroke="none"/>
      <text x="515" y="120" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="17" font-weight="700" fill="#ffffff">成果資産化型</text>
      <text x="515" y="144" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11.5" fill="rgba(250,248,243,0.85)">成果と学びが、ともに次へつながる</text>
      <text x="515" y="166" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="10" fill="rgba(201,168,76,0.95)">KIORI・シナリオB</text>
    </svg>
  </div>
  <div class="legend-row reveal" style="justify-content:center;">
    <span><span class="dot" style="background:#c45c3a;"></span>その施策の成果</span>
    <span><span class="dot" style="background:#1a6b5a;"></span>次に残る価値</span>
  </div>
  <p class="small-note reveal" style="text-align:center; max-width:600px; margin:1rem auto 0;">2軸は連続的な度合いを示す模式図であり、施策が必ず4類型のいずれかに分類されるという意味ではない。</p>

  <div class="case-setup-flex reveal" style="margin-top:4rem;">
    <div class="kiori-package"><img src="/kiori-product-black.png" alt="KIORI（季織）だし醤油 パッケージ"></div>
    <div class="case-setup">
      <div class="kiori-tag"><img src="/kiori-logo-white.png" alt="KIORI">KIORI CASE｜この施策で、ブランドに何が残ったか</div>
      <h4>本レポートの内容を理解しやすくするためのケーススタディ</h4>
      <p class="small-note" style="margin-bottom:1.4rem;">※KIORI（季織）は、意思決定の違いを示すために設定した架空ブランドです。数値・金額は説明用の試算です。</p>
      <div class="case-fields">
        <div class="case-field"><div class="cf-label">商品</div><div class="cf-val">KIORI（季織）新発売の高級だし醤油</div></div>
        <div class="case-field"><div class="cf-label">ターゲット</div><div class="cf-val">いつもの料理を、手間を増やさず少しおいしくしたい30〜40代</div></div>
        <div class="case-field"><div class="cf-label">課題</div><div class="cf-val">商品の存在だけでなく、いつもの料理にどう使えるかが伝わっていない</div></div>
        <div class="case-field"><div class="cf-label">起用</div><div class="cf-val">料理系クリエイター1名（Y氏）</div></div>
        <div class="case-field"><div class="cf-label">主目的</div><div class="cf-val">ターゲット層における新商品の認知向上</div></div>
        <div class="case-field"><div class="cf-label">当初の報告指標</div><div class="cf-val">リーチ・再生数・保存数</div></div>
        <div class="case-field"><div class="cf-label">設計変更後の確認指標</div><div class="cf-val">助成想起・商品理解</div></div>
        <div class="case-field"><div class="cf-label">予算</div><div class="cf-val">150万円・投稿3本を想定</div></div>
      </div>
      <p class="small-note" style="margin-top:1.2rem;">以降の章で、この企画が「設計を変えなかった場合（シナリオA）」と「設計を変えた場合（シナリオB）」に分かれていく過程を追う。分岐と結末はChapter 6でまとめて示す。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 2: EVIDENCE MAP -->
<section class="chapter chapter-light" id="ch2">
  <div class="chapter-header reveal">
    <div class="chapter-num">02</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 02 — EVIDENCE MAP</div>
      <h2>「フォロワー数で選ぶのはやめよう」は正しいか？</h2>
    </div>
  </div>

  <div class="chapter-body reveal">
    <div class="body-text">
      <p>実務では、認知・態度・エンゲージメント・購買意向・購買を、ひとまとめに「成果」と呼ぶことがある。しかしこれらは観測される場所も、施策からの距離も異なる指標である。エンゲージメントは投稿への反応に近く、態度や認知は生活者の内面の変化であり、売上は施策からの距離が遠く、他の要因の影響も受ける最終的な事業成果である。</p>
      <h4>フォロワー規模は、目的によって意味が変わる</h4>
      <p>「フォロワー数で選ぶのをやめよう」という言い方は分かりやすいが、単純化しすぎている。メタ分析では、小・中規模のインフルエンサーはエンゲージメントに、大規模のインフルエンサーは購買意向に、それぞれ寄与しやすい傾向が報告されている<a class="cite" href="#ref1">[1]</a><a class="cite" href="#ref2">[2]</a>。<strong>フォロワー規模は、目的と結びつけて初めて、選定基準として意味を持つ。</strong></p>
    </div>
    <div>
      <div class="finding">
        <div class="f-label">研究が示すこと</div>
        <p>クリエイターの特性は態度や購買意向と関わる一方、売上そのものへの直接効果は研究間で一様には確認されていない<a class="cite" href="#ref2">[2]</a>。「効いた・効かなかった」ではなく、何が、どの成果に、どこまで影響したのかを見る必要がある。</p>
      </div>
      <div class="finding limit">
        <div class="f-label">研究を読む際の注意</div>
        <p>相関か因果か。自己申告の購買意向か実購買か。単一投稿か継続起用か。プラットフォームや商材カテゴリーの違い。これらを揃えずに数字だけを比較すると、読み違える。</p>
      </div>
    </div>
  </div>

  <div class="table-wrap reveal">
    <table class="term-table">
      <tr><th>要因</th><th>エンゲージメント</th><th>ブランド反応（想起・態度）</th><th>購買意向</th><th>購買行動・売上</th><th>主な留保</th></tr>
      <tr><td class="label">フォロワー規模</td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td>プラットフォーム差</td></tr>
      <tr><td class="label">ブランドとの適合</td><td><span class="lvl lvl-high">概ね好影響</span></td><td><span class="lvl lvl-high">概ね好影響</span></td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td>商材差</td></tr>
      <tr><td class="label">専門性・信頼性</td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-high">概ね好影響</span></td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td>自己申告指標が多い</td></tr>
      <tr><td class="label">同質性・疑似社会的関係</td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-mixed">結果が分かれる</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td>対象者差</td></tr>
      <tr><td class="label">情報価値</td><td><span class="lvl lvl-high">概ね好影響</span></td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-mid">条件で変動</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td>コンテンツ形式差</td></tr>
      <tr><td class="label">広告表示（PR表記）</td><td><span class="lvl lvl-mixed">結果が分かれる</span></td><td><span class="lvl lvl-mixed">結果が分かれる</span></td><td><span class="lvl lvl-mixed">結果が分かれる</span></td><td><span class="lvl lvl-low">研究が少ない</span></td><td>知見が混在<a class="cite" href="#ref4">[4]</a></td></tr>
    </table>
  </div>
  <p class="small-note reveal" style="max-width:1100px;">国内外の実証研究を、成果指標ごとに整理した見取り図。効果の大きさや方向は、商材、プラットフォーム、表現形式、調査設計によって変わる。「想起」と「態度」は同一の指標ではなく、便宜上ひとつの列にまとめている。</p>

  <div class="kiori-tag reveal" style="margin-top:3rem;"><img src="/kiori-logo-white.png" alt="KIORI">KIORI CASE｜この施策で、ブランドに何が残ったか</div>
  <div class="case-band reveal">
    <div class="cb-col before">
      <div class="cb-label">KIORI・シナリオA</div>
      <h5>「届いた」を「認知された」と読んだ会議</h5>
      <p><strong>届いたことは測れても、覚えられたことまで測れているとは限らない。</strong>新商品の認知向上を掲げたKIORI。実施後の報告では、ターゲットリーチ、動画再生数、保存数が目標を上回り、「認知は獲得できた」と評価された。しかし、確認できたのはコンテンツが届き、反応されたことまでだった。商品名や特徴が記憶されたかを確かめるブランドリフト調査や事前・事後調査は、施策に組み込まれていなかった。</p>
    </div>
    <div class="cb-col after">
      <div class="cb-label">分岐点</div>
      <h5>「届いた」と「覚えられた」を分けて測る</h5>
      <p>KIORIが施策前に決めるべきだったのは、認知を「ターゲットに届いたこと」ではなく、「商品名や特徴が記憶されたこと」として、どう確かめるかだった。主指標には、接触者と非接触者を比べるブランドリフト調査、またはターゲット層への事前・事後調査による助成認知・商品理解の変化を置く。リーチ、再生数、保存数は、その変化が起きた理由を読み解く補助指標として扱う。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 3 -->
<section class="chapter chapter-light" id="ch3">
  <div class="chapter-header reveal">
    <div class="chapter-num">03</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 03</div>
      <h2>「この人だから伝わる」を、どうつくり、どう守るか</h2>
    </div>
  </div>

  <div class="chapter-body reveal">
    <div class="body-text">
      <p>クリエイターへの信頼は、条件がそろえば、ブランドの信頼形成にもつながり得る<a class="cite" href="#ref6">[6]</a>。信頼がブランドへつながる条件と、信頼が損なわれる条件は、分けて考える必要がある。</p>
      <h4>「この人である理由」をつくる、4つの適合</h4>
      <p>商材との適合、訴求内容との適合、フォロワー層との適合、プラットフォームとの適合。「有名だから」ではなく「この人が語ると自然だから」を、企画段階で言語化できるかどうかが分かれ目になる。</p>
      <h4>「その人らしさ」は、起用しただけでは守れない</h4>
      <p>Journal of Marketing誌に掲載された研究は、真正性（Authenticity）がクリエイター個人の性質だけで決まるのではなく、ブランド・クリエイター・生活者・運用側の整合によって成立し得ることを示している<a class="cite" href="#ref3">[3]</a>。「その人らしさ」は、起用した瞬間に手に入るものではない。ブランドとクリエイターが、進行のなかでともに守るものである。</p>
    </div>
    <div>
      <div class="finding">
        <div class="f-label">個別研究が示すこと</div>
        <p>美容・ファッション領域のYouTube上のインフルエンサーを対象とした個別研究では、信頼性・専門性・社会的魅力・身体的魅力・同質性といった信用性要因や、視聴者との疑似社会的関係（パラソーシャル）が、商品への態度や紹介行動と関わることが報告されている<a class="cite" href="#ref5">[5]</a>。</p>
      </div>
      <div class="finding limit">
        <div class="f-label">研究で確認されている範囲と限界</div>
        <p>これらの知見は、特定のプラットフォーム・カテゴリー・対象者における関連を示すものであり、あらゆる案件で同じ強さで再現されるとは限らない。適合の4点を確認する目安として使うのが実務的である。</p>
      </div>
    </div>
  </div>

  <p class="small-note reveal" style="max-width:1100px; margin-top:1.5rem;">クリエイターにとって、フォロワーからの信頼は活動の土台である<a class="cite" href="#ref7">[7]</a>。起用の文脈、表現の余白、報酬や負荷への配慮を欠けば、短期の露出と引き換えに、次も一緒につくれる関係を損なうことになる。</p>

  <div class="section-label reveal" style="margin-top:4rem;">DISCLOSURE</div>
  <div class="chapter-body wide reveal">
    <div class="body-text">
      <p>広告であることが分かると、効果は落ちるのか。研究結果は、一方向ではない。広告表示はスポンサー付き投稿だという認識を高め、信用度を下げる場合がある一方、態度や行動意向への影響は研究間で分かれている<a class="cite" href="#ref4">[4]</a>。「隠せば効く」でも「明示すれば必ず信頼される」でもない。</p>
      <p>広告だと分かっても受け入れられるかを左右するのは、ブランドとの適合と、内容そのものの情報価値である。<strong>問題は、広告であることではない。広告だと分かったあとにも、見たい・知りたいと思える内容かである。</strong>不透明な広告表示は、その施策の効果だけでなく、ブランドとクリエイター双方への信頼を損ない得る。</p>
    </div>
    <div class="sidebar-box">
      <div class="sb-label">実務で最低限おさえる点</div>
      <h4>ステルスマーケティング規制</h4>
      <p>日本では2023年10月1日より、ステルスマーケティングが景品表示法上の不当表示として扱われている<a class="cite" href="#ref8">[8]</a>。「PRと書けば自動的に適法」ではなく、表示全体から一般消費者にとって広告だと明瞭であるかが原則になる。</p>
      <ul>
        <li>広告であることが一目で分かる表示位置か</li>
        <li>「PR」「広告」などの文言が明確か</li>
        <li>クリエイター側との合意が事前に取れているか</li>
      </ul>
    </div>
  </div>

  <div class="kiori-tag reveal"><img src="/kiori-logo-white.png" alt="KIORI">KIORI CASE｜この施策で、ブランドに何が残ったか</div>
  <div class="case-band reveal">
    <div class="cb-col before">
      <div class="cb-label">KIORI・シナリオA</div>
      <h5>PR表記が、投稿の一番下にあった</h5>
      <p>表記そのものはあった。しかし投稿の一番下、キャプションを開かないと見えない位置だった。クリエイターのコメント欄には「気づかなかった」という反応が残った。</p>
    </div>
    <div class="cb-col after">
      <div class="cb-label">分岐点</div>
      <h5>表記を、企画段階から設計する</h5>
      <p>広告表示は、投稿後に付け足す注意書きではない。企画とコンテンツの一部として、最初から設計する。この論点も、Chapter 7のブリーフ設計に引き継がれる。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 4: CENTRAL FRAMEWORK -->
<section class="framework-section" id="ch4">
  <div class="chapter-header reveal">
    <div class="chapter-num">04</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 04 — THE CENTRAL THESIS</div>
      <h2>投稿の成果を、ブランド資産に変える</h2>
      <div class="chapter-subtitle">そして、それを育て続ける基盤まで、企業に残す</div>
    </div>
  </div>

  <div class="framework-definition reveal">
    <p><strong>生活者の側に残すものが、ブランド資産。</strong>企業の側に残すものが、そのブランド資産を育て続ける能力である。</p>
  </div>

  <div class="chapter-body single reveal" style="margin-bottom:1rem;">
    <div class="body-text"><p style="color:rgba(250,248,243,0.85);">同じ「意味」でも、残る場所によって呼び方を変える。生活者が「KIORIは手間なく料理をおいしくする」と個人として記憶することと、その意味がレシピ投稿やコメント、口コミとして生活者どうしのあいだで共有されることは、別の資産である。NSIは後者を、#001から続けて<strong>Fandomain Capital</strong>——ブランド・生活者・コミュニティのあいだに蓄積する関係、語り、参加の力——と呼ぶ。</p></div>
  </div>
  <div class="table-wrap reveal">
    <table class="term-table">
      <tr><th>概念</th><th>何が残るか</th><th>主な所在</th></tr>
      <tr><td class="label">ブランド資産</td><td>想起、意味、理解、信頼、選好</td><td>一人ひとりの生活者の記憶・評価</td></tr>
      <tr><td class="label">Fandomain Capital</td><td>関係、共有されるナラティブ、参加、推奨、継続的な関与</td><td>ブランド・生活者・コミュニティのあいだ</td></tr>
      <tr><td class="label">Owned接点・顧客データ</td><td>許諾を得て再接触できる顧客IDと行動履歴</td><td>企業が管理する接点</td></tr>
      <tr><td class="label">コンテンツ・データ資産</td><td>表現、利用権、反応データ、生活者の言葉</td><td>企業が再利用できる状態</td></tr>
      <tr><td class="label">組織資本</td><td>判断基準、標準プロセス、管理基盤</td><td>企業・組織の内部</td></tr>
    </table>
  </div>
  <p class="small-note reveal" style="max-width:1100px;">LINE登録者が1万人いることが、そのままFandomain Capitalの大きさを意味するわけではない。登録者が継続的に反応し、体験を語り、他者に推奨し、その語りがブランドの意味を厚くしているかまで見て、初めてFandomain Capitalに近づく。Owned接点は、関係を継続する場である。CRMは、そこで得た許諾済みの顧客IDと行動履歴をつなぎ、次の接触に生かす企業側の基盤である。Fandomain Capitalは、Owned接点を含む複数の体験から育つ、関係と語りの資本を指す。</p>

  <div class="reveal" style="max-width:1100px; margin:0 auto 1rem; margin-top:3rem;">
    <svg class="flow-diagram" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#c45c3a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker>
        <marker id="arr-flow-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#3f9c84" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></marker>
      </defs>
      <g>
        <rect x="14" y="70" width="150" height="86" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
        <text x="89" y="94" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="15" font-weight="700" fill="#ffffff">投入</text>
        <text x="89" y="115" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(250,248,243,0.7)">起用・予算・企画</text>
        <text x="89" y="136" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="10" fill="rgba(196,92,58,0.85)">例：Y氏に3投稿を発注</text>
      </g>
      <line x1="164" y1="113" x2="192" y2="113" stroke="#c45c3a" stroke-width="1.4" marker-end="url(#arr-flow)"/>
      <g>
        <rect x="192" y="70" width="150" height="86" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
        <text x="267" y="94" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="15" font-weight="700" fill="#ffffff">反応</text>
        <text x="267" y="115" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(250,248,243,0.7)">投稿・再生・反応数</text>
        <text x="267" y="136" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="10" fill="rgba(196,92,58,0.85)">例：保存1.2万件</text>
      </g>
      <line x1="342" y1="113" x2="370" y2="113" stroke="#c45c3a" stroke-width="1.4" marker-end="url(#arr-flow)"/>
      <g>
        <rect x="370" y="70" width="150" height="86" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
        <text x="445" y="94" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="15" font-weight="700" fill="#ffffff">変化</text>
        <text x="445" y="115" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(250,248,243,0.7)">想起・理解・態度</text>
        <text x="445" y="136" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="10" fill="rgba(196,92,58,0.85)">例：想起率+6pt（当期）</text>
      </g>
      <line x1="520" y1="113" x2="548" y2="113" stroke="#c45c3a" stroke-width="1.4" marker-end="url(#arr-flow)"/>
      <g>
        <rect x="548" y="62" width="132" height="102" rx="6" fill="rgba(26,107,90,0.22)" stroke="#3f9c84" stroke-width="1.6"/>
        <text x="614" y="88" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="15" font-weight="700" fill="#ffffff">ブランド資産</text>
        <text x="614" y="109" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="rgba(250,248,243,0.85)">想起・理解・信頼・選好</text>
        <text x="614" y="130" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="rgba(63,156,132,0.95)">生活者の記憶に残る状態</text>
        <text x="614" y="150" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="rgba(63,156,132,0.7)">次回へ持ち越せる資産</text>
      </g>
      <path d="M614 164 L614 220 L89 220 L89 158" fill="none" stroke="#3f9c84" stroke-width="1.2" stroke-dasharray="4 4" marker-end="url(#arr-flow-teal)"/>
      <text x="350" y="244" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="rgba(250,248,243,0.65)">ブランド資産と、育てる基盤が、次の企画へ帰ってくる</text>
    </svg>
  </div>
  <div class="legend-row reveal" style="justify-content:center;">
    <span><span class="dot" style="background:#c45c3a;"></span>当期に生まれる成果</span>
    <span><span class="dot" style="background:#3f9c84;"></span>次回へ持ち越せる資産・基盤</span>
  </div>

  <div class="chapter-body single reveal" style="margin-top:3rem;">
    <div class="body-text"><p style="color:rgba(250,248,243,0.85);">KIORIが「だし醤油の使い方に対する理解」をブランド資産として残したいなら、商品理解の変化をブランドリフト調査等で確認する。同時に、効果の高かったレシピ表現を再利用できる契約と、その表現が効いた理由を次回の企画に使える意思決定ルールとして残す。この具体的な設計は、Chapter 6でKIORIの分岐として詳しく見る。</p></div>
  </div>

  <div class="section-label on-dark reveal" style="margin-top:4rem;">ブランド資産を、次回も育てる基盤</div>
  <div class="layer-grid reveal">
    <div class="layer-item relation"><div class="li-tag">↑ Fandomain Capital</div><h4>共有される語り・参加</h4><p>ファンダムの文化的領域に蓄積する、関係・語り・推奨・共鳴。</p></div>
    <div class="layer-item relation"><div class="li-tag">↑ Owned接点・顧客データ</div><h4>再接触できる接点</h4><p>本人の許諾を得て、ブランドから再び接触できるIDと行動履歴。</p></div>
    <div class="layer-item relation"><div class="li-tag">↑ 共創基盤</div><h4>クリエイターとの関係</h4><p>共創の履歴と相互理解。次回も協働できるという関係そのもの。</p></div>
    <div class="layer-item relation"><div class="li-tag">↑ コンテンツ・データ資産</div><h4>表現・利用権・反応データ</h4><p>生活者に届いた表現、二次利用できる素材と権利、反応データや生活者の言葉。</p></div>
    <div class="layer-item relation"><div class="li-tag">↑ 組織資本</div><h4>選定基準・プロセス・仕組み</h4><p>ブリーフ、契約条件、評価方法、意思決定ルールなどの、反復利用できる基盤。</p></div>
  </div>
  <p class="small-note reveal" style="max-width:1100px; margin-top:1.2rem;"><em>共創基盤について</em>——信頼を、使い切らない。起用のたびに関係を消費するのではなく、次も一緒につくれる状態を残すことが、共創基盤の本体である。</p>

  <p class="small-note reveal" style="max-width:1100px; margin-top:1.2rem;">これらの基盤だけを見れば、最終的に厚くしたいブランド資産そのものを見落とすことになる。なお本稿の「資産」は、会計上の資産計上ではなく、将来の成果を生む経営上の蓄積を指す。</p>

  <div class="section-label on-dark reveal" style="margin-top:4rem;">個人の経験と、組織資本は違う</div>
  <div class="chapter-body single reveal" style="margin-bottom:1.5rem;">
    <div class="body-text"><p style="color:rgba(250,248,243,0.85);">担当者が学んだだけ、報告書を保存しただけでは、組織資本にはならない。<strong>学びは、資料になっただけでは組織資本にならない。次の選定・契約・制作・評価のルールを変えたとき、初めて組織に残る。</strong>KIORIの場合、次の三段階で違いが分かる。</p></div>
  </div>
  <div class="stage-list reveal">
    <div class="stage-item"><div class="st-num">01 — 個人の経験</div><h5>担当者が「Y氏は効果的だった」と覚えている</h5><p>異動すれば、この経験ごと消える。</p></div>
    <div class="stage-item"><div class="st-num">02 — 共有された組織知</div><h5>効果的だった理由が、報告書やナレッジベースで共有された</h5><p>共有知にはなるが、次回運用するかは担当者次第。</p></div>
    <div class="stage-item final"><div class="st-num">03 — 組織資本</div><h5>選定基準・ブリーフ・契約書・評価方法が更新され、次回から標準適用される</h5><p>担当者が変わっても、次回そのまま運用できる。</p></div>
  </div>

  <div class="wipo-column reveal">
    <div class="wc-tag">WIPO — 無形資産投資統計より</div>
    <h4>ブランドを残すには、組織の「型」も残さなければならない</h4>
    <div class="wipo-stats">
      <div class="ws-item"><div class="ws-num">30.5%</div><div class="ws-label">Organizational Capital</div></div>
      <div class="ws-item"><div class="ws-num">14.7%</div><div class="ws-label">Brands</div></div>
    </div>
    <p>World Intellectual Property Organization（WIPO、世界知的所有権機関。国際連合の専門機関のひとつ）とLuiss Business Schoolの調査では、29カ国を対象に集計した2023年の無形資産投資のうち、Organizational Capital（組織資本）が30.5%と最大のカテゴリーで、Brandsは14.7%だった<a class="cite" href="#ref9">[9]</a>。これは企業価値や個々の施策の効果を示す比率ではなく、集計対象国の投資構成比である。同調査は、ブランドの効果がR&D・デザイン・データ・組織資本などとの補完関係によって高まるとも指摘している<a class="cite" href="#ref9">[9]</a>。</p>
    <p>ここから導きたいのは「ブランドより組織資本の方が重要」という結論ではない。ブランド資産を育て続けるには、単発の表現だけでなく、それを再現・改善できる組織的な仕組みが要る、ということである。以下は、WIPOの無形資産分類をもとに、NSIがインフルエンサー施策へ実務的に翻訳したものであり、WIPO自身がこの分類を提示しているわけではない。</p>
    <div class="table-wrap" style="margin-top:1.5rem;">
      <table class="term-table" style="min-width:520px;">
        <tr><th>組織資本の要素</th><th>インフルエンサー施策での内容</th></tr>
        <tr><td class="label" style="color:var(--teal-light);">Operating models</td><td style="color:rgba(250,248,243,0.75);">選定・ブリーフ・制作・承認・効果測定・改善の標準プロセス</td></tr>
        <tr><td class="label" style="color:var(--teal-light);">Platforms</td><td style="color:rgba(250,248,243,0.75);">クリエイターデータベース、権利管理台帳、コンテンツ保管、分析基盤</td></tr>
        <tr><td class="label" style="color:var(--teal-light);">Distribution networks</td><td style="color:rgba(250,248,243,0.75);">継続的に協働できるクリエイターネットワーク、運用可能なチャネル</td></tr>
        <tr><td class="label" style="color:var(--teal-light);">Supply chains</td><td style="color:rgba(250,248,243,0.75);">ブランド・代理店・クリエイター・法務・制作間の連携プロセス</td></tr>
      </table>
    </div>
    <p style="margin-top:1.2rem;">なおCRMも、WIPOの分類上は単一のカテゴリーに収まらない。顧客理解や関係構築の施策はBrands and marketing assetsに、CRMツールやデータベースはSoftware and databasesに、部門横断の運用設計はOrganizational capitalに、それぞれ近い。Fandomain Capitalも、信頼・語り・ロイヤルティという点でBrands and marketing assetsに最も近いが、完全に同義ではない。<strong>WIPOが無形資産への投資を分類し、NSIは施策から何が市場・文化・企業に蓄積したかを捉える。</strong>両者はそこで役割が分かれる。</p>
  </div>
</section>

<!-- CHAPTER 5: DISSIPATION -->
<section class="chapter chapter-light" id="ch5">
  <div class="chapter-header reveal">
    <div class="chapter-num">05</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 05</div>
      <h2>施策の価値が、次に残らない三つの理由</h2>
    </div>
  </div>

  <div class="chapter-body single reveal">
    <div class="body-text"><p>価値が次に残らない理由は、成果が生まれなかった場合だけではない。生まれた成果や学びが引き継がれないことも、繰り返すうちに信頼や新鮮さを摩耗させてしまい価値の低減を招く。</p></div>
  </div>

  <div class="dissip-list reveal">
    <div class="dissip-item"><div class="d-tag">生まれない</div><h3>そもそも動かなかった</h3><p>生活者の反応も態度の変化も起きなかった。投入に対して、反応そのものが乏しかったケース。</p></div>
    <div class="dissip-item"><div class="d-tag">引き継がれない</div><h3>生まれたのに、次へ渡せなかった</h3><p>価値は生まれたが、権利・データ・関係・学びとして、次の担当者や次の施策へ渡せなかった。</p></div>
    <div class="dissip-item"><div class="d-tag">すり減る</div><h3>繰り返して、すり減った</h3><p>同じ起用と同じ表現を繰り返すなかで、クリエイターの信頼と生活者の新鮮な関心が失われていった。</p></div>
  </div>

  <div class="chapter-body single reveal" style="margin-top:3rem;">
    <div class="body-text"><p><strong>継続起用だけでは、蓄積は生まれない。</strong>関係が深まり、学びが次の判断に戻って、初めて継続は資産になる。</p></div>
  </div>

  <div class="chapter-body reveal" style="margin-top:2rem;">
    <div class="body-text">
      <h4>なぜ、次の施策につながらないのか</h4>
      <p><strong>前回の状態が保存されない。</strong>素材の利用権がない。担当者が異動して知見が消える。関係も案件終了と同時に切れる。次の施策は、再びゼロから始まる。</p>
      <p><strong>結果が意思決定へ戻らない。</strong>報告書は提出される。しかし次回も同じ基準で選び、同じブリーフを使う。測定はしているが、選定や設計を変えていない。</p>
    </div>
    <div class="body-text">
      <h4>残すものは、絞ってよい</h4>
      <p>二次利用権の取得には費用がかかり、データの保存にも運用の負荷がある。次に使う見込みのないものまで回収しようとすると、保存すること自体が目的になる。案件ごとに「今回残す資産を1〜2個選ぶ」という原則の方が、実務では機能する。</p>
    </div>
  </div>

  <div class="kiori-tag reveal"><img src="/kiori-logo-white.png" alt="KIORI">KIORI CASE｜この施策で、ブランドに何が残ったか</div>
  <div class="case-band reveal">
    <div class="cb-col before">
      <div class="cb-label">KIORI・シナリオA</div>
      <h5>二次利用権が、契約に含まれていなかった</h5>
      <p>施策後、担当者は投稿画像を広告に転用しようとしたが、二次利用の許諾が取られていなかった。担当者は3ヶ月後に異動し、クリエイターとの関係も次の担当者に引き継がれなかった。</p>
    </div>
    <div class="cb-col after">
      <div class="cb-label">分岐点</div>
      <div style="display:flex; align-items:flex-start; gap:1rem;">
        <img class="kiori-thumb" src="/kiori-product-white.png" alt="KIORI だし醤油">
        <div>
          <h5 style="margin-bottom:0.6rem;">残したいブランド資産から、施策を逆算する</h5>
          <p>企画段階で最初に決めるのは、施策後にブランドの何を厚くしたいかである。想起か、商品理解か、信頼か、選好か。そのうえで、顧客接点・クリエイターとの関係・コンテンツやデータ・運用知のうち、何を残すかを決め、必要な調査・導線・契約・記録方法を逆算する。KIORIなら、「使い方への理解」を残したいとき、商品理解の変化を調査で確かめつつ、効果の高かったレシピ表現を再利用できる契約と、効いた理由を次の企画に活かせる知見として残す。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CHAPTER 6: SCORECARD + CASE RESOLUTION -->
<section class="chapter chapter-light" id="ch6">
  <div class="chapter-header reveal">
    <div class="chapter-num">06</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 06</div>
      <h2>残る価値を、測れる言葉に変える</h2>
    </div>
  </div>

  <div class="chapter-body single reveal">
    <div class="body-text"><p>「残したい」と考えるだけでは、実務は変わらない。誰が受け取り、どこに残し、次のどの判断に使うのか。そこまで決めて初めて、価値は組織の力になる。</p></div>
  </div>

  <div class="section-label reveal" style="margin-top:3rem;">残す価値の設計表</div>
  <div class="table-wrap reveal">
    <table class="term-table">
      <tr><th>残す価値</th><th>残る場所</th><th>具体的に残るもの</th><th>確認指標の例</th><th>次に変わる判断</th></tr>
      <tr><td class="label">ブランド資産</td><td style="color:var(--teal); font-weight:500;">一般生活者・市場</td><td>想起・理解・信頼・選好</td><td>ブランドリフト調査、指名検索、CRM登録</td><td>次の訴求・対象</td></tr>
      <tr><td class="label">Fandomain Capital</td><td style="color:var(--coral-text); font-weight:500;">ファンダムの文化的領域</td><td>継続する関係、共有される語り、共鳴、参加、推奨</td><td>複数回反応者比率、継続UGC、推奨行動、語りの一貫性</td><td>どの体験・語り・参加を育てるか</td></tr>
      <tr><td class="label">Owned接点・顧客データ</td><td style="color:var(--navy); font-weight:500;">企業が管理する接点</td><td>許諾を得て再接触できる顧客IDと行動履歴</td><td>新規登録数、配信到達率、再訪率、再反応率、購買転換率</td><td>誰に、何を、いつ届けるか</td></tr>
      <tr><td class="label">共創基盤</td><td style="color:var(--coral-text); font-weight:500;">ブランドとクリエイターのあいだ</td><td>クリエイターとの関係と共創履歴</td><td>再起用率、企画速度</td><td>次の起用</td></tr>
      <tr><td class="label">コンテンツ・データ資産</td><td style="color:var(--navy); font-weight:500;">企業・組織</td><td>表現、利用権、反応データ、生活者の言葉</td><td>再利用可能素材数、利用許諾期間</td><td>次の制作</td></tr>
      <tr><td class="label">組織資本</td><td style="color:var(--navy); font-weight:500;">企業・組織</td><td>選定、ブリーフ、契約、制作、評価、改善を再現する判断基準・標準プロセス・管理基盤</td><td>次回案件への反映件数、標準プロセスの適用率、担当者交代後の再現可否</td><td>次の起用・ブリーフ・契約・評価設計</td></tr>
    </table>
  </div>
  <p class="small-note reveal" style="max-width:1100px;">LINE登録者数のような数だけでは、Fandomain Capitalの大きさは測れない。保存やフォローもプラットフォーム上の反応であり、必ずしも企業が再接触できるOwned接点にはならない。担当者が覚えている状態と、選定基準や契約書が更新された状態も別物である——後者だけが、担当者の異動後も使える組織資本になる。</p>

  <div class="kiori-tag reveal" style="margin-top:4rem;"><img src="/kiori-logo-white.png" alt="KIORI">KIORI CASE｜この施策で、ブランドに何が残ったか</div>
  <div class="section-label reveal">KIORIの分岐</div>

  <div class="case-band reveal">
    <div class="cb-col before">
      <div class="cb-label">シナリオA — 設計を変えなかった場合</div>
      <h5>投稿3本、150万円のまま実行</h5>
      <p>「新商品の認知向上」を掲げたが、確認できる指標を組み込まないまま実行。発売後、投稿画像を広告に転用する必要が生じたが二次利用の許諾がなく、追加のクリエイティブ制作費として約60万円が別途発生した。</p>
    </div>
    <div class="cb-col after">
      <div class="cb-label">シナリオB — 残すものから設計した場合</div>
      <h5>投稿3本を維持し、250万円を企画段階で予算化</h5>
      <p>「認知向上」だけでなく「使い方への理解をブランド資産として残し、反応のよかった表現を次回も活用する」と目的を具体化。起用費150万円に加え、二次利用権50万円、簡易ブランドリフト調査30万円、公式LINEへの登録導線整備20万円を最初から予算化した。</p>
    </div>
  </div>

  <div class="table-wrap reveal" style="margin-top:2rem;">
    <table class="term-table">
      <tr><th>予算内訳</th><th style="text-align:right;">シナリオA</th><th style="text-align:right;">シナリオB</th></tr>
      <tr><td class="label">投稿3本（起用費）</td><td style="text-align:right;">150万円</td><td style="text-align:right;">150万円</td></tr>
      <tr><td class="label">二次利用権</td><td style="text-align:right; color:var(--gray);">なし</td><td style="text-align:right;">50万円</td></tr>
      <tr><td class="label">ブランドリフト調査</td><td style="text-align:right; color:var(--gray);">なし</td><td style="text-align:right;">30万円</td></tr>
      <tr><td class="label">Owned導線整備</td><td style="text-align:right; color:var(--gray);">なし</td><td style="text-align:right;">20万円</td></tr>
      <tr><td class="label">発売後の追加制作</td><td style="text-align:right;">60万円</td><td style="text-align:right; color:var(--gray);">なし</td></tr>
      <tr><td class="label" style="color:var(--navy);">最終総額</td><td style="text-align:right; font-weight:700; color:var(--navy);">210万円</td><td style="text-align:right; font-weight:700; color:var(--navy);">250万円</td></tr>
    </table>
  </div>
  <p class="small-note reveal" style="max-width:1100px;">Bの最終支出は、Aより40万円高いだけである。<strong>追加40万円で、成果の検証、投稿の再利用、顧客との再接触、次回に使える判断基準までを取得した。</strong>後から60万円を使って穴を埋めたAと、最初から100万円を資産形成へ振り向けたBの違いであり、金額は説明用の試算にすぎない。実際の水準は、利用媒体・期間・調査方法によって変わる。</p>

  <div class="case-band reveal" style="margin-top:2rem;">
    <div class="cb-col before">
      <div class="cb-label">シナリオA・結果</div>
      <dl class="cb-mini">
        <dt>当期の反応</dt><dd>リーチ・再生・保存は目標達成</dd>
        <dt>ブランド資産</dt><dd>届いたことは分かるが、想起・理解の変化は不明</dd>
        <dt>コンテンツ資産</dt><dd>二次利用不可。追加素材を別途制作</dd>
        <dt>組織資本</dt><dd>担当者の所感として残るのみ</dd>
        <dt>次回の意思決定</dt><dd>前回と似た条件で再発注</dd>
      </dl>
    </div>
    <div class="cb-col after">
      <div class="cb-label">シナリオB・結果</div>
      <dl class="cb-mini">
        <dt>当期の反応</dt><dd>リーチ・再生・保存は目標達成</dd>
        <dt>ブランド資産</dt><dd>助成想起+4pt、商品理解+6ptを確認</dd>
        <dt>Owned接点</dt><dd>公式LINE等への登録・再接触導線を設置</dd>
        <dt>コンテンツ資産</dt><dd>投稿3本の利用権、反応データ、生活者の言葉を保存</dd>
        <dt>組織資本</dt><dd>選定基準・ブリーフ・契約・評価方法を更新</dd>
        <dt>次回の意思決定</dt><dd>効いた条件をもとに起用・表現・予算を変更</dd>
      </dl>
    </div>
  </div>
  <p class="small-note reveal" style="max-width:1100px;">KIORIであれば、Y氏の投稿から「時短レシピ登録」へ誘導し、公式LINEやメールで継続的にレシピを届けられる関係が、Owned接点にあたる。反応が語りや推奨として自発的に広がれば、それはFandomain Capitalの領域になる。</p>

  <div class="section-label reveal" style="margin-top:4rem;">同じ施策でも、企業に残るものはここまで変わる</div>
  <div class="table-wrap reveal">
    <table class="term-table">
      <tr><th>比較項目</th><th>シナリオA｜設計を変えなかった</th><th>シナリオB｜残すものから設計した</th></tr>
      <tr><td class="label">企画の目的</td><td>新商品の認知向上</td><td>商品理解をブランド資産として残し、次回も活用する</td></tr>
      <tr><td class="label">投稿</td><td>Y氏による3投稿</td><td>Y氏による3投稿</td></tr>
      <tr><td class="label">当初予算</td><td>150万円</td><td>250万円</td></tr>
      <tr><td class="label">発売後の追加費用</td><td>新規素材制作60万円</td><td>なし</td></tr>
      <tr><td class="label" style="color:var(--navy);">最終総額</td><td style="font-weight:700;">210万円</td><td style="font-weight:700;">250万円</td></tr>
      <tr><td class="label">当期の反応</td><td>リーチ・再生・保存は目標達成</td><td>リーチ・再生・保存は目標達成</td></tr>
      <tr><td class="label">ブランド資産</td><td>届いたことは分かるが、想起・理解の変化は不明</td><td>助成想起+4pt、商品理解+6ptを確認</td></tr>
      <tr><td class="label">Owned接点</td><td>プラットフォーム上の反応のみ</td><td>公式LINE等への登録・再接触導線を設置</td></tr>
      <tr><td class="label">共創関係</td><td>単発起用で終了</td><td>Y氏との共創履歴と次回条件を記録</td></tr>
      <tr><td class="label">コンテンツ・データ資産</td><td>二次利用不可。追加素材を別途制作</td><td>投稿3本の利用権、反応データ、生活者の言葉を保存</td></tr>
      <tr><td class="label">組織資本</td><td>担当者の所感として残る</td><td>選定基準・ブリーフ・契約・評価方法を更新</td></tr>
      <tr><td class="label">次回の意思決定</td><td>前回と似た条件で再発注</td><td>効いた条件をもとに起用・表現・予算を変更</td></tr>
      <tr><td class="label" style="color:var(--navy);">結論</td><td>成果は出たが、一回で閉じた</td><td>成果がブランド資産と組織能力へ変わった</td></tr>
    </table>
  </div>

  <div class="pull-quote reveal" style="max-width:1100px; margin-top:3rem;">シナリオAとBの違いは、投稿が成功したかどうかではない。施策で得たものが、次のブランド形成を変えたかどうかである。</div>

  <div class="kiori-resolution-flex reveal">
    <div class="kiori-package"><img src="/kiori-product-white.png" alt="KIORI（季織）だし醤油"></div>
    <div class="kiori-resolution-body">
      <p class="body-text" style="margin:0;">同じ商品、同じクリエイター。違いの起点は、何を残すかを先に決めたことである。KIORIというひとつの企画が、この一冊の中でたどった分岐が、次章の5つの問いにそのままつながる。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 7: DESIGN RIGHT TO LEFT -->
<section class="chapter chapter-light" id="ch7">
  <div class="chapter-header reveal">
    <div class="chapter-num">07</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 07</div>
      <h2>残したい価値から、施策を逆算する</h2>
    </div>
  </div>

  <div class="chapter-body single reveal">
    <div class="body-text"><p>現場では、最初に「誰を起用するか」という投入から考えがちだ。ブランド資産まで設計するなら、考える順番は逆になる。ブランドの何を厚くしたいかを先に決め、そのために何を動かす必要があるかを考え、どんな投稿や反応が要るかを詰めてから、最後に誰を起用するかを決める。</p></div>
  </div>

  <div class="exec-order reveal">
    <span>実行の順番：</span><span>起用</span><span class="arw">→</span><span>投稿・反応</span><span class="arw">→</span><span>変化</span><span class="arw">→</span><span>ブランド資産</span>
  </div>
  <div class="exec-order reveal" style="margin-top:0.4rem;">
    <span>設計の順番：</span><span>ブランド資産</span><span class="arw">→</span><span>変化</span><span class="arw">→</span><span>投稿・反応</span><span class="arw">→</span><span>起用</span>
  </div>

  <div class="reverse-steps reveal">
    <div class="rstep"><div class="rs-num">1</div><h4>ブランドの何を厚くしたいか</h4><p>想起か、理解か、信頼か、選好か。先に決める。</p></div>
    <div class="rarrow">→</div>
    <div class="rstep"><div class="rs-num">2</div><h4>誰の何を変える必要があるか</h4><p>狙うブランド資産に対応する、生活者側の変化を言語化する。</p></div>
    <div class="rarrow">→</div>
    <div class="rstep"><div class="rs-num">3</div><h4>どんな投稿・反応が必要か</h4><p>狙う変化に対応する投稿の形と、確かめる指標を決める。</p></div>
    <div class="rarrow">→</div>
    <div class="rstep"><div class="rs-num">4</div><h4>誰を起用するか</h4><p>ここまで決めてから、初めて適合するクリエイターを選ぶ。</p></div>
  </div>

  <div class="pull-quote reveal" style="max-width:1100px; margin-top:3rem;">実行は起用から始まる。設計は、残したいブランド資産から始める。</div>

  <div class="section-label reveal" style="margin-top:4rem;">FIVE QUESTIONS FOR THE PLANNING MEETING</div>
  <div class="question-cards reveal">
    <div class="question-card"><div class="qc-tag">Q1</div><h3>誰に、何を知り、感じ、選んでもらいたいのか</h3><p>対象と、狙う変化を一文で言えるか。認知なのか、態度なのか、購買意向なのか。</p></div>
    <div class="question-card"><div class="qc-tag">Q2</div><h3>その変化を、何で確かめるのか</h3><p>成果指標を、施策の前に決めているか。事後にKPIを選び直していないか。</p></div>
    <div class="question-card"><div class="qc-tag">Q3</div><h3>なぜ、この人が語ると届くのか</h3><p>商材・訴求・オーディエンス・プラットフォーム、4つの適合を説明できるか。</p></div>
    <div class="question-card"><div class="qc-tag">Q4</div><h3>広告だと分かっても、見たい・知りたい内容か</h3><p>表記の有無だけでなく、内容そのものに情報価値があるか。</p></div>
    <div class="question-card"><div class="qc-tag">Q5</div><h3>何を残し、次のどの判断を変えるのか</h3><p>保管するだけでなく、次回の選定・ブリーフ・評価に反映する仕組みがあるか。</p></div>
  </div>

  <div class="chapter-body reveal" style="margin-top:4rem;">
    <div class="body-text">
      <h4>ブランドが決めること</h4>
      <p>残したいもの、権利と二次利用の範囲、成果を確かめる指標に加えて、必須訴求、禁止表現、法規・ブランドセーフティ上の制約、成果に関する仮説も、ブランド側が事前に決めておきたい事項である。</p>
    </div>
    <div class="body-text">
      <h4>クリエイターに委ねること</h4>
      <p>本人の語り口や、表現の細部。ブランドが枠組みを示し、表現に余白を残す。その余白が、クリエイター本人の声を守る。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 8: CLOSING -->
<section class="chapter chapter-mid" id="ch8">
  <div class="chapter-header reveal">
    <div class="chapter-num">08</div>
    <div class="chapter-title">
      <div class="chapter-sub">PRACTICE / 08</div>
      <h2>成果を、次のブランド形成へ戻す</h2>
      <div class="chapter-subtitle">施策後に残すべきものと、次の会議で決めること</div>
    </div>
  </div>

  <div class="chapter-body single reveal">
    <div class="body-text"><p>施策は、投稿が公開され、数字が報告された時点では終わっていない。生活者の記憶にブランド資産が残る。ブランドをめぐる関係と語りが、Fandomain Capitalとして育つ。企業の中には、再利用できるコンテンツ・データと、次回も成果を生み出す組織資本が残る。その蓄積が、次の起用、表現、予算、計測を変えたとき、施策の成果は一回で閉じず、次のブランド形成へ戻っていく。</p></div>
  </div>

  <div class="pull-quote reveal" style="max-width:1100px; margin-top:2.5rem;">生活者の記憶には、ブランド資産を。ブランドをめぐる関係には、Fandomain Capitalを。企業には、再利用できるコンテンツ・データと組織資本を。そして、残ったものを次の判断へ戻す。</div>

  <div class="chapter-body single reveal" style="margin-top:3rem;">
    <div class="body-text"><p><strong>新しい資料を増やす必要はない。</strong>企画書に目的を一つ、契約書に残すものを一つ、報告書に次回変えることを一つ加える。考えることを増やすのではなく、迷わず選べるようにする。</p></div>
  </div>

  <div class="doc-card-grid reveal">
    <div class="doc-card">
      <div class="dc-timing">企画前｜企画書・ブリーフ</div>
      <h4>今回、誰の何を変えるか</h4>
      <div class="dc-field">対象：<span class="dc-blank">&nbsp;</span></div>
      <div class="dc-options">変化：□ 想起　□ 理解　□ 信頼　□ 選好　□ 購買</div>
    </div>
    <div class="doc-card">
      <div class="dc-timing">実施前｜発注書・契約書</div>
      <h4>施策後も何を使える状態で残すか</h4>
      <div class="dc-options">□ 再接触できる顧客接点<br>□ 再利用できるコンテンツと権利<br>□ 比較可能な反応データ<br>□ 次も協働できる共創関係</div>
    </div>
    <div class="doc-card">
      <div class="dc-timing">振り返り後｜実施報告書</div>
      <h4>次回、何を一つ変えるか</h4>
      <div class="dc-options">□ 起用　□ ブリーフ　□ 契約　□ 導線　□ 計測　□ 予算</div>
    </div>
  </div>
  <p class="small-note reveal" style="max-width:1100px; margin-top:1.2rem;">契約書で「コンテンツ」を選んだ場合は、利用媒体・利用期間・編集可否・使用可能素材まで記入欄を続ける。報告書は、変更内容・担当者・反映期限の3項目だけを追記すればよい。</p>

  <div class="section-label reveal" style="margin-top:3.5rem;">選択した目的から、指標候補を絞る</div>
  <div class="table-wrap reveal">
    <table class="term-table">
      <tr><th>企画書で選んだ目的</th><th>最初に見る指標</th></tr>
      <tr><td class="label">想起</td><td>ブランドリフト、助成・非助成想起、指名検索</td></tr>
      <tr><td class="label">商品理解</td><td>メッセージ理解、ブランド連想</td></tr>
      <tr><td class="label">信頼</td><td>信頼度、推奨意向</td></tr>
      <tr><td class="label">選好</td><td>第一選択率、購買意向</td></tr>
      <tr><td class="label">購買</td><td>コンバージョン、購買件数、売上、増分売上</td></tr>
    </table>
  </div>
  <p class="small-note reveal" style="max-width:1100px;">担当者に「目的に合った指標を考えてください」と要求するのではなく、目的を選べば候補が出るようにする。必要な予算は、残したいブランド資産と蓄積基盤から逆算する。</p>

  <div class="chapter-body single reveal" style="margin-top:3rem;">
    <div class="body-text">
      <p>保存数が使われ続けるのは、完璧な指標だからではない。自動で取得でき、誰にでも説明できるからだ。ブランド資産を残す設計も、同じくらい簡単でなければ定着しない。目的を一つ選び、残すものを一つ決め、次回変えることを一つ記録する。そこから始めればよい。</p>
      <p>インフルエンサー施策で生まれた一度の体験が、Owned接点によって継続し、Sharedの語りへ変わり、その語りが再解釈されていく。その循環のなかで、Fandomain Capitalは少しずつ厚くなる。本レポートが企業に求めるのは、大がかりな仕組みではない。その循環を一回で切らないための、三つの小さな設計変更である。</p>
    </div>
  </div>

  <div class="pull-quote reveal" style="max-width:1100px; margin-top:2.5rem; font-size:clamp(1.1rem,1.8vw,1.4rem);">成果が次の判断を変えるところまでが、施策の設計である。</div>
</section>

<!-- REFERENCES -->
<section class="references">
  <div class="section-label">REFERENCES</div>
  <ol class="refs-list">
    <li id="ref1">Barari, M. et al. (2025). インフルエンサー・マーケティングの効果に関するメタ分析. <em>Journal of the Academy of Marketing Science</em>. <a href="https://link.springer.com/article/10.1007/s11747-025-01107-3" target="_blank" rel="noopener noreferrer">doi.org/10.1007/s11747-025-01107-3</a></li>
    <li id="ref2">Pan, X. et al. (2024). インフルエンサー特性と成果指標に関するメタ分析. <em>Journal of the Academy of Marketing Science</em>. <a href="https://link.springer.com/article/10.1007/s11747-024-01052-7" target="_blank" rel="noopener noreferrer">doi.org/10.1007/s11747-024-01052-7</a></li>
    <li id="ref3">Duffek et al. (2025). インフルエンサー・マーケティングにおける真正性のマルチステークホルダー研究. <em>Journal of Marketing</em>. <a href="https://journals.sagepub.com/doi/10.1177/00222429251319786" target="_blank" rel="noopener noreferrer">doi.org/10.1177/00222429251319786</a></li>
    <li id="ref4">Liu, Y. &amp; Zhao, X. (2024). スポンサーシップ表示に関するメタ分析. <em>Marketing Letters</em>. <a href="https://link.springer.com/article/10.1007/s11002-024-09757-z" target="_blank" rel="noopener noreferrer">doi.org/10.1007/s11002-024-09757-z</a></li>
    <li id="ref5">Yan, R. &amp; Takahashi, H. (2025). The Parasocial Relationships Between Influencers and Consumers: The Impact on Product Attitudes and Product Referrals. <em>マーケティングジャーナル</em>. <a href="https://cir.nii.ac.jp/crid/1390023229738697600" target="_blank" rel="noopener noreferrer">doi.org/10.7222/marketing.2025.032</a></li>
    <li id="ref6">Wang &amp; Chan-Olmsted. (2024). インフルエンサーからブランドへの信頼移転に関する研究. <a href="https://journals.sagepub.com/doi/abs/10.1177/23294884241255911" target="_blank" rel="noopener noreferrer">doi.org/10.1177/23294884241255911</a></li>
    <li id="ref7">Libai, B. et al. (2024). Influencer marketing unlocked: Understanding the value chains driving the creator economy. <em>Journal of the Academy of Marketing Science</em>. <a href="https://link.springer.com/article/10.1007/s11747-024-01073-2" target="_blank" rel="noopener noreferrer">doi.org/10.1007/s11747-024-01073-2</a></li>
    <li id="ref8">消費者庁 (2023). 「ステルスマーケティングに関する運用基準」. <a href="https://www.caa.go.jp/policies/policy/representation/fair_labeling/stealth_marketing" target="_blank" rel="noopener noreferrer">caa.go.jp — ステルスマーケティング</a>（2023年10月1日運用開始）</li>
    <li id="ref9">World Intellectual Property Organization and Luiss Business School. (2026). <em>World Intangible Investment Highlights 2026: Better Data for Better Business and Policy</em>. <a href="https://www.wipo.int/edocs/pubdocs/en/wipo-pub-1097-en-world-intangible-investment-highlights.pdf" target="_blank" rel="noopener noreferrer">wipo.int — 報告書PDF</a> ／ <a href="https://www.wipo.int/web-publications/world-intangible-investment-highlights-2026/en/key-trends-and-insights.html" target="_blank" rel="noopener noreferrer">Key Trends and Insights</a></li>
  </ol>
</section>
`;

const htmlAfter = `
<!-- AUTHOR -->
<section style="background:var(--navy-mid); padding:4.5rem 5vw;">
  <div class="reveal" style="max-width:1100px; display:flex; gap:2rem; align-items:center; flex-wrap:wrap;">
    <img src="/amano.jpg" style="width:100px; height:100px; border-radius:4px; object-fit:cover; object-position:center 20%; border:1px solid rgba(196,92,58,0.3); flex-shrink:0;" alt="天野彬">
    <div>
      <div style="font-family:'Shippori Mincho',serif; font-size:1.4rem; font-weight:700; color:var(--white); margin-bottom:0.4rem;">天野 彬</div>
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--coral-light); letter-spacing:0.1em; margin-bottom:1.3rem;">Akira Amano</div>
      <p style="font-size:0.92rem; color:rgba(250,248,243,0.75); line-height:2; max-width:660px;">New Strategy Institute（NSI）Founding Director。DCXforce 執行役員 Chief Strategy Officer。東京大学大学院学際情報学府修士課程修了（M.A.）。株式会社電通にてデジタルマーケティングの研究開発・コンサルティングを主導。日本経済新聞電子版Think! エキスパートコメンテーター、日本広告学会理事、明治学院大学非常勤講師。</p>
    </div>
  </div>
</section>

<footer>
  <div class="footer-logo">NSI — New Strategy Institute by DCXforce</div>
  <div class="footer-copy">© 2026 DCXforce Inc. All rights reserved. Report #002</div>
</footer>
`;

type FormState = "idle" | "submitting" | "success" | "error";

export default function Report002Page() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formAgreed, setFormAgreed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  // Inject report CSS once into <head> — stable across re-renders
  useEffect(() => {
    const existing = document.getElementById("report-002-styles");
    if (existing) return;
    const styleEl = document.createElement("style");
    styleEl.id = "report-002-styles";
    styleEl.innerHTML = reportCss;
    document.head.appendChild(styleEl);

    return () => {
      document.getElementById("report-002-styles")?.remove();
    };
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".report-002-root .reveal");
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        el.classList.add("will-animate-002");
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".report-002-root .will-animate-002").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Sidebar scroll-spy
  useEffect(() => {
    const sectionIds = ["summary", "ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "ch8", "download"];

    const hero = document.querySelector(".report-002-root .hero") as Element | null;
    const heroObs = new IntersectionObserver(
      ([e]) => setSidebarVisible(!e.isIntersecting),
      { threshold: 0 }
    );
    if (hero) heroObs.observe(hero);

    const updateActive = () => {
      const marker = window.scrollY + window.innerHeight * 0.3;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });

    return () => {
      heroObs.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xwlkbnwr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const toc = [
    { id: "summary", label: "Summary" },
    { id: "ch1", label: "§ 1" },
    { id: "ch2", label: "§ 2" },
    { id: "ch3", label: "§ 3" },
    { id: "ch4", label: "§ 4" },
    { id: "ch5", label: "§ 5" },
    { id: "ch6", label: "§ 6" },
    { id: "ch7", label: "§ 7" },
    { id: "ch8", label: "§ 8" },
  ];

  return (
    <div className="report-002-root">
      <style>{`
        .report-002-root .will-animate-002 { opacity:0; transform:translateY(22px); }
        .report-002-root .will-animate-002.visible { opacity:1; transform:translateY(0); }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            headline: "インフルエンサー施策が終わったあと、ブランドに何が残るか",
            alternativeHeadline: "NSI Report #002",
            description: "再生数・保存数で終わらせず、次の起用・企画・評価へつなぐための実務設計。",
            url: "https://nsi.dcxforce.co.jp/reports/002",
            image: "https://nsi.dcxforce.co.jp/NSI.png",
            datePublished: "2026-08-31",
            inLanguage: "ja",
            author: {
              "@type": "Person",
              name: "天野彬",
              alternateName: "Akira Amano",
              jobTitle: "Chief Strategy Officer",
              worksFor: { "@type": "Organization", name: "DCXforce" },
            },
            publisher: {
              "@type": "Organization",
              name: "New Strategy Institute (NSI)",
              url: "https://nsi.dcxforce.co.jp",
            },
            isPartOf: {
              "@type": "CreativeWorkSeries",
              name: "NSI Report",
            },
          }),
        }}
      />

      <Navbar />

      {/* Side nav — fixed left, scroll-spy */}
      <div
        className="report-sidebar-002"
        style={{
          position: "fixed",
          top: "50%",
          left: "clamp(0.5rem, 1.5vw, 2rem)",
          transform: "translateY(-50%)",
          zIndex: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          opacity: sidebarVisible ? 1 : 0,
          pointerEvents: sidebarVisible ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        <div style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "1px", background: "rgba(196,92,58,0.15)" }} />
        {toc.map(({ id, label }) => {
          const active = activeSection === id;
          return (
            <a key={id} href={`#${id}`} style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.4rem 0", textDecoration: "none" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", border: `1.5px solid ${active ? "#c45c3a" : "rgba(196,92,58,0.25)"}`, background: active ? "#c45c3a" : "transparent", flexShrink: 0, transition: "all 0.25s", boxShadow: active ? "0 0 8px rgba(196,92,58,0.5)" : "none" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", fontWeight: active ? 600 : 400, color: active ? "#c45c3a" : "rgba(196,92,58,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.25s", lineHeight: 1 }}>{label}</span>
            </a>
          );
        })}
        <a href="#download" style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.5rem 0", marginTop: "0.75rem", textDecoration: "none" }}>
          <span style={{ width: "22px", height: "22px", borderRadius: "4px", background: "#c45c3a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#faf8f3", fontWeight: 700, boxShadow: "0 0 10px rgba(196,92,58,0.45)" }}>↓</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", fontWeight: 700, color: "#c45c3a", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1 }}>資料DL</span>
        </a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: htmlBefore }} />

      {/* CTA / DOWNLOAD */}
      <section className="cta-section" id="download">
        <div className="cta-bg"></div>
        {formState !== "success" && (
          <>
            <div className="section-label on-dark" style={{ justifyContent: "center" }}>DOWNLOAD</div>
            <h2>インフルエンサー施策を<br />残るものへ。</h2>
            <p>PDF版レポートのダウンロード、レポート著者とのコンタクトは下記から。</p>
          </>
        )}
        <div className="download-form reveal" id="download-form">
          {formState === "success" ? (
            <div style={{ textAlign: "center", padding: "4rem 3rem", maxWidth: "760px", margin: "0 auto", width: "100%" }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#e08a67", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "2rem" }}>
                Thank You
              </div>
              <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)", color: "#faf8f3", lineHeight: "2", fontWeight: 700 }}>
                ご記入ありがとうございました。<br />
                追って担当者からメールでご送付いたします。
              </p>
            </div>
          ) : (
            <>
              <h3>PDF版レポートを受け取る</h3>
              <div className="form-sub">NSI REPORT #002 — FULL PDF</div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="dl-name-002">お名前</label>
                  <input id="dl-name-002" type="text" name="name" placeholder="山田 太郎" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dl-company-002">会社名</label>
                  <input id="dl-company-002" type="text" name="company" placeholder="株式会社◯◯" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dl-email-002">メールアドレス</label>
                  <input id="dl-email-002" type="email" name="email" placeholder="you@company.co.jp" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dl-title-002">役職</label>
                  <input id="dl-title-002" type="text" name="title" placeholder="マーケティング部 部長" />
                </div>
                {formState === "error" && (
                  <p style={{ color: "#c45c3a", fontSize: "0.82rem", marginBottom: "0.75rem" }}>
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="dl-privacy-002"
                    checked={formAgreed}
                    onChange={e => setFormAgreed(e.target.checked)}
                  />
                  <label htmlFor="dl-privacy-002">
                    <a href="https://dcxforce.co.jp/privacy-policy/#link1" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意する
                  </label>
                </div>
                <button
                  type="submit"
                  id="gtm-reports-002-submit"
                  className="form-submit"
                  disabled={formState === "submitting" || !formAgreed}
                  style={{ opacity: (formState === "submitting" || !formAgreed) ? 0.4 : 1 }}
                >
                  {formState === "submitting" ? "送信中..." : "PDFをダウンロード"}
                </button>
                <p className="form-note">ご入力いただいた情報は、資料の送付および関連するご案内の目的にのみ使用します。</p>
              </form>
            </>
          )}
        </div>

        {formState !== "success" && (
          <div className="cta-buttons">
            <a href="/reports/001" className="btn-secondary">NSI REPORT #001 を読む ↗</a>
            <a href="mailto:a.amano@dcxforce.co.jp" className="btn-secondary">筆者にメールでコンタクト ↓</a>
          </div>
        )}
      </section>

      <div dangerouslySetInnerHTML={{ __html: htmlAfter }} />

      {/* Floating TOC */}
      {tocOpen && (
        <div
          onClick={() => setTocOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 140, background: "rgba(10,22,40,0.5)", backdropFilter: "blur(2px)" }}
        />
      )}
      <div style={{
        position: "fixed",
        bottom: tocOpen ? "80px" : "-100%",
        right: "1.25rem",
        zIndex: 150,
        background: "rgba(10,22,40,0.97)",
        border: "1px solid rgba(196,92,58,0.25)",
        borderRadius: "12px",
        padding: "1.25rem 0",
        minWidth: "220px",
        maxWidth: "280px",
        transition: "bottom 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
      }}>
        <div style={{ padding: "0 1.25rem 1rem", borderBottom: "1px solid rgba(196,92,58,0.15)", marginBottom: "0.5rem" }}>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.6rem", color: "rgba(196,92,58,0.75)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Contents
          </span>
        </div>
        {[...toc, { id: "download", label: "Download" }].map(({ id, label }) => {
          const active = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setTocOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.55rem 1.25rem",
                textDecoration: "none",
                background: active ? "rgba(196,92,58,0.08)" : "transparent",
                borderLeft: active ? "2px solid #c45c3a" : "2px solid transparent",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.62rem", fontWeight: active ? 700 : 400, color: active ? "#c45c3a" : "rgba(250,248,243,0.55)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1 }}>
                {label}
              </span>
            </a>
          );
        })}
      </div>
      <button
        onClick={() => setTocOpen(o => !o)}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.25rem",
          zIndex: 150,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: tocOpen ? "#c45c3a" : "rgba(10,22,40,0.95)",
          border: "1px solid rgba(196,92,58,0.4)",
          borderRadius: "50px",
          padding: "0.65rem 1.1rem",
          cursor: "pointer",
          transition: "all 0.25s",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span style={{ fontSize: "0.9rem", lineHeight: 1, color: tocOpen ? "#faf8f3" : "#c45c3a" }}>
          {tocOpen ? "✕" : "≡"}
        </span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.6rem", fontWeight: 600, color: tocOpen ? "#faf8f3" : "#c45c3a", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {tocOpen ? "Close" : "目次"}
        </span>
      </button>

      <Footer />
    </div>
  );
}
