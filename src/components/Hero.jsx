import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#050505] flex items-center justify-center">
      {/* 3D Layer - Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#ea580c" /* Orange-600 */
              attach="material"
              distort={0.4}
              speed={1.5}
              roughness={0.2}
            />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Content Layer - Foreground */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-[40px] shadow-2xl inline-block"
        >
          <h1 className="text-7xl md:text-9xl font-black text-white leading-tight uppercase">
            Stay <br /> <span className="text-orange-500">Beyond</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-lg mx-auto">
            Experience the world's first 3D-integrated luxury resort booking
            platform.
          </p>
          <button className="mt-10 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all">
            Book Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
