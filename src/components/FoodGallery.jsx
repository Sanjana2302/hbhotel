// import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";

// const VegItems = [
//   { id: 1, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
//   },
//   { id: 4, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" }, // Duplicate for loop
// ];

// const NonVegItems = [
//   { id: 5, img: "https://images.unsplash.com/photo-1544025162-d76694265947" },
//   {
//     id: 6,
//     img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
//   },
//   { id: 7, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1" },
//   { id: 8, img: "https://images.unsplash.com/photo-1544025162-d76694265947" }, // Duplicate for loop
// ];

// const FoodSection = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section
//       className="relative h-screen w-full bg-[#050505] overflow-hidden cursor-pointer"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//       onTouchStart={() => setIsOpen(!isOpen)}
//     >
//       {/* 1. THE REVEALED GALLERY (Moves Automatically) */}
//       <div className="absolute inset-0 flex">
//         {/* Left Gallery - Auto Moves Up */}
//         <div className="w-1/2 h-full border-r border-white/5 overflow-hidden flex justify-center">
//           <motion.div
//             animate={{ y: [0, -1200] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="flex flex-col gap-6 py-10"
//           >
//             {VegItems.map((item, i) => (
//               <div
//                 key={i}
//                 className="w-[280px] h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-full object-cover"
//                   alt="veg"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Right Gallery - Auto Moves Down */}
//         <div className="w-1/2 h-full overflow-hidden flex justify-center">
//           <motion.div
//             animate={{ y: [-1200, 0] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="flex flex-col gap-6 py-10"
//           >
//             {[...NonVegItems].reverse().map((item, i) => (
//               <div
//                 key={i}
//                 className="w-[280px] h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-full object-cover"
//                   alt="non-veg"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* 2. THE SWINGING DOORS (Interactive Layer) */}
//       {/* Left Door */}
//       <motion.div
//         animate={{ x: isOpen ? "-100%" : "0%" }}
//         transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
//         className="absolute inset-y-0 left-0 w-1/2 bg-[#0a0a0a] border-r border-orange-500/20 z-40 flex items-center justify-end pr-10"
//       >
//         <h2 className="text-white text-6xl font-black italic opacity-20 rotate-[-90deg]">
//           SPECIAL
//         </h2>
//       </motion.div>

//       {/* Right Door */}
//       <motion.div
//         animate={{ x: isOpen ? "100%" : "0%" }}
//         transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
//         className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0a] border-l border-orange-500/20 z-40 flex items-center justify-start pl-10"
//       >
//         <h2 className="text-white text-6xl font-black italic opacity-20 rotate-[90deg]">
//           MENU
//         </h2>
//       </motion.div>

//       {/* 3. CENTER CTA (Fades out when doors open) */}
//       <motion.div
//         animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-center"
//       >
//         <div className="w-40 h-40 rounded-full border-2 border-orange-500 bg-black flex flex-col items-center justify-center shadow-[0_0_60px_rgba(234,88,12,0.4)]">
//           <span className="text-orange-500 font-bold text-xs tracking-tighter">
//             CLICK TO OPEN
//           </span>
//           <span className="text-white font-black text-2xl">VOYAGE</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default FoodSection;

import { motion } from "framer-motion";
import { useState } from "react";

// Duplicate the items to ensure the marquee has no gaps
const vegItems = [
  { id: 1, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
];

const nonVegItems = [
  { id: 5, img: "https://images.unsplash.com/photo-1544025162-d76694265947" },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
  },
  { id: 7, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1" },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1529692236671-f1f6e9460272",
  },
];

const FoodSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // We combine the list with itself to create the infinite loop effect
  const doubleVeg = [...vegItems, ...vegItems];
  const doubleNonVeg = [...nonVegItems, ...nonVegItems];

  return (
    <section
      className="relative h-screen w-full bg-[#050505] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onTouchStart={() => setIsOpen(!isOpen)}
    >
      {/* --- BACKGROUND GALLERY LAYER (The Hidden Content) --- */}
      <div className="absolute inset-0 flex">
        {/* LEFT COLUMN: VEG (Moves Upward Forever) */}
        <div className="w-1/2 h-full border-r border-white/5 flex justify-center overflow-hidden">
          <motion.div
            className="flex flex-col gap-6 py-4"
            animate={{ y: [0, -1400] }} // Adjust -1400 based on total height of cards
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubleVeg.map((item, index) => (
              <div
                key={index}
                className="w-[280px] h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="veg dish"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: NON-VEG (Moves Downward Forever) */}
        <div className="w-1/2 h-full flex justify-center overflow-hidden">
          <motion.div
            className="flex flex-col gap-6 py-4"
            animate={{ y: [-1400, 0] }} // Reverse start and end for downward motion
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubleNonVeg.map((item, index) => (
              <div
                key={index}
                className="w-[280px] h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="non-veg dish"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- FOREGROUND DOOR LAYER (The "Cover") --- */}
      {/* Left Door Panel */}
      <motion.div
        animate={{ x: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0a0a0a] z-40 flex items-center justify-center border-r border-white/5"
      >
        <div className="flex flex-col items-center opacity-40">
          <span className="text-orange-500 tracking-[0.5em] text-xs font-bold mb-4 uppercase">
            Selection One
          </span>
          <h2 className="text-7xl font-black text-white italic">VEG</h2>
        </div>
      </motion.div>

      {/* Right Door Panel */}
      <motion.div
        animate={{ x: isOpen ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0a] z-40 flex items-center justify-center border-l border-white/5"
      >
        <div className="flex flex-col items-center opacity-40">
          <span className="text-orange-500 tracking-[0.5em] text-xs font-bold mb-4 uppercase">
            Selection Two
          </span>
          <h2 className="text-7xl font-black text-white italic text-right">
            NON
            <br />
            VEG
          </h2>
        </div>
      </motion.div>

      {/* Center Unlock Indicator */}
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.5 : 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
      >
        <div className="bg-black/80 backdrop-blur-md border border-orange-500 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-[10px] tracking-widest text-center uppercase p-4 shadow-[0_0_40px_rgba(234,88,12,0.5)]">
          Hover to <br /> Unlock Menu
        </div>
      </motion.div>
    </section>
  );
};

export default FoodSection;
