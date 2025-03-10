
import { useState } from 'react';
import { useScrollAnimation } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Tooth, Smile, Stethoscope, UserPlus, Baby, Heart, Clock, Microscope } from 'lucide-react';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.2);
  
  const [activeTab, setActiveTab] = useState('general');
  
  const categories = [
    { id: 'general', name: 'General Dentistry' },
    { id: 'cosmetic', name: 'Cosmetic Dentistry' },
    { id: 'specialty', name: 'Specialty Services' },
    { id: 'emergency', name: 'Emergency Care' },
  ];
  
  const services = {
    general: [
      { 
        icon: Tooth, 
        title: 'Dental Checkups & Cleanings', 
        description: 'Regular examinations and professional cleanings to maintain optimal oral health.', 
        price: '$80 - $150'
      },
      { 
        icon: Stethoscope, 
        title: 'Fillings & Restorations', 
        description: 'Tooth-colored fillings to repair cavities and restore damaged teeth.', 
        price: '$150 - $300'
      },
      { 
        icon: Microscope, 
        title: 'Root Canal Therapy', 
        description: 'Treatment to repair and save severely infected or damaged teeth.', 
        price: '$800 - $1,500'
      },
      { 
        icon: Baby, 
        title: 'Pediatric Dentistry', 
        description: 'Child-friendly dental care focusing on prevention and education.', 
        price: '$75 - $200'
      },
    ],
    cosmetic: [
      { 
        icon: Smile, 
        title: 'Teeth Whitening', 
        description: 'Professional brightening treatments for a radiant smile.', 
        price: '$300 - $650'
      },
      { 
        icon: Tooth, 
        title: 'Porcelain Veneers', 
        description: 'Custom-made shells to improve the appearance of front teeth.', 
        price: '$1,000 - $2,500 per tooth'
      },
      { 
        icon: Smile, 
        title: 'Dental Bonding', 
        description: 'Application of tooth-colored resin to repair or improve appearance.', 
        price: '$200 - $600 per tooth'
      },
      { 
        icon: Smile, 
        title: 'Smile Makeover', 
        description: 'Comprehensive treatment plan to achieve your ideal smile.', 
        price: 'Custom quote'
      },
    ],
    specialty: [
      { 
        icon: UserPlus, 
        title: 'Dental Implants', 
        description: 'Permanent replacement of missing teeth that look and function naturally.', 
        price: '$3,000 - $5,000 per implant'
      },
      { 
        icon: Tooth, 
        title: 'Orthodontics', 
        description: 'Braces and clear aligners to straighten teeth and correct bite issues.', 
        price: '$3,500 - $8,000'
      },
      { 
        icon: Heart, 
        title: 'Periodontal Treatment', 
        description: 'Specialized care for gum disease and tissue maintenance.', 
        price: '$500 - $4,000'
      },
      { 
        icon: Tooth, 
        title: 'Oral Surgery', 
        description: 'Extractions, wisdom teeth removal, and other surgical procedures.', 
        price: '$200 - $3,000'
      },
    ],
    emergency: [
      { 
        icon: Clock, 
        title: 'Same-Day Emergency Care', 
        description: 'Immediate treatment for severe toothaches, infections, and injuries.', 
        price: '$150 - $450'
      },
      { 
        icon: Tooth, 
        title: 'Broken Tooth Repair', 
        description: 'Quick solutions for chipped, cracked, or broken teeth.', 
        price: '$200 - $600'
      },
      { 
        icon: Stethoscope, 
        title: 'Abscess Treatment', 
        description: 'Urgent care for dental infections and pain management.', 
        price: '$300 - $800'
      },
      { 
        icon: Clock, 
        title: '24/7 Phone Consultation', 
        description: 'Round-the-clock advice for dental emergencies.', 
        price: 'Complimentary'
      },
    ]
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary overflow-hidden relative">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 animate-pulse-light blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-400/5 animate-pulse-light blur-3xl"></div>
        
        <div 
          ref={headerRef}
          className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Comprehensive <span className="text-gradient">Dental Care</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              We offer a wide range of dental services to meet all your oral health needs in one convenient location.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24">
        <div 
          ref={servicesRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Tabs for service categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-secondary hover:bg-primary/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Services grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            {services[activeTab as keyof typeof services].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-foreground/70 mb-4">{service.description}</p>
                      <p className="text-sm font-medium text-primary">{service.price}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
      
      {/* Insurance Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Insurance & Payment Options</h2>
            <p className="text-foreground/70">
              We work with most major insurance providers and offer flexible payment plans to make dental care accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'Blue Cross', 'Guardian', 'United Healthcare', 'Humana'].map((provider, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-lg text-center">
                <p className="font-medium">{provider}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-xl mx-auto mt-12 text-center">
            <p className="text-sm text-foreground/60 mb-4">
              Don't see your insurance listed? Contact us to verify your coverage. We also offer in-house membership plans and financing options.
            </p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact us for details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
