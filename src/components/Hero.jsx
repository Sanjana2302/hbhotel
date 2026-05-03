import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  // As you scroll down, the text fades out and scales up
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decor - Use a large blurred circle for that "Dark Urban" look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center">
        <h1 className="text-[12vw] font-black leading-none tracking-tighter">
          THE <br /> <span className="text-orange-500">VOID</span>
        </h1>
        <p className="mt-8 text-gray-400 tracking-[0.3em] uppercase">
          Scroll to descend
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
