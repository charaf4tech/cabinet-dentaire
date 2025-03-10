
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
            placeholder="Subject of your message"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors resize-none"
            placeholder="Your message here..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send size={16} className="ml-2" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
