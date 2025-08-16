import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Cloud, Download, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const p = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
    {/* Enhanced Progress Bar */}
    <div className="fixed top-0 left-0 h-1 z-60" style={{ width: `${progress}%` }}>
      <div className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
      </div>
    </div>
    
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? 'glass-premium backdrop-blur-2xl border-b border-gradient shadow-premium' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="flex items-center space-x-3">
              {/* Enhanced Logo */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center blue-glow-lg group-hover:scale-110 transition-all duration-500 ease-out relative overflow-hidden">
                  <Cloud className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
                  
                  {/* Logo shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                
                {/* Floating sparkle */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              
              {/* Enhanced Brand Name */}
              <div className="relative">
                <h1 className="text-2xl font-black text-gradient-primary group-hover:text-gradient-electric transition-all duration-500">
                  Shivansh Singh
                </h1>
                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item, index) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-500 group magnetic-subtle ${
                    isActive 
                      ? 'text-white bg-white/10 backdrop-blur-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500 ${
                      isActive ? 'w-8' : 'w-0 group-hover:w-6'
                    }`}
                  />
                  
                  {/* Hover background */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    isActive ? 'opacity-20' : ''
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Enhanced Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Premium Resume Button */}
            <a
              href="/resume.pdf"
              download="Shivansh_Singh_Resume.pdf"
              className="btn-premium text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-premium magnetic flex items-center gap-2 relative overflow-hidden group"
            >
              <Download size={16} className="group-hover:animate-bounce-gentle" />
              <span>Resume</span>
            </a>
            
            {/* Enhanced Social Icons */}
            <div className="flex items-center space-x-2">
              {[
                { icon: Github, href: 'https://github.com/Shivansh-0910', color: 'hover:text-slate-300', bg: 'hover:bg-slate-700/20' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shivansh-singh-2576772b1/', color: 'hover:text-sky-400', bg: 'hover:bg-sky-500/20' },
                { icon: Mail, href: 'mailto:shivanshs932@gmail.com', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl text-slate-400 ${social.color} ${social.bg} transition-all duration-500 magnetic backdrop-blur-sm border border-transparent hover:border-white/10 group relative overflow-hidden`}
                >
                  <social.icon size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-current" style={{ transform: 'scale(0.8)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 magnetic backdrop-blur-sm border border-transparent hover:border-white/20 relative overflow-hidden group"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-premium rounded-2xl mt-4 mx-2 p-6 gradient-border animate-fade-in-down">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-6">
              {navigation.map((item, index) => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                      isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-500 rounded-r" />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                );
              })}
            </div>
            
            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              download="Shivansh_Singh_Resume.pdf"
              className="btn-premium text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-premium flex items-center justify-center gap-3 mb-6 w-full group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={18} className="group-hover:animate-bounce-gentle" />
              <span>Download Resume</span>
            </a>
            
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
              {[
                { icon: Github, href: 'https://github.com/Shivansh-0910', color: 'hover:text-slate-300' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shivansh-singh-2576772b1/', color: 'hover:text-sky-400' },
                { icon: Mail, href: 'mailto:shivanshs932@gmail.com', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl text-slate-400 ${social.color} hover:bg-white/5 transition-all duration-300 magnetic-subtle backdrop-blur-sm border border-transparent hover:border-white/10`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
