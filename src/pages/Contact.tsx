
import ContactForm from '@/components/ContactForm';
import { useScrollAnimation } from '@/utils/animations';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: contactInfoRef, isVisible: contactInfoVisible } = useScrollAnimation(0.2);
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'appointments@brightsmile.com',
      link: 'mailto:appointments@brightsmile.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Dental Ave, San Francisco, CA',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri: 8am-6pm | Sat: 9am-2pm',
      link: '#'
    }
  ];

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
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block">Book Your Visit</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Schedule Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              We're here to help you achieve the healthy, beautiful smile you deserve. Contact us today to schedule your appointment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16">
        <div 
          ref={contactInfoRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            contactInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={index}
                  href={item.link}
                  className="glass-card p-6 rounded-xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary/5"
                  rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                  target={item.title === 'Location' ? '_blank' : undefined}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.details}</p>
                </a>
              );
            })}
          </div>
          
          {/* Emergency Info */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-red-600 dark:text-red-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938-9.59a9 9 0 1112.727 12.727 9 9 0 01-12.727-12.727z" />
                </svg>
                Dental Emergencies
              </h3>
              <p className="text-red-600/80 dark:text-red-400/80 mb-2">
                If you're experiencing a dental emergency, please call our emergency line immediately:
              </p>
              <p className="text-red-600 dark:text-red-400 font-semibold">
                <a href="tel:+15551239999" className="text-xl hover:underline">+1 (555) 123-9999</a>
              </p>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Book Your Appointment</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Find Our Office</h2>
          <div className="h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2333&q=80" 
              alt="Dental Office Location Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
