import { motion } from "framer-motion";

const Pricing = () => {
  const cards = [
    { title: "Standard", price: "200", color: "bg-blue-500" },
    { title: "Executive", price: "450", color: "bg-orange-500" },
    { title: "Presidential", price: "999", color: "bg-purple-500" },
  ];

  return (
    <section className="py-32 bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-1 bg-gradient-to-b from-white/20 to-transparent rounded-3xl"
            >
              <div className="bg-[#0f0f0f] p-10 rounded-[calc(1.5rem-1px)] h-full">
                <h3 className="text-2xl text-gray-400 font-medium">
                  {item.title}
                </h3>
                <div className="text-6xl font-bold text-white my-6">
                  ${item.price}
                </div>
                <div className={`h-1 w-12 ${item.color} mb-8`}></div>
                <ul className="space-y-4 text-gray-500 mb-10">
                  <li>Full 3D Room Tour</li>
                  <li>Smart Home Integration</li>
                  <li>Private Butler</li>
                </ul>
                <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold group-hover:bg-white group-hover:text-black transition-all">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
