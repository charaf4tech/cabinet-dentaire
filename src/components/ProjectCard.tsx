
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  link?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="rounded-xl overflow-hidden relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={project.imageUrl || '/placeholder.svg'}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-90'
        }`}>
          <div className="transform transition-transform duration-300 ease-out">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.categories.map((category, idx) => (
                <span 
                  key={idx} 
                  className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                >
                  {category}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-foreground/70 text-sm line-clamp-2 mb-4">
              {project.description}
            </p>
            
            {/* Link button */}
            {project.link && (
              <a 
                href={project.link}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
