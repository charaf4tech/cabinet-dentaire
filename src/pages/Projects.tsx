
import { useState } from 'react';
import ProjectCard, { Project } from '@/components/ProjectCard';
import { useScrollAnimation } from '@/utils/animations';

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  
  const [filter, setFilter] = useState('all');
  
  // Sample project data
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform Redesign',
      description: 'Complete redesign of a major e-commerce platform, focusing on improving user experience and conversion rates.',
      imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      categories: ['UX/UI Design', 'E-commerce'],
      link: '#'
    },
    {
      id: '2',
      title: 'Health & Wellness App',
      description: 'Mobile application for tracking health metrics, exercise routines, and wellness goals with personalized recommendations.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      categories: ['Mobile App', 'Healthcare'],
      link: '#'
    },
    {
      id: '3',
      title: 'Financial Services Dashboard',
      description: 'Interactive dashboard for a financial services company, providing real-time data visualization and analytics.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      categories: ['Web App', 'Finance'],
      link: '#'
    },
    {
      id: '4',
      title: 'Educational Platform',
      description: 'Comprehensive learning management system for a leading educational institution, supporting thousands of students.',
      imageUrl: 'https://images.unsplash.com/photo-1581077968324-325fff5f1d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      categories: ['Web App', 'Education'],
      link: '#'
    },
    {
      id: '5',
      title: 'Tech Startup Brand Identity',
      description: 'Complete brand identity design for an emerging tech startup, including logo, style guide, and marketing materials.',
      imageUrl: 'https://images.unsplash.com/photo-1696933486045-1f14d079c88b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      categories: ['Branding', 'Technology'],
      link: '#'
    },
    {
      id: '6',
      title: 'Travel Experience App',
      description: 'Mobile application for discovering and booking unique travel experiences, with personalized recommendations.',
      imageUrl: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      categories: ['Mobile App', 'Travel'],
      link: '#'
    },
  ];
  
  const categories = ['all', ...Array.from(new Set(projects.flatMap(p => p.categories)))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

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
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block">My Work</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-12">
              A curated selection of my most impactful projects, showcasing my skills in project management, design, and digital strategy.
            </p>
            
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary hover:bg-primary/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-foreground/70 text-lg">No projects found in this category.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium transition-colors hover:bg-primary/90"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
