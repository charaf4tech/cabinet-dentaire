import { useEffect, useRef, useState } from 'react';
import React from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, no need to keep observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
};

export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return {
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};

export const useTypingEffect = (text: string, speed: number = 75) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    setIsComplete(false);
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, speed);
    
    return () => clearInterval(typingInterval);
  }, [text, speed]);
  
  return { displayedText, isComplete };
};

export const useFloatingAnimation = () => {
  const [floatingElements, setFloatingElements] = useState<JSX.Element[]>([]);
  
  const generateFloatingElements = (count: number, IconComponent: React.ComponentType<any>) => {
    const elements: JSX.Element[] = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 20 + 10; // Random size between 10-30px
      const delay = Math.random() * 5; // Random delay up to 5s
      const duration = Math.random() * 10 + 10; // Random duration between 10-20s
      const leftPosition = Math.random() * 100; // Random left position 0-100%
      
      // Create element using React.createElement instead of JSX
      elements.push(
        React.createElement(
          'div',
          {
            key: i,
            className: "absolute opacity-30 text-primary",
            style: {
              left: `${leftPosition}%`,
              top: `-${size}px`,
              animation: `floatUp ${duration}s linear ${delay}s infinite`,
              zIndex: 0,
            }
          },
          React.createElement(IconComponent, { size })
        )
      );
    }
    
    setFloatingElements(elements);
  };
  
  return { floatingElements, generateFloatingElements };
};

export const useParallaxScroll = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return offset;
};

export const useResponsiveValue = <T,>(
  defaultValue: T,
  breakpoints: { sm?: T; md?: T; lg?: T; xl?: T }
) => {
  const [value, setValue] = useState(defaultValue);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= 1280 && breakpoints.xl !== undefined) {
        setValue(breakpoints.xl);
      } else if (width >= 1024 && breakpoints.lg !== undefined) {
        setValue(breakpoints.lg);
      } else if (width >= 768 && breakpoints.md !== undefined) {
        setValue(breakpoints.md);
      } else if (width >= 640 && breakpoints.sm !== undefined) {
        setValue(breakpoints.sm);
      } else {
        setValue(defaultValue);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [defaultValue, breakpoints]);
  
  return value;
};

export const useDentalAnimations = () => {
  // Animate element when it's visible in the viewport
  const animateOnScroll = (element: HTMLElement, animation: string, delay: number = 0) => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add(animation);
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  };
  
  // Animate dental elements like teeth or dental tools
  const createDentalParticles = (container: HTMLElement, count: number = 10) => {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute opacity-20 text-primary';
      
      // Random position, size and animation delay
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 15 + 10;
      
      // Create shape (alternate between circle and tooth-like shape)
      const isCircle = Math.random() > 0.5;
      if (isCircle) {
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.background = 'currentColor';
      } else {
        // Create a simple square for tooth
        particle.style.width = `${size}px`;
        particle.style.height = `${size * 1.2}px`;
        particle.style.background = 'currentColor';
        particle.style.borderRadius = '3px';
      }
      
      particle.style.left = `${left}%`;
      particle.style.top = `-${size}px`;
      particle.style.animation = `floatUp ${duration}s linear ${delay}s infinite`;
      particle.style.zIndex = '0';
      
      container.appendChild(particle);
    }
  };
  
  // Simulate a smile animation 
  const animateSmile = (element: HTMLElement) => {
    let progress = 0;
    const duration = 1000; // 1 second
    const start = performance.now();
    
    const animate = (time: number) => {
      progress = (time - start) / duration;
      if (progress > 1) progress = 1;
      
      // Create a smile curve using CSS transform
      const curve = progress * 10; // Max curve of 10px
      element.style.transform = `scaleX(${1 + progress * 0.1}) rotate(${progress * 5}deg)`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };
  
  return { animateOnScroll, createDentalParticles, animateSmile };
};

// Keep the original Moroccan animations for backward compatibility
export const useMorrocanAnimations = () => {
  const animateOnScroll = (element: HTMLElement, animation: string, delay: number = 0) => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add(animation);
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  };
  
  return { animateOnScroll };
};
