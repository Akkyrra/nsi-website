"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reportCss = `
:root {
    --navy: #0a1628;
    --navy-mid: #0f2040;
    --gold: #c9a84c;
    --gold-light: #e8cc7a;
    --gold-pale: #f5e9c4;
    --white: #faf8f3;
    --off-white: #f0ece0;
    --gray: #8a8578;
    --text: #1a1612;
    --coral: #c45c3a;
    --teal: #1a6b5a;
    --purple: #3c3489;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--white);
    color: var(--text);
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    line-height: 1.8;
    overflow-x: hidden;
  }

  /* HERO */
  .hero {
    min-height: calc(100vh - 6rem); background: var(--navy);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 0 5vw 8vh; position: relative; overflow: hidden;
  }
  .hero-bg {
    position:absolute; inset:0;
    background: radial-gradient(ellipse 60% 60% at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 70%),
                radial-gradient(ellipse 40% 50% at 20% 80%, rgba(26,107,90,0.06) 0%, transparent 60%);
  }
  .hero-grid {
    position:absolute; inset:0;
    background-image: linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px);
    background-size: 60px 60px;
  }
  .hero-meta { font-family:'IBM Plex Mono',monospace; font-size:0.7rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:2.5rem; opacity:0; animation:fadeUp 0.8s ease 0.2s forwards; }
  .hero-title { font-family:'Shippori Mincho',serif; font-size:clamp(2.8rem,6vw,5.5rem); font-weight:700; color:var(--white); line-height:1.25; letter-spacing:-0.01em; margin-bottom:1.5rem; opacity:0; animation:fadeUp 0.8s ease 0.4s forwards; }
  .hero-title em { color:var(--gold); font-family:'Shippori Mincho',serif; }
  .hero-subtitle { font-family:'IBM Plex Mono',monospace; font-size:0.85rem; color:rgba(250,248,243,0.5); letter-spacing:0.05em; margin-bottom:4rem; opacity:0; animation:fadeUp 0.8s ease 0.6s forwards; }
  .hero-tagline { font-size:1.05rem; color:rgba(250,248,243,0.7); max-width:520px; line-height:2; padding-left:1.5rem; border-left:2px solid var(--gold); opacity:0; animation:fadeUp 0.8s ease 0.8s forwards; }
  .hero-scroll { position:absolute; bottom:3rem; right:5vw; display:flex; flex-direction:column; align-items:center; gap:0.5rem; opacity:0; animation:fadeUp 0.8s ease 1.2s forwards; }
  .hero-scroll span { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(250,248,243,0.3); letter-spacing:0.2em; text-transform:uppercase; writing-mode:vertical-rl; }
  .scroll-line { width:1px; height:60px; background:linear-gradient(to bottom,var(--gold),transparent); animation:scrollPulse 2s ease infinite; }
  @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.1)} }

  /* SUMMARY */
  .summary { background:var(--off-white); padding:12rem 5vw; }
  .section-label { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.25em; text-transform:uppercase; margin-bottom:3rem; display:flex; align-items:center; gap:1rem; }
  .section-label::after { content:''; flex:1; max-width:60px; height:1px; background:var(--gold); }
  .summary-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:rgba(10,22,40,0.1); max-width:1100px; }
  .summary-item { background:var(--off-white); padding:3rem; position:relative; transition:background 0.3s; }
  .summary-item:hover { background:var(--white); }
  .summary-num { font-family:'Shippori Mincho',serif; font-size:3.5rem; color:rgba(201,168,76,0.15); position:absolute; top:1.5rem; right:2rem; line-height:1; }
  .summary-item h3 { font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem; line-height:1.6; }
  .summary-item p { font-size:0.88rem; color:var(--gray); line-height:1.9; }

  /* CHAPTERS */
  .chapter { padding:12rem 5vw; position:relative; background:#ffffff; border-top:1px solid rgba(0,0,0,0.08); }
  .chapter-dark { background:var(--navy); color:var(--white); }
  .chapter-mid { background:var(--navy-mid); color:var(--white); }
  .chapter-light { background:var(--off-white); }
  .chapter-header { display:grid; grid-template-columns:auto 1fr; gap:3rem; align-items:start; margin-bottom:5rem; max-width:1100px; }
  .chapter-num { font-family:'Shippori Mincho',serif; font-size:clamp(5rem,10vw,9rem); line-height:0.85; color:rgba(201,168,76,0.12); letter-spacing:-0.03em; }
  .chapter-title h2 { font-family:'Shippori Mincho',serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; line-height:1.4; margin-bottom:0.75rem; }
  .chapter-dark .chapter-title h2, .chapter-mid .chapter-title h2 { color:var(--navy); }
  .chapter-title .chapter-sub { font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:var(--gold); letter-spacing:0.1em; }
  .chapter-body { max-width:1100px; display:grid; grid-template-columns:1fr 1fr; gap:4rem; }
  .chapter-body.wide { grid-template-columns:3fr 2fr; }
  .body-text { font-size:0.97rem; line-height:2.1; }
  .chapter-dark .body-text, .chapter-mid .body-text { color:rgba(250,248,243,0.75); }
  .body-text p + p { margin-top:1.5rem; }
  .pull-quote { font-family:'Shippori Mincho',serif; font-size:clamp(1.1rem,1.8vw,1.45rem); font-weight:600; line-height:1.8; color:var(--navy); padding:2.5rem 3rem; border-left:3px solid var(--gold); background:rgba(201,168,76,0.06); }
  .chapter-dark .pull-quote, .chapter-mid .pull-quote { color:var(--white); background:rgba(201,168,76,0.07); }

  /* STAT ROW */
  .stat-row { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(201,168,76,0.1); max-width:1100px; margin-top:4rem; }
  .stat-item { background:var(--navy); padding:3rem 2rem; text-align:center; }
  .stat-num { font-family:'Shippori Mincho',serif; font-size:3.5rem; color:var(--gold); line-height:1; margin-bottom:0.75rem; }
  .stat-label { font-size:0.85rem; color:rgba(250,248,243,0.5); line-height:1.7; }
  .stat-source { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(201,168,76,0.4); margin-top:0.5rem; letter-spacing:0.05em; }

  /* INSIGHT CARDS */
  .insight-row { max-width:1100px; display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:4rem; }
  .insight-card { padding:2.5rem 2rem; border:1px solid rgba(201,168,76,0.2); transition:border-color 0.3s, transform 0.3s; }
  .insight-card:hover { border-color:var(--gold); transform:translateY(-4px); }
  .insight-card .ic-label { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1rem; }
  .insight-card h4 { font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--white); line-height:1.6; margin-bottom:1rem; }
  .insight-card p { font-size:0.85rem; color:rgba(250,248,243,0.55); line-height:1.9; }

  /* SHARE OF ANSWERS VISUAL */
  .soa-visual { max-width:1100px; margin-top:5rem; }
  .soa-header { display:flex; align-items:baseline; gap:1rem; margin-bottom:2rem; }
  .soa-header h3 { font-family:'Shippori Mincho',serif; font-size:1.3rem; font-weight:600; color:var(--white); }
  .soa-header span { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; }
  .soa-comparison { display:grid; grid-template-columns:1fr 1fr; gap:2px; }
  .soa-col { padding:2.5rem; }
  .soa-col.old { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); }
  .soa-col.new { background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.2); }
  .soa-col-label { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.5rem; }
  .soa-col.old .soa-col-label { color:rgba(250,248,243,0.3); }
  .soa-col.new .soa-col-label { color:var(--gold); }
  .soa-col h4 { font-family:'Shippori Mincho',serif; font-size:1.15rem; font-weight:600; margin-bottom:1rem; }
  .soa-col.old h4 { color:rgba(250,248,243,0.5); text-decoration:line-through; text-decoration-color:rgba(255,255,255,0.2); }
  .soa-col.new h4 { color:var(--white); }
  .soa-items { list-style:none; }
  .soa-items li { font-size:0.88rem; padding:0.6rem 0; border-bottom:1px solid rgba(255,255,255,0.05); display:flex; align-items:center; gap:0.75rem; }
  .soa-col.old .soa-items li { color:rgba(250,248,243,0.35); }
  .soa-col.new .soa-items li { color:rgba(250,248,243,0.75); }
  .soa-items li::before { content:''; width:6px; height:6px; border-radius:50%; flex-shrink:0; }
  .soa-col.old .soa-items li::before { background:rgba(255,255,255,0.15); }
  .soa-col.new .soa-items li::before { background:var(--gold); }

  /* FAILURE PATTERNS */
  .failure-section { background:#ffffff; padding:12rem 5vw; }
  .failure-intro { max-width:680px; margin-bottom:4rem; }
  .failure-intro h2 { font-family:'Shippori Mincho',serif; font-size:clamp(1.6rem,2.5vw,2.2rem); font-weight:700; color:var(--white); line-height:1.5; margin-bottom:1.5rem; }
  .failure-intro p { color:rgba(250,248,243,0.65); font-size:0.97rem; line-height:2; }
  .failure-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; max-width:1100px; }
  .failure-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:3rem 2.5rem; position:relative; transition:border-color 0.3s; overflow:hidden; }
  .failure-card:hover { border-color:rgba(196,92,58,0.4); }
  .failure-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--coral); transform:scaleX(0); transform-origin:left; transition:transform 0.4s; }
  .failure-card:hover::before { transform:scaleX(1); }
  .failure-type { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--coral); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1rem; }
  .failure-card h3 { font-family:'Shippori Mincho',serif; font-size:1.1rem; font-weight:600; color:var(--white); margin-bottom:1.5rem; line-height:1.6; }
  .failure-card p { font-size:0.87rem; color:rgba(250,248,243,0.55); line-height:1.95; margin-bottom:1.5rem; }
  .failure-diagnosis { background:rgba(196,92,58,0.08); border-left:2px solid var(--coral); padding:1rem 1.25rem; }
  .failure-diagnosis .fd-label { font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:var(--coral); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.4rem; }
  .failure-diagnosis p { font-size:0.82rem; color:rgba(250,248,243,0.6); line-height:1.7; margin:0; }

  /* FRAMEWORK */
  .framework-section { background:#ffffff; padding:12rem 5vw; }
  .framework-definition { background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.25); padding:3rem 3.5rem; margin-bottom:5rem; position:relative; }
  .framework-definition::before { content:'"'; font-family:'Shippori Mincho',serif; font-size:8rem; color:rgba(201,168,76,0.1); position:absolute; top:-1rem; left:2rem; line-height:1; }
  .framework-definition p { font-family:'Shippori Mincho',serif; font-size:clamp(1.05rem,1.8vw,1.3rem); color:var(--white); line-height:2; }
  .framework-definition strong { color:var(--gold); font-weight:600; }
  .loop-diagram { width:100%; max-width:700px; margin:0 auto 3rem; display:block; }

  /* THREE LAYER */
  .three-layer { max-width:1100px; margin-top:4rem; }
  .three-layer h3 { font-family:'Shippori Mincho',serif; font-size:1.3rem; font-weight:600; color:var(--white); margin-bottom:2.5rem; }
  .layer-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(201,168,76,0.15); }
  .layer-item { background:var(--navy); padding:2.5rem; }
  .layer-icon { width:40px; height:40px; border:1px solid rgba(201,168,76,0.3); display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem; }
  .layer-icon span { font-family:'IBM Plex Mono',monospace; font-size:0.7rem; color:var(--gold); }
  .layer-item h4 { font-family:'Shippori Mincho',serif; font-size:1rem; font-weight:600; color:var(--white); margin-bottom:0.75rem; }
  .layer-item p { font-size:0.85rem; color:rgba(250,248,243,0.5); line-height:1.9; }
  .layer-arrow { text-align:center; padding:2.5rem 1rem; background:var(--navy); display:flex; align-items:center; justify-content:center; }
  .layer-arrow span { font-family:'IBM Plex Mono',monospace; font-size:1.5rem; color:rgba(201,168,76,0.3); }

  /* DIAGNOSTIC */
  .diagnostic-section { background:var(--off-white); padding:12rem 5vw; }
  .diagnostic-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; max-width:1100px; margin-top:4rem; }
  .diagnostic-card { background:var(--white); padding:3rem 2.5rem; border-bottom:3px solid var(--navy); transition:border-color 0.3s, transform 0.3s; }
  .diagnostic-card:hover { border-color:var(--gold); transform:translateY(-4px); }
  .dc-num { font-family:'Shippori Mincho',serif; font-size:3rem; color:rgba(10,22,40,0.07); line-height:1; margin-bottom:0.75rem; }
  .dc-tag { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.75rem; }
  .diagnostic-card h3 { font-family:'Shippori Mincho',serif; font-size:1.1rem; font-weight:600; color:var(--navy); margin-bottom:1rem; line-height:1.5; }
  .diagnostic-card p { font-size:0.87rem; color:var(--gray); line-height:1.9; }

  /* CTA */
  .cta-section { background:var(--navy); padding:8rem 5vw; text-align:center; position:relative; overflow:hidden; }
  .cta-bg { position:absolute; inset:0; background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(201,168,76,0.06) 0%,transparent 70%); }
  .cta-section h2 { font-family:'Shippori Mincho',serif; font-size:clamp(2rem,4vw,3.5rem); color:var(--white); font-weight:700; margin-bottom:1.5rem; line-height:1.4; position:relative; }
  .cta-section > p { color:rgba(250,248,243,0.6); max-width:520px; margin:0 auto 4rem; line-height:2; position:relative; }
  .cta-buttons { display:flex; gap:1.5rem; justify-content:center; flex-wrap:wrap; position:relative; margin-bottom:5rem; }
  .btn-primary { background:var(--gold); color:var(--navy); padding:1rem 2.5rem; font-family:'IBM Plex Mono',monospace; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; font-weight:500; transition:background 0.2s, transform 0.2s; display:inline-flex; align-items:center; gap:0.75rem; }
  .btn-primary:hover { background:var(--gold-light); transform:translateY(-2px); }
  .btn-secondary { border:1px solid rgba(201,168,76,0.4); color:var(--gold); padding:1rem 2.5rem; font-family:'IBM Plex Mono',monospace; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:border-color 0.2s, background 0.2s; display:inline-flex; align-items:center; gap:0.75rem; }
  .btn-secondary:hover { border-color:var(--gold); background:rgba(201,168,76,0.08); }
  .download-form { max-width:780px; margin:0 auto; position:relative; background:rgba(255,255,255,0.03); border:1px solid rgba(201,168,76,0.15); padding:3rem; }
  .download-form h3 { font-family:'Shippori Mincho',serif; font-size:1.45rem; color:var(--white); margin-bottom:2rem; font-weight:600; letter-spacing:0.02em; }
  .download-form .form-sub { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.1em; margin-bottom:2rem; }
  .form-group { margin-bottom:1rem; }
  .form-group input { width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(201,168,76,0.2); color:var(--white); padding:0.85rem 1rem; font-family:'Noto Sans JP',sans-serif; font-size:0.9rem; outline:none; transition:border-color 0.2s; }
  .form-group input::placeholder { color:rgba(250,248,243,0.25); }
  .form-group input:focus { border-color:var(--gold); }
  .form-submit { width:100%; background:var(--gold); color:var(--navy); border:none; padding:1rem; font-family:'IBM Plex Mono',monospace; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; font-weight:500; cursor:pointer; margin-top:0.5rem; transition:background 0.2s; }
  .form-submit:hover { background:var(--gold-light); }

  /* UTIL */
  .gold-divider { width:60px; height:1px; background:var(--gold); margin:2.5rem 0; }
  .tag-chips { display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:2rem; }
  .chip { font-family:'IBM Plex Mono',monospace; font-size:0.6rem; letter-spacing:0.1em; text-transform:uppercase; padding:0.35rem 0.85rem; border:1px solid rgba(201,168,76,0.3); color:var(--gold); }

  /* ANIMATIONS */
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .reveal { opacity:1; transform:none; transition:opacity 0.7s ease, transform 0.7s ease; }
  .will-animate { opacity:0; transform:translateY(24px); }
  .will-animate.visible { opacity:1; transform:none; }

  /* GRID CLASSES (moved from inline styles for mobile override) */
  .rg-2   { display:grid; grid-template-columns:1fr 1fr; }
  .rg-3   { display:grid; grid-template-columns:repeat(3,1fr); }
  .rg-4   { display:grid; grid-template-columns:repeat(4,1fr); }
  .rg-5   { display:grid; grid-template-columns:repeat(5,1fr); }
  .rg-soa { display:grid; grid-template-columns:1fr 40px 1fr; align-items:stretch; }
  .rg-wide { display:grid; grid-template-columns:55% 45%; }

  /* RESPONSIVE — 900px */
  @media (max-width:900px) {
    .chapter-body, .chapter-body.wide { grid-template-columns:1fr; gap:2.5rem; }
    .chapter-header { grid-template-columns:1fr; gap:1rem; }
    .chapter-num { font-size:5rem; }
    .summary-grid, .insight-row, .diagnostic-cards, .failure-cards, .layer-grid { grid-template-columns:1fr; }
    .soa-comparison { grid-template-columns:1fr; }
    .stat-row { grid-template-columns:1fr; }
    .chapter, .summary, .framework-section, .diagnostic-section, .failure-section, .cta-section { padding:5rem 1.5rem; }
    .hero { padding:0 1.5rem 6vh; }
    .cta-buttons { flex-direction:column; align-items:center; }
    footer { flex-direction:column; gap:1rem; text-align:center; }
  }

  /* MOBILE — 768px */
  @media (max-width:768px) {
    html, body { overflow-x:hidden; max-width:100%; }

    /* Sidebar hidden on mobile */
    .report-sidebar { display:none !important; }

    /* Force all multi-column grids to single column */
    .soa-comparison,
    .stat-row,
    .insight-row,
    .diagnostic-cards,
    .failure-cards,
    .summary-grid,
    .layer-grid,
    .chapter-body,
    .chapter-body.wide,
    .chapter-header { display:block !important; }

    /* SOA comparison spacing */
    .soa-col { margin-bottom:2.5rem; padding:2rem 1.5rem !important; }
    .soa-col:last-child { margin-bottom:0; }
    .soa-arrow { display:none !important; }

    /* Summary cards */
    .summary-item { padding:2rem 1.5rem !important; }

    /* Chapter padding */
    .chapter, .summary, .framework-section,
    .diagnostic-section, .failure-section, .cta-section { padding:4rem 1.25rem !important; }

    /* Download form */
    .download-form { padding:2rem 1.25rem !important; max-width:100% !important; }

    /* Hero */
    .hero { min-height:calc(100vh - 6rem); padding:0 1.25rem 5vh; }
    .hero-title { font-size:clamp(2.2rem,9vw,3.5rem) !important; }
    .hero-tagline { font-size:0.9rem !important; }

    /* Chapter number */
    .chapter-num { font-size:4rem !important; }

    /* Grid classes — all collapse to single column */
    .rg-2, .rg-3, .rg-4, .rg-5, .rg-soa, .rg-wide {
      display: block !important;
    }
    .rg-2 > *, .rg-3 > *, .rg-4 > *, .rg-5 > *, .rg-soa > *, .rg-wide > * {
      width: 100% !important;
      min-width: unset !important;
      margin-bottom: 1.5rem;
    }
    .rg-soa > *:nth-child(2) { display: none; } /* hide arrow */

    /* Force override inline display:grid (JS handles most, CSS handles rest) */
    [style*="grid-template-columns"] {
      display: block !important;
      grid-template-columns: unset !important;
    }
    [style*="grid-template-columns"] > * {
      width: 100% !important;
      min-width: unset !important;
    }

    /* Prevent any element from overflowing */
    * { max-width:100%; box-sizing:border-box; word-break:break-word; }
    img, svg { max-width:100% !important; height:auto !important; }

    /* Stat blocks */
    .stat-block { min-width:unset !important; }

    /* Section labels */
    .section-label { font-size:0.65rem !important; }
  }
