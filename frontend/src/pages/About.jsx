import React, { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import ownerImage from "../assets/shilpi.jpg";

// Background Carousel
const BackgroundCarousel = ({ images, duration = 8000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentImageIndex ? 1 : 0,
            transitionDuration: "2000ms",
            filter: "brightness(0.35) blur(5px)",
          }}
        />
      ))}
    </div>
  );
};

const AboutSection = () => {
  const carouselImages = [image1, image2, image3, image4];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@300;400;600&display=swap');
      .font-serif { font-family: 'Cormorant Garamond', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out forwards;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-stone-200 font-sans overflow-hidden">
      {/* Background Carousel */}
      <BackgroundCarousel images={carouselImages} duration={8000} />

      <section className="relative min-h-screen py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          {/* Hero Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h2
              className="text-6xl sm:text-7xl font-serif font-extrabold mb-4 tracking-tight drop-shadow-lg 
                        bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: "MyCustomFont", paddingTop: "0.2em", paddingBottom: "0.2em" }}
            >
              {process.env.REACT_APP_NAME || "RustiqueMud"}
            </h2>

            <p className="text-lg sm:text-xl text-orange-300 tracking-wider uppercase">
              Where Nature Meets Care
            </p>
          </div>

          {/* Owner Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-full px-6 lg:px-16 py-16 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            {/* Left: Text Content */}
            <div className="flex-1 lg:pr-12 mb-12 lg:mb-0 text-left">
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold drop-shadow-md mb-6"
                style={{ background: "linear-gradient(90deg, #FFD700, #FF8C00)", WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Meet Our Founder – Shilpi Sharma
              </h3>
              <p className="text-lg text-stone-200 leading-relaxed max-w-3xl">
                Rustique Mud is more than just a soap brand — it is a journey of
                passion, purity, and purpose. Founded in 2018 by{" "}
                <span className="font-semibold text-white">Shilpi Sharma</span>, our
                story began with a heartfelt mission: to bring the timeless goodness
                of nature back into modern self-care.
              </p>
              <p className="mt-6 text-lg text-orange-300 font-semibold">
                Crafted with love, authenticity, and care.
              </p>
            </div>

            {/* Right: Owner Image */}
            <div className="flex-shrink-0 relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src={ownerImage}
                  alt="Shilpi Sharma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Mission & Philosophy */}
          <div className="animate-fadeInUp flex flex-col lg:flex-row items-start lg:items-start gap-12 mt-12" style={{ animationDelay: "1.0s" }}>
            {/* Left: OUR MISSION Text */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-serif text-4xl sm:text-5xl font-bold mb-12"
                style={{ background: "linear-gradient(90deg, #FFD700, #FF8C00)", WebkitBackgroundClip: "text", color: "transparent" }}
              >
                OUR MISSION
              </h3>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-200 max-w-3xl mx-auto lg:mx-0">
                  What started as a small experiment in her own home soon
                  transformed into a brand that celebrates the art of handmade
                  skincare. Every bar of soap crafted under Rustique Mud carries
                  with it a piece of nature’s honesty, infused with love, and
                  shaped with care.
                </p>

                <h4 className="font-serif text-3xl mb-6 font-semibold"
                  style={{ background: "linear-gradient(90deg, #FFD700, #FF8C00)", WebkitBackgroundClip: "text", color: "transparent" }}
                >
                  Crafted With Heart, From Home
                </h4>
                <p className="text-lg leading-relaxed text-stone-100 max-w-3xl mx-auto lg:mx-0">
                  Unlike mass-produced products, Rustique Mud soaps are homemade
                  in small batches. Each ingredient is handpicked, each recipe
                  thoughtfully curated, and each soap bar gently molded to ensure
                  quality, authenticity, and purity.
                </p>
              </div>
            </div>

            {/* Right: Philosophy Cards */}
            {/* Right: Philosophy Cards in clover shape */}
              {/* Right: Philosophy Cards in clover shape */}
{/* Right: Philosophy Cards in clover shape */}
<div className="flex-1 grid grid-cols-2 gap-2 lg:gap-2 text-center lg:text-left">
  {/* Top Left */}
  <div className="aspect-square bg-white/5 border border-white/10 shadow-lg flex flex-col items-center justify-center rounded-tl-[0] rounded-tr-[50%] rounded-br-[0] rounded-bl-[50%] p-6">
    <span className="text-2xl">🌿</span>
    <p className="mt-4 text-lg font-semibold">Pure Ingredients</p>
    <p className="text-sm text-stone-300">Only natural, skin-loving elements.</p>
  </div>

  {/* Top Right */}
  <div className="aspect-square bg-white/5 border border-white/10 shadow-lg flex flex-col items-center justify-center rounded-tr-[0] rounded-tl-[50%] rounded-br-[50%] rounded-bl-[0] p-6">
    <span className="text-2xl">🤲</span>
    <p className="mt-4 text-lg font-semibold">Gentle Care</p>
    <p className="text-sm text-stone-300">No harsh chemicals, no compromises.</p>
  </div>

  {/* Bottom Left */}
  <div className="aspect-square bg-white/5 border border-white/10 shadow-lg flex flex-col items-center justify-center rounded-bl-[0] rounded-tr-[0] rounded-tl-[50%] rounded-br-[50%] p-6">
    <span className="text-2xl">🌎</span>
    <p className="mt-4 text-lg font-semibold">Sustainable Living</p>
    <p className="text-sm text-stone-300">Thoughtful choices for you and the planet.</p>
  </div>

  {/* Bottom Right */}
  <div className="aspect-square bg-white/5 border border-white/10 shadow-lg flex flex-col items-center justify-center rounded-br-[0] rounded-tl-[0] rounded-tr-[50%] rounded-bl-[50%] p-6">
    <span className="text-2xl">💧</span>
    <p className="mt-4 text-lg font-semibold">Eco-Friendly</p>
    <p className="text-sm text-stone-300">Kind to the environment in every way.</p>
  </div>
</div>


          </div>

          {/* Closing Section */}
          <div className="animate-fadeInUp text-center mt-16" style={{ animationDelay: "1.2s" }}>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-6"
              style={{ background: "linear-gradient(90deg, #FFD700, #FF8C00)", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              In Your Care Since 2018
            </h3>
            <p className="text-lg text-stone-100 max-w-3xl mx-auto leading-relaxed">
              Every soap we create tells a story — of nature, of craftsmanship,
              and of care. Since 2018, Rustique Mud has been{" "}
              <span className="italic text-orange-300">“In Your Care”</span>,
              offering products that not only nurture your skin but also
              inspire a conscious way of living.
            </p>
            <p className="mt-6 text-xl font-bold text-orange-300 tracking-wide">
              Rustique Mud — where nature’s simplicity meets the luxury of care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
