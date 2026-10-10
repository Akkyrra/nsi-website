"use client";

import { useEffect } from "react";

// Mobile: let people flip each diagram between "see it whole" (shrunk, for orientation)
// and "scroll to read" (full size, legible text). The diagrams carry embedded SVG text
// that would blur into illegibility if simply scaled to fit a phone screen.
// The figure markup is injected via dangerouslySetInnerHTML, so the toggles are added
// imperatively; cleanup removes them so StrictMode's double-mount can't duplicate them.
export default function FigToggle() {
  useEffect(() => {
    const added: HTMLElement[] = [];
    const scrollers = document.querySelectorAll<HTMLElement>(".nsi003 .fig-scroll");

    scrollers.forEach((scroller) => {
      if (scroller.previousElementSibling?.classList.contains("fig-toggle")) return;

      const toggle = document.createElement("div");
      toggle.className = "fig-toggle";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "全体を見る";
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        const fit = scroller.classList.toggle("is-fit");
        btn.textContent = fit ? "拡大して読む" : "全体を見る";
        btn.setAttribute("aria-pressed", String(fit));
      });
      toggle.appendChild(btn);
      scroller.parentNode?.insertBefore(toggle, scroller);
      added.push(toggle);
    });

    return () => {
      added.forEach((el) => el.remove());
      scrollers.forEach((s) => s.classList.remove("is-fit"));
    };
  }, []);

  return null;
}