`;

const htmlBefore = `
<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-meta" style="font-size:0.8rem; letter-spacing:0.2em; color:var(--navy); font-family:'IBM Plex Mono',monospace; margin-bottom:1.5rem; background:var(--gold); display:inline-block; padding:0.5rem 1.25rem; border-radius:2px; font-weight:700;">NSI Report #001 — June 2026</div>
  <h1 class="hero-title">ファン資本の<em>再設計</em><br><span style="font-size:0.6em;font-family:'Shippori Mincho',serif;color:rgba(250,248,243,0.4);">Redesigning Fandomain Capital</span></h1>
  <div class="hero-subtitle" style="font-size:clamp(1rem,2vw,1.3rem); color:rgba(250,248,243,0.7); font-family:'Shippori Mincho',serif; margin-top:0.75rem; letter-spacing:0.03em;">AI時代のSNSマーケティングを、運用から資本形成へ</div>
  <p class="hero-tagline">SNSマーケティングの定石は、届けることに最適化されてきた。しかしAIが情報を中間処理する時代、蓄積されたシグナルの一貫性こそがブランドの評判を決める。本レポートは「Fandomain Capital」という独自概念を軸に、ファンとの関係性を経営資本として捉え直し、その設計・観測・実装の枠組みを提示する。</p>
  <div class="hero-scroll"><div class="scroll-line"></div><span>Scroll</span></div>
</section>

<!-- AUTHOR STRIP -->
<div style="background:rgba(10,22,40,0.97); border-top:1px solid rgba(201,168,76,0.15); border-bottom:1px solid rgba(201,168,76,0.15); padding:1.25rem 5vw;">
  <div style="display:flex; align-items:center; gap:1.5rem; max-width:1100px;">
    <img src="/amano.jpg" 
         style="width:44px; height:44px; border-radius:50%; object-fit:cover; border:1px solid rgba(201,168,76,0.4); flex-shrink:0;" alt="天野彬">
    <div style="display:flex; align-items:baseline; gap:2rem; flex-wrap:wrap;">
      <div style="font-family:'Shippori Mincho',serif; font-size:0.95rem; color:var(--white); font-weight:600;">天野 彬 / Akira Amano</div>
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:rgba(250,248,243,0.4); letter-spacing:0.07em;">CSO, DCXforce｜Founder &amp; Director, NSI｜日本経済新聞電子版Think! エキスパートコメンテーター｜日本広告学会理事｜明治学院大学 非常勤講師｜著書多数</div>
    </div>
  </div>
</div>

<!-- EXECUTIVE SUMMARY -->
<section class="summary" id="summary">
  <div class="section-label">Executive Summary</div>
  <p class="reveal" style="max-width:760px; margin-bottom:2.5rem; font-family:'Shippori Mincho',serif; font-size:clamp(0.95rem,1.5vw,1.05rem); color:var(--navy); line-height:2; opacity:0.85;">本レポートは、<strong>CMO・経営企画・ブランド責任者</strong>、そして<strong>「SNS投資の中長期的な意味を経営層に説明したい」マーケティング責任者</strong>に向けて書かれている。フォロワー数やバズでは語れなくなった投資対効果を、経営の言語で捉え直すための一冊だ。上長や経営会議に渡す資料として使ってもらうことも想定している。</p>
  <div class="summary-grid reveal">
    <div class="summary-item" style="padding:3.5rem;">
      <div class="summary-num">01</div>
      <h3>SNSマーケティングの定石は「蓄積思想」を持っていなかった</h3>
      <p>この約20年、プラットフォームが変わるたびに戦略がリセットされてきた。フォロワー数・エンゲージメント率・リーチという標準KPIはすべて「量」と「瞬間」の指標だ。届けること自体が目的化し、届けた先に何が残るかは問われなかった。「蓄積」という発想が根付かなかった構造的な理由がある。</p>
    </div>
    <div class="summary-item" style="padding:3.5rem;">
      <div class="summary-num">02</div>
      <h3>AIが「誰が言うか」より「何が一貫して言われているか」を重視する時代へ</h3>
      <p>生成AIを利用するユーザーの64%がリンクを開かずに検索を終える。AIの回答に入らないブランドは比較検討のテーブルに載らない。LLMOとShare of Answersの台頭により、記名性が薄れ、シグナルの量と純度が評判を決める構造への転換が起きている。専門家・インフルエンサーの権威より、一貫したファンの語りが強くなる。</p>
    </div>
    <div class="summary-item" style="padding:3.5rem;">
      <div class="summary-num">03</div>
      <h3>Fandomain Capitalという新しい経営資本の概念</h3>
      <p>ブランドがファンダムの文化的領域において築く無形資産。ソーシャルキャピタルの系譜に連なり、【Growth】顧客生涯価値（LTV）の向上・【Resilience】企業価値毀損への耐性・【Discoverability】AIによる推奨・参照獲得という三つの事業効果に転換される。広告費で買えず、バズで膨らませることもできない。設計と蓄積によってのみ拡張される領地だ。</p>
    </div>
    <div class="summary-item" style="padding:3.5rem;">
      <div class="summary-num">04</div>
      <h3>わかっているのにできない——組織・KPI・商流の構造的問題</h3>
      <p>SNS運用・CRM・購買データの分断が、Fandomain Capitalの設計を誰も責任を持って担えない状況を生んでいる。問題はSNS担当者の能力ではなく、構造にある。プロダクト・体験・コミュニケーションの三層を横断する上流からの設計なしに、Fandomain Capitalは積み上がらない。</p>
    </div>
  </div>
</section>

<!-- CHAPTER 1 -->
<section class="chapter" id="ch1">
  <div class="chapter-header reveal">
    <div class="chapter-num">01</div>
    <div class="chapter-title">
      <div class="section-label">Chapter 1</div>
      <h2>SNSマーケティングの現在地<br>——定石の整理と、その限界</h2>
      <div class="chapter-sub">Current State & The Limits of Orthodoxy</div>
    </div>
  </div>

  <div class="reveal" class="rg-2" style="margin-left:-5vw; margin-right:-5vw; width:calc(100% + 10vw); max-width:none; gap:1px; background:rgba(201,168,76,0.15);">
    <div class="stat-item">
      <div class="stat-num">約1.5兆円</div>
      <div class="stat-label">2026年 ソーシャルメディア<br>マーケティング市場規模（予測値）</div>
      <div class="stat-source"><a href="https://www.cyberbuzz.co.jp/2024/11/post-2595.html" target="_blank" style="color:rgba(201,168,76,0.6); text-decoration:underline;">サイバー・バズ／デジタルインファクト調査（2024年）↗</a></div>
    </div>
    <div class="stat-item">
      <div class="stat-num">50.2%</div>
      <div class="stat-label">インターネット広告費の構成比<br>（初めて過半数に達した）</div>
      <div class="stat-source"><a href="https://www.dentsu.co.jp/news/release/2026/0305-011003.html" target="_blank" style="color:rgba(201,168,76,0.6); text-decoration:underline;">電通「日本の広告費」2026年3月 ↗</a></div>
    </div>
    <div class="stat-item">
      <div class="stat-num">64%</div>
      <div class="stat-label">AIの要約のみで満足し<br>リンクを開かないユーザーの割合</div>
      <div class="stat-source"><a href="https://www.moba-ken.jp/project/lifestyle/20260205.html" target="_blank" style="color:rgba(201,168,76,0.6); text-decoration:underline;">NTTドコモ モバイル社会研究所（2026年2月）↗</a></div>
    </div>
    <div class="stat-item">
      <div class="stat-num">68%</div>
      <div class="stat-label">米国Google検索の<br>ゼロクリック率（2026年上半期）</div>
      <div class="stat-source"><a href="https://sparktoro.com/blog/zero-click-searches-google-2026/" target="_blank" style="color:rgba(201,168,76,0.6); text-decoration:underline;">Similarweb / SparkToro（2026）↗</a><br><span style="font-size:0.7rem; color:rgba(201,168,76,0.4);">2024年比7.5pt増、過去10年で最大の変化幅</span></div>
    </div>
  </div>

  <div class="chapter-body wide reveal" style="margin-top:5rem;">
    <div class="body-text">
      <p>この約20年間、SNSマーケティングはニュースに事欠かない革新の時代を過ごした。Facebookの浸透、Twitterの勃興、Instagramのビジュアルコミュニケーション革命、TikTokの短尺動画とアルゴリズムによるゲームチェンジ、そしてBeRealの登場やTwitterのXへのリブランディング...など。新しいプラットフォームが生まれるたびに新規性のある戦略が謳われた。「正解」が定まる前の、幸運な発展期だったともいえる。</p>
      <div class="gold-divider"></div>
      <p>しかしいま、その熱狂はサチュレーションしつつある。そして、誰もが「正しいやり方に基づいてちゃんと運用していこう」という結論に着地した。</p>
      <p style="margin-top:1.5rem;">概ね、目的は認知→共感→購買という三段階のファネルに対応させ、手法はコンテンツマーケティング・インフルエンサー活用・コミュニティ形成など。計測はフォロワー数・エンゲージメント率・リーチなどのKPIである。そして、目的には据えないが、バズらせることも狙っていこうという距離感。そのような標準化された解法は、しかし一方で「届けること」に最適化されているともいえる。</p>
      <p style="margin-top:1.5rem;">では届けた先に何が残るのか――その時間軸に向き合うことこそが、SNSマーケティングの次のフェーズを開くだろう。その鍵を握るのが、<strong>「蓄積思想」</strong>である。</p>
    </div>
  </div>

  <!-- デュアルファネル図 -->
  <div class="reveal" style="max-width:1100px; margin-top:3rem;">
    <svg width="100%" viewBox="0 0 680 450" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-ch1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#8a8578" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>

      <!-- ファネルラベル -->
      <text x="170" y="18" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(10,22,40,0.45)">新規顧客獲得</text>

      <!-- 上部ファネル（Purple系） -->
      <polygon points="68,26 272,26 238,74 102,74" fill="rgba(83,74,183,0.12)" stroke="rgba(83,74,183,0.4)" stroke-width="0.8"/>
      <text x="170" y="53" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#3C3489" font-weight="500">認知</text>

      <polygon points="102,76 238,76 210,124 130,124" fill="rgba(83,74,183,0.18)" stroke="rgba(83,74,183,0.4)" stroke-width="0.8"/>
      <text x="170" y="102" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#3C3489" font-weight="500">興味・検討</text>

      <polygon points="130,126 210,126 194,164 146,164" fill="rgba(10,22,40,0.1)" stroke="rgba(10,22,40,0.25)" stroke-width="0.8"/>
      <text x="170" y="147" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#0a1628" font-weight="500">購買</text>

      <!-- くびれ -->
      <line x1="170" y1="164" x2="170" y2="180" stroke="rgba(10,22,40,0.2)" stroke-width="0.5" stroke-dasharray="3 2"/>

      <!-- 下部ファネル（Teal系） -->
      <polygon points="146,182 194,182 210,230 130,230" fill="rgba(15,110,86,0.12)" stroke="rgba(15,110,86,0.4)" stroke-width="0.8"/>
      <text x="170" y="208" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#0F6E56" font-weight="500">リピート・育成</text>

      <polygon points="130,232 210,232 238,280 102,280" fill="rgba(15,110,86,0.18)" stroke="rgba(15,110,86,0.4)" stroke-width="0.8"/>
      <text x="170" y="258" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#0F6E56" font-weight="500">ロイヤルカスタマー化</text>

      <text x="170" y="298" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(10,22,40,0.45)">既存顧客育成</text>

      <!-- 縦区切り -->
      <line x1="305" y1="14" x2="305" y2="306" stroke="rgba(10,22,40,0.12)" stroke-width="0.5" stroke-dasharray="4 3"/>

      <!-- 施策ヘッダー -->
      <text x="320" y="18" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(10,22,40,0.6)" font-weight="500">代表的な施策・打ち手</text>

      <!-- 認知 -->
      <line x1="272" y1="50" x2="312" y2="50" stroke="#8a8578" stroke-width="0.7" marker-end="url(#arr-ch1)"/>
      <rect x="320" y="26" width="344" height="48" rx="4" fill="rgba(83,74,183,0.06)" stroke="rgba(83,74,183,0.25)" stroke-width="0.5"/>
      <text x="332" y="45" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#3C3489">インプレッション広告、インフルエンサー投稿</text>
      <text x="332" y="60" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#3C3489">Reels/TikTok拡散、ハッシュタグキャンペーン</text>

      <!-- 興味・検討 -->
      <line x1="238" y1="100" x2="312" y2="100" stroke="#8a8578" stroke-width="0.7" marker-end="url(#arr-ch1)"/>
      <rect x="320" y="76" width="344" height="48" rx="4" fill="rgba(83,74,183,0.08)" stroke="rgba(83,74,183,0.25)" stroke-width="0.5"/>
      <text x="332" y="95" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#3C3489">ブランドコンテンツ、口コミ・レビュー促進</text>
      <text x="332" y="110" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#3C3489">比較コンテンツ、リターゲティング広告</text>

      <!-- 購買 -->
      <line x1="194" y1="145" x2="312" y2="145" stroke="#8a8578" stroke-width="0.7" marker-end="url(#arr-ch1)"/>
      <rect x="320" y="126" width="344" height="38" rx="4" fill="rgba(10,22,40,0.05)" stroke="rgba(10,22,40,0.15)" stroke-width="0.5"/>
      <text x="332" y="147" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="rgba(10,22,40,0.65)">購買後のSNS投稿促進、ソーシャルコマース連携</text>

      <line x1="320" y1="176" x2="664" y2="176" stroke="rgba(10,22,40,0.08)" stroke-width="0.5" stroke-dasharray="3 2"/>

      <!-- リピート・育成 -->
      <line x1="210" y1="208" x2="312" y2="208" stroke="#8a8578" stroke-width="0.7" marker-end="url(#arr-ch1)"/>
      <rect x="320" y="182" width="344" height="48" rx="4" fill="rgba(15,110,86,0.06)" stroke="rgba(15,110,86,0.25)" stroke-width="0.5"/>
      <text x="332" y="201" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#0F6E56">顧客限定コンテンツ、上位プロダクト紹介</text>
      <text x="332" y="216" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#0F6E56">会員SNSコミュニティ、パーソナライズドDM</text>

      <!-- ロイヤルカスタマー -->
      <line x1="238" y1="256" x2="312" y2="256" stroke="#8a8578" stroke-width="0.7" marker-end="url(#arr-ch1)"/>
      <rect x="320" y="232" width="344" height="48" rx="4" fill="rgba(15,110,86,0.08)" stroke="rgba(15,110,86,0.25)" stroke-width="0.5"/>
      <text x="332" y="251" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#0F6E56">アンバサダー施策、ファンコミュニティ運営</text>
      <text x="332" y="266" font-family="Noto Sans JP,sans-serif" font-size="10.5" fill="#0F6E56">共創・参加型コンテンツ、口コミ拡散の設計</text>

      <!-- 区切り線 -->
      <line x1="20" y1="314" x2="660" y2="314" stroke="rgba(10,22,40,0.15)" stroke-width="0.5"/>
      <rect x="178" y="305" width="284" height="18" rx="3" fill="var(--off-white)"/>
      <text x="320" y="317" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="10" fill="rgba(10,22,40,0.4)">▲ 標準的な顧客育成の設計図</text>

      <!-- ミッシングリンク -->
      <rect x="20" y="326" width="640" height="72" rx="6" fill="rgba(10,22,40,0.04)" stroke="rgba(10,22,40,0.12)" stroke-width="0.5"/>
      <text x="36" y="347" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#0a1628" font-weight="500">しかし——顧客育成とブランド価値の蓄積の間に、ミッシングリンクがある。</text>
      <text x="36" y="364" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(10,22,40,0.55)">ファネルはロイヤルカスタマー化で「完了」する。しかしブランドへの信頼は、個々の顧客体験を超えて、</text>
      <text x="36" y="380" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(10,22,40,0.55)">ファンダム全体に蓄積されていくものだ。その集合的な語りと時間軸は、このファネルの外にある。</text>

      <!-- 着地 -->
      <text x="340" y="416" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="rgba(10,22,40,0.4)">その時間軸に向き合うことが、SNSマーケティングの次のフェーズを開く。</text>
      <text x="340" y="436" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="13" fill="#0a1628" font-weight="600">その鍵を握るのが、「蓄積思想」である。</text>
    </svg>
  </div>
  <!-- Chapter CTA -->
  <div class="reveal" style="max-width:1100px; margin-top:5rem;">
    <a href="#download" style="display:flex; align-items:center; justify-content:space-between; gap:2rem; background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.25); padding:2rem 2.5rem; text-decoration:none; flex-wrap:wrap;">
      <p style="font-family:'Shippori Mincho',serif; font-size:clamp(0.95rem,1.5vw,1.1rem); color:var(--navy); line-height:1.7; font-weight:600; margin:0;">SNS投資の意味が変わった。その全体像を、Framework Kitで整理する。</p>
      <span style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; white-space:nowrap; flex-shrink:0;">Framework Kitを入手 →</span>
    </a>
  </div>

