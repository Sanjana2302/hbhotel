import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Send,
  Wifi,
  Utensils,
  Dumbbell,
  Droplet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Color Palette
const colors = {
  deepRed: "#7B1E1E",
  darkGreen: "#0F3D2E",
  gold: "#D4AF37",
  lightBg: "#FAF8F3",
  darkBg: "#0A0A0A",
  white: "#FFFFFF",
};

// Navigation Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Rooms",
    "Gallery",
    "Amenities",
    "Contact",
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            style={{ color: colors.deepRed }}
          >
            LUXÉ
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-800 font-medium text-sm"
                whileHover={{ color: colors.gold }}
                transition={{ duration: 0.3 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5"
                  style={{ backgroundColor: colors.gold }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Book Button */}
          <motion.button
            className="hidden md:block px-6 py-2 rounded-full font-semibold text-white transition-all"
            style={{ backgroundColor: colors.deepRed }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 10px 25px rgba(123, 30, 30, 0.3)`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-md rounded-b-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-800 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full mt-4 px-6 py-2 rounded-full font-semibold text-white"
                  style={{ backgroundColor: colors.deepRed }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger text animation
      gsap.from(".hero-text-line", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Floating animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background with gradient and overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.darkBg} 0%, #1a1a1a 50%, ${colors.darkGreen} 100%)`,
          }}
        />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.deepRed}20 0%, transparent 70%)`,
          }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: -1 }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.darkGreen}20 0%, transparent 70%)`,
          }}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: -1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          ref={textRef}
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Headline */}
          <div className="overflow-hidden">
            <h1 className="hero-text-line text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span style={{ color: colors.gold }}>Experience</span>
              <br />
              <span className="text-white">Luxury Redefined</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <p className="hero-text-line text-lg md:text-xl text-gray-300 font-light tracking-wide">
              Discover a sanctuary of elegance where every moment becomes
              timeless
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-text-line flex flex-col sm:flex-row gap-6 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all"
              style={{ backgroundColor: colors.deepRed }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 20px 40px rgba(123, 30, 30, 0.4)`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 text-white transition-all"
              style={{ borderColor: colors.gold, color: colors.gold }}
              whileHover={{
                backgroundColor: colors.gold,
                color: colors.darkBg,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating decorative element */}
        <motion.div
          className="floating-element absolute top-1/4 -right-20 w-40 h-40 rounded-full"
          style={{
            border: `2px solid ${colors.gold}`,
            opacity: 0.2,
          }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: -1 }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax and fade
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 px-4 md:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
          >
            <div
              className="w-full h-96 md:h-full"
              style={{
                background: `linear-gradient(135deg, ${colors.deepRed}40 0%, ${colors.darkGreen}40 100%)`,
              }}
            />
            {/* Decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-32 h-32 rounded-full border-2"
              style={{ borderColor: colors.gold }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: -1, ease: "linear" }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: colors.deepRed }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              A Legacy of Excellence
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Nestled in the heart of sophistication, LUXÉ Hotel represents over
              two decades of unwavering commitment to excellence. Every corner
              tells a story of elegance, innovation, and timeless grace.
            </motion.p>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our dedicated team ensures that every guest experiences
              unparalleled service, bespoke amenities, and moments that
              transcend ordinary hospitality.
            </motion.p>

            <motion.button
              className="mt-8 px-8 py-3 rounded-full font-semibold text-white text-lg"
              style={{ backgroundColor: colors.darkGreen }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 15px 35px rgba(15, 61, 46, 0.3)`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Rooms Component
const RoomCard = ({ room, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        },
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
    >
      {/* Card background */}
      <div
        className="w-full h-80 relative"
        style={{
          background: `linear-gradient(135deg, ${room.color1} 0%, ${room.color2} 100%)`,
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{room.description}</p>
        <motion.button
          className="w-full py-2 rounded-lg font-semibold text-white transition-all"
          style={{ backgroundColor: colors.gold, color: colors.darkBg }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Details
        </motion.button>
      </motion.div>

      {/* Price tag */}
      <div
        className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md bg-white/20"
        style={{ color: colors.gold }}
      >
        <p className="font-semibold text-sm">${room.price}/night</p>
      </div>
    </motion.div>
  );
};

const RoomsSection = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      description: "Spacious comfort with premium amenities",
      price: 350,
      color1: colors.deepRed,
      color2: "#A23030",
    },
    {
      name: "Suite Elegante",
      description: "Luxury living at its finest",
      price: 550,
      color1: colors.darkGreen,
      color2: "#1a5f48",
    },
    {
      name: "Presidential Suite",
      description: "Ultimate luxury and exclusivity",
      price: 1200,
      color1: colors.gold,
      color2: "#B8860B",
    },
  ];

  return (
    <section
      id="rooms"
      className="py-20 md:py-32 px-4 md:px-8"
      style={{ backgroundColor: colors.lightBg }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: colors.deepRed }}
          >
            Our Sanctuaries
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Each room is a masterpiece of comfort and elegance
          </p>
        </motion.div>

        {/* Room cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GalleryImage = ({ image, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      },
    );
  }, [index]);

  return (
    <>
      <motion.div
        ref={imgRef}
        className="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${image.color1} 0%, ${image.color2} 100%)`,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.gold }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-2xl text-white">+</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-11/12 h-4/5 md:w-4/5 rounded-2xl overflow-hidden"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${image.color1} 0%, ${image.color2} 100%)`,
                }}
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xl"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const GallerySection = () => {
  const galleryImages = [
    { color1: colors.deepRed, color2: "#A23030" },
    { color1: colors.darkGreen, color2: "#1a5f48" },
    { color1: colors.gold, color2: "#B8860B" },
    { color1: "#2c3e50", color2: "#34495e" },
    { color1: colors.deepRed, color2: colors.darkGreen },
    { color1: colors.gold, color2: colors.darkGreen },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: colors.darkGreen }}
          >
            Visual Splendor
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Discover the beauty that awaits you
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={
                index === 0 || index === 2
                  ? "md:col-span-1 md:row-span-2"
                  : "md:col-span-1"
              }
            >
              <GalleryImage image={image} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Elizabeth Morgan",
      role: "Luxury Travel Curator",
      text: "An extraordinary experience that exceeded every expectation. The attention to detail is simply unmatched.",
      rating: 5,
    },
    {
      name: "Alexander Reich",
      role: "Business Executive",
      text: "LUXÉ redefined what hospitality means. From arrival to departure, every moment was perfection.",
      rating: 5,
    },
    {
      name: "Sophia Bennett",
      role: "Wellness Influencer",
      text: "A sanctuary for the soul. The ambiance, service, and amenities create pure magic.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-20 md:py-32 px-4 md:px-8"
      style={{ backgroundColor: colors.lightBg }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: colors.deepRed }}
          >
            Guest Stories
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="rounded-2xl p-8 md:p-12 backdrop-blur-md bg-white/40 border border-white/20 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </motion.div>
                  ),
                )}
              </div>

              {/* Quote */}
              <p className="text-2xl md:text-3xl text-gray-800 mb-8 font-light italic leading-relaxed">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {testimonials[current].name}
                </p>
                <p className="text-gray-600" style={{ color: colors.gold }}>
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.deepRed, color: colors.white }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.darkGreen, color: colors.white }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="h-2 rounded-full cursor-pointer"
                style={{
                  backgroundColor: index === current ? colors.gold : "#ccc",
                  width: index === current ? "24px" : "8px",
                }}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Amenities Section Component
