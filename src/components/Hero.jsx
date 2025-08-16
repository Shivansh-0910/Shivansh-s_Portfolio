import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, Code, Rocket, Star, Sparkles, Zap, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate enhanced particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const titles = [
    { text: "Full-Stack Developer", icon: Code, color: "text-sky-400" },
    { text: "Spring Boot Expert", icon: Zap, color: "text-green-400" },
    { text: "React Specialist", icon: Sparkles, color: "text-blue-400" },
    { text: "Java Developer", icon: Database, color: "text-orange-400" },
    { text: "Software Engineer", icon: Globe, color: "text-indigo-400" }
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-hero-gradient" ref={heroRef}>
      {/* Enhanced Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full border border-sky-500/8 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-blue-500/12 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '45s' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-indigo-500/15 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/10 animate-spin" style={{ animationDuration: '25s' }} />
      </div>

      {/* Enhanced Background Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-float will-change-transform"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(45deg, rgba(14, 165, 233, ${particle.opacity}), rgba(59, 130, 246, ${particle.opacity * 0.8}))`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.speed + 4}s`
            }}
          />
        ))}
      </div>

      {/* Premium Mouse Follower Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-20 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
          filter: 'blur(40px)'
        }}
      />

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5 pointer-events-none" />

      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Enhanced Profile Avatar */}
            <div className={`mb-12 relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative inline-block group">
                {/* Main Avatar with Enhanced Effects */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl sm:text-6xl font-black shadow-premium animate-float card-3d blue-glow-lg relative overflow-hidden">
                  <span className="text-shimmer relative z-10">SS</span>
                  
                  {/* Avatar shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Inner glow */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                
                {/* Enhanced Floating Tech Icons */}
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center animate-bounce-gentle blue-glow shadow-premium">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center animate-bounce-gentle electric-glow shadow-premium" style={{ animationDelay: '0.5s' }}>
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-1/2 -right-10 w-10 h-10 bg-gradient-to-br from-sky-300 to-blue-400 rounded-xl flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                
                {/* Enhanced Status Indicator */}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-premium relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                </div>

                {/* Orbital Ring Around Avatar */}
                <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 border border-sky-400/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
              </div>
            </div>
            
            {/* Enhanced Section Accent */}
            <div className={`section-accent-line mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} />
            
            {/* Enhanced Main Heading */}
            <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="block mb-2 text-glow">Hi, I'm</span>
              <span className="text-shimmer block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                Shivansh Singh
              </span>
            </h1>
            
            {/* Enhanced Animated Subtitle */}
            <div className={`text-3xl sm:text-4xl text-slate-300 mb-6 h-16 flex items-center justify-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-500 ${titles[currentTitle].color}`}>
                  {React.createElement(titles[currentTitle].icon, { size: 20, className: "text-white" })}
                </div>
                <span className="typing-effect font-bold text-gradient-primary">
                  {titles[currentTitle].text}
                </span>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <p className={`text-lg sm:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Passionate developer crafting exceptional digital experiences with{' '}
              <span className="text-gradient-electric font-bold hover:text-glow transition-all duration-300">Spring Boot</span>,{' '}
              <span className="text-gradient-primary font-bold hover:text-glow transition-all duration-300">React</span>, and{' '}
              <span className="text-gradient-gold font-bold hover:text-glow transition-all duration-300">Java Technologies</span>
              <br />
              <span className="text-lg text-slate-400 mt-2 block">
                Building scalable solutions that make a difference
              </span>
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="#contact"
                className="btn-premium text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-premium magnetic shine-on-hover relative overflow-hidden group min-w-[200px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles size={20} className="group-hover:animate-spin transition-transform duration-500" />
                  Let's Connect
                </span>
              </a>
              <a
                href="/resume.pdf"
                download="Shivansh_Singh_Resume.pdf"
                className="btn-secondary flex items-center gap-4 text-white px-12 py-5 rounded-2xl font-bold text-lg magnetic shine-on-hover relative overflow-hidden group min-w-[200px]"
              >
                <Download size={20} className="group-hover:animate-bounce-gentle transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>
            
            {/* Enhanced Scroll Indicator */}
            <div className={`animate-bounce-gentle transition-all duration-1000 delay-1300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a 
                href="#about" 
                className="inline-block text-slate-400 hover:text-sky-400 transition-all duration-500 magnetic group"
              >
                <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                  <span className="text-sm font-semibold group-hover:text-white transition-colors duration-300">
                    Scroll to explore
                  </span>
                  <div className="relative">
                    <ArrowDown size={28} className="animate-pulse group-hover:animate-bounce-gentle transition-all duration-300" />
                    <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-sky-500/20 to-blue-500/10 rounded-2xl rotate-45 animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-full animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-xl animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-sky-400/20 to-blue-400/10 rounded-full animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-lg animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl animate-float shadow-glow backdrop-blur-sm" style={{ animationDelay: '5s' }} />
    </section>
  );
};

export default Hero;
