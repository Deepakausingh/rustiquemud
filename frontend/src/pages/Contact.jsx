import React, { useState, useEffect } from 'react';
import bgImage from '../assets/hero-soap4.jpg'; // Local background image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// --- Static Contact Info ---
const contactDetails = [
  { icon: faPhone, title: 'Phone Number', detail: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: faEnvelope, title: 'Email Address', detail: 'hello@rustiquemud.com', href: 'mailto:hello@rustiquemud.com' },
  { icon: faWhatsapp, title: 'WhatsApp', detail: '456-789-0123', href: '#' },
  { icon: faMapMarkerAlt, title: 'Our Office', detail: '456 Clay Rd, Suite 201, GA 30303', href: '#' },
];

// --- Form Input Component ---
const FormInput = ({ label, id, type = 'text', value, onChange, isTextArea = false }) => (
  <div className="relative z-0 w-full mb-6 group">
    {isTextArea ? (
      <textarea
        id={id}
        name={id}
        rows="4"
        className="block w-full px-0 pt-3 pb-2 text-base text-stone-100 bg-transparent border-0 border-b border-green-700/70 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400 peer resize-none"
        placeholder=" "
        value={value}
        onChange={onChange}
        required
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        className="block w-full px-0 pt-3 pb-2 text-base text-stone-100 bg-transparent border-0 border-b border-green-700/70 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400 peer"
        placeholder=" "
        value={value}
        onChange={onChange}
        required
      />
    )}
    <label
      htmlFor={id}
      className="absolute text-sm text-green-300 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

// --- Contact Component ---
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Inject custom CSS for fonts, background, spinner, map
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');
      .font-serif { font-family: 'Cormorant Garamond', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }

      .bg-image-blurred {
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          filter: blur(2px) brightness(0.8);
          transform: scale(1.05);
          opacity: 0.6;
      }

      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .animate-spin-slow { animation: spin 3s linear infinite; }

      .map-placeholder {
          background-image: linear-gradient(135deg, #245A51 0%, #163E38 100%);
          border: 1px solid #3B3329;
          height: 300px;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const ContactCard = ({ icon, title, detail, href }) => (
    <a href={href} className="block p-4 sm:p-6 bg-white/5 rounded-xl border border-green-700/50 transition-all duration-300 hover:bg-white/10 group h-full">
      <div className="flex items-center space-x-4 mb-3">
        <FontAwesomeIcon icon={icon} className="text-green-300 text-2xl" />
        <h3 className="text-sm font-semibold text-green-300 tracking-wider uppercase">{title}</h3>
      </div>
      <p className="text-base text-stone-100 font-medium break-words">{detail}</p>
    </a>
  );

  return (
    <div className="min-h-screen font-sans bg-[#072F29] text-stone-200 relative overflow-hidden">

      <section className="py-20 sm:py-32 md:py-40 relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-serif text-stone-100 font-extrabold leading-snug">Contact Us</h1>
          <p className="text-sm text-green-300 tracking-wide mt-2">Home / Contact</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="p-8 bg-white/5 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-serif text-stone-100 mb-2">Get In Touch</h2>
            <p className="text-green-300 text-lg mb-8">We are here to answer your questions.</p>
            
            <form onSubmit={handleSubmit}>
              <FormInput label="Your Name" id="name" value={formData.name} onChange={handleChange} />
              <FormInput label="Email Address" id="email" type="email" value={formData.email} onChange={handleChange} />
              <FormInput label="Subject" id="subject" value={formData.subject} onChange={handleChange} />
              <FormInput label="Message" id="message" value={formData.message} onChange={handleChange} isTextArea />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 mt-4 text-lg bg-orange-500 text-stone-900 font-semibold rounded-lg transition-all duration-300 hover:bg-orange-400 hover:scale-[1.01] disabled:bg-green-700/50 disabled:text-stone-400 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin-slow h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                    Sending...
                  </>
                ) : 'Send Now'}
              </button>
            </form>
          </div>

          <div className="space-y-10">
            <p className="text-stone-300 leading-relaxed text-lg mb-8">
              In tempus nisl turpis, ac ultricies dui eleifend a. Quisque et quam vel nunc consectetur pharetra euismod et elit. Morbi nibh tortor, ullamcorper id porta ac, congue consequat velit.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {contactDetails.map((item, index) => (
                <ContactCard key={index} {...item} />
              ))}
            </div>

            <div className="map-placeholder rounded-xl shadow-lg flex items-center justify-center">
              <p className="text-sm font-semibold text-green-300/80 uppercase tracking-widest">Map Location Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 mt-20 shadow-inner relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-lg font-semibold text-orange-300 tracking-widest uppercase mb-4">Lather Up, Naturally!</p>
          <h2 className="text-5xl sm:text-6xl font-serif text-stone-100 font-extrabold leading-tight mb-8">
              Colorful, fragrant, and handmade soaps to brighten your day.
          </h2>
          <button
              onClick={() => console.log('CTA Clicked')}
              className="px-10 py-4 text-lg bg-orange-500 text-stone-900 font-bold rounded-xl transition-all duration-300 hover:bg-orange-400 hover:scale-[1.05] shadow-xl"
          >
              Get Yours Now
          </button>
        </div>
      </section>

      {isSubmitted && (
        <div 
            className="fixed inset-0 flex items-center justify-center p-4 z-50 transition-opacity duration-500"
            style={{ backgroundColor: 'rgba(7, 47, 41, 0.95)' }}
            onClick={() => setIsSubmitted(false)}
        >
            <div 
                className="bg-stone-50 p-10 rounded-2xl max-w-md text-center shadow-2xl transition-transform duration-500 transform scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <span className="text-6xl mb-6 block">✅</span>
                <h3 className="text-3xl font-serif text-green-800 mb-4">Message Sent!</h3>
                <p className="text-stone-700 mb-6">
                    Thank you for reaching out to RustiqueMud. We have received your inquiry and will respond within 24 hours.
                </p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
                >
                    Close
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
