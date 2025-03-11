
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smile, Shield, Award, Heart, Star } from 'lucide-react';

interface AnimatedIconProps {
  count?: number;
  iconType?: 'smile' | 'shield' | 'award' | 'heart' | 'star';
  containerClassName?: string;
}

export const FloatingIcons = ({ 
  count = 10, 
  iconType = 'smile',
  containerClassName = "absolute inset-0 overflow-hidden pointer-events-none"
}: AnimatedIconProps) => {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    const iconComponents = {
      smile: Smile,
      shield: Shield,
      award: Award,
      heart: Heart,
      star: Star
    };
    
    const IconComponent = iconComponents[iconType];
    const newIcons = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * 20) + 10; // 10-30px
      const left = Math.floor(Math.random() * 100); // 0-100%
      const delay = Math.random() * 10; // 0-10s
      const duration = Math.random() * 15 + 20; // 20-35s
      const opacity = Math.random() * 0.2 + 0.1; // 0.1-0.3
      
      newIcons.push(
        <motion.div
          key={i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: '100vh', 
            opacity: [0, opacity, opacity, 0],
            rotate: [0, 180, 360],
            x: Math.sin(i) * 50
          }}
          transition={{ 
            duration: duration, 
            delay: delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            position: 'absolute', 
            left: `${left}%`, 
            top: 0,
            color: i % 2 === 0 ? '#C4736B' : '#21888F'
          }}
        >
          <IconComponent size={size} />
        </motion.div>
      );
    }
    
    setIcons(newIcons);
  }, [count, iconType]);
  
  return (
    <div className={containerClassName}>
      {icons}
    </div>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {text}
    </motion.span>
  );
};

interface AnimatedIconRowProps {
  icons: Array<{
    icon: React.ComponentType<any>;
    label: string;
  }>;
  className?: string;
}

export const AnimatedIconRow = ({ icons, className = "" }: AnimatedIconRowProps) => {
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {icons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-morocco-terracotta/10 flex items-center justify-center text-morocco-terracotta mb-2">
              <Icon size={24} />
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

interface MoroccanPatternDividerProps {
  className?: string;
}

export const MoroccanPatternDivider = ({ className = "" }: MoroccanPatternDividerProps) => {
  return (
    <div className={`my-12 relative h-8 ${className}`}>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-morocco-sand/30"></div>
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex items-center justify-center">
        <div className="w-16 h-16 bg-background flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#C4736B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#C4736B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V22" stroke="#C4736B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V2" stroke="#C4736B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12H22" stroke="#C4736B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12H8" stroke="#C4736B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const ShineEffect = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent absolute top-0 -left-20"
        style={{
          animation: 'shine 3s ease-in-out infinite alternate',
        }}
      />
    </div>
  );
};

// Add this keyframe to your CSS
// @keyframes shine {
//   from { transform: translateX(-100%); }
//   to { transform: translateX(500%); }
// }
