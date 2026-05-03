import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import RoomSection from "./components/RoomSection";
import AmenitiesSection from "./components/AmenitiesSection";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/FoodGallery";
import FoodGallery from "./components/FoodGallery";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#050505]">
      <Hero />
      <HeroSection />
      <RoomSection />
      <AmenitiesSection />
      <Testimonials />
      <FoodGallery />
    </main>
  );
}

export default App;
