// import {
//   motion,
//   useSpring,
//   useMotionValue,
//   AnimatePresence,
// } from "framer-motion";
// import { useState } from "react";

// const amenities = [
//   {
//     id: "01",
//     title: "INFINITY POOL",
//     subtitle: "SKYLINE HORIZON",
//     img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200",
//   },
//   {
//     id: "02",
//     title: "LUXURY SPA",
//     subtitle: "WELLNESS RITUALS",
//     img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200",
//   },
//   {
//     id: "03",
//     title: "FINE DINING",
//     subtitle: "GASTRONOMY ART",
//     img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200",
//   },
//   {
//     id: "04",
//     title: "AI CONCIERGE",
//     subtitle: "DIGITAL BESPOKE",
//     img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
//   },
// ];

// const AmenitiesSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Mouse movement for the liquid light effect
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
//   const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     mouseX.set(clientX);
//     mouseY.set(clientY);
//   };

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="relative w-full min-h-screen bg-[#020202] py-20 overflow-hidden flex items-center"
//     >
//       {/* 1. KINETIC BACKGROUND IMAGE (Liquid Reveal) */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         <AnimatePresence>
//           {hoveredIndex !== null && (
//             <motion.div
//               initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
//               animate={{ opacity: 0.4, scale: 1, filter: "blur(0px)" }}
//               exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
//               transition={{ duration: 0.8, ease: "circOut" }}
//               className="absolute inset-0 bg-cover bg-center grayscale"
//               style={{ backgroundImage: `url(${amenities[hoveredIndex].img})` }}
//             />
//           )}
//         </AnimatePresence>

//         {/* Glowing Cursor Light Overlay */}
//         <motion.div
//           style={{
//             x: smoothX,
//             y: smoothY,
//             translateX: "-50%",
//             translateY: "-50%",
//           }}
//           className="absolute w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen"
//         />
//       </div>

//       {/* 2. THE FLOATING CONTENT */}
//       <div className="relative z-10 w-full">
//         <div className="flex flex-col">
//           {amenities.map((item, i) => (
//             <motion.div
//               key={item.id}
//               onMouseEnter={() => setHoveredIndex(i)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="group relative w-full py-10 md:py-16 border-b border-white/5 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
//             >
//               {/* Background Slide Effect */}
//               <motion.div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-700" />

//               {/* Numbering */}
//               <span className="absolute left-10 text-orange-500/30 font-mono text-lg group-hover:text-orange-500 transition-colors">
//                 {item.id}
//               </span>

//               {/* Title with Kinetic Stretch Effect */}
//               <div className="relative overflow-hidden">
//                 <motion.h3
//                   className="text-7xl md:text-[10vw] font-black text-transparent stroke-text leading-none tracking-tighter"
//                   style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
//                   whileHover={{ scaleY: 1.1, color: "#fff" }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {item.title}
//                 </motion.h3>

//                 {/* Reveal Subtitle on Hover */}
//                 <motion.div
//                   initial={{ y: "100%" }}
//                   animate={{ y: hoveredIndex === i ? "0%" : "100%" }}
//                   className="absolute inset-0 flex items-center justify-center pointer-events-none"
//                 >
//                   <span className="text-orange-500 font-black text-xl md:text-2xl italic tracking-[0.5em] bg-black/80 px-6 py-2 backdrop-blur-md">
//                     {item.subtitle}
//                   </span>
//                 </motion.div>
//               </div>

//               {/* Right Side Decoration */}
//               <div className="absolute right-10 hidden lg:block overflow-hidden">
//                 <motion.p
//                   animate={{ x: hoveredIndex === i ? 0 : 100 }}
//                   className="text-gray-600 text-xs uppercase tracking-widest"
//                 >
//                   Explore Space — {item.id}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 3. VIGNETTE & GRAIN */}
//       <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
//       <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
//     </section>
//   );
// };

// export default AmenitiesSection;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const amenities = [
  {
    id: "01",
    title: "INFINITY POOL",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1600",
  },
  {
    id: "02",
    title: "LUXURY SPA",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600",
  },
  {
    id: "03",
    title: "FINE DINING",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600",
  },
  {
    id: "04",
    title: "FITNESS CENTER",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600",
  },
];

const AmenitiesSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 1. THE "COVER" IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* The Image is "Covered" here */}
            <img
              src={amenities[index].img}
              alt={amenities[index].title}
              className="w-full h-full object-cover grayscale-[40%] brightness-50"
            />
            {/* Vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. NAVIGATION OVERLAY */}
      <div className="relative z-10 w-full px-10 md:px-20 flex flex-col md:flex-row items-end justify-between h-full py-20">
        {/* Left Side: Large Counter */}
        <div className="overflow-hidden">
          <motion.h4
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="text-orange-500 font-mono text-xl"
          >
            {amenities[index].id} / 04
          </motion.h4>
        </div>

        {/* Center/Right: The Interactive Titles */}
        <div className="flex flex-col items-end gap-2">
          {amenities.map((item, i) => (
            <div
              key={item.id}
              onMouseEnter={() => setIndex(i)}
              className="group cursor-pointer relative"
            >
              <motion.h3
                animate={{
                  opacity: index === i ? 1 : 0.3,
                  x: index === i ? -20 : 0,
                }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter transition-all italic uppercase"
              >
                {item.title}
              </motion.h3>

              {/* Animated Underline */}
              {index === i && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 right-0 h-1 bg-orange-500 w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. CENTER BRANDING (Optional) */}
      <div className="absolute top-10 left-10 z-20">
        <p className="text-white font-bold tracking-[0.4em] text-xs uppercase opacity-50">
          World Class <br /> Amenities
        </p>
      </div>

      {/* Subtle Grain for Premium Feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default AmenitiesSection;
