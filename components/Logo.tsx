interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const primaryColor = variant === "light" ? "text-white" : "text-navy";
  const secondaryColor = variant === "light" ? "text-white/80" : "text-navy/70";

  return (
    <a href="/" className="flex flex-col leading-tight hover:opacity-80 transition-opacity">
      <span className={`font-playfair text-xl lg:text-2xl font-bold tracking-tight ${primaryColor}`}>
        New Strategy Institute
      </span>
      <span className={`font-inter text-[11px] font-medium tracking-[0.18em] ${secondaryColor}`}>
        BY DCXforce
      </span>
    </a>
  );
}
