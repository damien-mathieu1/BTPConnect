import { CardStackDemo } from "@/components/cardStack";
import { Navbar } from "@/components/floatingNavbar";
import { HeroParallaxDemo } from "@/components/heroParallax";
import { LayoutGridDemo } from "@/components/layoutGrid";
import { SpotlightPreview } from "@/components/spotlight";
import { SVGMaskEffectDemo } from "@/components/svgMaskEffect";
import { TypewriterEffectSmoothDemo } from "@/components/typeWritter";

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <Navbar />
      <HeroParallaxDemo />
      <LayoutGridDemo />
      <div className="h-20 font-bold text-4xl text-white flex items-center justify-center">
        Contact us
      </div>
      <CardStackDemo />
    </>
  );
}
