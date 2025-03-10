
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 1s ease, transform 1s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-pulse-light blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-400/5 animate-pulse-light blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight"
          >
            Crafting Digital <span className="text-gradient">Experiences</span> That Inspire
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Creative project manager transforming ideas into exceptional digital products. 
            Bringing vision, strategy, and flawless execution to every project.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/projects" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float" onClick={handleScrollDown}>
        <ArrowDown className="text-foreground/50 hover:text-primary transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;
