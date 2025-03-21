
import ContactForm from '@/components/ContactForm';
import { useScrollAnimation } from '@/utils/animations';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: contactInfoRef, isVisible: contactInfoVisible } = useScrollAnimation(0.2);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'appointments@brightsmile.com',
      link: 'mailto:appointments@brightsmile.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Dental Ave, San Francisco, CA',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri: 8am-6pm | Sat: 9am-2pm',
      link: '#'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "BrightSmile Dental",
    "url": "https://brightsmile.com/contact",
    "telephone": "+15551234567",
    "email": "appointments@brightsmile.com",
    "image": "https://brightsmile.com/og-image.png",
    "description": "BrightSmile Dental provides comprehensive dental care for the whole family in San Francisco. Schedule your appointment today!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Dental Ave",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "hasMap": "https://maps.google.com",
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/brightsmile",
      "https://www.instagram.com/brightsmile",
      "https://twitter.com/brightsmile"
    ],
    "emergencyService": {
      "@type": "MedicalService",
      "availableService": "Emergency Dental Care",
      "telephone": "+15551239999"
    },
    "medicalSpecialty": [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Dental Implants"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Helmet>
        <title>Contact BrightSmile Dental | Schedule Your Appointment</title>
        <meta name="description" content="Contact BrightSmile Dental to schedule your appointment. Call us at +1 (555) 123-4567 or visit our office at 123 Dental Ave, San Francisco, CA." />
        <meta name="keywords" content="dental appointment, contact dentist, schedule dental visit, San Francisco dentist" />
        <link rel="canonical" href="https://brightsmile.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary overflow-hidden relative">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 animate-pulse-light blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-400/5 animate-pulse-light blur-3xl"></div>

        <div
          ref={headerRef}
          className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-1000 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-6 inline-block">Book Your Visit</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Schedule Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              We're here to help you achieve the healthy, beautiful smile you deserve. Contact us today to schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div
          ref={contactInfoRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out ${contactInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="glass-card p-6 rounded-xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary/5"
                  rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                  target={item.title === 'Location' ? '_blank' : undefined}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.details}</p>
                </a>
              );
            })}
          </div>

          {/* Emergency Info */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-red-600 dark:text-red-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938-9.59a9 9 0 1112.727 12.727 9 9 0 01-12.727-12.727z" />
                </svg>
                Dental Emergencies
              </h3>
              <p className="text-red-600/80 dark:text-red-400/80 mb-2">
                If you're experiencing a dental emergency, please call our emergency line immediately:
              </p>
              <p className="text-red-600 dark:text-red-400 font-semibold">
                <a href="tel:+15551239999" className="text-xl hover:underline">+1 (555) 123-9999</a>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Book Your Appointment</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            Find Our Office
          </h2>
          <div className="h-[400px] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095774!2d144.9556513159046!3d-37.81732774201432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df4f9f1fb%3A0x2f8f1e7d4c5a1a3!2sYour%20Office!5e0!3m2!1sen!2sus!4v1614035559921!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
