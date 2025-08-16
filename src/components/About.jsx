import React, { useState, useRef, useEffect } from 'react';
import { 
  Code, Database, Zap, Brain, Rocket, Shield, Globe, Trophy, 
  Award, Target, Star, Calendar, MapPin, Coffee, Heart,
  Sparkles, TrendingUp, Users, CheckCircle, Flame, BookOpen
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Expert in Java, Spring Boot, React, and modern web technologies',
      color: 'from-emerald-400 to-teal-600',
      glow: 'emerald-glow',
      delay: '0s'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Proficient in MySQL, PostgreSQL, and database optimization',
      color: 'from-blue-400 to-indigo-600',
      glow: 'blue-glow',
      delay: '0.2s'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Competitive Programming',
      description: '750+ DSA problems solved, HackerRank 5-Star Gold Badge',
      color: 'from-yellow-400 to-orange-500',
      glow: 'gold-glow',
      delay: '0.4s'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Building high-performance, scalable applications',
      color: 'from-purple-400 to-pink-500',
      glow: 'neon-glow',
      delay: '0.6s'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Strong analytical skills and innovative solution development',
      color: 'from-cyan-400 to-blue-500',
      glow: 'blue-glow',
      delay: '0.8s'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Focus',
      description: 'Implementing secure coding practices and authentication',
      color: 'from-red-400 to-rose-500',
      glow: 'red-glow',
      delay: '1s'
    }
  ];

  const personalInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'India',
      color: 'text-green-400'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Experience',
      value: '3+ Years',
      color: 'text-blue-400'
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      label: 'Favorite Drink',
      value: 'Coffee ☕',
      color: 'text-orange-400'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: 'Passion',
      value: 'Clean Code',
      color: 'text-pink-400'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Advanced Full-Stack Development',
      description: 'Mastering microservices architecture and cloud technologies',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-sky-400 to-blue-500'
    },
    {
      year: '2023',
      title: 'Competitive Programming Excellence',
      description: 'Achieved 1700+ LeetCode rating and HackerRank 5-Star Gold Badge',
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      year: '2022',
      title: 'Full-Stack Journey Begins',
      description: 'Started building comprehensive web applications with Spring Boot and React',
      icon: <Code className="w-5 h-5" />,
      color: 'from-emerald-400 to-teal-500'
    },
    {
      year: '2021',
      title: 'Programming Foundation',
      description: 'Began learning Java and fundamental programming concepts',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const achievements = [
    'Solved 750+ DSA problems across LeetCode and TUF+ (TakeUForward by Striver)',
    'HackerRank 5-Star Gold Badge in Problem Solving',
    'LeetCode: 1700+ rating — 300+ problems solved',
    'Finalist – HackData 2024, Shiv Nadar University',
    'Participant – HackVerse (by GeeksforGeeks)'
  ];

  return (
    <section id="about" className="py-20 bg-secondary-gradient relative overflow-hidden">
      {/* Section accents */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-6xl sm:text-7xl font-black text-white mb-8 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="text-shimmer">Me</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate software developer with expertise in full-stack development and competitive programming
          </p>
          
          {/* Enhanced Section Accent */}
          <div className={`section-accent-line mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="glass-premium px-6 py-3 rounded-2xl text-slate-300 text-sm font-semibold gradient-border flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              Building robust backends and delightful interfaces
            </span>
            <span className="glass-premium px-6 py-3 rounded-2xl text-slate-300 text-sm font-semibold gradient-border flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              Always learning and growing
            </span>
          </div>
        </div>

        {/* Personal Information Cards */}
        <div className={`grid md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className="glass-premium p-6 rounded-2xl text-center hover-lift card-interactive group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-premium`}>
                <div className="text-white">
                  {info.icon}
                </div>
              </div>
              <div className="text-sm text-slate-400 mb-1">{info.label}</div>
              <div className={`font-bold ${info.color} group-hover:text-white transition-colors duration-300`}>
                {info.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Enhanced Journey Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-premium">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white">
                My <span className="text-gradient-primary">Journey</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift group">
                <p className="group-hover:text-slate-200 transition-colors duration-300">
                  I'm a <span className="text-gradient-electric font-bold">dedicated software developer</span> with 
                  a passion for creating innovative solutions using modern technologies. My expertise 
                  spans across full-stack development with a strong foundation in Java and Spring Boot.
                </p>
              </div>
              
              <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift group">
                <p className="group-hover:text-slate-200 transition-colors duration-300">
                  With hands-on experience in <span className="text-gradient-primary font-bold">Spring Boot</span>, 
                  <span className="text-gradient-gold font-bold"> React</span>, and database technologies, 
                  I build scalable applications that deliver exceptional user experiences and robust backend solutions.
                </p>
              </div>
              
              <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift group">
                <p className="group-hover:text-slate-200 transition-colors duration-300">
                  I'm passionate about <span className="text-gradient-electric font-bold">competitive programming</span> and 
                  have solved 750+ DSA problems, earning recognition through various coding competitions and maintaining 
                  a strong problem-solving mindset in all my development work.
                </p>
              </div>
            </div>

            {/* Enhanced Key Achievements */}
            <div className="glass-premium p-8 rounded-3xl gradient-border hover-lift">
              <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                Key Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 text-slate-300 group/item hover:text-slate-200 transition-colors duration-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className={`transition-all duration-1000 delay-1300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-premium">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white">
                Core <span className="text-gradient-primary">Strengths</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`relative glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive group overflow-hidden ${item.glow}`}
                  style={{ animationDelay: item.delay }}
                >
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <div className="text-white group-hover:animate-pulse">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-black text-white mb-3 text-lg group-hover:text-gradient-primary transition-all duration-300 relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-all duration-300 relative z-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Enhanced Stats Section */}
        <div className={`transition-all duration-1000 delay-1700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4 flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-premium">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              By the <span className="text-gradient-gold">Numbers</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Quantifying my journey in software development and competitive programming
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                number: '750+', 
                label: 'DSA Problems Solved', 
                color: 'text-gradient-primary',
                icon: <Target className="w-6 h-6" />,
                bgColor: 'from-sky-400 to-blue-500'
              },
              { 
                number: '1700+', 
                label: 'LeetCode Rating', 
                color: 'text-gradient-electric',
                icon: <Code className="w-6 h-6" />,
                bgColor: 'from-emerald-400 to-teal-500'
              },
              { 
                number: '10+', 
                label: 'Projects Completed', 
                color: 'text-gradient-gold',
                icon: <Rocket className="w-6 h-6" />,
                bgColor: 'from-purple-400 to-pink-500'
              },
              { 
                number: '5⭐', 
                label: 'HackerRank Gold Badge', 
                color: 'text-gradient-primary',
                icon: <Award className="w-6 h-6" />,
                bgColor: 'from-yellow-400 to-orange-500'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive group relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-gradient-radial from-white/10 to-transparent" />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-premium group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                
                <div className={`text-4xl font-black ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
