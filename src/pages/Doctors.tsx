
import { useScrollAnimation } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Calendar, Award, GraduationCap, Users } from 'lucide-react';

const Doctors = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation(0.2);
  
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      specialty: "General & Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      education: "DDS, University of California",
      experience: "15+ years of experience",
      bio: "Dr. Johnson is passionate about providing gentle, comprehensive dental care. She specializes in cosmetic procedures and keeps up with the latest dental techniques through continuing education."
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialty: "Orthodontics & Invisalign",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      education: "DMD, Harvard University",
      experience: "12+ years of experience",
      bio: "Dr. Chen specializes in creating beautiful smiles through orthodontic treatment. He's an Invisalign Platinum Provider and is dedicated to making orthodontic care comfortable and effective."
    },
    {
      name: "Dr. Lisa Rodriguez",
      role: "Pediatric Dentist",
      specialty: "Children's Dentistry",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      education: "DDS, New York University",
      experience: "10+ years of experience",
      bio: "Dr. Rodriguez has a special way with children, making dental visits fun and stress-free. She's committed to establishing good oral health habits early and creating positive dental experiences."
    },
    {
      name: "Dr. James Wilson",
      role: "Oral Surgeon",
      specialty: "Oral & Maxillofacial Surgery",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      education: "DMD, MD, Johns Hopkins University",
      experience: "20+ years of experience",
      bio: "Dr. Wilson specializes in complex oral surgeries, including wisdom teeth extractions and dental implants. His extensive training and experience ensure patients receive excellent surgical care."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
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
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block">Our Team</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Dentists</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              Our highly skilled dental professionals are committed to providing exceptional care in a comfortable environment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24">
        <div 
          ref={teamRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={teamVisible ? "visible" : "hidden"}
          >
            {doctors.map((doctor, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col md:flex-row gap-8"
                variants={itemVariants}
              >
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-display font-bold mb-2">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-4">{doctor.role} • {doctor.specialty}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <GraduationCap size={16} className="mr-2 text-primary" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award size={16} className="mr-2 text-primary" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 mb-6">
                    {doctor.bio}
                  </p>
                  
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    <Calendar size={16} className="mr-2" />
                    Schedule with Dr. {doctor.name.split(' ')[1]}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Why Choose BrightSmile Dental?</h2>
            <p className="text-foreground/70">
              Our team is committed to providing exceptional dental care with a patient-first approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Advanced Education",
                description: "Our dentists pursue continuing education to stay at the forefront of dental advancements."
              },
              {
                icon: Users,
                title: "Patient-Centered Care",
                description: "We take time to listen to your concerns and develop personalized treatment plans."
              },
              {
                icon: Award,
                title: "Excellence in Dentistry",
                description: "Multiple awards for outstanding patient care and clinical excellence."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-xl text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Meet Our Team In Person
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
