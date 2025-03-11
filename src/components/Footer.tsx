
import { Phone, Mail, MapPin, Calendar, Smile, Shield, Star, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useHoverAnimation } from '@/utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isHovered: isHovered1, hoverProps: hoverProps1 } = useHoverAnimation();
  const { isHovered: isHovered2, hoverProps: hoverProps2 } = useHoverAnimation();
  const { isHovered: isHovered3, hoverProps: hoverProps3 } = useHoverAnimation();
  
  return (
    <footer className="border-t border-primary/30 bg-secondary/50 mt-auto relative overflow-hidden zellige-bg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/70 to-accent"></div>
      <div className="absolute -top-8 left-1/4 w-16 h-16 rounded-full bg-primary/10 blur-xl"></div>
      <div className="absolute -bottom-8 right-1/4 w-20 h-20 rounded-full bg-accent/10 blur-xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand/Logo */}
          <div className="flex flex-col">
            <motion.h3 
              className="text-xl font-display font-medium mb-4 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Smile className="mr-2 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                BrightSmile Dental
              </span>
            </motion.h3>
            <p className="text-foreground/70 max-w-xs">
              Creating healthy, beautiful smiles with our expert dental care. 
              We combine modern dental techniques with a compassionate approach.
            </p>
            
            <div className="mt-6 flex flex-col space-y-3">
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} className="mr-2 text-primary" />
                <span>+1 (234) 567-890</span>
              </motion.a>
              <motion.a 
                href="mailto:contact@brightsmile.com" 
                className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={16} className="mr-2 text-primary" />
                <span>contact@brightsmile.com</span>
              </motion.a>
              <motion.div 
                className="flex items-center text-foreground/70"
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} className="mr-2 text-primary" />
                <span>123 Dental Street, Smile City</span>
              </motion.div>
            </div>
          </div>
          
          {/* Our Services */}
          <div className="flex flex-col">
            <motion.h3 
              className="text-sm font-medium uppercase tracking-wider mb-4 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Services
            </motion.h3>
            <div className="flex flex-col space-y-2">
              <motion.a 
                href="/services#preventive" 
                className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                whileHover={{ x: 5 }}
              >
                <Shield size={14} className="mr-2 text-primary/70" />
                Preventive Dentistry
              </motion.a>
              <motion.a 
                href="/services#restorative" 
                className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                whileHover={{ x: 5 }}
              >
                <Shield size={14} className="mr-2 text-primary/70" />
                Restorative Dentistry
              </motion.a>
              <motion.a 
                href="/services#cosmetic" 
                className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                whileHover={{ x: 5 }}
              >
                <Sparkles size={14} className="mr-2 text-primary/70" />
                Cosmetic Dentistry
              </motion.a>
              <motion.a 
                href="/services#specialized" 
                className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                whileHover={{ x: 5 }}
              >
                <Shield size={14} className="mr-2 text-primary/70" />
                Specialized Care
              </motion.a>
            </div>
          </div>
          
          {/* Hours & Information */}
          <div className="flex flex-col">
            <motion.h3 
              className="text-sm font-medium uppercase tracking-wider mb-4 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Office Hours
            </motion.h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between text-foreground/70">
                <span className="flex items-center">
                  <Clock size={14} className="mr-2 text-primary/70" />
                  Monday - Friday
                </span>
                <span>8am - 6pm</span>
              </div>
              <div className="flex items-center justify-between text-foreground/70">
                <span className="flex items-center">
                  <Clock size={14} className="mr-2 text-primary/70" />
                  Saturday
                </span>
                <span>9am - 3pm</span>
              </div>
              <div className="flex items-center justify-between text-foreground/70">
                <span className="flex items-center">
                  <Clock size={14} className="mr-2 text-primary/70" />
                  Sunday
                </span>
                <span>Closed</span>
              </div>
              <div className="pt-2 mt-2 border-t border-primary/10">
                <motion.a 
                  href="/contact" 
                  className="flex items-center text-accent hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Star size={14} className="mr-2" />
                  Insurance Information
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Book Appointment */}
          <div className="flex flex-col md:col-span-3 lg:col-span-1">
            <motion.h3 
              className="text-sm font-medium uppercase tracking-wider mb-4 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Book Appointment
            </motion.h3>
            <p className="text-foreground/70 mb-4">
              Ready for your dental checkup? Schedule your appointment quickly and easily.
            </p>
            <motion.div
              className="group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/contact" 
                className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium inline-flex items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Calendar size={16} className="mr-2 group-hover:animate-pulse" />
                Book Your Visit
              </a>
            </motion.div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <motion.div 
                {...hoverProps1}
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.div>
              <motion.div 
                {...hoverProps2}
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.div>
              <motion.div 
                {...hoverProps3}
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-foreground/60 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="mr-1">©</span> {currentYear} BrightSmile Dental Clinic. All rights reserved.
          </motion.p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary/40">|</span>
            <a href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
