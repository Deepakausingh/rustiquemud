import React, { useEffect, useState } from 'react';
import soap1 from '../assets/gallery-soap-1.jpg';
import soap2 from '../assets/gallery-soap-2.jpg';
import soap3 from '../assets/gallery-soap-3.jpg';
import soap4 from '../assets/gallery-soap-4.jpg';
import soap5 from '../assets/gallery-soap-5.jpg';
import soap6 from '../assets/gallery-soap-6.jpg';


// NOTE FOR USER:
// Update these paths to point to your actual soap gallery images.
// Using different images for variety is recommended.
const galleryImages = {
  soap1,
  soap2,
  soap3,
  soap4,
  soap5,
  soap6,
};


// --- Mock Product Data (ENHANCED with details, ingredients, and features) ---
const products = [
  { id: 1, name: 'Charcoal Detox Bar', scent: 'Eucalyptus & Mint', image: galleryImages.soap1, details: 'Deeply cleanses and purifies skin with activated charcoal and bentonite clay. Great for oily and acne-prone skin.', ingredients: ['Saponified Olive Oil', 'Coconut Oil', 'Shea Butter', 'Activated Charcoal', 'Eucalyptus Essential Oil', 'Mint Essential Oil'], features: ['Detoxifying', 'Oil-Balancing', 'Vegan', 'Hand-Cut'] },
  { id: 2, name: 'Calming Lavender Clay', scent: 'French Lavender', image: galleryImages.soap2, details: 'A gentle, moisturizing bar with soothing French lavender and pink kaolin clay. Perfect for relaxation and sensitive skin.', ingredients: ['Saponified Coconut Oil', 'Cocoa Butter', 'Sweet Almond Oil', 'Pink Kaolin Clay', 'French Lavender Essential Oil'], features: ['Calming Aroma', 'Moisturizing', 'Sensitive Skin Formula', 'Non-Irritating'] },
  { id: 3, name: 'Sandalwood Earth', scent: 'Sandalwood & Vetiver', image: galleryImages.soap3, details: 'A rich, woody scent profile for a grounding shower experience. Contains red sandalwood powder for light exfoliation.', ingredients: ['Saponified Palm Oil (Sustainable)', 'Hemp Seed Oil', 'Castor Oil', 'Red Sandalwood Powder', 'Sandalwood Essential Oil', 'Vetiver Essential Oil'], features: ['Exfoliating', 'Earthy Scent', 'Grounding', 'Long-Lasting Lather'] },
  { id: 4, name: 'Citrus Zest Scrub', scent: 'Orange & Grapefruit', image: galleryImages.soap4, details: 'Invigorating soap with poppy seeds for natural exfoliation and a bright citrus blend to wake up the senses.', ingredients: ['Saponified Shea Butter', 'Rice Bran Oil', 'Poppy Seeds', 'Orange Essential Oil', 'Grapefruit Essential Oil', 'Lemon Zest'], features: ['Invigorating', 'Natural Scrub', 'Brightening', 'Rich Foaming'] },
  { id: 5, name: 'Rose Petal Milk', scent: 'Rose Geranium', image: galleryImages.soap5, details: 'Luxurious soap infused with organic coconut milk and dried rose petals. Ideal for dry and mature skin, leaving it soft and supple.', ingredients: ['Saponified Coconut Milk', 'Avocado Oil', 'Jojoba Oil', 'Dried Rose Petals', 'Rose Geranium Essential Oil'], features: ['Luxurious Foam', 'Hydrating', 'Softening', 'Aromatic'] },
  { id: 6, name: 'Oatmeal Honey Comfort', scent: 'Unscented, Sweet Cream', image: galleryImages.soap6, details: 'A classic, gentle bar made with colloidal oatmeal and local raw honey. Unscented for the most sensitive skin types.', ingredients: ['Saponified Olive Oil', 'Oatmeal Powder', 'Raw Honey', 'Cocoa Butter', 'Vitamin E Oil'], features: ['Soothing', 'Unscented', 'Eczema-Friendly', 'Nourishing'] },
];

