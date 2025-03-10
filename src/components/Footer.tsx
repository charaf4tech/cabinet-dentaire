
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo */}
          <div className="flex flex-col">
            <h3 className="text-xl font-display font-medium mb-4">
              <span className="text-gradient">Creative.</span>
            </h3>
            <p className="text-foreground/70 max-w-xs">
              Crafting exceptional digital experiences that blend creativity, strategy, and flawless execution.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-foreground/70 hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                About
              </a>
              <a href="/projects" className="text-foreground/70 hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Creative Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