const AmenityCard = ({ amenity, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      },
    );
  }, [index]);

  const IconComponent = amenity.icon;

  return (
    <motion.div
      ref={ref}
      className="group p-8 rounded-xl text-center cursor-pointer"
      style={{ backgroundColor: colors.lightBg }}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
    >
      <motion.div
        className="mb-6 flex justify-center"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <div
          className="p-4 rounded-full"
          style={{ backgroundColor: colors.gold }}
        >
          <IconComponent size={32} className="text-white" />
        </div>
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.name}</h3>
      <p className="text-gray-600 font-light text-sm">{amenity.description}</p>
    </motion.div>
  );
};

const AmenitiesSection = () => {
  const amenities = [
    {
      name: "WiFi & Technology",
      description: "High-speed connectivity throughout",
      icon: Wifi,
    },
    {
      name: "Michelin Dining",
      description: "World-class culinary experiences",
      icon: Utensils,
    },
    {
      name: "Fitness Center",
      description: "State-of-the-art wellness facilities",
      icon: Dumbbell,
    },
    {
      name: "Spa & Wellness",
      description: "Rejuvenating treatments and services",
      icon: Droplet,
    },
  ];

  return (
    <section id="amenities" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: colors.darkGreen }}
          >
            World-Class Amenities
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Everything you need for an unforgettable stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 md:px-8"
      style={{ backgroundColor: colors.lightBg }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: colors.deepRed }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg font-light">
            We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div className="flex gap-4" whileHover={{ x: 10 }}>
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: colors.gold }}
              >
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Location
                </h3>
                <p className="text-gray-600">
                  123 Luxury Avenue, City, Country
                </p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4" whileHover={{ x: 10 }}>
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: colors.deepRed }}
              >
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4" whileHover={{ x: 10 }}>
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: colors.darkGreen }}
              >
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">reservations@luxehotel.com</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {["name", "email", "message"].map((field) => (
              <motion.div
                key={field}
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor={field}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-white/50 backdrop-blur-sm"
                    style={{
                      borderColor:
                        focusedField === field ? colors.gold : "#e5e7eb",
                    }}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                  />
                ) : (
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-white/50 backdrop-blur-sm"
                    style={{
                      borderColor:
                        focusedField === field ? colors.gold : "#e5e7eb",
                    }}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.deepRed }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 15px 35px rgba(123, 30, 30, 0.3)`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Send Message</span>
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    "Quick Links": ["Home", "About", "Rooms", "Gallery", "Contact"],
    Resources: ["Privacy", "Terms", "FAQs", "Blog"],
    Connect: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: colors.gold }}
            >
              LUXÉ
            </h3>
            <p className="text-gray-400 font-light">
              Where elegance meets excellence, creating unforgettable moments.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 font-light hover:text-white transition-colors"
                      whileHover={{ x: 5, color: colors.gold }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8" />

        {/* Bottom */}
        <motion.div
          className="text-center text-gray-400 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; 2024 LUXÉ Hotel. All rights reserved. Crafted with elegance.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Main App Component
export default function LuxeHotelWebsite() {
  return (
    <div className="w-full overflow-hidden">
      <style>{`
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #7B1E1E;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0F3D2E;
        }
      `}</style>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <TestimonialSlider />
      <AmenitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
