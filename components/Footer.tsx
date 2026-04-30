import Logo from "./Logo";

const footerLinks = [
  { label: "About NSI", href: "#about" },
  { label: "Reports", href: "#reports" },
  { label: "Podcast", href: "/podcast" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <address className="font-inter not-italic text-sm text-white/50 leading-relaxed mt-2">
            東京都港区赤坂5丁目4番15号
            <br />
            ARAプレイス赤坂5階
            <br />
            DCXforce Inc.
          </address>
        </div>

        {/* Right */}
        <nav className="flex flex-col gap-3 md:items-end">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-center">
          <p className="font-inter text-xs text-white/35">
            © New Strategy Institute by DCXforce Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
