
import { useScrollAnimation } from '@/utils/animations';
import Timeline from '@/components/Timeline';
import { ArrowRight, BrainCircuit, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.2);
  
  const skills = [
    { category: 'Project Management', items: ['Agile Methodologies', 'JIRA', 'Asana', 'Scrum', 'Kanban', 'Resource Planning', 'Risk Management'] },
    { category: 'Design', items: ['UX/UI Design', 'Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems', 'Visual Design'] },
    { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'React', 'Git', 'WordPress', 'DevOps Basics'] },
    { category: 'Marketing', items: ['Content Strategy', 'SEO Basics', 'Analytics', 'Social Media', 'Email Campaigns', 'User Research'] },
  ];
  
  const strengths = [
    { 
      icon: BrainCircuit, 
      title: 'Strategic Thinking', 
      description: 'Ability to see the big picture while managing the details that make it happen.'
    },
    { 
      icon: Lightbulb, 
      title: 'Creative Problem-Solving', 
      description: 'Finding innovative solutions to complex challenges in digital projects.'
    },
    { 
      icon: Users, 
      title: 'Team Leadership', 
      description: 'Bringing out the best in cross-functional teams to deliver exceptional work.'
    },
    { 
      icon: Target, 
      title: 'Goal-Oriented', 
      description: 'Relentless focus on achieving objectives and exceeding expectations.'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary overflow-hidden relative">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 animate-pulse-light blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-400/5 animate-pulse-light blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block animate-fade-in">About Me</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Passionate about <span className="text-gradient">Creating</span> Digital Excellence
            </h1>
            <p className="text-lg text-foreground/70 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              With a background spanning project management, design, and digital strategy, I bring a holistic perspective to every project. My mission is to help brands create meaningful digital experiences that connect with their audience.
            </p>
          </div>
        </div>
      </section>
      
      {/* About intro */}
      <section className="py-24">
        <div 
          ref={introRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                alt="Portrait" 
                className="rounded-xl shadow-lg object-cover h-[500px] w-full"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">My Journey</h2>
              <p className="text-foreground/70 mb-6">
                I began my career with a background in design, which gave me an eye for aesthetics and user experience. As I progressed, I discovered my passion for bringing together diverse teams to create exceptional digital products.
              </p>
              <p className="text-foreground/70 mb-6">
                Over the years, I've had the privilege of working with startups, agencies, and enterprise clients across various industries, including technology, healthcare, education, and e-commerce.
              </p>
              <p className="text-foreground/70 mb-8">
                What sets me apart is my ability to bridge the gap between creative vision and technical execution, ensuring that every project not only looks great but also delivers results.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((strength, index) => {
                  const Icon = strength.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">{strength.title}</h4>
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">Experience</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Professional Journey</h2>
            <p className="text-foreground/70 text-lg">
              A timeline of my career highlights and professional experiences.
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
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4 inline-block">Skills</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">My Toolkit</h2>
            <p className="text-foreground/70 text-lg">
              A diverse set of skills that enables me to handle all aspects of digital projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={groupIndex} 
                className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-xl"
                style={{ transitionDelay: `${groupIndex * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
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
              href="/projects" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
