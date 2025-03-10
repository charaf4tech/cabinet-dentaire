
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTypingEffect } from '@/utils/animations';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const { displayedText } = useTypingEffect("Creating healthier, brighter smiles.", 80);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAppointment = () => {
    navigate('/contact');
  };
  
  const handleCall = () => {
    window.location.href = 'tel:+15551234567';
  };
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-primary/20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-blue-400/20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 text-center md:text-left pt-12 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block">
                Premier Dental Care
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Your Smile, <br />
                <span className="text-gradient">Our Passion</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 mb-4 h-8">
                {displayedText}
              </p>
              
              <p className="text-foreground/70 mb-8 max-w-lg">
                At BrightSmile Dental, we combine advanced technology with personalized care to deliver
                exceptional dental treatments in a comfortable, welcoming environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={handleAppointment}
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Appointment <Calendar size={18} className="ml-2" />
                </button>
                
                <button 
                  onClick={handleCall}
                  className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium inline-flex items-center justify-center hover:bg-secondary/80 transition-all duration-300"
                >
                  Call Us <Phone size={18} className="ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur-3xl transform -translate-y-10 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Smiling patient with dentist" 
                className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 mx-auto"
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-5 -left-10 md:-left-20 bg-white dark:bg-black p-4 rounded-xl shadow-lg z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Advanced Technology</p>
                    <p className="text-xs text-foreground/60">Painless procedures</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-5 -right-10 md:-right-20 bg-white dark:bg-black p-4 rounded-xl shadow-lg z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Certified Experts</p>
                    <p className="text-xs text-foreground/60">Award-winning team</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
