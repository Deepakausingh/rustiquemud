import React, { useEffect, useState } from 'react';

// NOTE FOR USER:
// You MUST update these paths below to correctly point to the location of your
// four image files in your project's local assets folder (e.g., './assets/soap-heritage.jpg').
// These variables will then hold the correct image URLs provided by your bundler.
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';


// --- NEW: Background Carousel Component ---
const BackgroundCarousel = ({ images, duration = 8000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up interval to cycle images
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, duration);
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ease-in-out`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Set opacity based on current index and use a slow transition for fading
            opacity: index === currentImageIndex ? 1 : 0,
            transitionDuration: '2000ms', 
            // Dark filter and deep shadow to ensure card text is always readable
            filter: 'brightness(0.4) blur(1px)', 
          }}
          // Fallback if image fails
          onError={(e) => { e.target.style.backgroundImage = 'none'; e.target.style.backgroundColor = '#0A382D'; }}
        />
      ))}
    </div>
  );
};


// Reusable component for the content cards
const InfoCard = ({ title, content, delay, isFeature = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Custom hover style for the "cool and smooth" lift and shadow effect
  const hoverStyle = isHovered 
    ? { 
        transform: 'translateY(-10px) scale(1.005)', // Subtle lift for the minimalist card
        boxShadow: '0 30px 80px rgba(100, 150, 100, 0.7)', // Enhanced green glow
        zIndex: 10 
      } 
    : { 
        transform: 'translateY(0) scale(1)', 
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.7)', // Deeper default shadow
        zIndex: 1
      };
      
  return (
    <div
      // MODIFIED: Pure Glassmorphism style (backdrop blur and translucent background)
      className={`relative p-10 rounded-[2rem] backdrop-blur-3xl bg-white/5 border border-white/20 cursor-pointer animate-fadeIn transition-all duration-500 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        ...hoverStyle, 
        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease-out',
        animationDelay: delay, // Staggered fade-in
      }}
    >
      {/* Content Area (Higher Z-index to sit perfectly on top) */}
      <div className="relative z-10">
        <h3 className={`font-serif mb-4 font-semibold text-center ${isFeature ? 'text-4xl text-white' : 'text-3xl text-stone-100'}`}>{title}</h3>
        <p className={`font-sans leading-relaxed text-center ${isFeature ? 'text-lg text-stone-200' : 'text-base text-stone-300'}`}>
          {content}
        </p>
      </div>
    </div>
  );
};


// --- Focused About Section component ---
const AboutSection = () => {
  // Array of image paths for the background carousel
  const carouselImages = [
    image1,
    image2,
    image3,
    image4
  ];
  
  useEffect(() => {
    // Add fonts and custom CSS animations via a style tag
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');
      .font-serif { font-family: 'Cormorant Garamond', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }
      
      /* Animation definition for the smooth fade-in effect (used on header and cards) */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 1.2s ease-out forwards;
        opacity: 0; /* Start invisible */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    // Outer wrapper for full screen and base styling
    <div className="min-h-screen text-stone-200 font-sans">
      <section 
        id="about" 
        // MODIFIED: Base background is now a solid dark color, but the carousel covers it.
        className="py-24 sm:py-32 md:py-40 relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A382D]"
      >
        {/* NEW: Background Carousel Component */}
        <BackgroundCarousel images={carouselImages} duration={8000} />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 z-10">
          
          {/* Header Section with Fade-In */}
          <div 
            className="text-center mb-20 animate-fadeIn" 
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-lg font-semibold text-orange-300 tracking-widest uppercase mb-4">Rooted in Nature</p>
            <h2 className="text-6xl sm:text-7xl font-serif text-stone-100 mb-6 font-extrabold leading-snug">
              The Art of Clean, Conscious Skincare
            </h2>
            <p className="text-xl text-stone-200 max-w-4xl mx-auto font-sans tracking-wide py-4 mt-8">
              **Crafted with intention**, sourced with respect. We believe the purest ingredients yield the best results for your skin and the planet, delivered through a heritage of slow, careful production.
            </p>
          </div>

          {/* Cards Layout: Asymmetrical, alternating structure */}
          <div className="flex flex-col gap-y-16">
            
            {/* 1. Feature Block: The Story (Full Width) */}
            <InfoCard 
              title="Our Foundational Philosophy: Slow Skincare"
              content="RustiqueMud was born from a desire to return to basics. Tired of synthetic ingredients, we started hand-blending small batches of soap using only the finest botanicals and earth clays. Our brand is a promise of simplicity, transparency, and connection to nature, celebrating the slow art of traditional soap-making."
              isFeature={true}
              delay="0.4s"
            />

            {/* 2 & 3. Split Block: Ingredients and Process (Two Columns) */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              <InfoCard 
                title="Purely Botanical Ingredients"
                content="We exclusively use ethically-sourced earth clays, cold-pressed botanical oils (like shea butter and olive oil), and natural essential oils. Every ingredient is chosen for its therapeutic properties and gentle action on the skin. You will find no parabens, no sulfates, and no synthetics in our shop, ever."
                delay="0.6s"
              />
              <InfoCard 
                title="The Cold-Pressed Handcrafted Process"
                content="Every bar of RustiqueMud soap is mixed, poured, and cut by hand in small, temperature-controlled batches. This artisanal approach ensures the quality, integrity, and potency of our natural ingredients are preserved, resulting in a superior, long-lasting bar."
                delay="0.8s"
              />
            </div>

            {/* 4. Concluding Block: Sustainability (Full Width) */}
            <InfoCard 
              title="Minimal Waste: Conscious Creation"
              content="Sustainability is at the heart of RustiqueMud. We focus on minimal packaging, use biodegradable materials, and ensure a low carbon footprint in our production process. Our philosophy is minimal waste, maximum benefit for your skin and the planet—a conscious choice for eco-conscious buyers."
              isFeature={true}
              delay="1.0s"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
