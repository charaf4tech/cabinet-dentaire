
import { Phone, Mail, MapPin, Calendar, Smile, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useHoverAnimation } from '@/utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isHovered: isHovered1, hoverProps: hoverProps1 } = useHoverAnimation();
  const { isHovered: isHovered2, hoverProps: hoverProps2 } = useHoverAnimation();
  const { isHovered: isHovered3, hoverProps: hoverProps3 } = useHoverAnimation();
  
  return (
    <footer className="border-t border-morocco-sand/30 bg-secondary/50 mt-auto relative overflow-hidden zellige-bg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-morocco-terracotta via-morocco-sand to-morocco-teal"></div>
      <div className="absolute -top-8 left-1/4 w-16 h-16 rounded-full bg-morocco-terracotta/10 blur-xl"></div>
      <div className="absolute -bottom-8 right-1/4 w-20 h-20 rounded-full bg-morocco-teal/10 blur-xl"></div>
      
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
              <Smile className="mr-2 text-morocco-terracotta" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-morocco-terracotta to-morocco-teal">
                Moroccan Smile
              </span>
            </motion.h3>
            <p className="text-foreground/70 max-w-xs">
              Bringing the warmth and hospitality of Morocco to dental care. 
              Exceptional service with a blend of modern techniques and traditional Moroccan hospitality.
            </p>
            
            <div className="mt-6 flex flex-col space-y-3">
              <a href="tel:+2126123456" className="flex items-center text-foreground/70 hover:text-morocco-terracotta transition-colors">
                <Phone size={16} className="mr-2 text-morocco-terracotta" />
                <span>+212 612-345-678</span>
              </a>
              <a href="mailto:info@moroccansmile.com" className="flex items-center text-foreground/70 hover:text-morocco-terracotta transition-colors">
                <Mail size={16} className="mr-2 text-morocco-terracotta" />
                <span>info@moroccansmile.com</span>
              </a>
              <div className="flex items-center text-foreground/70">
                <MapPin size={16} className="mr-2 text-morocco-terracotta" />
                <span>123 Hassan II Avenue, Marrakech</span>
              </div>
            </div>
          </div>
          
          {/* Our Services */}
          <div className="flex flex-col">
            <motion.h3 
              className="text-sm font-medium uppercase tracking-wider mb-4 text-morocco-teal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Services
            </motion.h3>
            <div className="flex flex-col space-y-2">
              <a href="/services#preventive" className="text-foreground/70 hover:text-morocco-terracotta transition-colors flex items-center">
                <Shield size={14} className="mr-2 text-morocco-sand" />
                Preventive Dentistry
              </a>
              <a href="/services#restorative" className="text-foreground/70 hover:text-morocco-terracotta transition-colors flex items-center">
                <Shield size={14} className="mr-2 text-morocco-sand" />
                Restorative Dentistry
              </a>
              <a href="/services#cosmetic" className="text-foreground/70 hover:text-morocco-terracotta transition-colors flex items-center">
                <Star size={14} className="mr-2 text-morocco-sand" />
                Cosmetic Dentistry
              </a>
              <a href="/services#specialized" className="text-foreground/70 hover:text-morocco-terracotta transition-colors flex items-center">
                <Shield size={14} className="mr-2 text-morocco-sand" />
                Specialized Care
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <motion.h3 
              className="text-sm font-medium uppercase tracking-wider mb-4 text-morocco-teal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quick Links
            </motion.h3>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-foreground/70 hover:text-morocco-terracotta transition-colors">
                Home
              </a>
              <a href="/about" className="text-foreground/70 hover:text-morocco-terracotta transition-colors">
                About Us
              </a>
              <a href="/services" className="text-foreground/70 hover:text-morocco-terracotta transition-colors">
                Services
              </a>
              <a href="/doctors" className="text-foreground/70 hover:text-morocco-terracotta transition-colors">
                Our Dentists
              </a>
              <a href="/contact" className="text-foreground/70 hover:text-morocco-terracotta transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Book Appointment */}
          <div className="flex flex-col md:col-span-3 lg:col-span-1">
            <motion.h3 
              className="text-sm font-medium uppercase tracking-wider mb-4 text-morocco-teal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Book Appointment
            </motion.h3>
            <p className="text-foreground/70 mb-4">
              Ready for your dental visit? Schedule your appointment quickly and easily.
            </p>
            <motion.div
              className="group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/contact" 
                className="w-full px-4 py-3 bg-morocco-terracotta text-white rounded-lg font-medium inline-flex items-center justify-center hover:shadow-lg hover:shadow-morocco-terracotta/20 transition-all duration-300"
              >
                <Calendar size={16} className="mr-2 group-hover:animate-pulse" />
                Book Your Visit
              </a>
            </motion.div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <motion.div 
                {...hoverProps1}
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-morocco-sand/20 flex items-center justify-center hover:bg-morocco-terracotta/10 hover:text-morocco-terracotta transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.div>
              <motion.div 
                {...hoverProps2}
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-morocco-sand/20 flex items-center justify-center hover:bg-morocco-terracotta/10 hover:text-morocco-terracotta transition-colors"
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
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-morocco-sand/20 flex items-center justify-center hover:bg-morocco-terracotta/10 hover:text-morocco-terracotta transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-morocco-sand/20 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-foreground/60 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="mr-1">©</span> {currentYear} Moroccan Smile Dental Clinic. All rights reserved.
          </motion.p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="/privacy" className="text-sm text-foreground/60 hover:text-morocco-terracotta transition-colors">
              Privacy Policy
            </a>
            <span className="text-morocco-sand/40">|</span>
            <a href="/terms" className="text-sm text-foreground/60 hover:text-morocco-terracotta transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
