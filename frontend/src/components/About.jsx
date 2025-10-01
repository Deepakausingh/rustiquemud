import React, { useEffect, useRef } from 'react';
import { Zap, Feather, Leaf, Heart } from "lucide-react";

const About = () => {
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Basic Intersection Observer to trigger animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    if (contentRef.current) observer.observe(contentRef.current);
    if (visualRef.current) observer.observe(visualRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content-wrapper">
          <div className="about-grid">
            
            {/* Content Column */}
            <div ref={contentRef} className="content-column">
              <h2 className="about-title">
                Our Natural Philosophy
              </h2>
              
              <div className="story-text">
                <p>
                  At **RustiqueMud**, we believe that beautiful skin begins with pure, natural ingredients. 
                  Every soap is **handcrafted in small batches** using traditional methods that have been 
                  perfected over generations.
                </p>
                
                <p>
                  We source our ingredients from sustainable farms and ethical suppliers, ensuring 
                  that each bar not only nourishes your skin but also **respects our planet**. From 
                  organic olive oil to essential oils and natural botanicals, every element is 
                  carefully selected for its beneficial properties.
                </p>
                
                <p className="commitment-text">
                  Our commitment goes beyond exceptional products – we're dedicated to 
                  fostering a community that values mindful living, natural beauty, and environmental 
                  consciousness.
                </p>
              </div>

              {/* Stats/Commitment Cards */}
              <div className="stats-container">
                <div className="stat-card">
                  <Heart className="stat-icon" size={24} />
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Natural Ingredients</div>
                </div>
                <div className="stat-card">
                  <Zap className="stat-icon" size={24} />
                  <div className="stat-value">0</div>
                  <div className="stat-label">Harmful Chemicals</div>
                </div>
              </div>
            </div>

            {/* Visual Elements Column */}
            <div ref={visualRef} className="visual-column">
              <div className="visual-grid">
                
                {/* Visual Blocks */}
                <div className="visual-block block-1">
                  <Leaf size={72} className="block-icon icon-primary" />
                  <p className="block-caption">Pure Botanicals</p>
                </div>
                <div className="visual-block block-2">
                  <Feather size={48} className="block-icon icon-accent" />
                  <p className="block-caption">Gentle Craft</p>
                </div>
                <div className="visual-block block-3">
                  <span className="emoji-icon">💧</span>
                  <p className="block-caption">Hydration</p>
                </div>
                <div className="visual-block block-4">
                  <span className="emoji-icon">🛁</span>
                  <p className="block-caption">Artisan Soap</p>
                </div>
              </div>
              
              {/* Decorative Elements (Floating) */}
              <div className="decor-bubble-lg animate-float" style={{ top: '-1rem', right: '-1rem' }}></div>
              <div className="decor-bubble-sm animate-float" style={{ bottom: '-1rem', left: '-1rem', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
