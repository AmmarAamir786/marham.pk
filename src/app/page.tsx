import HeroSection from "@/components/homePage/HeroSection";
import PromotionSection from "@/components/homePage/PromotionSection/PromotionSection";
import ServicesSection from "@/components/homePage/ServicesSection/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <PromotionSection/>
    </main>
  );
}
