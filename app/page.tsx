import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import ThreeColumnSection from "@/components/ThreeColumnSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatementSection />
      <ThreeColumnSection />
      <Footer />
    </main>
  );
}
