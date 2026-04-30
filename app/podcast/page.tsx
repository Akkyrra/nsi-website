import Navbar from "@/components/Navbar";

export default function PodcastPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Full-screen hero */}
      <section className="bg-navy flex-1 flex items-center justify-center py-24 px-6">
        <div className="flex flex-col items-center text-center gap-10 max-w-2xl w-full">

          {/* Label */}
          <p className="font-inter text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Podcast / NSI Dialogues
          </p>

          {/* Gold top line */}
          <div className="w-16 h-px bg-gold" />

          {/* Main heading */}
          <h1 className="font-playfair text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight">
            Coming Soon.
          </h1>

          {/* Gold bottom line */}
          <div className="w-16 h-px bg-gold" />

          {/* Sub copy */}
          <p className="font-inter text-base lg:text-lg text-white/55 leading-relaxed">
            戦略の最前線を、対話で深める。
            <br />
            NSI Dialoguesは、まもなく始まります。
          </p>

          {/* Spotify button */}
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 rounded hover:bg-gold/10 transition-colors group"
          >
            {/* Spotify icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.517 17.278a.748.748 0 0 1-1.03.25c-2.82-1.723-6.365-2.113-10.54-1.157a.748.748 0 1 1-.333-1.459c4.568-1.044 8.486-.594 11.653 1.337.353.216.464.676.25 1.029zm1.47-3.27a.936.936 0 0 1-1.288.308C14.85 12.412 10.74 11.88 7.63 12.82a.937.937 0 0 1-.543-1.79c3.55-1.077 7.964-.555 10.9 1.279.44.27.58.84.308 1.288v.001zm.126-3.405C15.47 8.646 9.284 8.43 6.01 9.428a1.123 1.123 0 0 1-.652-2.148C9.123 6.104 15.9 6.352 19.7 8.7a1.122 1.122 0 0 1-1.124 1.945l-.001-.003-.001.001z" />
            </svg>
            <span className="font-inter text-sm font-semibold tracking-widest uppercase">
              Spotifyで聴く
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

        </div>
      </section>
    </main>
  );
}