</section>

<!-- CHAPTER 2 -->
<section class="chapter chapter-dark" id="ch2">
  <div class="chapter-header reveal">
    <div class="chapter-num">02</div>
    <div class="chapter-title">
      <div class="section-label">Chapter 2</div>
      <h2>AIがゲームを変える<br>——情報環境の構造的転換</h2>
      <div class="chapter-sub">AI as a Game Changer / Structural Shift in Information</div>
    </div>
  </div>

  <div class="chapter-body wide reveal">
    <div class="body-text">
      <p>「検索窓にキーワードを入れ、結果ページを読み比べる」という情報行動が変わり始めている。チャット型AIに問いかけると、要約された「答え」が返ってくる——ユーザーが本当に求めているのは選択肢の羅列ではなく、「結局、私にとってベストは何か」という回答だからだ。</p>
      <div class="gold-divider"></div>
      <p>Googleは2026年5月、この変化を正面から認めた。「<a href="https://blog.google/intl/ja-jp/products/explore-get-answers/search-io-2026/" target="_blank" style="color:var(--gold-light); text-decoration:underline;">検索エンジンの強みとAIの強みを融合させる</a>」という表現が示す通り、SEOとLLMOは対立ではなく、連続線上にある進化だ。検索行動は二分されるのではなく、グラデーションとして移行していく。</p>
      <p style="margin-top:1.5rem;">ただし方向性は明確だ。生成AIを利用するユーザーの64%がリンクを開かずに検索を終える。AIの回答に入らないブランドは、比較検討のテーブルに載りにくくなる。「発見される場所」は確実に移動しており、指標は「インプレッション」から<strong style="color:var(--gold-light);">「リファレンス（参照・引用）」</strong>へと重心を移していく。</p>
    </div>
    <div>
      <div class="pull-quote">
        AIは、蓄積された一貫性のあるシグナルに反応しやすい。<strong style="color:var(--gold);">複数の情報源にまたがって繰り返し確認できるオーソリティ・信頼・支持の文脈は、AIの回答生成において参照されやすい。</strong>何が、どれだけ一貫して語られているか——それが問われる時代になった。
        <span style="display:block; margin-top:1.25rem; font-family:'Noto Sans JP',sans-serif; font-size:0.8rem; font-weight:400; color:rgba(250,248,243,0.55); line-height:1.9;">——これは大規模言語モデルが複数ソースで一貫して言及されるエンティティを参照・推奨しやすいという観測的な傾向にもとづく。NSIはこれを厳密に証明された因果則としてではなく、設計と検証の出発点となる<strong style="color:rgba(201,168,76,0.8); font-weight:600;">作業仮説</strong>として置く。</span>
      </div>
    </div>
  </div>

  <!-- SEO→LLMO グラデーション図 -->
  <div class="soa-visual reveal">
    <div class="soa-header">
      <h3>SEOからLLMOへ——連続線上にある変化</h3>
      <span>Share of Answers</span>
    </div>
    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:2.5rem; margin-bottom:1rem;">
      <p style="font-size:0.88rem; color:rgba(250,248,243,0.6); line-height:2; margin-bottom:2rem;">GoogleはSEOとAI検索を「対立」ではなく「融合」と位置づけている。検索行動は一夜にして切り替わるのではなく、グラデーションとして移行していく。企業が問われるのは「どちらに対応するか」ではなく、<strong style="color:var(--white);">「両者にまたがって一貫したシグナルを蓄積できているか」</strong>だ。</p>
      <div class="rg-soa" style="gap:0; align-items:stretch;">
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); padding:2rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(250,248,243,0.35); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1rem;">SEO の重力</div>
          <ul class="soa-items">
            <li>キーワード順位・クリック数</li>
            <li>被リンク・ドメイン権威</li>
            <li>「ページに来させる」設計</li>
            <li>誰がリンクしているかが重要</li>
          </ul>
        </div>
        <div style="display:flex; align-items:center; justify-content:center; background:rgba(201,168,76,0.06);">
          <span style="font-family:'Shippori Mincho',serif; font-size:1.2rem; color:rgba(201,168,76,0.5);">→</span>
        </div>
        <div style="background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.2); padding:2rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1rem;">LLMO の重力</div>
          <ul class="soa-items">
            <li>AIに「引用される」情報設計</li>
            <li>情報の純度・一貫性が指標</li>
            <li>「AIに語らせる」設計</li>
            <li>何が一貫して言われているかが重要</li>
          </ul>
        </div>
      </div>
      <div style="margin-top:1.5rem; padding:1rem 1.5rem; background:rgba(201,168,76,0.06); border-left:2px solid rgba(201,168,76,0.4);">
        <p style="font-size:0.85rem; color:rgba(250,248,243,0.65); line-height:1.9;">共通する本質：<strong style="color:var(--white);">信頼できる情報が、複数の文脈で一貫して蓄積されていること。</strong>SEOもLLMOも、その点では同じ問いに答えを求めている。</p>
      </div>
    </div>
  </div>

  <div class="insight-row reveal">
    <div class="insight-card">
      <div class="ic-label">Key Shift 01</div>
      <h4>発見される場所が移動する</h4>
      <p>AIが情報を中間処理することで、ユーザーがブランドに「たどり着く場所」が変わる。検索結果ページを読み比べる行動は、AIに問いかけて「答え」を受け取る行動へと移行しつつある。指標は「インプレッション」から「リファレンス（参照・引用）」へ——ブランドが比較検討のテーブルに載るための条件そのものが変わり始めている。</p>
    </div>
    <div class="insight-card">
      <div class="ic-label">Key Shift 02</div>
      <h4>インフルエンサーの記名性が薄れる</h4>
      <p>AIが情報を中間処理する文脈では、「誰が言ったか」という記名性は前面に出にくくなる。AIが拾うのは個々の発信者の存在感ではなく、複数の情報源にまたがって繰り返し確認できる評価や文脈だ。インフルエンスの重心は「誰が大きな声で言ったか」から「何がどれだけ一貫して語られているか」へと移し始めている。</p>
    </div>
    <div class="insight-card">
      <div class="ic-label">Key Shift 03</div>
      <h4>UGCが、AIの学習文脈になる</h4>
      <p>AIショッピングエージェントを使う消費者の約3人に2人が「SNSコンテンツはAIにとって有用な学習データだ」と回答している（Horizon Media, 2026）。これは単なるSNS活用論の延長ではない。SNSの役割が、人間への直接的な説得から、AIへの間接的な文脈形成へと構造的に変わりつつあることを意味する。ファンが語り続けるブランドは、人間の共感と同時に、AIの「理解」の素地をも形成していく。</p>
    </div>
  </div>

  <div class="reveal" style="max-width:1100px; margin-top:3rem; padding:2rem 3rem; background:rgba(201,168,76,0.06); border-left:3px solid var(--gold);">
    <p style="font-family:'Shippori Mincho',serif; font-size:1.05rem; color:var(--white); line-height:1.9;">AIは「誰が言ったか」を圧縮する。人間は「どのブランドを信じるか」をより重視する——だからこそ、語られ続けることが資本になる。</p>
  </div>

  <!-- Chapter CTA -->
  <div class="reveal" style="max-width:1100px; margin-top:5rem;">
    <a href="#download" style="display:flex; align-items:center; justify-content:space-between; gap:2rem; background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.25); padding:2rem 2.5rem; text-decoration:none; flex-wrap:wrap;">
      <p style="font-family:'Shippori Mincho',serif; font-size:clamp(0.95rem,1.5vw,1.1rem); color:var(--navy); line-height:1.7; font-weight:600; margin:0;">AIに読まれるブランドの条件を、診断リストで確認する。</p>
      <span style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; white-space:nowrap; flex-shrink:0;">Framework Kitを入手 →</span>
    </a>
  </div>

</section>

