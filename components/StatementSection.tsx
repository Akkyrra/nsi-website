export default function StatementSection() {
  return (
    <section className="bg-navy py-20 lg:py-28" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-8">
            Our Statement
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-white">Strategy, done right, </span>
            <span className="text-gold">creates resonance.</span>
            <br />
            <span className="text-white">That </span>
            <span className="text-gold">resonance</span>
            <span className="text-white"> takes your business beyond the expected.</span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <p className="font-playfair text-xl lg:text-2xl text-white/85 leading-relaxed">
            正しい戦略は、共鳴を生む。
            <br />
            その共鳴が、事業を予測の先へ連れていく。
          </p>
        </div>
      </div>
    </section>
  );
}
