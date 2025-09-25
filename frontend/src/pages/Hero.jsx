import { ArrowDown, Leaf, Hand, Recycle } from "lucide-react";
import { Button } from "../components/Button";
import heroImage from "../assets/hero-soap1.jpg";
import About from "../components/About";
import "../CSS/Home.css";

const Home = () => {
  return (
    <section 
      id="home" 
      className="hero-section"
    >
      {/* Background Image with Enhanced Visibility and Overlay */}
      <div className="hero-background">
        <img 
          src={heroImage} 
          alt="Beautiful handmade natural soaps" 
          className="hero-image" 
        />
        {/* Darker, richer overlay */}
        <div className="hero-overlay"></div> 
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-container">
          
          {/* Main Headline */}
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Handcrafted with
            <span className="title-gradient">Nature's Touch</span>
          </h1>
          
          {/* Subheading */}
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Discover the **pure luxury** of handmade soaps crafted with natural ingredients, 
            essential oils, and love for your skin and the environment.
          </p>

          {/* Buttons */}
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="btn-primary btn-cta" // Custom CSS classes for button styling
            >
              Explore Our Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline btn-cta" // Custom CSS classes for button styling
            >
              Learn Our Story
            </Button>
          </div>

          {/* Floating Feature Bubbles */}
          <div className="hero-features animate-fade-in" style={{ animationDelay: '0.8s' }}>
            
            {/* Feature 1: 100% Natural */}
            <div className="feature-bubble feature-float" style={{ animationDelay: '0s' }}>
              <div className="bubble-icon">
                <Leaf size={24} />
              </div>
              <p className="feature-label">Natural</p>
              <p className="feature-detail">Ethically sourced</p>
            </div>
            
            {/* Feature 2: Handcrafted */}
            <div className="feature-bubble feature-float" style={{ animationDelay: '0.5s' }}>
              <div className="bubble-icon">
                <Hand size={24} />
              </div>
              <p className="feature-label">Handmade</p>
              <p className="feature-detail">Small batch</p>
            </div>
            
            {/* Feature 3: Eco-Friendly */}
            <div className="feature-bubble feature-float" style={{ animationDelay: '1s' }}>
              <div className="bubble-icon">
                <Recycle size={24} />
              </div>
              <p className="feature-label">Sustainable</p>
              <p className="feature-detail">Zero waste</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <a href="#about" aria-label="Scroll down">
            <div className="scroll-arrow-container animate-scroll-hint">
              <ArrowDown size={24} />
            </div>
          </a>
        </div>
      </div>
    </section>
    <About/>
  );
};

export default Home;