<!-- CHAPTER 3 / FRAMEWORK -->
<section class="framework-section" id="ch3">
  <div class="chapter-header reveal" style="max-width:1100px;">
    <div class="chapter-num">03</div>
    <div class="chapter-title">
      <div class="section-label">Chapter 3</div>
      <h2 style="color:var(--white);">Fandomain Capitalの設計<br>——ブランドの領地をいかに築くか</h2>
      <div class="chapter-sub">Designing Fandomain Capital</div>
    </div>
  </div>

  <!-- 3つの問題提起 -->
  <div class="reveal" style="max-width:1100px; margin-bottom:4rem;">
    <div class="section-label" style="margin-bottom:2rem;">Fandomain Capitalが解決する3つの問題</div>
    <div class="rg-3" style="gap:1px; background:rgba(201,168,76,0.15);">
      <div style="background:var(--navy); padding:2.5rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:1rem;">問題 01</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1rem; font-weight:600; color:var(--white); margin-bottom:0.75rem; line-height:1.5;">SNS施策が単発で終わり、資産化されない</h4>
        <p style="font-size:0.85rem; color:rgba(250,248,243,0.55); line-height:1.9;">キャンペーンが終わると消える。バズっても翌月には忘れられる。蓄積思想のないSNS投資は、費用であって資産にならない。</p>
      </div>
      <div style="background:var(--navy); padding:2.5rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:1rem;">問題 02</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1rem; font-weight:600; color:var(--white); margin-bottom:0.75rem; line-height:1.5;">AI時代に、ブランドが比較検討に載らなくなる</h4>
        <p style="font-size:0.85rem; color:rgba(250,248,243,0.55); line-height:1.9;">AIの回答に入らないブランドは、生活者の選択肢に浮かばない。一貫したシグナルの蓄積なしに、Share of Answersは獲得できない。</p>
      </div>
      <div style="background:var(--navy); padding:2.5rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:1rem;">問題 03</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1rem; font-weight:600; color:var(--white); margin-bottom:0.75rem; line-height:1.5;">経営層に、SNS投資の中長期価値を説明できない</h4>
        <p style="font-size:0.85rem; color:rgba(250,248,243,0.55); line-height:1.9;">フォロワー数やエンゲージメント率では、投資対効果を語れない。Fandomain Capitalという資本概念が、経営言語への翻訳を可能にする。</p>
      </div>
    </div>
  </div>

  <div class="framework-definition reveal">
    <div style="font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.25rem;">NSI Original Concept</div>
    <p style="font-size:0.88rem; color:rgba(250,248,243,0.55); line-height:1.9; margin-bottom:2rem; padding-bottom:2rem; border-bottom:1px solid rgba(201,168,76,0.15);"><strong style="color:rgba(250,248,243,0.8);">Fandomain Capital</strong>は、<strong style="color:rgba(250,248,243,0.8);">Fandom（ファンダム）</strong>と<strong style="color:rgba(250,248,243,0.8);">Domain（領域・領地）</strong>を一語に溶け合わせたNSIの造語だ。Fandom の末尾に Domain が重なり、綴りの中に「領地」がそのまま残る。ブランドがファンの語りの中に築く「文化的な領地」を、経営資本として捉え直す——その概念的意図を一語に込めている。</p>
    <p><strong>Fandomain Capital</strong>とは、ブランドがファンダムの文化的領域において築く、持続的に影響力を発揮する無形資産である。ソーシャルキャピタルと同様に、信頼・共鳴・誠実さの積み重ねによってのみ蓄積され、<strong>【Growth】顧客生涯価値（LTV）の向上・【Resilience】企業価値毀損への耐性・【Discoverability】AIによる推奨・参照獲得</strong>という三つの事業効果に転換される。<strong>広告費で買えず、バズで一時的に膨らませることもできない。積み上げるしかない。</strong></p>
  </div>

  <div class="chapter-body wide reveal" style="max-width:1100px; margin-bottom:5rem;">
    <div class="body-text" style="color:rgba(250,248,243,0.75);">
      <p>「ファンを大切に」という言説は業界に広まった。しかしその結果、「ファン」という言葉が軽くなりすぎている。フォロワーもファン、エンゲージした人もファン、一度買った人もファン——すべてが「ファン」と呼ばれる現状がある。概念のインフレは、実務的な意味を失わせる。</p>
      <div class="gold-divider"></div>
      <p>「資本」という言葉に違和感を持った読者こそ、正しい感覚を持っている。しかしここで言う「資本」はロバート・パットナムのソーシャルキャピタル（社会関係資本）と同じ系譜にある概念だ。信頼・規範・ネットワークの蓄積が社会全体の生産性を上げるように、Fandomain Capitalはブランドとファンの双方が豊かになる関係性の蓄積から生まれる。広告費で買えず、一方が他方を搾取することでは積み上がらない。</p>
      <p style="margin-top:1.5rem;">この蓄積は、三つの事業効果に転換される。<strong style="color:var(--gold-light);">【Growth】</strong>ファンとの関係性が深まるほど顧客生涯価値（LTV）は上がり、リピート・推奨・単価向上という形で売上に現れる。<strong style="color:var(--gold-light);">【Resilience】</strong>炎上や競合参入の危機において、蓄積されたファンの語りがブランドを守るナラティブの防衛線になる。<strong style="color:var(--gold-light);">【Discoverability】</strong>一貫したシグナルが蓄積されたブランドは、AIの回答に参照されやすくなり、比較検討のテーブルに載り続ける。</p>
      <p style="margin-top:1.5rem;">本レポートで「ファン」と呼ぶのは、一度の購買者や数値上のフォロワーではない。<strong style="color:var(--gold-light);">ブランドについて自発的に語り、その語りが他者やAIに参照されうる状態にある人々</strong>——これが本レポートの操作的定義だ。観測の単位は個人の熱量ではなく、語りの継続性と一貫性に置く。後述するAxis 01「関係性の深さ」は、この定義を測定可能な形に翻訳したものである。</p>
      <p style="margin-top:1.5rem;">ファンとの関係を経営の主題に据える議論は、すでに豊かな蓄積がある。先行する論考の多くは、生活者の<strong style="color:var(--gold-light);">態度や愛着</strong>——いかにファンの心をつかみ、関係を育てるか——に光を当ててきた。本レポートはその知見の上に立ちながら、視点をもう一段ずらす。ファンとの関係を<strong style="color:var(--gold-light);">事業ファイナンスの領域にまで架橋し</strong>、LTV・リスクプレミアム・企業価値という経営言語で観測・設計しようとする点に、Fandomain Capitalの固有性がある。態度の議論を、資本の会計に接続する試みだ。</p>
      <p style="margin-top:1.5rem;">Fandomain Capitalが従来のファン概念と決定的に異なるのは、<strong style="color:var(--gold-light);">「ファンをつくる」という発想を超えている</strong>点だ。資本は設計によって積み上がる。その設計の全体像を示したのが、Fandomain Capital Loopだ。</p>
      <p style="margin-top:1.5rem;">このループはPESOという既存の情報環境の枠組みを外環として取り込み、生活者の心理プロセスを内環として組み合わせた二重構造になっている。なぜ線形モデルではなくループ構造なのか。AISASのような線形モデルは購買という「終点」を想定する。しかしFandomain Capitalに終点はない。ファンとの関係は購買後も続き、語りが再解釈され、さらに深い体験への期待が生まれる。ループが一周するたびに資本は螺旋状に深まっていく。</p>
    </div>
    <div>
      <div class="pull-quote" style="background:rgba(201,168,76,0.08); border-left-color:var(--gold); color:var(--white); padding:2rem 2.5rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.5rem;">3つの事業効果</div>
        <div style="margin-bottom:1.5rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.8rem; color:var(--gold); margin-bottom:0.6rem;">【Growth】LTV向上</div>
          <p style="font-size:0.95rem; color:rgba(250,248,243,0.75); line-height:1.9;">リピート率・推奨率・単価の上昇。ファンは繰り返し買い、他者に語る。</p>
        </div>
        <div style="border-top:1px solid rgba(201,168,76,0.15); padding-top:1.5rem; margin-bottom:1.5rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.8rem; color:var(--gold); margin-bottom:0.6rem;">【Resilience】企業価値毀損への耐性</div>
          <p style="font-size:0.95rem; color:rgba(250,248,243,0.75); line-height:1.9;">炎上や競合参入の局面において、蓄積されたファンの語りがナラティブ毀損を緩和し、将来キャッシュフロー期待の低下とリスクプレミアム上昇を抑える。これは単なるブランド危機対応ではなく、企業価値毀損への耐性である。</p>
        </div>
        <div style="border-top:1px solid rgba(201,168,76,0.15); padding-top:1.5rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.8rem; color:var(--gold); margin-bottom:0.6rem;">【Discoverability】AI推奨・参照獲得</div>
          <p style="font-size:0.95rem; color:rgba(250,248,243,0.75); line-height:1.9;">一貫したシグナルがAIの回答に参照されやすくなる。Share of Answersを獲得し、比較検討のテーブルに載り続ける。</p>
        </div>
      </div>
    </div>
  </div>

  </div>

  <!-- コラム：なぜループでなければならないのか -->
  <div class="reveal" style="max-width:1100px; margin-bottom:5rem;">
    <div style="border-left:3px solid var(--gold); background:rgba(201,168,76,0.04); padding:3.5rem 3.5rem 3.5rem 3rem;">
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.5rem;">Column</div>
      <h3 style="font-family:'Shippori Mincho',serif; font-size:clamp(1.2rem,2vw,1.6rem); font-weight:700; color:var(--white); line-height:1.5; margin-bottom:2.5rem;">なぜ、ループでなければならないのか</h3>

      <p style="font-size:0.97rem; color:rgba(250,248,243,0.8); line-height:2.2; margin-bottom:1.5rem;">ファンマーケティングの論者のほとんどが見落としていることがある。ファンの体験は、体験した瞬間に完成しない、ということだ。</p>

      <p style="font-size:0.97rem; color:rgba(250,248,243,0.8); line-height:2.2; margin-bottom:1.5rem;">購買直後の満足感、初めて使ったときの感動——それらは確かにリアルな体験だ。しかし、その体験の「意味」は、その後の時間の中で変わり続ける。他のファンの語りに触れたとき、ブランドが新たな姿勢を見せたとき、あるいは自分自身の文脈が変わったとき、人はかつての体験を遡及的に読み直す。「あのとき感じたのは、こういうことだったのか」と。</p>

      <p style="font-size:0.97rem; color:rgba(250,248,243,0.8); line-height:2.2; margin-bottom:1.5rem;">（これは哲学者・東浩紀が「訂正可能性」と呼ぶ概念と相似する。過去の出来事は変えられないが、過去の意味は現在によって書き換えられ続ける、という思想だ。）</p>

      <p style="font-size:0.97rem; color:rgba(250,248,243,0.8); line-height:2.2; margin-bottom:1.5rem;">これがFandomain Capital Loopを線形モデルではなくループ構造にした理由の核心だ。体験→語りという二段階で完結するモデル——AISASのような購買ファネルの延長線上にある発想——では、この「意味の更新」が捉えられない。<strong style="color:var(--white);">再解釈・深化という第三の段階を置かなければ、ファンとブランドの関係が時間とともに深まっていくメカニズムを記述できない。</strong></p>

      <p style="font-size:0.97rem; color:rgba(250,248,243,0.8); line-height:2.2; margin-bottom:1.5rem;">そしてこれは、ブランド自身にも同様に起きる。Patagoniaは創業以来、「アウトドアウェアのメーカー」から「環境活動家の集団」へ、そして「反消費主義の思想体」へと、自己の意味を語り直し続けてきた。製品は変わっていない。変わったのは、その製品をめぐる語りの文脈だ。そしてその語り直しのたびに、ファンとの関係は一段深い層に移行してきた。</p>

      <p style="font-size:0.97rem; color:rgba(250,248,243,0.8); line-height:2.2; margin-bottom:2.5rem;">マーケティングの効果測定がこの現象を捉えられないのは、時間軸が短すぎるからだ。キャンペーン終了後3ヶ月でROIを測定するとき、「再解釈・深化」はまだ起きていない。あるいはすでに起きているのに、スナップショットの指標には映らない。</p>

      <div style="border-top:1px solid rgba(201,168,76,0.2); padding-top:2rem;">
        <p style="font-family:'Shippori Mincho',serif; font-size:1.05rem; color:var(--white); line-height:1.9; font-weight:600;">ループが「繰り返し」ではなく「螺旋」である理由がここにある。一周するたびに同じ場所に戻るのではなく、意味の層が厚くなって戻ってくる。それがFandomain Capitalが「資本として積み上がる」という比喩の実態だ。資本は瞬間に生まれない。時間の中でしか育たない。</p>
      </div>
    </div>
  </div>


  <!-- Loop diagram — 白背景・アニメーション付き -->
  <div class="reveal" style="background:var(--white); margin:0 -5vw; padding:5rem 5vw; margin-bottom:0;">
    <div style="max-width:1100px; margin:0 auto;">
      <div class="section-label" style="justify-content:center; margin-bottom:2rem; color:var(--navy);">Fandomain Capital Loop</div>

      <div style="text-align:center;">
        <svg id="fandomin-loop" class="loop-diagram" viewBox="0 0 680 700" xmlns="http://www.w3.org/2000/svg" style="max-width:660px;">
          <defs>
            <marker id="arrowG2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </marker>
            <marker id="arrowT2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="#1a6b5a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </marker>
            <!-- 内環アニメーション用グロー -->
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- 外環：四角形 -->
          <polygon points="340,120 570,370 340,600 110,370" fill="none" stroke="rgba(10,22,40,0.15)" stroke-width="1.2" stroke-dasharray="5 4"/>

          <!-- PESO ノード（白背景に合わせてNavy系） -->
          <rect x="265" y="86" width="150" height="48" rx="6" fill="rgba(10,22,40,0.05)" stroke="rgba(10,22,40,0.2)" stroke-width="0.8"/>
          <text x="340" y="108" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" fill="#0a1628" font-weight="500">Paid</text>
          <text x="340" y="124" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.45)">広告・プロモーション</text>

          <rect x="490" y="344" width="150" height="48" rx="6" fill="rgba(10,22,40,0.05)" stroke="rgba(10,22,40,0.2)" stroke-width="0.8"/>
          <text x="565" y="366" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" fill="#0a1628" font-weight="500">Owned</text>
          <text x="565" y="382" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.45)">製品・体験・CRM</text>

          <rect x="265" y="566" width="150" height="48" rx="6" fill="rgba(10,22,40,0.05)" stroke="rgba(10,22,40,0.2)" stroke-width="0.8"/>
          <text x="340" y="588" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" fill="#0a1628" font-weight="500">Shared</text>
          <text x="340" y="604" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.45)">UGC・ナラティブ</text>

          <rect x="40" y="344" width="150" height="48" rx="6" fill="rgba(10,22,40,0.05)" stroke="rgba(10,22,40,0.2)" stroke-width="0.8"/>
          <text x="115" y="366" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" fill="#0a1628" font-weight="500">Earned</text>
          <text x="115" y="382" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.45)">PR・メディア露出</text>

          <!-- 外環矢印 -->
          <path d="M395 134 Q490 220 492 344" fill="none" stroke="rgba(10,22,40,0.2)" stroke-width="0.8" marker-end="url(#arrowG2)"/>
          <path d="M492 392 Q490 490 395 566" fill="none" stroke="rgba(10,22,40,0.2)" stroke-width="0.8" marker-end="url(#arrowG2)"/>
          <path d="M265 590 Q185 510 188 392" fill="none" stroke="rgba(10,22,40,0.2)" stroke-width="0.8" marker-end="url(#arrowG2)"/>
          <path d="M188 344 Q185 230 265 150" fill="none" stroke="rgba(10,22,40,0.2)" stroke-width="0.8" marker-end="url(#arrowG2)"/>

          <!-- 内環：三角形（アニメーション） -->
          <polygon id="inner-loop" points="340,230 452,424 228,424" fill="none" stroke="#1a6b5a" stroke-width="1.4" stroke-dasharray="3 3">
            <animate id="anim-loop" attributeName="stroke-opacity" values="0.4;1;0.4" dur="3s" begin="indefinite" repeatCount="indefinite"/>
          </polygon>

          <!-- 内環ノード -->
          <rect x="262" y="200" width="156" height="52" rx="6" fill="rgba(26,107,90,0.12)" stroke="#1a6b5a" stroke-width="0.8"/>
          <text x="340" y="222" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="#0a1628" font-weight="500">体験・感動</text>
          <text x="340" y="238" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.5)">CXの質・プロダクト</text>

          <rect x="362" y="398" width="156" height="52" rx="6" fill="rgba(26,107,90,0.12)" stroke="#1a6b5a" stroke-width="0.8"/>
          <text x="440" y="420" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="#0a1628" font-weight="500">社会化・共鳴</text>
          <text x="440" y="436" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.5)">語り・分かち合い</text>

          <rect x="162" y="398" width="156" height="52" rx="6" fill="rgba(26,107,90,0.12)" stroke="#1a6b5a" stroke-width="0.8"/>
          <text x="240" y="420" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="11" fill="#0a1628" font-weight="500">再解釈・深化</text>
          <text x="240" y="436" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.5)">語られるたびに豊かになる</text>

          <!-- 内環矢印（アニメーション） -->
          <path id="arrow1" d="M402 252 Q448 326 414 398" fill="none" stroke="#1a6b5a" stroke-width="1.4" marker-end="url(#arrowT2)">
            <animate id="anim-a1" attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" begin="indefinite" repeatCount="indefinite"/>
          </path>
          <path id="arrow2" d="M362 423 Q340 468 318 423" fill="none" stroke="#1a6b5a" stroke-width="1.4" marker-end="url(#arrowT2)">
            <animate id="anim-a2" attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" begin="indefinite" repeatCount="indefinite"/>
          </path>
          <path id="arrow3" d="M276 398 Q232 326 278 252" fill="none" stroke="#1a6b5a" stroke-width="1.4" marker-end="url(#arrowT2)">
            <animate id="anim-a3" attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" begin="indefinite" repeatCount="indefinite"/>
          </path>

          <!-- AI Signal（外環4辺すべてに一対一対応） -->
          <!-- Paid→Owned（右上辺） -->
          <rect x="484" y="224" width="72" height="16" rx="3" fill="rgba(60,52,137,0.1)"/>
          <text x="520" y="236" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="#3c3489" font-style="italic">AI Signal</text>

          <!-- Owned→Shared（右下辺） -->
          <rect x="484" y="490" width="72" height="16" rx="3" fill="rgba(60,52,137,0.1)"/>
          <text x="520" y="502" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="#3c3489" font-style="italic">AI Signal</text>

          <!-- Shared→Earned（下辺） -->
          <rect x="194" y="600" width="72" height="16" rx="3" fill="rgba(60,52,137,0.1)"/>
          <text x="230" y="612" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="#3c3489" font-style="italic">AI Signal</text>

          <!-- Earned→Paid（左辺） -->
          <rect x="124" y="224" width="72" height="16" rx="3" fill="rgba(60,52,137,0.1)"/>
          <text x="160" y="236" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="#3c3489" font-style="italic">AI Signal</text>

          <!-- 中央：Fandomain Capital（積層アニメーション） -->
          <rect id="layer3" x="298" y="348" width="84" height="10" rx="3" fill="#c9a84c" opacity="0">
            <animate id="anim-l3" attributeName="opacity" values="0;0.35;0.5" dur="2s" begin="indefinite" fill="freeze"/>
          </rect>
          <rect id="layer2" x="304" y="358" width="72" height="10" rx="3" fill="#c9a84c" opacity="0">
            <animate id="anim-l2" attributeName="opacity" values="0;0.45;0.6" dur="2s" begin="indefinite" fill="freeze"/>
          </rect>
          <rect id="layer1" x="310" y="368" width="60" height="10" rx="3" fill="#c9a84c" opacity="0">
            <animate id="anim-l1" attributeName="opacity" values="0;0.6;0.75" dur="2s" begin="indefinite" fill="freeze"/>
          </rect>
          <rect x="296" y="378" width="88" height="40" rx="4" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.35)" stroke-width="0.8"/>
          <text x="340" y="394" text-anchor="middle" font-family="Shippori Mincho,serif" font-size="12" fill="#0a1628" font-weight="600">Fandomain</text>
          <text x="340" y="410" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="#c9a84c">Capital</text>

          <!-- タグライン -->
          <text x="340" y="660" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="10" fill="rgba(10,22,40,0.3)">ファンの語りが、ブランドの領地になる</text>
          <text x="340" y="676" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="rgba(201,168,76,0.4)">NSI Original Concept / DCXforce</text>
        </svg>
      </div>

      <!-- 凡例 -->
      <div style="display:flex; gap:2rem; justify-content:center; flex-wrap:wrap; margin-top:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <div style="width:20px; height:1px; background:rgba(10,22,40,0.2); border-top:1px dashed rgba(10,22,40,0.2);"></div>
          <span style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(10,22,40,0.5); letter-spacing:0.1em;">情報環境（PESO）</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <div style="width:20px; height:1px; background:#1a6b5a;"></div>
          <span style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(10,22,40,0.5); letter-spacing:0.1em;">生活者心理（内環）</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <div style="width:10px; height:10px; background:rgba(60,52,137,0.12); border-radius:2px;"></div>
          <span style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:#3c3489; letter-spacing:0.1em;">AI Signal</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 用語解説 -->
  <div class="reveal" style="max-width:1100px; margin-bottom:5rem;">
    <div class="section-label" style="margin-bottom:2rem;">図の読み方——3つの層を理解する</div>
    <div class="rg-2" style="gap:1.5rem;">
      <div style="background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.2); padding:2rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">外環 — PESO</div>
        <p style="font-size:0.88rem; color:rgba(250,248,243,0.75); line-height:1.9;">Paid（広告）・Earned（PR・メディア）・Shared（UGC・SNS）・Owned（製品・CRM）という4つの情報環境の軸。企業が情報をどこに配置するかという「場の設計」を示す。Fandomain Capital Loopでは、この外環がブランドと生活者の接触を設計する役割を担う。<br><br>そしてこの外環全体には、もう一つの観測レイヤーが偏在する——<strong style="color:#9b94e8;">AI Signal</strong>だ。SharedがEarnedを生み、EarnedがAIに参照され、次の生活者の体験の前段階に影響する。AIは情報環境の外側からループ全体を観測し、一貫したシグナルを持つブランドを回答生成の中で参照しやすくなる。図中の各辺に置かれた「AI Signal」は、この偏在を示している。Share of Answersへの接続点でもある。</p>
      </div>
      <div style="background:rgba(26,107,90,0.08); border:1px solid rgba(26,107,90,0.3); padding:2rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:#4db899; letter-spacing:0.15em; margin-bottom:0.75rem;">内環 — 生活者の心理ループ</div>
        <p style="font-size:0.88rem; color:rgba(250,248,243,0.75); line-height:1.9;">体験・感動 → 社会化・共鳴 → 再解釈・深化 という三段階のループ。ここで重要なのは「再解釈・深化」だ。ファンの体験は固定されていない。語られるたびに、他者の声に触れるたびに、その意味は遡及的に豊かになっていく。<strong style="color:#4db899;">人がファンになるのは特定の一瞬ではなく、この再解釈が重なって関係が深まっていく過程そのものだ。</strong>だからループが「繰り返し」ではなく「螺旋」になる——一周するたびに、Fandomain Capitalは同じ場所ではなく、より深い層に戻ってくる。これがAISASのような線形モデルと根本的に異なる点だ。</p>
      </div>
      <div style="background:rgba(60,52,137,0.08); border:1px solid rgba(60,52,137,0.3); padding:2rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:#7f77dd; letter-spacing:0.15em; margin-bottom:0.75rem;">中央 — Fandomain Capital</div>
        <p style="font-size:0.88rem; color:rgba(250,248,243,0.75); line-height:1.9;">外環（情報環境）と内環（生活者心理）が噛み合って回るとき、その中心に積み上がっていくのがFandomain Capitalだ。ループが一周するごとに層が一枚増える——それが中央の積層が厚みを増していく意味である。広告費で一気に買えるものではなく、ループが回り続けた時間の総量としてしか蓄積されない。</p>
    </div>
  </div>

  <!-- Patagonia Case Study Column -->
  <div class="reveal" style="max-width:1100px; margin-top:5rem;">
    <div style="border:1px solid rgba(201,168,76,0.3); background:rgba(201,168,76,0.04); padding:3.5rem;">

      <!-- ヘッダー -->
      <div style="display:flex; align-items:baseline; gap:1.5rem; margin-bottom:2.5rem; flex-wrap:wrap;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase;">Case Study</div>
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(201,168,76,0.5); letter-spacing:0.1em;">Fandomain Capital Loopの実装例</div>
      </div>

      <h3 style="font-family:'Shippori Mincho',serif; font-size:clamp(1.6rem,2.5vw,2.2rem); color:var(--white); font-weight:400; margin-bottom:0.5rem;">Patagonia</h3>
      <p style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:rgba(250,248,243,0.4); letter-spacing:0.1em; margin-bottom:2.5rem;">アウトドアアパレル / 1973年創業 / 米国・非上場 / 推定年商10億ドル超</p>

      <!-- リード文 -->
      <p style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--coral); letter-spacing:0.15em; margin-bottom:1.25rem;">TYPE A — 理念型：哲学の一貫性が資本になる</p>
      <p style="font-size:1rem; color:rgba(250,248,243,0.8); line-height:2.1; margin-bottom:3rem; border-left:2px solid var(--gold); padding-left:1.5rem;">「Don't Buy This Jacket（このジャケットを買わないでください）」——2011年のブラックフライデーにPatagoniaがニューヨーク・タイムズに掲載した全面広告だ。製品の購入を抑制するよう呼びかけるこの広告は、逆説的にブランドへの信頼と語りを爆発的に生んだ。これはコミュニケーションの巧みさではない。プロダクトと体験が先にあったから機能した話だ。</p>

      <!-- PESO分析 -->
      <div style="margin-bottom:3rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.5rem;">PESO × Fandomain Capital Loop で読む</div>

        <div class="rg-2" style="gap:1px; background:rgba(201,168,76,0.15);">
          <div style="background:rgba(10,22,40,0.6); padding:2rem;">
            <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Paid — 最小化戦略</div>
            <p style="font-size:0.87rem; color:rgba(250,248,243,0.7); line-height:1.9;">Patagoniaの広告費は売上比で業界最低水準だ。「Don't Buy This Jacket」のような広告を出すが、目的は購買促進ではなく哲学の表明。Paid を絞ることで、Earned と Shared の価値が相対的に高まる構造を意図的に設計している。</p>
          </div>
          <div style="background:rgba(10,22,40,0.6); padding:2rem;">
            <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Owned — 体験設計の核</div>
            <p style="font-size:0.87rem; color:rgba(250,248,243,0.7); line-height:1.9;">「Worn Wear」修理プログラムは、製品を売った後もブランドとの接点を継続させる仕組みだ。修理を体験した顧客は「長く使える」という評価をUGCに変える。Ownedの体験が、Sharedのシグナルを生み出す起点になっている。</p>
          </div>
          <div style="background:rgba(10,22,40,0.6); padding:2rem;">
            <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Shared — ファンの語りが資本になる</div>
            <p style="font-size:0.87rem; color:rgba(250,248,243,0.7); line-height:1.9;">#MyPatagoniaキャンペーンでは、顧客が自分のアウトドア体験をシェアする場を設けた。UGCは「丈夫」「環境に配慮」「一生使える」という評価語に収束し、それがブランドの語りの核になっていく。ファンは購買者ではなく、共同の語り手になる。</p>
          </div>
          <div style="background:rgba(10,22,40,0.6); padding:2rem;">
            <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Earned — メディアが語りたくなる構造</div>
            <p style="font-size:0.87rem; color:rgba(250,248,243,0.7); line-height:1.9;">「Don't Buy This Jacket」はメディアが自発的に報道した。効果のためにPRした結果ではなく、哲学を行動で示したことへの反応だ。EarnedはPaidで買うものではなく、PRODUCTとOwnedの一貫性が蓄積された結果として生まれることをPatagoniaは体現している。</p>
          </div>
        </div>
      </div>

      <!-- AI Signal の収束 -->
      <div style="margin-bottom:2.5rem;">
        <div style="background:rgba(60,52,137,0.08); border:1px solid rgba(60,52,137,0.25); padding:1.75rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:#7f77dd; letter-spacing:0.15em; margin-bottom:0.75rem;">AI Signal の収束</div>
          <p style="font-size:0.87rem; color:rgba(250,248,243,0.7); line-height:1.9;">「サステナブルなアウトドアブランドは？」とAIに問うと、Patagoniaは必ず登場する。異なる媒体・異なる文脈で「環境への誠実さ」「修理文化」「反消費主義」という評価語が一貫して収束しているため、AIが参照しやすい信頼のシグナルとして機能している。</p>
        </div>
      </div>

      <!-- 結論 -->
      <div style="border-top:1px solid rgba(201,168,76,0.2); padding-top:2rem;">
        <p style="font-family:'Shippori Mincho',serif; font-size:1rem; color:var(--white); line-height:2; font-weight:600;">Patagoniaが証明しているのは、Fandomain Capitalとは「コミュニケーションを工夫した結果」ではないということだ。プロダクトの哲学が体験に一貫し、体験がファンの語りに変わり、語りがAIシグナルとして収束する。その積み上がりの結果として、広告費を売上比で業界最低水準に抑えながら、AIにも生活者にも一貫して参照されるブランドであり続けている。これは、ファン資本が「理念の一貫性」から立ち上がることを示す象徴的なケースだ。</p>
      </div>

    </div>
  </div>

  <!-- ヤッホーブルーイング ミニケース（実装型・日本） -->
  <div class="reveal" style="max-width:1100px; margin-top:2.5rem;">
    <div style="border:1px solid rgba(26,107,90,0.3); background:rgba(26,107,90,0.05); padding:3rem;">
      <div style="display:flex; align-items:baseline; gap:1.5rem; margin-bottom:1.5rem; flex-wrap:wrap;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:#4db899; letter-spacing:0.2em; text-transform:uppercase;">Mini Case</div>
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(77,184,153,0.6); letter-spacing:0.1em;">国内・実装型のリファレンス</div>
      </div>
      <p style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:#4db899; letter-spacing:0.15em; margin-bottom:1rem;">TYPE B — 実装型：ファンとの場の運営が資本になる</p>
      <h3 style="font-family:'Shippori Mincho',serif; font-size:clamp(1.4rem,2.2vw,1.9rem); color:var(--white); font-weight:400; margin-bottom:0.4rem;">ヤッホーブルーイング</h3>
      <p style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:rgba(250,248,243,0.4); letter-spacing:0.1em; margin-bottom:2rem;">クラフトビール / 「よなよなエール」/ 長野・軽井沢発</p>

      <p style="font-size:0.95rem; color:rgba(250,248,243,0.8); line-height:2.1; margin-bottom:2rem; border-left:2px solid #1a6b5a; padding-left:1.5rem;">Patagoniaが「理念の一貫性」からファン資本を立ち上げたとすれば、ヤッホーブルーイングは「ファンと過ごす場の運営」から積み上げる対照的なリファレンスだ。理念を掲げて待つのではなく、ファンと顔の見える関係を継続的に設計し続ける——日本の生活者市場で、Fandomain Capital Loopがどう回るかを示してくれる。</p>

      <div class="rg-2" style="gap:1px; background:rgba(26,107,90,0.15); margin-bottom:2rem;">
        <div style="background:rgba(10,22,40,0.55); padding:1.75rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:#4db899; letter-spacing:0.15em; margin-bottom:0.75rem;">Owned / Shared — ファンと過ごす「場」</div>
          <p style="font-size:0.86rem; color:rgba(250,248,243,0.7); line-height:1.9;">大規模なファンイベント「超宴（ちょううたげ）」をはじめ、ファンと直接会い、ともに時間を過ごす場を継続的に設計してきた。買って終わりではなく、ファンが「自分の居場所」として語りはじめる——Ownedの体験がShared（UGC・口コミ）を生む循環が、企業側の意図として運営されている。</p>
        </div>
        <div style="background:rgba(10,22,40,0.55); padding:1.75rem;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:#4db899; letter-spacing:0.15em; margin-bottom:0.75rem;">関係性の非対称性をなくす運営</div>
          <p style="font-size:0.86rem; color:rgba(250,248,243,0.7); line-height:1.9;">EC（楽天市場店）での丁寧な双方向コミュニケーション、社内のニックネーム文化やフラットな組織運営、社長「てんちょ」を含めた人の顔が見える発信。ブランドとファンが対等な語り手として並ぶ関係——本レポートの操作的定義における「自発的に語るファン」が、設計によって生まれている。</p>
        </div>
      </div>

      <p style="font-family:'Shippori Mincho',serif; font-size:0.97rem; color:var(--white); line-height:2; font-weight:600; border-top:1px solid rgba(26,107,90,0.2); padding-top:1.75rem;">理念型と実装型、入口は違う。だが両者が示す本質は同じだ——ファン資本は、広告の巧拙ではなく、ブランドとファンが対等に語り合う関係を「どれだけ継続的に設計したか」から立ち上がる。海外の象徴例と国内の運営例が、同じ一つの構造を別の角度から照らしている。</p>
    </div>
  </div>

  <!-- Chapter CTA -->
  <div class="reveal" style="max-width:1100px; margin-top:5rem;">
    <a href="#download" style="display:flex; align-items:center; justify-content:space-between; gap:2rem; background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.25); padding:2rem 2.5rem; text-decoration:none; flex-wrap:wrap;">
      <p style="font-family:'Shippori Mincho',serif; font-size:clamp(0.95rem,1.5vw,1.1rem); color:var(--navy); line-height:1.7; font-weight:600; margin:0;">Fandomain Capital Loopの高解像度図解をKitに同梱している。</p>
      <span style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; white-space:nowrap; flex-shrink:0;">Framework Kitを入手 →</span>
    </a>
  </div>