// --- Product Modal Component (NEW) ---
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    // Modal Overlay (Fixed position, dark, allows backdrop blur)
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 animate-modalFadeIn"
      onClick={onClose} // Close on clicking outside the modal
    >
      {/* Modal Content Container (Outer Shell)
        - Uses flex-col and h-full to make the inner content respect max-h-[90vh].
      */}
      <div 
        className="w-full max-w-4xl max-h-[90vh] h-full bg-white/5 rounded-3xl backdrop-blur-2xl relative shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing
      >
        {/* Close Button (Cross in top right) 
          - Remains absolute, positioned relative to the outer shell, so it won't scroll.
        */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-light hover:text-orange-500 transition-colors z-30"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* Content Grid (Uses flex-grow to fill remaining height, overflow-hidden to prevent grid-level scroll) */}
        <div className="grid md:grid-cols-2 gap-8 p-8 flex-grow overflow-hidden">
            
            {/* Image Column - Fixed content, takes up its space. h-96 for mobile, md:h-full for desktop. */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.src = 'https://placehold.co/800x800/103632/a0a0a0?text=Product+Image'; }}
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Details Column - Scrollable content (h-full and overflow-y-auto isolates scroll here) */}
            <div className="text-stone-100 h-full overflow-y-auto hide-scrollbar">
                {/* Added right padding (pr-8) to headings and elements to prevent content from going underneath the fixed close button */}
                <h1 className="text-5xl font-serif font-extrabold text-orange-300 mb-2 pr-8">{product.name}</h1>
                <p className="text-lg uppercase tracking-widest text-stone-300 mb-6 pr-8">{product.scent}</p>

                <h2 className="text-2xl font-semibold mt-4 mb-2 pr-8">Details</h2>
                <p className="text-stone-200 leading-relaxed border-b border-white/10 pb-4 pr-8">{product.details}</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 pr-8">Key Ingredients</h2>
                <ul className="list-disc list-inside space-y-1 text-stone-300 pl-4 pb-4 pr-8">
                  {product.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2 pr-8">Features</h2>
                <div className="flex flex-wrap gap-2 mt-2 pb-10 pr-8">
                  {product.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-green-700/50 text-green-100 text-sm rounded-full font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};


// --- Gallery Card Component ---
// Added onViewProduct prop
const GalleryCard = ({ product, delay, onViewProduct }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Elegant lift and shadow effect on hover
  const hoverStyle = isHovered 
    ? { 
        transform: 'translateY(-12px) scale(1.02)', // Higher lift and scale
        boxShadow: '0 30px 100px rgba(100, 150, 100, 0.7)', // Stronger green glow
        zIndex: 10 
      } 
    : { 
        transform: 'translateY(0) scale(1)', 
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.6)', 
        zIndex: 1
      };

  return (
    <div
      // Card wrapper is now the main visual container (set to fixed height for uniform gallery)
      className={`relative h-[480px] rounded-3xl overflow-hidden cursor-pointer animate-fadeIn transition-all duration-500 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        ...hoverStyle, 
        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease-out',
        animationDelay: delay, 
        // Glass effect on card itself, letting background shine through
        backdropFilter: isHovered ? 'blur(3px)' : 'blur(0px)', 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      }}
    >
      {/* 1. Image Fills Card (Subtle movement on hover) */}
      <img
        src={product.image}
        alt={product.name}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out`}
        style={{ 
          transform: isHovered ? 'scale(1.15)' : 'scale(1.05)', // Subtle default scale, stronger hover scale
          filter: isHovered ? 'brightness(0.5)' : 'brightness(0.7)', // Darken slightly on hover for text contrast
        }}
        onError={(e) => { e.target.src = 'https://placehold.co/480x480/103632/a0a0a0?text=Soap+Image'; }}
      />
      
      {/* 2. Info Overlay - starts hidden, appears on hover */}
      <div 
        className="absolute inset-0 p-8 flex flex-col justify-end text-center transition-all duration-500 ease-out z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(30px)',
          // Strong dark gradient overlay at the bottom for text readability
          backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)',
        }}
      >
        <h3 className="text-4xl font-serif font-semibold text-stone-100 mb-2">{product.name}</h3>
        <p className="text-lg text-orange-300 uppercase tracking-widest mb-4">{product.scent}</p>
        
        {/* Call to Action Button - NOW OPENS MODAL */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevents card hover from triggering modal logic
            onViewProduct(product);
          }}
          className="w-full py-3 mt-4 bg-orange-500 text-stone-900 font-bold rounded-xl transition-all duration-300 hover:bg-orange-400 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/50"
        >
          View Product
        </button>
      </div>
      
      {/* 3. Default Label (Always visible, subtle name) */}
      <div className="absolute top-0 right-0 p-3 bg-black/30 rounded-bl-xl backdrop-blur-sm z-20 transition duration-300 group-hover:opacity-0">
         <p className="text-sm text-stone-300 font-sans font-medium">{product.name}</p>
      </div>
    </div>
  );
};


// --- Main Gallery Component ---
const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedProduct to allow for transition effect (if added later)
    setTimeout(() => setSelectedProduct(null), 300); 
  };
  
  // Existing useEffect for CSS injection
  useEffect(() => {
    // Inject custom fonts and CSS animations
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');
      .font-serif { font-family: 'Cormorant Garamond', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }
      
      /* Animation definition for the smooth fade-in effect */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 1.2s ease-out forwards;
        opacity: 0; /* Start invisible */
      }

      /* NEW: Modal Fade-In Animation */
      @keyframes modalFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-modalFadeIn {
        animation: modalFadeIn 0.3s ease-out forwards;
      }
      
      /* NEW: Styles to hide the scrollbar for the modal content */
      .hide-scrollbar::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
      }
      .hide-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      /* Hard and Natural Background Animation (Reused from About page) */
      @keyframes waveMotion {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .bg-animated-gradient {
        /* Deep, EARTHY, and rich color palette */
        background: linear-gradient(-45deg, #0A382D, #144541, #4A3E2D, #284236); 
        background-size: 400% 400%;
        animation: waveMotion 30s ease infinite; 
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // NEW EFFECT: Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function to ensure scroll is always restored when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen text-stone-200 font-sans">
      <section 
        id="gallery" 
        className="py-24 sm:py-32 md:py-40 relative min-h-screen bg-animated-gradient overflow-hidden"
      >
        {/* Use the same animated gradient background */}
        <div className="absolute inset-0 bg-animated-gradient z-0"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 z-10 relative">
          
          {/* Header Section */}
          <div 
            className="text-center mb-20 animate-fadeIn" 
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-lg font-semibold text-orange-300 tracking-widest uppercase mb-4">Discover Our Collection</p>
            <h2 className="text-6xl sm:text-7xl font-serif text-stone-100 mb-6 font-extrabold leading-snug">
              The Finest Handcrafted Soaps
            </h2>
            <p className="text-xl text-stone-200 max-w-4xl mx-auto font-sans tracking-wide py-4 mt-8">
              Explore our range of cold-pressed bars, each made with sustainably sourced earth clays and pure botanical extracts for a truly luxurious experience.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <GalleryCard 
                key={product.id} 
                product={product} 
                delay={`${0.4 + index * 0.1}s`}
                onViewProduct={openModal} // Pass openModal function
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* NEW: Product Modal Display */}
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
