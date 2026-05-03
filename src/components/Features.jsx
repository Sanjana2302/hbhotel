import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-40 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Modern <br /> Minimalist
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Inspired by European brutalism, our suites offer a raw,
            sophisticated environment for the digital elite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-square bg-gradient-to-tr from-orange-500/20 to-white/5 rounded-3xl border border-white/10 flex items-center justify-center"
        >
          {/* Replace with a high-end hotel image */}
          <span className="text-white/20 font-bold italic">
            IMAGE_PLACEHOLDER
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