</section>

<!-- COLUMN + PATTERN ANALYSIS -->
<section style="background:#ffffff; padding:12rem 5vw; border-top:1px solid rgba(0,0,0,0.08);">
  <div style="max-width:1100px;">
    <div class="section-label reveal">Column — SNSマーケティングの非対称性と処方箋</div>
    <h2 class="reveal" style="font-family:'Shippori Mincho',serif; font-size:clamp(1.5rem,2.5vw,2rem); font-weight:700; color:var(--navy); line-height:1.5; margin-bottom:1rem;">なぜ「わかっているのにできない」のか<br>——企業規模で異なる構造問題と、共通の出口</h2>
    <p class="reveal" style="font-size:0.95rem; color:rgba(15,40,90,0.6); line-height:2; max-width:720px; margin-bottom:4rem;">Fandomain Capitalの重要性を認識していても、実装できない企業が多い。その理由は企業規模によって異なる。しかしどちらの問題も、根本には同じ構造的な誤りがある。</p>

    <div class="rg-2" style="gap:1.5rem; margin-bottom:1.5rem;" class="reveal">
      <div style="background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.2); padding:2.5rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.25rem;">大企業の構造的問題</div>
        <p style="font-size:0.9rem; color:rgba(250,248,243,0.75); line-height:2; margin-bottom:1rem;">大企業は統合プランニングの文脈でSNSを運用する。テレビCM・屋外広告等との組み合わせの中で活用されるが、アトリビューション分析が複雑になり、SNSの寄与度を単体で測ることが難しくなる。その結果、経営層への説明の困難度が増し、予算が削られていくことにもつながってしまう。現に、SNSマーケティングの課題のトップは、成果の説明の難しさであるという調査結果がある。さらに、大企業ほど「プロモーションの寄与度が低い」という構造的な特性がある——ブランドがすでに有名であるほど、個々の施策の効果測定が難しくなるためだ。</p>
        <div style="padding:1rem 1.25rem; background:rgba(201,168,76,0.08); border-left:2px solid rgba(201,168,76,0.4);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:var(--gold); letter-spacing:0.12em; margin-bottom:0.4rem;">処方箋</div>
          <p style="font-size:0.85rem; color:rgba(250,248,243,0.7); line-height:1.8;">効果がないのではなく、<strong style="color:var(--white);">測る単位と時間軸を間違えている</strong>。Fandomain Capitalの観点から、計測の枠組みそのものを再設計する。</p>
        </div>
      </div>
      <div style="background:rgba(196,92,58,0.06); border:1px solid rgba(196,92,58,0.2); padding:2.5rem;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--coral); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.25rem;">スモールビジネスの構造的問題</div>
        <p style="font-size:0.9rem; color:rgba(250,248,243,0.75); line-height:2; margin-bottom:1rem;">スモールビジネスはその逆で、SNSがほぼ唯一のマーケティング手段になる。成否が極端に出るため、大当たりすれば急成長、空振りすれば何も起きない。この二極化がホームラン幻想を生む。一打席一打席に過剰な期待をかけながら、バズを狙うコンテンツを打ち続ける。蓄積という発想は入り込む余地がない。</p>
        <div style="padding:1rem 1.25rem; background:rgba(196,92,58,0.08); border-left:2px solid rgba(196,92,58,0.4);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:var(--coral); letter-spacing:0.12em; margin-bottom:0.4rem;">処方箋</div>
          <p style="font-size:0.85rem; color:rgba(250,248,243,0.7); line-height:1.8;">打率ではなく<strong style="color:var(--white);">出塁率を積み上げる</strong>発想への転換が必要。Fandomain Capitalは一発の成功ではなく、継続的な接触の積み重ねから生まれる。</p>
        </div>
      </div>
    </div>

    <div class="reveal" style="background:rgba(26,107,90,0.08); border:1px solid rgba(26,107,90,0.3); padding:3rem;">
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:#4db899; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.5rem;">規模を問わず共通する根本問題</div>
      <div class="rg-2" style="gap:3rem; align-items:center;">
        <p style="font-family:'Shippori Mincho',serif; font-size:1.1rem; color:var(--white); line-height:1.9; font-weight:600;">「蓄積ではなく瞬間で評価する」という計測思想の問題。SNS運用・CRM・購買データが組織的に分断されており、誰も責任を持ってFandomain Capitalを観測・設計できていない。</p>
        <div style="padding:2rem; background:rgba(26,107,90,0.1); border:1px solid rgba(26,107,90,0.25);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:#4db899; letter-spacing:0.12em; margin-bottom:0.75rem;">共通の処方箋</div>
          <p style="font-family:'Shippori Mincho',serif; font-size:1rem; color:var(--white); line-height:1.8; font-weight:600;">これはSNSの問題ではなく、経営の問題だ。Fandomain Capital診断が、その入口になる。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CHAPTER 4: Measurement -->
