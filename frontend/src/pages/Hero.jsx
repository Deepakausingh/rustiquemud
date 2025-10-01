import React, { useEffect, useRef } from "react";
import { ArrowDown, Leaf, Hand, Recycle, Zap, Heart } from "lucide-react";
import Herosoap from '../assets/hero-soap1.jpg'; // Local background image
import featuredsoap1 from '../assets/featured-soap1.jpg';
import featuredsoap2 from '../assets/featured-soap2.jpg';
import featuredsoap3 from '../assets/featured-soap3.jpg';
import { Link } from "react-router-dom";

const Button = ({ children, className = '', size = 'md', ...props }) => {
  let padding = 'px-4 py-2';
  if (size === 'lg') padding = 'px-8 py-4';
  
  return (
    <button
      className={`rounded-xl font-medium transition-all duration-200 ${padding} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const heroImage = Herosoap; // Replace with actual image path
const soap1 = featuredsoap1; // Replace with actual image path
const soap2 = featuredsoap2;    // Replace with actual image path
const soap3 = featuredsoap3;    // Replace with actual image path


const Hero = () => {
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // FIX: Correctly observe both the contentRef and the visualRef
    if (contentRef.current) observer.observe(contentRef.current);
    if (visualRef.current) observer.observe(visualRef.current); // Corrected this line to observe visualRef.current

    return () => observer.disconnect();
  }, []);
  
  // Custom CSS for Continuous Typing, Deleting, and Bouncing Animations
  const typingStyles = `
    /* Keyframes for Continuous Typing and Deleting (Total cycle is 10s) */
    @keyframes typing-loop {
      /* 1. Typing out 'Nature\\'s Touch' (3 seconds) */
      0% { width: 0ch; }
      30% { width: 15ch; } /* Typing finished at 30% mark */
      
      /* 2. Pause with full text (1 second) */
      40% { width: 15ch; } /* Pause ends at 40% mark */
      
      /* 3. Deleting 'Nature\\'s Touch' (3 seconds) */
      70% { width: 0ch; } /* Deleting finished at 70% mark */

      /* 4. Pause with no text, ready to restart (3 seconds) */
      100% { width: 0ch; } /* Loop restarts */
    }
    
    /* Keyframes for bouncing icons (more prominent) */
    @keyframes bounce-vertical {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); } /* Bounce 10px up */
    }
    
    /* Keyframes for subtle scroll hint bounce (less prominent) */
    @keyframes scroll-bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); } /* Bounce 5px up */
    }
    
    /* Keyframes for Continuous Gradient Movement (New Addition) */
    @keyframes gradient-move {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Define utility classes using the keyframes */
    .animate-type {
      /* Increased duration from 8s to 10s to slow down the action */
      animation: typing-loop 10s steps(30, end) 1s infinite forwards; 
    }
    .animate-icon-bounce {
      animation: bounce-vertical 1.8s infinite;
    }
    .animate-scroll-hint {
      animation: scroll-bounce 1.5s infinite;
    }
    .animate-gradient {
      /* Define the multi-color gradient using earthy greens and ambers */
      background: linear-gradient(-45deg, #fefce8, #ecfccb, #fde68a, #d9f99d);
      background-size: 400% 400%;
      animation: gradient-move 20s ease infinite; /* Slow, continuous movement */
    }
  `;


  return (
    <>
      <style>{typingStyles}</style>
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen pt-24 pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Beautiful handmade natural soaps"
            className="w-full h-full object-cover opacity-70 scale-[1.05] transition-transform duration-[4000ms] ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/100 via-gray-900/30 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Handcrafted with
              <span 
                // Typing animation classes applied here
                className="block mt-2 max-w-fit mx-auto overflow-hidden whitespace-nowrap animate-type bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ animationDelay: "0.2s" }}
              >
                Nature's Touch
              </span>
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-gray-300 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Discover the <strong>pure luxury</strong> of handmade soaps crafted with natural
              ingredients, essential oils, and love for your skin and the environment.
            </p>

            <div
                className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Link to="/gallery">
                  <Button size="lg" className="px-10 py-3 font-semibold bg-orange-500 text-white shadow-2xl hover:opacity-90">
                    Explore Our Collection
                  </Button>
                </Link>

                <Link to="/about">
                  <Button size="lg" className="px-10 py-3 font-semibold border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10">
                    Learn Our Story
                  </Button>
                </Link>
              </div>

            <div
              className="mt-16 grid grid-cols-3 gap-12 max-w-3xl mx-auto opacity-90 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              {/* Icon 1: Circular corners (rounded-full) */}
              <div className="text-center p-5 transform transition-transform hover:scale-105 cursor-default">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center bg-orange-200/20 border border-orange-300/30 shadow-xl backdrop-blur-sm text-orange-500 animate-icon-bounce">
                  <Leaf size={28} />
                </div>
                <p className="text-sm uppercase font-bold tracking-wider text-orange-500">Natural</p>
                <p className="text-xs text-gray-400 mt-1">Ethically sourced</p>
              </div>
              
              {/* Icon 2: Circular corners (rounded-full) */}
              <div className="text-center p-5 transform transition-transform hover:scale-105 cursor-default" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center bg-orange-200/20 border border-orange-300/30 shadow-xl backdrop-blur-sm text-orange-500 animate-icon-bounce">
                  <Hand size={28} />
                </div>
                <p className="text-sm uppercase font-bold tracking-wider text-orange-500">Handmade</p>
                <p className="text-xs text-gray-400 mt-1">Small batch</p>
              </div>
              
              {/* Icon 3: Circular corners (rounded-full) */}
              <div className="text-center p-5 transform transition-transform hover:scale-105 cursor-default" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center bg-orange-200/20 border border-orange-300/30 shadow-xl backdrop-blur-sm text-orange-500 animate-icon-bounce">
                  <Recycle size={28} />
                </div>
                <p className="text-sm uppercase font-bold tracking-wider text-orange-500">Sustainable</p>
                <p className="text-xs text-gray-400 mt-1">Zero waste</p>
              </div>
            </div>
          </div>

          {/* Down Arrow: Added bounce animation */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#about" aria-label="Scroll down">
              <div className="p-2 rounded-full border border-gray-400/50 text-gray-400 animate-scroll-hint hover:border-orange-500 hover:text-orange-500 cursor-pointer">
                <ArrowDown size={24} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - REDESIGNED */}
      {/* MODIFIED: Added an attractive, subtle gradient background */}
      <section id="about" className="relative about-section py-24 px-6 md:px-10 bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            {/* Left Column: Content and Stats */}
            <div ref={contentRef} className="opacity-0 translate-y-8 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-5 border-l-4 border-orange-400 pl-4">
                Our Natural Philosophy
              </h2>
              {/* Updated font size and color for body text */}
              <div className="space-y-4 text-lg text-gray-600 font-medium">
                <p>
                  At <strong>RustiqueMud</strong>, we believe that beautiful skin begins with pure,
                  natural ingredients. Every soap is **handcrafted in small batches** using traditional methods perfected over generations.
                </p>
                <p>
                  We source our ingredients from sustainable farms and ethical suppliers, ensuring that each bar not only nourishes your skin but also **respects our planet**.
                </p>
                {/* Updated size and style for the quote block */}
                <p className="italic p-4 bg-yellow-50 rounded-lg border border-yellow-200 mt-6 shadow-sm text-base">
                  Our commitment goes beyond exceptional products – we're dedicated to fostering a
                  community that values mindful living, natural beauty, and environmental consciousness.
                </p>
              </div>

              {/* Enhanced Stat Cards */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex-1 min-w-[150px] flex flex-col items-center p-5 bg-white rounded-xl shadow-xl border-b-4 border-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                  <Heart size={24} className="text-orange-600 mb-2" />
                  <div className="text-3xl font-extrabold text-gray-800">100%</div>
                  <div className="uppercase text-xs tracking-wider text-orange-500 mt-1">Natural Ingredients</div>
                </div>
                <div className="flex-1 min-w-[150px] flex flex-col items-center p-5 bg-white rounded-xl shadow-xl border-b-4 border-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                  <Zap size={24} className="text-orange-600 mb-2" />
                  <div className="text-3xl font-extrabold text-gray-800">0</div>
                  <div className="uppercase text-xs tracking-wider text-orange-500 mt-1">Harmful Chemicals</div>
                </div>
              </div>
            </div>

            {/* Right Column: Redesigned Feature Cards (2x2 Grid) */}
            <div ref={visualRef} className="opacity-0 translate-y-8 transition-all duration-1000">
              <div className="grid grid-cols-2 gap-6 h-full">
                
                {/* Feature Card 1: Pure Botanicals */}
                <div className="group bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-300/50">
                  <Leaf size={40} className="text-green-600 mb-3 transition-transform group-hover:scale-110" />
                  <p className="font-bold text-gray-800 text-lg">Pure Botanicals</p>
                  <p className="text-sm text-gray-500 mt-1">Sustainably sourced ingredients.</p>
                </div>
                
                {/* Feature Card 2: Handcrafted */}
                <div className="group bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-300/50">
                  <Hand size={40} className="text-orange-600 mb-3 transition-transform group-hover:scale-110" />
                  <p className="font-bold text-gray-800 text-lg">Handcrafted</p>
                  <p className="text-sm text-gray-500 mt-1">Made in small, quality batches.</p>
                </div>
                
                {/* Feature Card 3: Quality Assured */}
                <div className="group bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-300/50">
                  <Zap size={40} className="text-yellow-600 mb-3 transition-transform group-hover:scale-110" />
                  <p className="font-bold text-gray-800 text-lg">Quality Assured</p>
                  <p className="text-sm text-gray-500 mt-1">Tested for purity and safety.</p>
                </div>
                
                {/* Feature Card 4: Love & Care */}
                <div className="group bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-300/50">
                  <Heart size={40} className="text-red-500 mb-3 transition-transform group-hover:scale-110" />
                  <p className="font-bold text-gray-800 text-lg">Love & Care</p>
                  <p className="text-sm text-gray-500 mt-1">Gentle on all skin types.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - UPDATED TO IMAGE CARD DESIGN */}
      {/* MODIFIED: Changed background to a continuously moving earthy green gradient */}
      <section className="relative py-24 px-5 md:px-10 overflow-hidden text-center animate-gradient">
        {/* Section Title */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-14">
            Our <span className="text-orange-600">Purest</span> Creations
        </h3>
        
        {/* Adjusted grid to 3 cards max for desktop */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Loop for the three featured products */}
          {[soap1, soap2, soap3].map((img, i) => (
            // New Card Styling: Relative container with fixed height for the image to fill
            <div key={i} className="group relative overflow-hidden h-96 rounded-2xl shadow-xl transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
                {/* 1. Image Background Cover */}
                <img 
                    src={img} 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/FFD9A0/333333?text=Soap" }} 
                    alt={['Lemon Zest', 'Lavender Dream', 'Oatmeal Honey'][i]} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* 2. Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>

                {/* 3. Title (Top Right Corner) - Visible by default, DISAPPEARS on hover */}
                {/* MODIFIED: Removed p-4 to ensure the element is flush with the top/right edges */}
                <div className="absolute top-0 right-0 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                    <h4 className="text-xl font-bold text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-bl-lg rounded-tr-xl">
                        {['Lemon Zest', 'Lavender Dream', 'Oatmeal Honey'][i]}
                    </h4>
                </div>

                {/* 4. Info/Description (Bottom Fade-in on Hover, including name) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent transition-all duration-500">
                    
                    {/* NEW: Product Name - Initially hidden, FADES UP and APPEARS on hover */}
                    <h4 className="text-xl font-bold text-white mb-2 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        {['Lemon Zest', 'Lavender Dream', 'Oatmeal Honey'][i]}
                    </h4>

                    {/* Description Text - Initially hidden, fades up and appears on hover */}
                    <p className="text-base text-gray-100 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        {['Invigorating citrus boost, perfect for morning use.', 'Calming essential oils for deep relaxation and skin soothing.', 'Gentle exfoliation and deep hydration for sensitive skin.'][i]}
                    </p>
                </div>
            </div>
          ))}
        </div>

        {/* MODIFIED: Added Go to Gallery button */}

        <div className="mt-12">
          <Link to="/gallery">
            <Button size="lg" className="px-10 py-3 font-semibold bg-gray-800 text-white shadow-2xl hover:bg-gray-700">
              Go to Full Gallery
            </Button>
          </Link>
        </div>


      </section>

      {/* CTA Section - RESTRUCTURED AND STYLED for full width and light background and full height coverage */}
      {/* Removed py-24 and bg-gray-50 from the section */}
      <section className="overflow-hidden">
        {/* This inner div now provides all the spacing (py-24), background, and shadow, ensuring it fills the whole width and height of its section container. */}
        <div className="w-full py-24 px-6 md:px-12 text-center shadow-xl 
                        bg-gradient-to-br from-yellow-50 to-orange-100 text-gray-800">
            
            {/* Wrapper to constrain content width for readability */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-800">
                    Ready to <span className="text-orange-600">Transform</span> Your Routine?
                </h3>
                
                <p className="text-xl text-gray-600 mb-10 mt-4 max-w-3xl mx-auto">
                    Join our mailing list for exclusive access to new products and sustainable living tips.
                </p>
                
                <div className="flex justify-center gap-6 flex-wrap">
                    {/* Button 1: Coming Soon - Muted style for light background */}
                    <Button className="px-10 py-3 font-bold bg-gray-200 text-gray-600 opacity-90 cursor-not-allowed shadow-inner border border-gray-300 hover:bg-gray-300">
                        Coming Soon
                    </Button>
                    
                    {/* Button 2: Learn More - Prominent style for light background */}
                    <Button className="px-10 py-3 font-bold bg-orange-500 text-white shadow-xl hover:bg-orange-600 transition-colors">
                        Learn Our Values
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
