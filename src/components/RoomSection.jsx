import { motion } from "framer-motion";

export default function RoomSection() {
  return (
    <section className="relative h-screen w-full flex items-center px-20 bg-[#080808]">
      <div className="grid grid-cols-2 gap-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Glassmorphism Card for image */}
          <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-orange-500/20 group-hover:bg-transparent transition-all duration-700" />
            <img
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              alt="Room"
            />
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <h3 className="text-6xl font-bold text-white mb-8">
            Architectural <br /> Suites
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Designed by Collab Studio, each suite features raw concrete textures
            mixed with high-end glassmorphism elements.
          </p>
          <div className="h-px w-20 bg-orange-500" />
        </div>
      </div>
    </section>
  );
}
