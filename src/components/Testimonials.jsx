import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Digital Nomad",
    text: "The 3D interface for booking was mind-blowing, but the actual stay was even better. Pure luxury.",
  },
  {
    name: "Sarah Chen",
    role: "Architect",
    text: "As an architect, I appreciate the brutalist yet cozy design. The lighting in the suites is perfection.",
  },
  {
    name: "Marcus Thorne",
    role: "Tech CEO",
    text: "Finally, a hotel that understands the future. The smart-glass walls and AI concierge are seamless.",
  },
  {
    name: "Elena Rodriguez",
    role: "Travel Blogger",
    text: "The most Instagrammable hotel in the world. Every corner feels like a high-end rendered 3D scene.",
  },
];

const Testimonials = () => {
  // Duplicate the list to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          GUEST <span className="text-orange-500">VOICES</span>
        </h2>
      </div>

      <div className="relative flex">
        {/* Infinite Scrolling Track */}
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="group relative min-w-[350px] md:min-w-[450px] p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 transition-all cursor-default"
            >
              <Quote
                className="text-orange-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity"
                size={32}
              />

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-orange-500 to-red-600" />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Subtle 3D Glow Effect on hover */}
              <div className="absolute inset-0 rounded-[32px] bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;