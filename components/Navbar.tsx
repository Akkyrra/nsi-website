"use client";

import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "About NSI", href: "/about" },
  { label: "Reports", href: "/reports" },
  { label: "Podcast", href: "/podcast" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-navy/10 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo variant="dark" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm font-medium text-navy/80 hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="font-inter text-sm font-medium bg-navy text-white px-5 py-2 rounded hover:bg-navy/85 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm font-medium text-navy/80 hover:text-navy"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="font-inter text-sm font-medium bg-navy text-white px-5 py-2 rounded text-center hover:bg-navy/85"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
