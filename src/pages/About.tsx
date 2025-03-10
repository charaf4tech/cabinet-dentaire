
import { useScrollAnimation } from '@/utils/animations';
import Timeline from '@/components/Timeline';
import { ArrowRight, Shield, Smile, Star, Award, Heart } from 'lucide-react';

const About = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.2);
  
  const skills = [
    { category: 'Preventive Dentistry', items: ['Dental Check-ups', 'Professional Cleanings', 'Fluoride Treatments', 'Dental Sealants', 'Oral Cancer Screenings', 'Dental X-rays'] },
    { category: 'Restorative Dentistry', items: ['Dental Fillings', 'Crowns & Bridges', 'Dental Implants', 'Root Canal Therapy', 'Dentures', 'Inlays & Onlays'] },
    { category: 'Cosmetic Dentistry', items: ['Teeth Whitening', 'Porcelain Veneers', 'Cosmetic Bonding', 'Smile Makeovers', 'Gum Contouring', 'Invisalign'] },
    { category: 'Specialized Care', items: ['Pediatric Dentistry', 'Periodontics', 'Orthodontics', 'Oral Surgery', 'TMJ Treatment', 'Emergency Dental Care'] },
  ];
  
  const strengths = [
    { 
      icon: Shield, 
      title: 'Advanced Technology', 
      description: 'State-of-the-art equipment and latest dental technologies for precise diagnosis and treatment.'
    },
    { 
      icon: Smile, 
      title: 'Patient Comfort', 
      description: 'A soothing environment inspired by Moroccan hospitality to ensure a relaxing dental experience.'
    },
    { 
      icon: Star, 
      title: 'Expert Team', 
      description: 'Our highly qualified dentists combine modern training with traditional care approaches.'
    },
    { 
      icon: Heart, 
      title: 'Personalized Care', 
      description: 'Customized treatment plans that respect your unique dental needs and concerns.'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary overflow-hidden relative moroccan-pattern">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-morocco-terracotta/5 animate-pulse-light blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-morocco-teal/5 animate-pulse-light blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-morocco-terracotta rounded-full mb-6 inline-block animate-fade-in">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Bringing <span className="text-morocco-teal">Moroccan</span> Warmth to Dental Care
            </h1>
            <p className="text-lg text-foreground/70 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Founded on the principles of hospitality and excellence, our dental clinic combines modern dental science with the rich heritage of Moroccan care and attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      {/* About intro */}
      <section className="py-24 zellige-bg">
        <div 
          ref={introRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                alt="Modern dental clinic with Moroccan design elements" 
                className="rounded-xl shadow-lg object-cover h-[500px] w-full border-4 border-morocco-sand/30"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6 text-morocco-terracotta">Our Heritage</h2>
              <p className="text-foreground/70 mb-6">
                Established in 2010, Moroccan Smile Dental Clinic began with a simple yet profound vision: to transform dental care from a dreaded necessity to a comfortable experience inspired by the legendary Moroccan hospitality.
              </p>
              <p className="text-foreground/70 mb-6">
                Our practice combines cutting-edge dental technology with design elements from traditional Moroccan architecture and décor, creating a unique environment where advanced care meets cultural warmth.
              </p>
              <p className="text-foreground/70 mb-8">
                Today, we proudly serve our community with comprehensive dental services delivered by a team that embodies the perfect blend of professional excellence and cultural heritage.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((strength, index) => {
                  const Icon = strength.icon;
                  return (
                    <div key={index} className="flex items-start p-3 rounded-lg hover:bg-morocco-sand/10 transition-all duration-300">
                      <div className="mr-3 mt-1 text-morocco-teal">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-morocco-terracotta">{strength.title}</h4>
                        <p className="text-sm text-foreground/70">{strength.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-24 bg-secondary moroccan-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-morocco-terracotta rounded-full mb-4 inline-block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">A Decade of Dental Excellence</h2>
            <p className="text-foreground/70 text-lg">
              Tracing our path from a small local practice to a recognized name in dental care with Moroccan inspiration.
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-24">
        <div 
          ref={skillsRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-morocco-terracotta rounded-full mb-4 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Comprehensive Dental Care</h2>
            <p className="text-foreground/70 text-lg">
              We provide a wide range of dental services, blending modern techniques with comfortable, personalized care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={groupIndex} 
                className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-xl border-2 border-morocco-sand/20"
                style={{ transitionDelay: `${groupIndex * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-morocco-terracotta">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-morocco-sand/10 rounded-full text-sm font-medium text-foreground/80 border border-morocco-sand/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/services" 
              className="px-8 py-3 bg-morocco-terracotta text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-morocco-terracotta/20 transition-all duration-300 transform hover:-translate-y-1 moroccan-border"
            >
              Explore Our Services <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
