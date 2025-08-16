import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, 
  Zap, Star, Download, CheckCircle, AlertCircle, User, AtSign, 
  FileText, MessageSquare, Calendar, Clock, Sparkles, Heart,
  ExternalLink, Copy, Check, Globe, Coffee, Briefcase
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateField = (name, value) => {
    const errors = {};
    
    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required';
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errors.email = 'Email is required';
        else if (!emailRegex.test(value)) errors.email = 'Please enter a valid email';
        break;
      case 'subject':
        if (!value.trim()) errors.subject = 'Subject is required';
        else if (value.trim().length < 5) errors.subject = 'Subject must be at least 5 characters';
        break;
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters';
        break;
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Real-time validation
    const fieldErrors = validateField(name, value);
    setFormErrors(prev => ({
      ...prev,
      [name]: fieldErrors[name]
    }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('shivanshs932@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach(key => {
      const fieldErrors = validateField(key, formData[key]);
      if (fieldErrors[key]) errors[key] = fieldErrors[key];
    });
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Email',
      info: 'shivanshs932@gmail.com',
      link: 'mailto:shivanshs932@gmail.com',
      color: 'from-blue-400 to-indigo-500',
      description: 'Drop me a line anytime'
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: 'Phone',
      info: '+91 9368554228',
      link: 'tel:+919368554228',
      color: 'from-green-400 to-emerald-500',
      description: 'Available for calls'
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Location',
      info: 'India',
      link: '#',
      color: 'from-purple-400 to-pink-500',
      description: 'Based in India, working globally'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/Shivansh-0910',
      color: 'from-gray-400 to-gray-600',
      hoverColor: 'hover:from-gray-300 hover:to-gray-500',
      description: 'Check out my code'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivansh-singh-2576772b1/',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-300 hover:to-blue-500',
      description: 'Professional network'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      url: 'mailto:shivanshs932@gmail.com',
      color: 'from-red-400 to-red-600',
      hoverColor: 'hover:from-red-300 hover:to-red-500',
      description: 'Send me an email'
    }
  ];

  const quickStats = [
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Response Time',
      value: '< 24 hours',
      color: 'text-green-400'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Timezone',
      value: 'IST (UTC+5:30)',
      color: 'text-blue-400'
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      label: 'Availability',
      value: 'Open to work',
      color: 'text-orange-400'
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: 'Project Type',
      value: 'Full-time & Freelance',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary-gradient relative overflow-hidden">
      <div className="absolute -top-20 left-0 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -bottom-20 right-0 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-6xl sm:text-7xl font-black text-white mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Let's <span className="text-shimmer">Connect</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
          </p>
          
          {/* Enhanced Section Accent */}
          <div className={`section-accent-line transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        {/* Quick Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="glass-premium p-6 rounded-2xl text-center hover-lift card-interactive group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-premium`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
              <div className={`font-bold ${stat.color} group-hover:text-white transition-colors duration-300`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-premium">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white">
                Get In <span className="text-gradient-primary">Touch</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive group relative overflow-hidden"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-white text-xl mb-2 group-hover:text-gradient-primary transition-all duration-300">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-lg mb-1 group-hover:text-white transition-all duration-300">
                        {item.info}
                      </p>
                      <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-all duration-300">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={item.link}
                        className="w-10 h-10 glass-premium rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 magnetic group/btn"
                      >
                        <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                      </a>
                      {item.title === 'Email' && (
                        <button
                          onClick={copyEmail}
                          className="w-10 h-10 glass-premium rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 magnetic group/btn"
                        >
                          {copiedEmail ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-premium">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-black text-white">
                  Follow <span className="text-gradient-primary">Me</span>
                </h4>
              </div>
              
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-premium p-6 rounded-2xl gradient-border hover-lift card-interactive group flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-all duration-300`}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-white group-hover:text-gradient-primary transition-all duration-300">
                        {social.name}
                      </h5>
                      <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-all duration-300">
                        {social.description}
                      </p>
                    </div>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Info Cards */}
            <div className="space-y-6">
              <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black text-white text-xl group-hover:text-gradient-primary transition-all duration-300">Resume</h4>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                  Download my complete resume with detailed experience and skills.
                </p>
                <a
                  href="/resume.pdf"
                  download="Shivansh_Singh_Resume.pdf"
                  className="btn-premium text-white px-8 py-3 rounded-2xl font-bold shadow-premium magnetic inline-flex items-center gap-3 group/btn"
                >
                  <Download size={18} className="group-hover/btn:animate-bounce-gentle" />
                  Download PDF
                </a>
              </div>
              
              <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black text-white text-xl group-hover:text-gradient-primary transition-all duration-300">Quick Response</h4>
                </div>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  I typically respond within 24 hours. For urgent matters,
                  feel free to reach out via phone or LinkedIn.
                </p>
              </div>
              
              <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black text-white text-xl group-hover:text-gradient-primary transition-all duration-300">Available for</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Full-time Roles', 'Freelance Projects', 'Consulting', 'Collaboration'].map((item, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 magnetic-subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-premium p-10 rounded-3xl gradient-border hover-lift card-interactive relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-premium">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-black text-white">
                  Send <span className="text-gradient-primary">Message</span>
                </h3>
              </div>
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl animate-fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <h4 className="font-bold text-green-400">Message Sent Successfully!</h4>
                      <p className="text-green-300 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                      <User size={16} />
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 glass-premium rounded-2xl gradient-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 ${
                          formErrors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                        }`}
                        placeholder="Your Name"
                      />
                      {formErrors.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle size={20} className="text-red-400" />
                        </div>
                      )}
                    </div>
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <AlertCircle size={14} />
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                      <AtSign size={16} />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 glass-premium rounded-2xl gradient-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 ${
                          formErrors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle size={20} className="text-red-400" />
                        </div>
                      )}
                    </div>
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <AlertCircle size={14} />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                    <FileText size={16} />
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 glass-premium rounded-2xl gradient-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 ${
                        formErrors.subject ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                      }`}
                      placeholder="What's this about?"
                    />
                    {formErrors.subject && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <AlertCircle size={20} className="text-red-400" />
                      </div>
                    )}
                  </div>
                  {formErrors.subject && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={14} />
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                    <MessageSquare size={16} />
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-6 py-4 glass-premium rounded-2xl gradient-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 resize-none ${
                        formErrors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''
                      }`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                    {formErrors.message && (
                      <div className="absolute right-3 top-4">
                        <AlertCircle size={20} className="text-red-400" />
                      </div>
                    )}
                  </div>
                  {formErrors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={14} />
                      {formErrors.message}
                    </p>
                  )}
                  <div className="text-right mt-2">
                    <span className="text-slate-500 text-sm">
                      {formData.message.length}/500
                    </span>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-premium text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-premium magnetic flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:animate-bounce-gentle" />
                      Send Message
                      <Sparkles size={16} className="group-hover:animate-pulse" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
