interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const primaryColor = variant === "light" ? "text-white" : "text-navy";
  const secondaryColor = variant === "light" ? "text-white/80" : "text-navy/70";

  return (
    <a href="/" className="flex flex-col leading-tight hover:opacity-80 transition-opacity">
      <span className={`font-playfair text-2xl lg:text-[28px] font-bold tracking-tight ${primaryColor}`}>
        New Strategy Institute
      </span>
      <span className={`font-inter text-xs font-medium tracking-[0.18em] ${secondaryColor}`}>
        BY DCXforce
      </span>
    </a>
  );
}
