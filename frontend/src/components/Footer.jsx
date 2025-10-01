import React from "react";
import { Instagram, MessageCircle, Mail, Heart, Leaf, Send } from "lucide-react";
import logo from "../assets/Logo/rm2cm.png";

// Inline Tailwind Configuration for a Solid Dark, Natural Theme
/* Color Palette for Dark Mode:
    natural-primary (Accent): #D99B6A (Light Brown/Burnt Orange)
    natural-accent (Secondary Accent): #8FD498 (Soft Light Green)
    natural-bg (Solid Dark BG): #29343B (Dark Slate Blue/Charcoal)
    natural-text: #F0F4F8 (Light Text)
*/
const DARK_BG = '#29343B';
const LIGHT_TEXT = '#F0F4F8';
const ACCENT_PRIMARY = '#D99B6A'; 
const ACCENT_SECONDARY = '#8FD498'; 

const NewsletterSignup = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      console.log('Subscribing:', email);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000); // Reset message after 3 seconds
      setEmail('');
    }
  };

  return (
    // Newsletter box has a slightly lighter dark background for contrast
    <div className="p-6 rounded-2xl shadow-2xl transition-all hover:shadow-xl" style={{ backgroundColor: '#364249', border: '1px solid #4A555E' }}>
      <h4 className="font-serif text-xl font-bold mb-3 flex items-center" style={{ color: LIGHT_TEXT }}>
        <Send size={20} className="mr-2" style={{ color: ACCENT_SECONDARY }} />
        Join the Mud Club
      </h4>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        Get 10% off your first order! Exclusive tips on self-care and sustainable living delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input 
          type="email" 
          placeholder="Your best email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // Input field styled for dark theme
          className="w-full p-3 text-sm text-[#222] bg-white border rounded-xl focus:ring-2 focus:ring-[#8FD498] outline-none transition-all shadow-sm"
          style={{ borderColor: '#4A555E' }}
          aria-label="Email for newsletter signup"
          required
        />
        <button 
          type="submit" 
          disabled={isSubscribed}
          // Updated Button: Removed opacity change, added subtle scale and enhanced shadow for a 'glow' effect.
          className="w-full py-3 font-semibold rounded-xl transition-all shadow-lg shadow-[#D99B6A]/30 active:shadow-none disabled:bg-gray-600 disabled:shadow-none flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#D99B6A]/60"
          style={{ backgroundColor: ACCENT_PRIMARY, color: DARK_BG }}
        >
          {isSubscribed ? (
            <span className="flex items-center gap-2">Subscribed! <Leaf size={16} /></span>
          ) : (
            <span className="flex items-center justify-center gap-2">Subscribe Now <Heart size={16} /></span>
          )}
        </button>
      </form>
    </div>
  );
};

const FooterContent = () => {
  const currentYear = new Date().getFullYear();

  // Color Definitions
  const PRIMARY_BROWN = ACCENT_PRIMARY;
  const ACCENT_GREEN = ACCENT_SECONDARY;
  const BG_COLOR = DARK_BG;
  const TEXT_COLOR = LIGHT_TEXT;
  
  const footerLinks = {
    products: [
      { name: "Lavender Collection", href: "#" },
      { name: "Oatmeal Series", href: "#" },
      { name: "Essential Oils", href: "#" },
      { name: "Gift Sets", href: "#" },
      { name: "Custom Orders", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Ingredients", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Reviews", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Care Guide", href: "#" }
    ]
  };

  const LinkSection = ({ title, links }) => (
    <div>
      {/* Title text is light, border is green accent */}
      <h3 className="font-serif text-lg font-bold mb-5 border-l-4 pl-3" style={{ borderColor: ACCENT_GREEN, color: TEXT_COLOR }}>
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            {/* Link text is light gray, hover is brown/orange accent */}
            <a 
              href={link.href}
              className="text-gray-400 hover:text-[#D99B6A] transition-colors text-base font-light"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full border-t" style={{ backgroundColor: BG_COLOR, borderColor: '#4A555E' }}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-16 lg:py-20">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission Section */}
          <div className="lg:col-span-1 pr-6">
            <div className="flex items-center space-x-3 mb-6">
  <div
    className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-md"
    style={{ backgroundColor: "transparent"}}
  >
    {/* Logo image fully covers the circle */}
    <img
      src={logo}
      alt="Logo"
      className="w-full h-full object-cover"
    />
  </div>
  {/* Brand name uses primary accent color */}
  <span
    className="font-serif text-2xl font-extrabold"
    style={{ fontFamily: "MyCustomFont" , color: PRIMARY_BROWN }}
  >
    {process.env.REACT_APP_NAME}
  </span>
</div>

            
            {/* Description text color adjusted */}
            <p className="mb-6 leading-7 text-sm text-gray-400">
              Handcrafted natural soaps made with pure, earth-derived ingredients, supporting your skin's health and our planet's well-being.
            </p>

            {/* Social Links adjusted for dark background */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/rustiquemuds" 
                className="w-10 h-10 rounded-full bg-[#364249] border border-[#4A555E] flex items-center justify-center text-gray-400 hover:scale-105 hover:bg-orange-600 hover:text-white transition-transform duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://wa.me/15551234567" 
                className="w-10 h-10 rounded-full bg-[#364249] border border-[#4A555E] flex items-center justify-center text-gray-400 hover:scale-105 hover:bg-orange-600 hover:text-white transition-transform duration-300"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle size={18} className="hover:text-green-400" />
              </a>
              <a 
                href="mailto:hello@rustiquemuds.com" 
                className="w-10 h-10 rounded-full bg-[#364249] border border-[#4A555E] flex items-center justify-center text-gray-400 hover:scale-105 hover:bg-orange-600 hover:text-white transition-transform duration-300"
                aria-label="Send us an email"
              >
                <Mail size={18} className="hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <LinkSection title="Products" links={footerLinks.products} />
          <LinkSection title="Company" links={footerLinks.company} />
          
          {/* Newsletter (New) */}
          <NewsletterSignup />

        </div>

        {/* Bottom Section: Copyright, Values, and Legal */}
        <div className="pt-8" style={{ borderTop: '1px solid #4A555E' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Copyright & Values (Flex-start on Mobile, Center on Desktop) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400">
              {/* Copyright */}
              <div className="flex items-center gap-2">
                <span>© {currentYear} RustiqueMud. Made with</span>
                <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                <span>for natural beauty.</span>
              </div>

              {/* Certifications/Values */}
              <div className="flex items-center gap-4 text-xs font-medium border-l sm:pl-6" style={{ borderColor: '#4A555E' }}>
                <div className="flex items-center gap-1" style={{ color: ACCENT_GREEN }}>
                  <Leaf size={14} />
                  <span>Natural</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <span>🐰</span>
                  <span>Cruelty-Free</span>
                </div>
                <div className="flex items-center gap-1 text-blue-400">
                  <span>♻️</span>
                  <span>Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
