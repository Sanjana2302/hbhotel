import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Testimonials from "./components/Testimonials";

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
    <div className="bg-[#050505] min-h-screen selection:bg-orange-500">
      <Hero />
      <Pricing />
      <Testimonials />
      {/* Testimonials go here */}
    </div>
  );
}

export default App;