<section style="background:var(--off-white); padding:8rem 5vw;" id="ch4">
  <div class="chapter-header reveal" style="max-width:1100px;">
    <div class="chapter-num" style="color:rgba(10,22,40,0.07);">04</div>
    <div class="chapter-title">
      <div class="section-label">Chapter 4</div>
      <h2>Fandomain Capitalをどう測るか<br>——蓄積を観測するための5つの診断軸</h2>
      <div class="chapter-sub" style="color:var(--gold);">From Concept to Diagnostic</div>
    </div>
  </div>

  <!-- イントロ -->
  <div class="chapter-body wide reveal" style="max-width:1100px; margin-bottom:5rem;">
    <div class="body-text">
      <p>Fandomain Capitalは、フォロワー数やエンゲージメント率に代わる単一指標ではない。それらを否定するものでもない。むしろ、従来のSNS指標を「瞬間の反応」として位置づけ直し、その背後にある関係性・語り・事業効果の蓄積を観測するための上位概念である。</p>
      <div class="gold-divider" style="background:var(--navy);"></div>
      <p>測れないものは管理できない、という言葉は半分だけ正しい。より重要なのは、<strong>何を、どの時間軸で、どの単位で測るか</strong>である。Fandomain Capitalの測定は、短期の反応を追うSNS運用指標と、中長期の資本形成を捉える経営指標を接続する試みだ。</p>
      <p style="margin-top:1.5rem;">また、測定フレームを語るとき、厳密な因果証明を約束することは誠実ではない。商品力・価格・CRM・広告・流通など複数の変数が絡む中で、SNSの寄与を単独で測ることには限界がある。ここで示すのは、<strong>まず観測し、仮説を置き、検証する</strong>というプロセスだ。この誠実さが、逆に信頼になる。</p>
    </div>
    <div>
      <div class="pull-quote">
        既存のSNS指標を捨てる必要はない。<br>ただし、それらは<strong style="color:var(--gold);">「瞬間の反応」</strong>であって、<strong style="color:var(--gold);">「蓄積」そのもの</strong>ではない。<br><br>Fandomain Capitalの測定とは、その両者を階層として接続する試みだ。
      </div>
    </div>
  </div>

  <!-- 5つの診断軸 -->
  <div class="reveal" style="max-width:1100px; margin-bottom:5rem;">
    <div class="section-label" style="margin-bottom:2rem;">5つの診断軸 — Fandomain Capital Measurement Framework</div>

    <!-- フロー図 -->
    <div style="margin-bottom:3rem;">
      <svg width="100%" viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr-flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#0a1628" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </marker>
        </defs>

        <!-- 前提層: Axis 05 -->
        <rect x="8" y="20" width="158" height="192" rx="6" fill="rgba(10,22,40,0.06)" stroke="rgba(10,22,40,0.18)" stroke-width="0.8"/>
        <text x="87" y="44" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8.5" fill="rgba(10,22,40,0.45)" letter-spacing="1">前提層</text>
        <text x="87" y="66" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#0a1628" font-weight="500">Axis 05</text>
        <text x="87" y="86" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="10" fill="#0a1628">Organizational</text>
        <text x="87" y="102" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="10" fill="#0a1628">Readiness</text>
        <text x="87" y="122" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9.5" fill="rgba(10,22,40,0.5)">組織の実装準備度</text>
        <line x1="20" y1="134" x2="154" y2="134" stroke="rgba(10,22,40,0.08)" stroke-width="0.5"/>
        <text x="87" y="150" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.4)">データ統合／KPI設計</text>
        <text x="87" y="166" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.4)">横断的観測体制</text>
        <text x="87" y="182" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9" fill="rgba(10,22,40,0.4)">仮説検証サイクル</text>

        <!-- 矢印 01 -->
        <line x1="170" y1="116" x2="198" y2="116" stroke="rgba(10,22,40,0.3)" stroke-width="1.2" marker-end="url(#arr-flow)"/>
        <text x="184" y="109" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7.5" fill="rgba(10,22,40,0.35)">enables</text>

        <!-- 観測層: 3軸まとめ -->
        <rect x="202" y="20" width="272" height="192" rx="6" fill="rgba(83,74,183,0.07)" stroke="rgba(83,74,183,0.25)" stroke-width="0.8"/>
        <text x="338" y="44" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8.5" fill="rgba(83,74,183,0.7)" letter-spacing="1">観測層</text>

        <!-- Axis 01 -->
        <rect x="212" y="54" width="78" height="144" rx="4" fill="rgba(83,74,183,0.08)" stroke="rgba(83,74,183,0.2)" stroke-width="0.5"/>
        <text x="251" y="74" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#534AB7">Axis 01</text>
        <text x="251" y="92" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9.5" fill="#3C3489">Relationship</text>
        <text x="251" y="107" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9.5" fill="#3C3489">Depth</text>
        <text x="251" y="126" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8.5" fill="rgba(60,52,137,0.6)">関係性の深さ</text>
        <line x1="220" y1="136" x2="282" y2="136" stroke="rgba(83,74,183,0.12)" stroke-width="0.5"/>
        <text x="251" y="152" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8" fill="rgba(60,52,137,0.45)">継続接触・UGC</text>
        <text x="251" y="166" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8" fill="rgba(60,52,137,0.45)">LTV差分</text>

        <!-- Axis 02 -->
        <rect x="300" y="54" width="78" height="144" rx="4" fill="rgba(83,74,183,0.08)" stroke="rgba(83,74,183,0.2)" stroke-width="0.5"/>
        <text x="339" y="74" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#534AB7">Axis 02</text>
        <text x="339" y="92" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9.5" fill="#3C3489">Narrative</text>
        <text x="339" y="107" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9.5" fill="#3C3489">Consistency</text>
        <text x="339" y="126" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8.5" fill="rgba(60,52,137,0.6)">語りの一貫性</text>
        <line x1="308" y1="136" x2="370" y2="136" stroke="rgba(83,74,183,0.12)" stroke-width="0.5"/>
        <text x="339" y="152" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8" fill="rgba(60,52,137,0.45)">UGC・レビュー</text>
        <text x="339" y="166" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8" fill="rgba(60,52,137,0.45)">AI回答の文脈</text>

        <!-- Axis 04 -->
        <rect x="388" y="54" width="78" height="144" rx="4" fill="rgba(83,74,183,0.08)" stroke="rgba(83,74,183,0.2)" stroke-width="0.5"/>
        <text x="427" y="74" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#534AB7">Axis 04</text>
        <text x="427" y="92" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9.5" fill="#3C3489">Signal</text>
        <text x="427" y="107" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9.5" fill="#3C3489">Quality</text>
        <text x="427" y="126" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8.5" fill="rgba(60,52,137,0.6)">シグナルの質</text>
        <line x1="396" y1="136" x2="458" y2="136" stroke="rgba(83,74,183,0.12)" stroke-width="0.5"/>
        <text x="427" y="152" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8" fill="rgba(60,52,137,0.45)">情報源の多様性</text>
        <text x="427" y="166" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="8" fill="rgba(60,52,137,0.45)">発見可能性・鮮度</text>

        <!-- 矢印 02 -->
        <line x1="477" y1="116" x2="506" y2="116" stroke="rgba(10,22,40,0.3)" stroke-width="1.2" marker-end="url(#arr-flow)"/>
        <text x="491" y="109" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7.5" fill="rgba(10,22,40,0.35)">converts</text>

        <!-- 転換層: Axis 03 -->
        <rect x="510" y="20" width="162" height="192" rx="6" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.35)" stroke-width="0.8"/>
        <text x="591" y="44" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8.5" fill="rgba(201,168,76,0.7)" letter-spacing="1">転換層</text>
        <text x="591" y="66" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="12" fill="#0a1628" font-weight="500">Axis 03</text>
        <text x="591" y="86" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="10" fill="#0a1628">Business</text>
        <text x="591" y="102" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="10" fill="#0a1628">Conversion</text>
        <text x="591" y="122" text-anchor="middle" font-family="Noto Sans JP,sans-serif" font-size="9.5" fill="rgba(10,22,40,0.5)">事業価値への転換</text>
        <line x1="522" y1="134" x2="660" y2="134" stroke="rgba(201,168,76,0.2)" stroke-width="0.5"/>
        <text x="591" y="152" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8.5" fill="rgba(170,140,50,0.85)">【Growth】LTV向上</text>
        <text x="591" y="168" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8.5" fill="rgba(170,140,50,0.85)">【Resilience】危機耐性</text>
        <text x="591" y="184" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="rgba(170,140,50,0.7)">【Discoverability】AI参照</text>
      </svg>
    </div>

    <div class="section-label" style="margin-bottom:2rem; margin-top:1rem; opacity:0.6; font-size:0.55rem;">各軸の詳細</div>
    <div class="rg-2" style="gap:1.5rem;">

      <div style="background:var(--white); padding:2.5rem; border-left:3px solid var(--navy);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Axis 01</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Relationship Depth<br><span style="font-size:0.85rem; font-weight:400; color:var(--gray);">関係性の深さ</span></h4>
        <p style="font-size:0.87rem; color:var(--gray); line-height:1.9; margin-bottom:1rem;">「どれだけ熱量のある人がいるか」ではなく、どれだけ継続的に関わってくれているかを観測する。フォロワー数ではなく、継続して関わる人の厚みを見る。</p>
        <div style="font-size:0.8rem; color:var(--gray); line-height:1.8; padding:1rem; background:rgba(10,22,40,0.04); border-radius:4px;">
          継続エンゲージメント率 / 複数回反応ユーザー比率 / UGC投稿数 / 推奨行動（引用・保存・紹介）/ SNS接触者のLTV差分
        </div>
      </div>

      <div style="background:var(--white); padding:2.5rem; border-left:3px solid var(--navy);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Axis 02</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Narrative Consistency<br><span style="font-size:0.85rem; font-weight:400; color:var(--gray);">語りの一貫性</span></h4>
        <p style="font-size:0.87rem; color:var(--gray); line-height:1.9; margin-bottom:1rem;">ブランドが発信していることと、ファンが語っていることがズレていないかを観測する。単なるポジネガではなく、何が繰り返し語られているかを見る。</p>
        <div style="font-size:0.8rem; color:var(--gray); line-height:1.8; padding:1rem; background:rgba(10,22,40,0.04); border-radius:4px;">
          ブランド側の語り（公式SNS・Web） / ファン側の語り（UGC・レビュー）/ メディア側の語り / AI側の語り（ChatGPT・Gemini等での回答）
        </div>
      </div>

      <div style="background:var(--white); padding:2.5rem; border-left:3px solid var(--navy);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Axis 03</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Business Conversion<br><span style="font-size:0.85rem; font-weight:400; color:var(--gray);">事業価値への転換</span></h4>
        <p style="font-size:0.87rem; color:var(--gray); line-height:1.9; margin-bottom:1rem;">Fandomain Capitalの3つの事業効果（Growth・Resilience・Discoverability）を観測する。因果ではなく、まず相関と仮説を確認する。</p>
        <div style="font-size:0.8rem; color:var(--gray); line-height:1.8; padding:1rem; background:rgba(10,22,40,0.04); border-radius:4px;">
          SNS接触者と非接触者のLTV差分 / 危機時の擁護発言比率と回復速度 / 主要AI回答でのブランド言及率・推奨文脈
        </div>
      </div>


      <div style="background:var(--white); padding:2.5rem; border-left:3px solid var(--navy);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Axis 04</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Signal Quality<br><span style="font-size:0.85rem; font-weight:400; color:var(--gray);">シグナルの質</span></h4>
        <p style="font-size:0.87rem; color:var(--gray); line-height:1.9; margin-bottom:1rem;">AIや検索が拾いやすい形で、信頼できるシグナルが外部に蓄積されているかを観測する。情報源の多様性・一貫性・検索可能性・信頼性・鮮度を確認する。</p>
        <div style="font-size:0.8rem; color:var(--gray); line-height:1.8; padding:1rem; background:rgba(10,22,40,0.04); border-radius:4px;">
          公式・UGC・レビュー・メディア・専門家等の情報源多様性 / 複数ソースでの価値反復 / Web上での発見可能性 / 情報の鮮度
        </div>
      </div>

      <div style="background:var(--white); padding:2.5rem; border-left:3px solid var(--navy); grid-column:1/-1;">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.75rem;">Axis 05</div>
        <div class="rg-2" style="gap:2rem;">
          <div>
            <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Organizational Readiness<br><span style="font-size:0.85rem; font-weight:400; color:var(--gray);">組織の実装準備度</span></h4>
            <p style="font-size:0.87rem; color:var(--gray); line-height:1.9;">Fandomain CapitalはSNSチーム以外も含めた横断的な取り組みで捕捉する。組織の準備度を診断することが不可欠だ。</p>
          </div>
          <div style="font-size:0.8rem; color:var(--gray); line-height:2; padding:1rem; background:rgba(10,22,40,0.04); border-radius:4px;">
            SNS・CRM・EC・購買データの統合状況 / 短期指標と中長期指標の分離設計 / ブランド・CRM・PR・経営が同じ指標を共有しているか / UGC・レビュー・AI回答の定点観測体制 / 月次・四半期の仮説検証サイクル
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- 180日プログラム + レベル分離 -->
  <div class="reveal" style="max-width:1100px; margin-bottom:5rem;">
    <div class="section-label" style="margin-bottom:2rem;">180日検証プログラム — まず観測し、仮説を置き、設計と検証の対象にする</div>

    <div class="rg-3" style="gap:1.5rem; margin-bottom:2.5rem;">
      <div style="background:var(--white); padding:2.5rem; border-top:3px solid rgba(10,22,40,0.2);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:rgba(10,22,40,0.5); letter-spacing:0.15em; margin-bottom:0.5rem;">Day 0–30</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Baseline Audit</h4>
        <ul style="list-style:none; font-size:0.85rem; color:var(--gray); line-height:2.1;">
          <li>· SNSコメント・UGCの定性分析</li>
          <li>· ファンの評価語を収集・分類</li>
          <li>· 競合とのShare of Answers比較</li>
          <li>· Fandomain Capital仮説を立てる</li>
        </ul>
      </div>
      <div style="background:var(--white); padding:2.5rem; border-top:3px solid var(--gold);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.5rem;">Day 31–90</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--navy); margin-bottom:1rem;">Signal Design &amp; Early Validation</h4>
        <ul style="list-style:none; font-size:0.85rem; color:var(--gray); line-height:2.1;">
          <li>· 公式発信・UGC誘発・レビュー設計を見直す</li>
          <li>· AIに参照されやすいコンテンツを整備</li>
          <li>· 短期指標と中長期指標を別々に設計する</li>
          <li>· Fandomain Capitalを社内の共通イシューにする</li>
        </ul>
      </div>
      <div style="background:var(--navy); padding:2.5rem; border-top:3px solid var(--gold);">
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.5rem;">Day 91–180</div>
        <h4 style="font-family:'Shippori Mincho',serif; font-size:1.05rem; font-weight:600; color:var(--white); margin-bottom:1rem;">Business Impact Review</h4>
        <ul style="list-style:none; font-size:0.85rem; color:rgba(250,248,243,0.65); line-height:2.1;">
          <li>· 語り・AI回答・指名検索の変化を検証</li>
          <li>· LTV・リピート・推奨率への寄与を確認</li>
          <li>· ROIC-WACCスプレッドへの影響仮説を提示</li>
          <li>· 半期ごとの投資判断に接続</li>
        </ul>
      </div>
    </div>

    <div style="background:rgba(10,22,40,0.04); border:1px solid rgba(10,22,40,0.1); padding:2rem 2.5rem;">
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(10,22,40,0.45); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.25rem;">自社の成熟度に合わせて始める — Measurement Level</div>
      <div class="rg-3" style="gap:1.5rem;">
        <div>
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:rgba(10,22,40,0.5); margin-bottom:0.4rem;">Level 1 — データ統合不要</div>
          <p style="font-size:0.83rem; color:var(--gray); line-height:1.9;">SNS・UGC・AIの定性分析からすぐ始められる。ツール不要、今日から実行可能。</p>
        </div>
        <div>
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); margin-bottom:0.4rem;">Level 2 — CRM・購買と連携</div>
          <p style="font-size:0.83rem; color:var(--gray); line-height:1.9;">SNS接触者と非接触者のLTV差分、指名検索への影響など、データを繋いで仮説を定量化する。</p>
        </div>
        <div>
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--navy); margin-bottom:0.4rem;">Level 3 — 経営指標への接続</div>
          <p style="font-size:0.83rem; color:var(--gray); line-height:1.9;">LTV・価格プレミアム・リスクプレミアムを通じた企業価値への影響仮説を経営層に提示できる水準。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Ch4末 文脈CTA -->
  <div class="reveal" style="max-width:1100px; margin-top:4rem;">
    <a href="#download" style="display:flex; align-items:center; justify-content:space-between; gap:1.5rem; flex-wrap:wrap; text-decoration:none; background:linear-gradient(135deg, var(--navy), var(--navy-mid)); border:1px solid rgba(201,168,76,0.3); padding:2.25rem 2.75rem; transition:border-color .2s ease;">
      <div>
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--gold); letter-spacing:0.15em; margin-bottom:0.6rem;">この5軸で、自社を測ってみる</div>
        <p style="font-size:0.95rem; color:rgba(250,248,243,0.85); line-height:1.8; max-width:620px;">5つの診断軸を自社にあてはめるためのチェックリストと、Fandomain Capital Loopの高解像度図解を<strong style="color:var(--white);">Framework Kit</strong>にまとめている。Level 1なら、データ統合なしで今日から始められる。</p>
      </div>
      <span style="flex-shrink:0; font-family:'Noto Sans JP',sans-serif; font-size:0.9rem; font-weight:500; color:var(--navy); background:var(--gold); padding:0.85rem 1.75rem; border-radius:999px;">Framework Kitを入手 →</span>
    </a>
  </div>

  <div class="reveal" style="max-width:1100px; margin-top:5rem; background:var(--navy); padding:3rem; border-left:3px solid var(--gold);">
    <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1.5rem;">Column — ファイナンス論との接続</div>
    <h4 style="font-family:'Shippori Mincho',serif; font-size:1.2rem; font-weight:600; color:var(--white); margin-bottom:0.5rem;">炎上はなぜ企業価値を毀損するのか</h4>
    <p style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:rgba(201,168,76,0.6); letter-spacing:0.05em; margin-bottom:2rem;">ナラティブ毀損がもたらす将来キャッシュフロー低下、そして割引率上昇への悪影響</p>

    <div class="rg-2" style="gap:3rem;">
      <div>
        <p style="font-size:0.9rem; color:rgba(250,248,243,0.75); line-height:2.1; margin-bottom:1.5rem;">炎上が怖いのは、単に評判が悪くなるからではない。より本質的には、企業のナラティブが傷むことで、将来キャッシュフローへの信頼が揺らぎ、資本市場から見たリスクが上がるからだ。</p>
        <p style="font-size:0.9rem; color:rgba(250,248,243,0.75); line-height:2.1; margin-bottom:1.5rem;">ブランド毀損はまず事業面に表れる。顧客離反、購入意向の低下、採用力の低下、従業員エンゲージメントの悪化——これらは将来キャッシュフローの前提を押し下げる。しかしそれだけではない。企業の語られ方が不安定になると、投資家・金融機関はその企業をより高いリスクとして見る。レピュテーションリスク・規制リスク・ガバナンスリスクが織り込まれ、株主資本コスト（ke）が上がり、WACCが上昇する。</p>
        <p style="font-size:0.9rem; color:rgba(250,248,243,0.75); line-height:2.1;">企業価値は、将来キャッシュフローを割引率で現在価値に戻したものだ。ナラティブの毀損は、<strong style="color:var(--white);">分子（キャッシュフロー期待）を下げると同時に、分母（割引率）を上げる。二重に企業価値を毀損する。</strong></p>
      </div>
      <div>
        <div style="background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.2); padding:2rem; margin-bottom:1.5rem; text-align:center;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:rgba(201,168,76,0.5); letter-spacing:0.15em; margin-bottom:1rem;">ENTERPRISE VALUE</div>
          <div style="font-family:'Shippori Mincho',serif; font-size:1.1rem; color:var(--white); line-height:2;">
            EV = Σ <span style="color:var(--coral);">FCF<sub>t</sub></span> / (1 + <span style="color:var(--purple);">WACC</span>)<sup>t</sup>
          </div>
          <div class="rg-2" style="gap:1rem; margin-top:1.5rem;">
            <div style="background:rgba(196,92,58,0.1); border:1px solid rgba(196,92,58,0.3); padding:0.75rem; border-radius:4px;">
              <div style="font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:var(--coral); margin-bottom:0.25rem;">分子 ↓</div>
              <div style="font-size:0.78rem; color:rgba(250,248,243,0.7); line-height:1.6;">ナラティブ毀損<br>→ CF期待が低下</div>
            </div>
            <div style="background:rgba(60,52,137,0.1); border:1px solid rgba(60,52,137,0.3); padding:0.75rem; border-radius:4px;">
              <div style="font-family:'IBM Plex Mono',monospace; font-size:0.58rem; color:#7f77dd; margin-bottom:0.25rem;">分母 ↑</div>
              <div style="font-size:0.78rem; color:rgba(250,248,243,0.7); line-height:1.6;">リスクプレミアム上昇<br>→ WACC上昇</div>
            </div>
          </div>
        </div>
        <p style="font-size:0.88rem; color:rgba(250,248,243,0.6); line-height:2;">ROICがWACCを上回ることで企業価値は創造される。ならばSNS上のナラティブを整えることは、単なるブランドコミュニケーションではない。将来キャッシュフローへの信頼を高め、リスクプレミアムを抑え、WACCの上昇を防ぐための<strong style="color:var(--white);">経営活動</strong>だ。</p>
      </div>
    </div>

    <div style="margin-top:2rem; padding:1.5rem 2rem; background:rgba(201,168,76,0.08); border-left:2px solid var(--gold);">
      <p style="font-family:'Shippori Mincho',serif; font-size:1rem; color:var(--white); line-height:1.9; font-weight:600;">ファン資本とは、好意的な投稿の集合ではない。それは危機時にも企業価値を支える、社会的な信用のバッファである。</p>
    </div>
  </div>

  <!-- Chapter CTA -->
  <div class="reveal" style="max-width:1100px; margin-top:5rem;">
    <a href="#download" style="display:flex; align-items:center; justify-content:space-between; gap:2rem; background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.25); padding:2rem 2.5rem; text-decoration:none; flex-wrap:wrap;">
      <p style="font-family:'Shippori Mincho',serif; font-size:clamp(0.95rem,1.5vw,1.1rem); color:var(--navy); line-height:1.7; font-weight:600; margin:0;">5つの診断軸を自社にあてはめるチェックリストをKitで入手する。</p>
      <span style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; white-space:nowrap; flex-shrink:0;">Framework Kitを入手 →</span>
    </a>
  </div>

