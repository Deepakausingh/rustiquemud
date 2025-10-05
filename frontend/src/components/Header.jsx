import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram, MessageCircle, Mail } from "lucide-react";
import { Button } from "./UI/Button";
import logo from "../assets/Logo/rm2cm.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

let lastScrollY = 0;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (isMenuOpen) return;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const headerStateClass = `${isVisible ? "translate-y-0" : "-translate-y-full"} ${
    isScrolled
      ? "backdrop-blur-xl bg-gray-900/20 border-b border-orange-500/50 shadow-lg"
      : "bg-transparent border-b border-transparent"
  }`;
  const menuOpenClass = isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerStateClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center h-10 cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            onFocus={() => setIsLogoHovered(true)}
            onBlur={() => setIsLogoHovered(false)}
          >
            <div className="flex items-center">
                <div
                    className={`w-10 h-10 m-0 p-0 rounded-full overflow-hidden shadow-md transition-transform duration-500 ${
                    isLogoHovered ? "rotate-[360deg]" : ""
                    }`}
                >
                    <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-cover"
                    />
                </div>
                <span
                  style={{ fontFamily: "MyCustomFont" }}
                  className="text-gray-100 text-xl font-extrabold whitespace-nowrap flex items-center transition-all duration-500 origin-left ml-2 max-w-xs opacity-100"
                >
                  {process.env.REACT_APP_NAME}
                </span>


            </div>


          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group relative text-gray-100 font-medium text-base transition-colors duration-300 ${
                  activePath === item.href
                    ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                    : ""
                }`}
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-400 p-1 rounded-full transition-all duration-300 hover:text-orange-500 hover:rotate-6 hover:scale-110 hover:bg-orange-500/20 hover:shadow-[0_0_5px_#e67e22,0_0_10px_#e67e22,0_0_20px_rgba(230,126,34,0.7)]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/1234567890"
                aria-label="WhatsApp"
                className="text-gray-400 p-1 rounded-full transition-all duration-300 hover:text-orange-500 hover:rotate-6 hover:scale-110 hover:bg-orange-500/20 hover:shadow-[0_0_5px_#e67e22,0_0_10px_#e67e22,0_0_20px_rgba(230,126,34,0.7)]"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:hello@rustiquemuds.com"
                aria-label="Email"
                className="text-gray-400 p-1 rounded-full transition-all duration-300 hover:text-orange-500 hover:rotate-6 hover:scale-110 hover:bg-orange-500/20 hover:shadow-[0_0_5px_#e67e22,0_0_10px_#e67e22,0_0_20px_rgba(230,126,34,0.7)]"
              >
                <Mail size={20} />
              </a>
            </div>
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-2 bg-orange-600 text-gray-900 shadow-md border-none cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-[0_15px_30px_-5px_rgba(46,204,113,0.5)] hover:-translate-y-[2px]"
            >
              <ShoppingBag size={16} />
              Coming Soon
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-100 p-2 rounded-full transition-all duration-300 hover:text-orange-500 hover:scale-110"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 w-full bg-gray-900/90 backdrop-blur-md border-t border-orange-500/20 shadow-lg transition-all duration-500 overflow-hidden ${menuOpenClass}`}
          style={{ zIndex: 49 }}
        >
          <nav className="flex flex-col gap-4 px-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => {
                  toggleMenu();
                  setActivePath(item.href);
                }}
                className={`text-gray-100 text-lg font-medium py-1 border-b border-gray-600 transition-colors duration-300 ${
                  activePath === item.href ? "text-orange-500 font-semibold border-b-2 border-orange-500" : ""
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-6 flex flex-col gap-4">
              <Button
                variant="default"
                className="flex items-center justify-center gap-2 bg-orange-600 text-gray-900 hover:bg-green-500 hover:text-white transition-all"
              >
                <ShoppingBag size={16} />
                Coming Soon
              </Button>

              <div className="flex items-center justify-center gap-6 pt-2">
                <a href="https://instagram.com" aria-label="Instagram" className="text-gray-100 hover:text-orange-500">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/1234567890" aria-label="WhatsApp" className="text-gray-100 hover:text-orange-500">
                  <MessageCircle size={24} />
                </a>
                <a href="mailto:hello@rustiquemuds.com" aria-label="Email" className="text-gray-100 hover:text-orange-500">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
