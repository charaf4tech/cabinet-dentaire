
import { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  preferredDate: z.string().optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Appointment request sent!",
        description: "We'll contact you shortly to confirm your appointment.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredDate: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or call us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dentalServices = [
    "General Checkup", 
    "Teeth Cleaning", 
    "Teeth Whitening", 
    "Dental Implants",
    "Root Canal",
    "Emergency Care",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Other"
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={`px-4 py-3 rounded-lg bg-secondary/50 border ${errors.name ? 'border-red-500' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`px-4 py-3 rounded-lg bg-secondary/50 border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`px-4 py-3 rounded-lg bg-secondary/50 border ${errors.phone ? 'border-red-500' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`px-4 py-3 rounded-lg bg-secondary/50 border ${errors.service ? 'border-red-500' : 'border-border'} focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors`}
            >
              <option value="" disabled>Select a service</option>
              {dentalServices.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="preferredDate" className="text-sm font-medium">
              Preferred Date
            </label>
            <div className="relative">
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors w-full"
              />
              <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors resize-none"
            placeholder="Please share any specific concerns or questions..."
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
              Submitting...
            </span>
          ) : (
            <span className="flex items-center">
              Book Appointment
              <Send size={16} className="ml-2" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
