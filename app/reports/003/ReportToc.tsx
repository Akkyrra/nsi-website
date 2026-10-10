"use client";

import { useEffect, useState } from "react";

// Same pattern as the #001/#002 scroll-spy TOC (left rail + floating "目次" panel),
// themed for #003. s6 runs through the dark block and #s6b: only section starts are
// tracked, so s6 stays active until s7 begins.
const ITEMS = [
  { id: "summary", short: "概要", label: "概要" },
  { id: "s1", short: "§1", label: "§1 統合の先に、何が残ったか" },
  { id: "s2", short: "§2", label: "§2 統合の歴史としての広告産業" },
  { id: "s3", short: "§3", label: "§3 経済の重心は、すでに無形へ移った" },
  { id: "s4", short: "§4", label: "§4 市場で生まれる資産は、経営から見えにくい" },
  { id: "s5", short: "§5", label: "§5 無形資産経営の次の課題は、「統合」である" },
  { id: "s6", short: "§6", label: "§6 Communication DesignからMultiplier Deploymentへ" },
  { id: "s7", short: "§7", label: "§7 広告は、企業に何を残せるか" },
  { id: "dl", short: "資料DL", label: "実践・資料DL" },
];

const INK = "#11151C";
const COBALT = "#315CF5";
const COBALT_SOFT = "#5B7CF7";
const SILVER = "#AAB4C4";

export default function ReportToc() {
  const [active, setActive] = useState<string>(ITEMS[0].id);
  const [railVisible, setRailVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".nsi003 .hero");
    const heroObs = new IntersectionObserver(([e]) => setRailVisible(!e.isIntersecting), { threshold: 0 });
    if (hero) heroObs.observe(hero);

    const update = () => {
      const marker = window.innerHeight * 0.3;
      let current = ITEMS[0].id;
      for (const { id } of ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      heroObs.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Left rail — desktop only (hidden below 1180px, where it would overlap the text) */}
      <nav
        aria-label="レポート目次"
        className="nsi003-toc-rail"
        style={{
          position: "fixed",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          zIndex: 30,
          flexDirection: "column",
          padding: "0.7rem 0.85rem",
          borderRadius: "10px",
          background: "rgba(17,21,28,0.88)",
          backdropFilter: "blur(6px)",
          opacity: railVisible ? 1 : 0,
          pointerEvents: railVisible ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {ITEMS.map(({ id, short }) => {
          const on = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={on ? "true" : undefined}
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.32rem 0", textDecoration: "none" }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: `1px solid ${on ? COBALT_SOFT : SILVER}`,
                  background: on ? COBALT_SOFT : "transparent",
                  boxShadow: on ? `0 0 8px ${COBALT}` : "none",
                  transition: "all 0.2s",
                }}
              />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.06em",
                  fontWeight: on ? 600 : 400,
                  color: on ? "#fff" : SILVER,
                  lineHeight: 1,
                  transition: "color 0.2s",
                }}
              >
                {short}
              </span>
            </a>
          );
        })}
      </nav>
      <style>{`.nsi003-toc-rail{display:none}@media (min-width:1180px){.nsi003-toc-rail{display:flex}}`}</style>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 140, background: "rgba(17,21,28,0.55)", backdropFilter: "blur(2px)" }}
        />
      )}

      <div
        role="dialog"
        aria-label="目次"
        aria-hidden={!open}
        style={{
          position: "fixed",
          bottom: open ? "80px" : "-100%",
          right: "1.25rem",
          zIndex: 150,
          width: "min(calc(100vw - 2.5rem), 22rem)",
          maxHeight: "calc(100vh - 7rem)",
          overflowY: "auto",
          background: "rgba(17,21,28,0.98)",
          border: "1px solid rgba(91,124,247,0.35)",
          borderRadius: 12,
          padding: "1.1rem 0",
          transition: "bottom 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          visibility: open ? "visible" : "hidden",
        }}
      >
        <div style={{ padding: "0 1.25rem 0.8rem", borderBottom: "1px solid rgba(170,180,196,0.2)", marginBottom: "0.4rem" }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", color: SILVER, letterSpacing: "0.2em" }}>
            CONTENTS
          </span>
        </div>
        {ITEMS.map(({ id, label }) => {
          const on = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.6rem 1.25rem",
                textDecoration: "none",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                fontWeight: on ? 600 : 400,
                color: on ? "#fff" : "#C7CEDA",
                background: on ? "rgba(49,92,245,0.18)" : "transparent",
                borderLeft: `2px solid ${on ? COBALT_SOFT : "transparent"}`,
              }}
            >
              {label}
            </a>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.25rem",
          zIndex: 150,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: open ? COBALT : "rgba(17,21,28,0.95)",
          border: "1px solid rgba(91,124,247,0.5)",
          borderRadius: 50,
          padding: "0.65rem 1.1rem",
          cursor: "pointer",
          transition: "all 0.25s",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span style={{ fontSize: "0.9rem", lineHeight: 1, color: open ? "#fff" : COBALT_SOFT }}>{open ? "✕" : "≡"}</span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            fontWeight: 600,
            color: open ? "#fff" : SILVER,
            letterSpacing: "0.1em",
            lineHeight: 1,
          }}
        >
          {open ? "CLOSE" : "目次"}
        </span>
      </button>
    </>
  );
}
