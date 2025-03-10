
import { useState, useEffect, useRef } from 'react';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  company?: string;
  location?: string;
};

const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'Senior Project Manager',
    company: 'Creative Digital Agency',
    location: 'San Francisco, CA',
    description: 'Led cross-functional teams in delivering high-profile digital campaigns and product launches for Fortune 500 clients.'
  },
  {
    year: '2020',
    title: 'Project Manager',
    company: 'Interactive Studio',
    location: 'New York, NY',
    description: 'Managed end-to-end delivery of web applications and interactive experiences for leading brands in the technology sector.'
  },
  {
    year: '2018',
    title: 'Digital Producer',
    company: 'Innovation Lab',
    location: 'Austin, TX',
    description: 'Coordinated development of award-winning digital products and marketing campaigns for emerging tech startups.'
  },
  {
    year: '2016',
    title: 'Assistant Producer',
    company: 'Creative Collective',
    location: 'Portland, OR',
    description: 'Supported senior team members in the execution of digital marketing strategies and content production.'
  }
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (!visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, [visibleItems]);

  return (
    <div ref={timelineRef} className="relative py-12 px-4 max-w-3xl mx-auto">
      {/* Center line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
      
      {timelineData.map((item, index) => (
        <div 
          key={index}
          data-index={index}
          className={`timeline-item relative mb-16 md:mb-24 last:mb-0 transition-opacity duration-700 ease-out ${
            visibleItems.includes(index) 
              ? 'opacity-100' 
              : 'opacity-0 translate-y-8'
          } ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto' : 'md:pl-8 md:ml-auto md:mr-0'}`}
          style={{ 
            transitionDelay: `${index * 150}ms`,
            maxWidth: '42%',
            marginLeft: index % 2 === 0 ? '' : '',
          }}
        >
          {/* Dot on timeline */}
          <div className="absolute top-1 -left-1.5 md:left-auto md:-right-1.5 md:top-1 w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/30"></div>
          
          {/* Year */}
          <div className="inline-block px-3 py-1 mb-2 text-sm font-medium text-primary-foreground bg-primary rounded-full">
            {item.year}
          </div>
          
          {/* Content */}
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            {item.company && (
              <div className="text-sm font-medium text-foreground/80 mb-1">
                {item.company} {item.location && `· ${item.location}`}
              </div>
            )}
            <p className="text-foreground/70">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