</section>

<!-- CHAPTER 5: Conclusion -->
<!-- CHAPTER 5: Conclusion -->
<section style="background:#ffffff; padding:12rem 5vw; border-top:1px solid rgba(0,0,0,0.08); position:relative; overflow:hidden;" id="ch5">
  <div style="position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%);"></div>

  <div style="max-width:1100px; position:relative;">
    <div class="chapter-header reveal" style="max-width:1100px; margin-bottom:5rem;">
      <div class="chapter-num" style="color:rgba(201,168,76,0.1);">05</div>
      <div class="chapter-title">
        <div class="section-label">Chapter 5 — Conclusion</div>
        <h2 style="color:var(--white);">SNSマーケティングは、<br>運用の問題ではなく<em style="font-family:'Shippori Mincho',serif; color:var(--gold);">経営の問題</em>だ。</h2>
        <div class="chapter-sub" style="color:var(--gold);">From Measurement to Design</div>
      </div>
    </div>

    <!-- 非財務情報の潮流 -->
    <div class="reveal" style="max-width:1100px; margin-bottom:4rem; padding:2rem 2.5rem; background:rgba(201,168,76,0.06); border-left:3px solid rgba(201,168,76,0.4);">
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.62rem; color:var(--gold); letter-spacing:0.2em; text-transform:uppercase; margin-bottom:0.75rem;">Context — 無形資産への説明責任が高まる時代</div>
      <p style="font-size:0.95rem; color:rgba(250,248,243,0.8); line-height:2;">SNS上の語りは、これまでマーケティング部門の周辺的なデータと見なされてきた。しかし企業価値の多くが無形資産によって説明される時代、その語りも企業の説明責任の射程に入りつつある。非財務情報の開示が段階的に拡充され、無形資産やブランド価値をどう語るかが経営の課題として前景化してきた——これはその大きな潮流の一例だ。ブランドへの信頼・ファンとの関係性・語りの蓄積は、まさに財務諸表に映らない企業の無形資産であり、Fandomain Capitalを設計・計測する取り組みは、この流れと自然に合流する。SNSマーケティングの問いは、もはやマーケティング部門だけの問いではない。</p>
    </div>

    <div class="rg-2" style="gap:4rem;" class="reveal">
      <div>
        <p style="font-size:1rem; color:rgba(250,248,243,0.75); line-height:2.1; margin-bottom:1.5rem;">Chapter 4で示した測定フレームが意味することは一つだ——Fandomain Capitalは、少なくとも観測できる。観測できるということは、仮説を置けるということだ。仮説を置けるということは、設計と検証の対象にできるということだ。</p>
      <p style="font-size:1rem; color:rgba(250,248,243,0.75); line-height:2.1; margin-bottom:1.5rem;">これまでのマーケティング論は、ファンとの関係性を「成果」として定性的に語ることはあっても、「資本」として設計・観測・経営言語で語る枠組みを持てていなかった。その欠落が、SNS投資を「なんとなく続けるか、止めるか」という二択に追い込んできた。</p>
      <p style="font-size:1rem; color:rgba(250,248,243,0.75); line-height:2.1;">AIが情報環境を再編し、無形資産への説明責任が高まる時代に、ブランドの無形資産をどう設計し、測定するか。それはマーケティング部門の問いではなく、経営の問いだ。Fandomain Capitalは、その問いに向き合うための概念的な土台である。</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:1.5rem;">
        <div style="border-left:2px solid rgba(26,107,90,0.8); padding:1.5rem 2rem; background:rgba(26,107,90,0.06);">
          <p style="font-family:'Shippori Mincho',serif; font-size:1rem; color:var(--white); line-height:1.9;">Fandomain Capital Loopが回るとき、ブランドはファンダムの中に「領地」を持つ。それはPESOのようなメディア発想では届かない、生活者の中の心的な存在感（Mental Availability）を想起させる。</p>
        </div>
        <div style="border-left:2px solid var(--gold); padding:1.5rem 2rem; background:rgba(201,168,76,0.05);">
          <p style="font-family:'Shippori Mincho',serif; font-size:1rem; color:var(--white); line-height:1.9;">Fandomain Capitalの設計は、SNS担当者だけで完結しない。しかしだからこそ、取り組んだ企業には持続的な競争優位が生まれる。</p>
        </div>
      </div>
    </div>

    <div class="reveal" style="margin-top:5rem;">
      <div class="section-label" style="margin-bottom:2rem;">あなたのブランドの問い</div>
      <div class="diagnostic-cards">
        <div class="diagnostic-card" style="background:rgba(255,255,255,0.05); border-bottom-color:var(--gold);">
          <div class="dc-num" style="color:rgba(201,168,76,0.15);">01</div>
          <div class="dc-tag">自己診断チェック</div>
          <h3 style="color:var(--white);">ナラティブの存在を確認する</h3>
          <p style="color:rgba(250,248,243,0.65);">自社のブランドについて、顧客が自発的に使う言葉（評価語）を把握しているか。SNS・レビュー・口コミに、一貫したナラティブの軸が浮かび上がっているか。把握できていないなら、Fandomain Capitalの現在地が見えていない状態だ。</p>
        </div>
        <div class="diagnostic-card" style="background:rgba(255,255,255,0.05); border-bottom-color:var(--gold);">
          <div class="dc-num" style="color:rgba(201,168,76,0.15);">02</div>
          <div class="dc-tag">自己診断チェック</div>
          <h3 style="color:var(--white);">シグナルと関係性を分けて見る</h3>
          <p style="color:rgba(250,248,243,0.65);">SNS上で語られる内容（外から見えるシグナル）と、実際の顧客との接触履歴・購買データ（内側の関係性）を、両方把握しているか。多くの企業は前者しか見ていない。後者なしにFandomain Capitalは設計できない。</p>
        </div>
        <div class="diagnostic-card" style="background:rgba(255,255,255,0.05); border-bottom-color:var(--gold);">
          <div class="dc-num" style="color:rgba(201,168,76,0.15);">03</div>
          <div class="dc-tag">自己診断チェック</div>
          <h3 style="color:var(--white);">AIにブランドは参照されているか</h3>
          <p style="color:rgba(250,248,243,0.65);">主要なカテゴリワードでAIに問いかけたとき、自社ブランドは回答に現れるか。現れるとしても、どんな文脈で語られているか。AIに参照されないブランドは、次の世代の比較検討のテーブルに載らない。</p>
        </div>
      </div>
    </div>

    <div class="reveal" style="margin-top:5rem; padding:4rem; background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.2); text-align:center;">
      <div style="font-family:'IBM Plex Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.3em; text-transform:uppercase; margin-bottom:2rem;">Afterword</div>
      <p style="font-family:'Shippori Mincho',serif; font-size:clamp(1.2rem,2.5vw,1.8rem); color:var(--white); line-height:1.8; font-weight:600; margin-bottom:1.5rem;">ファンとの関係を「資本」として設計する発想を、<br>これからのマーケティング論にインストールする。</p>
      <p style="font-size:0.95rem; color:rgba(250,248,243,0.75); line-height:2.1; max-width:640px; margin:0 auto 1.5rem;">AIが情報環境を再編し、無形資産への問いが経営の中心に移る時代に、ブランドが積み上げてきた信頼・語り・関係性は、企業価値の構成要素としてますます重視されるようになるでしょう。Fandomain Capitalはその問いへの、最初の答えです。NSIはその上位概念にあたるBrand Capital Strategyを基軸に、ブランドの無形資産を設計・計測・実装するチャレンジを続けてまいります。</p>
    </div>
  </div>
  <!-- Chapter CTA -->
  <div class="reveal" style="max-width:1100px; margin-top:5rem;">
    <a href="#download" style="display:flex; align-items:center; justify-content:space-between; gap:2rem; background:rgba(201,168,76,0.06); border:1px solid rgba(201,168,76,0.25); padding:2rem 2.5rem; text-decoration:none; flex-wrap:wrap;">
      <p style="font-family:'Shippori Mincho',serif; font-size:clamp(0.95rem,1.5vw,1.1rem); color:var(--navy); line-height:1.7; font-weight:600; margin:0;">設計と計測の次のステップを、NSIと話す。</p>
      <span style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.15em; white-space:nowrap; flex-shrink:0;">Framework Kitを入手 →</span>
    </a>
  </div>

