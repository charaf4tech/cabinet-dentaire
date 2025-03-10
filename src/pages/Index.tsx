
import Hero from '@/components/Hero';
import { useScrollAnimation } from '@/utils/animations';
import { ArrowRight, Briefcase, Users, Award } from 'lucide-react';

const Index = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.2);
  
  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Briefcase },
    { label: 'Satisfied Clients', value: '30+', icon: Users },
    { label: 'Awards Received', value: '15+', icon: Award },
  ];
  
  const services = [
    { 
      title: 'Digital Strategy', 
      description: 'Strategic planning and roadmapping to achieve your business goals through digital solutions.' 
    },
    { 
      title: 'Project Management', 
      description: 'End-to-end project execution with a focus on quality, timelines, and communication.' 
    },
    { 
      title: 'UI/UX Design', 
      description: 'User-centered design solutions that create intuitive and engaging experiences.' 
    },
    { 
      title: 'Content Production', 
      description: 'High-quality content creation that tells your brand story and engages your audience.' 
    },
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
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Transforming Ideas into Exceptional Digital Experiences</h2>
            <p className="text-foreground/70 text-lg">
              As a Creative Project Manager with over 8 years of experience, I bring a unique blend of strategic thinking, 
              creative vision, and technical expertise to every project.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Creative workspace" 
                className="rounded-xl object-cover w-full h-[400px] shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-display font-semibold mb-4">My Approach</h3>
              <p className="text-foreground/70 mb-6">
                I believe in a collaborative approach that puts the client's vision and user needs at the center of every decision. 
                By combining strategic thinking with creative problem-solving, I deliver results that exceed expectations.
              </p>
              
              <ul className="space-y-4">
                {['Strategic Planning', 'Creative Direction', 'Technical Execution', 'Quality Assurance'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">{item}</h4>
                      <p className="text-sm text-foreground/70">
                        {index === 0 && 'Define goals and create roadmaps for successful project execution.'}
                        {index === 1 && 'Guide visual and interactive elements to create cohesive experiences.'}
                        {index === 2 && 'Ensure flawless implementation and technical excellence.'}
                        {index === 3 && 'Rigorous testing and refinement for perfect results.'}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/about" 
                className="mt-8 inline-flex items-center text-primary hover:underline font-medium"
              >
                Learn more about my experience <ArrowRight size={16} className="ml-1" />
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
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What I Offer</h2>
            <p className="text-foreground/70 text-lg">
              Comprehensive digital services tailored to meet your specific needs and objectives.
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
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
