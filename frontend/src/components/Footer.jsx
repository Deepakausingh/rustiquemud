import { Instagram, MessageCircle, Mail, Heart, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-primary/5 border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">R</span>
              </div>
              <span className="font-display text-2xl font-bold text-primary">RustiqueMud</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Handcrafted natural soaps made with love, pure ingredients, and a commitment 
              to your skin's health and environmental sustainability.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/rustiquemuds" 
                className="w-10 h-10 rounded-full bg-background border border-border/20 flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:border-pink-500/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/15551234567" 
                className="w-10 h-10 rounded-full bg-background border border-border/20 flex items-center justify-center text-muted-foreground hover:text-green-500 hover:border-green-500/20 transition-colors"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="mailto:hello@rustiquemuds.com" 
                className="w-10 h-10 rounded-full bg-background border border-border/20 flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500/20 transition-colors"
                aria-label="Send us an email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} RustiqueMud. Made with</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>for natural beauty.</span>
            </div>

            {/* Certifications/Values */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Leaf size={14} className="text-green-500" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🐰</span>
                <span>Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-1">
                <span>♻️</span>
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;