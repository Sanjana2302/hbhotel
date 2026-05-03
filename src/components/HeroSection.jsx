export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center border-b border-white/5">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <h1 className="text-[20vw] font-black text-white/10 select-none">
          HOTEL
        </h1>
      </div>
      <div className="relative z-10 text-center">
        <span className="text-orange-500 tracking-[0.5em] uppercase text-sm mb-4 block">
          Est. 2026
        </span>
        <h2 className="text-7xl md:text-9xl font-bold text-white tracking-tighter">
          THE VOID
        </h2>
        <p className="text-gray-400 mt-6 max-w-sm mx-auto italic">
          Scroll to explore the architecture
        </p>
      </div>
    </section>
  );
}
