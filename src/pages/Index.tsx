import Hero from '@/components/Hero';
import { useScrollAnimation } from '@/utils/animations';
import { ArrowRight, Activity, Shield, Clock, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.2);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.2);
  
  const stats = [
    { label: 'Satisfied Patients', value: '5,000+', icon: Award },
    { label: 'Experienced Dentists', value: '15+', icon: Activity },
    { label: 'Years of Service', value: '25+', icon: Clock },
  ];
  
  const services = [
    { 
      title: 'General Dentistry', 
      description: 'Comprehensive care including checkups, cleanings, fillings, and preventive treatments.' 
    },
    { 
      title: 'Cosmetic Dentistry', 
      description: 'Transform your smile with whitening, veneers, bonding, and other aesthetic procedures.' 
    },
    { 
      title: 'Orthodontics', 
      description: 'Straighten your teeth with traditional braces or clear aligners for a perfect smile.' 
    },
    { 
      title: 'Dental Implants', 
      description: 'Replace missing teeth with natural-looking, permanent dental implants.' 
    },
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      text: "I've been coming to BrightSmile Dental for years and always receive excellent care. Dr. Johnson made my dental implant procedure completely painless!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      text: "As someone who was always nervous about dental visits, I can't believe how comfortable I feel here. The staff is incredible and my Invisalign treatment is going perfectly.",
      rating: 5
    },
    {
      name: "Jennifer Wu",
      text: "My children actually look forward to their dental appointments! Dr. Rodriguez is amazing with kids and the office is so welcoming and fun.",
      rating: 5
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-24 bg-secondary">
        <div 
          ref={statsRef} 
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-2">{stat.value}</h3>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-24">
        <div 
          ref={introRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">Welcome to BrightSmile Dental</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Exceptional Dental Care for Your Entire Family</h2>
            <p className="text-foreground/70 text-lg">
              At BrightSmile Dental, we combine advanced technology with compassionate care to provide 
              a comfortable and positive dental experience for patients of all ages.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern dental office" 
                className="rounded-xl object-cover w-full h-[400px] shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-display font-semibold mb-4">Why Choose Us?</h3>
              <p className="text-foreground/70 mb-6">
                We're committed to providing gentle, high-quality dental care in a comfortable environment. 
                Our team takes the time to listen to your concerns and explain all treatment options.
              </p>
              
              <ul className="space-y-4">
                {[
                  'State-of-the-art technology and techniques',
                  'Comprehensive care for the whole family',
                  'Comfortable, relaxing environment',
                  'Transparent pricing and insurance options'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">
                      <Shield size={16} />
                    </div>
                    <div>
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/about" 
                className="mt-8 inline-flex items-center text-primary hover:underline font-medium"
              >
                Learn more about our practice <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div 
          ref={servicesRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Comprehensive Dental Services</h2>
            <p className="text-foreground/70 text-lg">
              From routine checkups to advanced cosmetic procedures, we offer a full range of dental services to meet your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/services" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Services <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24">
        <div 
          ref={testimonialsRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What Our Patients Say</h2>
            <p className="text-foreground/70 text-lg">
              Don't just take our word for it. Here's what our patients have to say about their experiences at BrightSmile Dental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8 rounded-xl h-full flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 flex-grow">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Your Appointment <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