</section>
`;

const htmlAfter = `
<!-- AUTHOR PROFILE -->
<section style="background:var(--navy-mid); padding:6rem 5vw; border-top:1px solid rgba(201,168,76,0.15);">
  <div style="max-width:1100px;">
    <div class="section-label reveal">About the Author</div>
    <div class="reveal" class="rg-soa" style="gap:3rem; align-items:start; margin-top:2rem;">
      <img src="/amano.jpg"
           style="width:100px; height:100px; border-radius:4px; object-fit:cover; border:1px solid rgba(201,168,76,0.3); flex-shrink:0;" alt="天野彬">
      <div>
        <div style="font-family:'Shippori Mincho',serif; font-size:1.4rem; font-weight:700; color:var(--white); margin-bottom:0.4rem;">天野 彬</div>
        <div style="font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:var(--gold); letter-spacing:0.1em; margin-bottom:1.5rem;">Akira Amano</div>
        <p style="font-size:0.9rem; color:rgba(250,248,243,0.65); line-height:2; max-width:660px;">New Strategy Institute（NSI）Founding Director。DCXforce 執行役員 Chief Strategy Officer。東京大学大学院学際情報学府修士課程修了（M.A.）。株式会社電通にてデジタルマーケティングの研究開発・コンサルティングを主導。日本経済新聞電子版Think! エキスパートコメンテーター、日本広告学会理事、明治学院大学非常勤講師。『新世代のビジネスはスマホの中から生まれる』『SNS変遷史』『情報メディア白書（共著）』『広告白書（共著）』など著書多数。</p>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">NSI — New Strategy Institute by DCXforce</div>
  <div class="footer-copy">© 2026 DCXforce Inc. All rights reserved. Report #001</div>
</footer>
`;

type FormState = "idle" | "submitting" | "success" | "error";

export default function Report001Page() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formAgreed, setFormAgreed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  // Inject report CSS once into <head> — stable across re-renders
  useEffect(() => {
    const existing = document.getElementById("report-001-styles");
    if (existing) return;
    const styleEl = document.createElement("style");
    styleEl.id = "report-001-styles";
    styleEl.innerHTML = reportCss;
    document.head.appendChild(styleEl);

    // Fix inline display:grid styles on mobile
    // CSS media queries cannot override inline styles, so we do it via JS
    if (window.innerWidth <= 768) {
      const fixGrids = () => {
        document.querySelectorAll<HTMLElement>('[style*="grid-template-columns"]').forEach(el => {
          el.style.display = "block";
          el.style.gridTemplateColumns = "unset";
          el.style.gap = "0";
        });
        // Re-add spacing between stacked items
        document.querySelectorAll<HTMLElement>('[style*="grid-template-columns"] > div').forEach(el => {
          if (!el.style.marginBottom) el.style.marginBottom = "1.5rem";
        });
      };
      // Run after dangerouslySetInnerHTML has rendered
      setTimeout(fixGrids, 0);
    }

    return () => {
      document.getElementById("report-001-styles")?.remove();
    };
  }, []);

  useEffect(() => {
    // Content is always visible (.reveal default is opacity:1)
    // Add scroll animation only to elements below the current viewport
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        // Below viewport: opt into animation
        el.classList.add('will-animate');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.will-animate').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    if (nav) nav.style.borderBottomColor =
      window.scrollY > 80 ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.2)';
  });

  // Loop animation
  const loopSvg = document.getElementById('fandomin-loop');
  if (loopSvg) {
    let loopAnimated = false;

    const startLoopAnims = () => {
      ['anim-loop','anim-a1','anim-a2','anim-a3'].forEach((id, i) => {
        const el = document.getElementById(id) as SVGAnimationElement | null;
        if (el) setTimeout(() => el.beginElement(), i * 300);
      });
      const layerAnims: [string, number][] = [['anim-l1', 800], ['anim-l2', 2000], ['anim-l3', 3200]];
      layerAnims.forEach(([id, delay]) => {
        const el = document.getElementById(id) as SVGAnimationElement | null;
        if (el) setTimeout(() => el.beginElement(), delay);
      });
    };

    const loopObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loopAnimated) {
          loopAnimated = true;
          startLoopAnims();
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    loopObserver.observe(loopSvg);
  }
  }, []);

  // Sidebar scroll-spy
  useEffect(() => {
    const sectionIds = ["summary", "ch1", "ch2", "ch3", "ch4", "ch5", "download"];

    // Show sidebar after hero leaves viewport
    const hero = document.querySelector(".hero") as Element | null;
    const heroObs = new IntersectionObserver(
      ([e]) => setSidebarVisible(!e.isIntersecting),
      { threshold: 0 }
    );
    if (hero) heroObs.observe(hero);

    // Scroll-spy: find which section top is closest above 30% viewport mark
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

    updateActive(); // Run once on mount
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
      const res = await fetch("https://formspree.io/f/maqvyknz", {
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

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+JP:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            "@id": "https://nsi.dcxforce.co.jp/reports/001",
            headline: "ファン資本（Fandomin Capital）の再設計：AI時代のSNSマーケティング戦略",
            description: "AI時代のSNSマーケティングをファン資本（Fandomin Capital）という経営概念で再定義。5つの診断軸と実装フレームワークを提示。",
            datePublished: "2026-06-23",
            inLanguage: "ja-JP",
            author: {
              "@type": "Person",
              name: "天野彬",
              jobTitle: "Chief Strategy Officer",
              affiliation: { "@type": "Organization", name: "DCXforce" },
            },
            publisher: {
              "@type": "Organization",
              name: "New Strategy Institute by DCXforce",
              url: "https://nsi.dcxforce.co.jp",
            },
          }),
        }}
      />

      <Navbar />

      {/* Side nav — fixed left, scroll-spy */}
      <div
        className="report-sidebar"
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
        {/* Track line */}
        <div style={{
          position: "absolute",
          left: "5px",
          top: "8px",
          bottom: "8px",
          width: "1px",
          background: "rgba(201,168,76,0.15)",
        }} />

        {[
          { id: "summary",  label: "Summary", sub: "概要"   },
          { id: "ch1",      label: "§ 1",     sub: "現在地" },
          { id: "ch2",      label: "§ 2",     sub: "AI"     },
          { id: "ch3",      label: "§ 3",     sub: "設計"   },
          { id: "ch4",      label: "§ 4",     sub: "観測"   },
          { id: "ch5",      label: "§ 5",     sub: "結論"   },
        ].map(({ id, label, sub }) => {
          const active = activeSection === id;
          return (
            <a key={id} href={`#${id}`} style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.5rem 0", textDecoration: "none" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", border: `1.5px solid ${active ? "#c9a84c" : "rgba(201,168,76,0.25)"}`, background: active ? "#c9a84c" : "transparent", flexShrink: 0, transition: "all 0.25s", boxShadow: active ? "0 0 8px rgba(201,168,76,0.5)" : "none" }} />
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", fontWeight: active ? 600 : 400, color: active ? "#c9a84c" : "rgba(201,168,76,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.25s", lineHeight: 1 }}>{label}</span>
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "0.5rem", color: active ? "rgba(250,248,243,0.65)" : "rgba(250,248,243,0.18)", transition: "color 0.25s", lineHeight: 1 }}>{sub}</span>
              </span>
            </a>
          );
        })}

        {/* DL — always-on CTA */}
        <a href="#download" style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.5rem 0", marginTop: "0.75rem", textDecoration: "none" }}>
          <span style={{ width: "22px", height: "22px", borderRadius: "4px", background: "#c9a84c", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#0a1628", fontWeight: 700, boxShadow: "0 0 10px rgba(201,168,76,0.45)" }}>↓</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", fontWeight: 700, color: "#c9a84c", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1 }}>資料DL</span>
            <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "0.5rem", color: "rgba(201,168,76,0.6)", lineHeight: 1 }}>無料</span>
          </span>
        </a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: htmlBefore }} />

      {/* CTA / DOWNLOAD */}
      <section className="cta-section" id="download">
        <div className="cta-bg"></div>
        {formState !== "success" && (
          <>
            <h2>ファン資本（Fandomin Capital）の<br />再設計へ。</h2>
            <p>PDF版レポートとFramework Kitのダウンロード、レポート著者とのコンタクトは下記から。</p>
            <div className="cta-buttons">
              <a href="#download-form" className="btn-primary">↓ PDF版レポートとFramework Kitをダウンロード</a>
              <a href="mailto:a.amano@dcxforce.co.jp" className="btn-secondary">✉ 著者にメール</a>
            </div>
          </>
        )}
        <div className="download-form reveal" id="download-form">
          {formState === "success" ? (
            <div style={{ textAlign: "center", padding: "4rem 3rem", maxWidth: "760px", margin: "0 auto", width: "100%" }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#c9a84c", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "2rem" }}>
                Thank You
              </div>
              <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)", color: "#faf8f3", lineHeight: "2", fontWeight: 600 }}>
                ご記入ありがとうございました。<br />
                追って担当者からメールでご送付いたします。
              </p>
            </div>
          ) : (
            <>
              <h3>資料ダウンロードフォーム</h3>
              <div className="form-sub" style={{ display: "none" }}></div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="お名前" required />
                </div>
                <div className="form-group">
                  <input type="text" name="company" placeholder="会社名" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="メールアドレス" required />
                </div>
                <div className="form-group">
                  <input type="text" name="position" placeholder="役職" />
                </div>
                {formState === "error" && (
                  <p style={{ color: "#c45c3a", fontSize: "0.82rem", marginBottom: "0.75rem" }}>
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={formAgreed}
                    onChange={e => setFormAgreed(e.target.checked)}
                    style={{ marginTop: "2px", width: "16px", height: "16px", flexShrink: 0, cursor: "pointer", accentColor: "#c9a84c" }}
                  />
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,243,0.55)", lineHeight: "1.7" }}>
                    <a href="https://dcxforce.co.jp/privacy-policy/#link1" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c", textDecoration: "underline" }}>プライバシーポリシー</a>に同意する
                  </span>
                </label>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={formState === "submitting" || !formAgreed}
                  style={{ opacity: (formState === "submitting" || !formAgreed) ? 0.4 : 1 }}
                >
                  {formState === "submitting" ? "送信中..." : "Submit →"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: htmlAfter }} />

      {/* Floating TOC */}
      {(() => {
        const toc = [
          { id: "summary", label: "Summary",      sub: "概要"   },
          { id: "ch1",     label: "Chapter 1",    sub: "現在地" },
          { id: "ch2",     label: "Chapter 2",    sub: "AI"     },
          { id: "ch3",     label: "Chapter 3",    sub: "設計"   },
          { id: "ch4",     label: "Chapter 4",    sub: "観測"   },
          { id: "ch5",     label: "Chapter 5",    sub: "結論"   },
          { id: "download",label: "Download",     sub: "資料DL" },
        ];
        return (
          <>
            {/* Backdrop */}
            {tocOpen && (
              <div
                onClick={() => setTocOpen(false)}
                style={{ position:"fixed", inset:0, zIndex:140, background:"rgba(10,22,40,0.5)", backdropFilter:"blur(2px)" }}
              />
            )}

            {/* TOC Panel */}
            <div style={{
              position: "fixed",
              bottom: tocOpen ? "80px" : "-100%",
              right: "1.25rem",
              zIndex: 150,
              background: "rgba(10,22,40,0.97)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "1.25rem 0",
              minWidth: "220px",
              maxWidth: "280px",
              transition: "bottom 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}>
              <div style={{ padding: "0 1.25rem 1rem", borderBottom: "1px solid rgba(201,168,76,0.15)", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.6rem", color:"rgba(201,168,76,0.6)", letterSpacing:"0.2em", textTransform:"uppercase" }}>
                  Contents
                </span>
              </div>
              {toc.map(({ id, label, sub }) => {
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
                      padding: "0.6rem 1.25rem",
                      textDecoration: "none",
                      background: active ? "rgba(201,168,76,0.08)" : "transparent",
                      borderLeft: active ? "2px solid #c9a84c" : "2px solid transparent",
                      transition: "all 0.15s",
                    }}
                  >
                    <span style={{ display:"flex", flexDirection:"column", gap:"2px" }}>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.62rem", fontWeight: active ? 700 : 400, color: active ? "#c9a84c" : "rgba(250,248,243,0.55)", letterSpacing:"0.06em", textTransform:"uppercase", lineHeight:1 }}>
                        {label}
                      </span>
                      <span style={{ fontFamily:"'Noto Sans JP',sans-serif", fontSize:"0.68rem", color: active ? "rgba(250,248,243,0.85)" : "rgba(250,248,243,0.35)", lineHeight:1.3 }}>
                        {sub}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            {/* TOC Toggle Button */}
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
                background: tocOpen ? "#c9a84c" : "rgba(10,22,40,0.95)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: "50px",
                padding: "0.65rem 1.1rem",
                cursor: "pointer",
                transition: "all 0.25s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ fontSize:"0.9rem", lineHeight:1 }}>
                {tocOpen ? "✕" : "≡"}
              </span>
              <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.6rem", fontWeight:600, color: tocOpen ? "#0a1628" : "#c9a84c", letterSpacing:"0.12em", textTransform:"uppercase" }}>
                {tocOpen ? "Close" : "目次"}
              </span>
            </button>
          </>
        );
      })()}

      <Footer />
    </>
  );
}
