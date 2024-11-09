import Hero from "@/components/Ui/hero";
import HeroContent from "@/components/Ui/heroContent";
import ImageSlides from "@/components/images/image-slides";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-10 md:py-10 lg:py-14 xl:py-28">
      <div
        className="flex flex-col justify-center gap-6 sm:gap-12 text-center 
      sm:flex-row items-center sm:justify-around sm:text-end
      md:flex-col md:text-center
      lg:flex-row lg:text-end
      "
      >
        <ImageSlides />
        <Hero />
      </div>
      <HeroContent />
    </div>
  );
}
