import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Instagram, MessageCircle, Mail } from "lucide-react";
import { Button } from "./UI/Button";
import "../CSS/Header.css"; // Import the new CSS file

// ====================================
// Define Navigation Data with Explicit Links
// ====================================
const navItems = [
    { name: "Home", href: "/" },         // Anchor link for same-page navigation
    { name: "About", href: "/about" },       // Anchor link for same-page navigation
    { name: "Gallery", href: "/Gallery" }, // Anchor link for same-page navigation
    { name: "Contact", href: "/Contact" }    // Anchor link for same-page navigation
];
// ====================================

// Initializing the last scroll position outside the component
let lastScrollY = 0;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

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

    // Dynamic classes are now simple toggles (visibility/menu state)
    const headerStateClass = `${isVisible ? 'is-visible' : 'is-hidden'} ${isScrolled ? 'is-scrolled' : ''}`;
    const menuOpenClass = isMenuOpen ? 'menu-open' : 'menu-closed';

    return (
        <header 
            className={`header-main ${headerStateClass}`}
        >
            <div className="header-container">
                <div className="header-content">
                    
                    {/* Animated Logo */}
                    <a 
                        href="#home" 
                        className="logo-link"
                        onMouseEnter={() => setIsLogoHovered(true)}
                        onMouseLeave={() => setIsLogoHovered(false)}
                        onFocus={() => setIsLogoHovered(true)}
                        onBlur={() => setIsLogoHovered(false)}
                    >
                        <div className="logo-group">
                            <div 
                                className={`logo-icon ${isLogoHovered ? "is-hovered" : ""}`}
                            >
                                <span className="logo-text">R</span>
                            </div>
                            <span 
                                className={`brand-name ${isLogoHovered ? "is-hovered" : ""}`}
                            >
                                RustiqueMud
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation (UPDATED) */}
                    <nav className="nav-desktop">
                        {navItems.map((item, index) => (
                            <a 
                                key={index}
                                // Use the explicit 'item.href'
                                href={item.href} 
                                className="nav-link"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions (Social Links and Cart) */}
                    <div className="actions-desktop">
                        <div className="social-links">
                            <a href="https://instagram.com" aria-label="Instagram" className="social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="https://wa.me/1234567890" aria-label="WhatsApp" className="social-link">
                                <MessageCircle size={20} />
                            </a>
                            <a href="mailto:hello@rustiquemuds.com" aria-label="Email" className="social-link">
                                <Mail size={20} />
                            </a>
                        </div>
                        {/* Note: The Button component must be styled separately using standard CSS or adapted */}
                        <Button variant="default" size="sm" className="btn-cart">
                            <ShoppingBag size={16} />
                            Coming Soon
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="menu-toggle-btn"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} className="animate-spin-once" /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu (UPDATED) */}
                <div 
                    className={`menu-mobile ${menuOpenClass}`}
                    style={{ zIndex: 49 }}
                >
                    <nav className="menu-mobile-nav">
                        {/* Mobile links */}
                        {navItems.map((item, index) => (
                            <a 
                                key={index}
                                // Use the explicit 'item.href'
                                href={item.href} 
                                onClick={toggleMenu} 
                                className="menu-mobile-link"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="menu-mobile-actions">
                            <Button variant="default" className="btn-cart-mobile">
                                <ShoppingBag size={16} />
                                Coming Soon
                            </Button>

                            <div className="social-links-mobile">
                                <a href="https://instagram.com" aria-label="Instagram" className="social-link-mobile">
                                    <Instagram size={24} />
                                </a>
                                <a href="https://wa.me/1234567890" aria-label="WhatsApp" className="social-link-mobile">
                                    <MessageCircle size={24} />
                                </a>
                                <a href="mailto:hello@rustiquemuds.com" aria-label="Email" className="social-link-mobile">
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