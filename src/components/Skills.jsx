import React, { useState, useRef, useEffect } from 'react';
import { 
  Star, Zap, Code, Database, Palette, Award, Trophy, Target, 
  Cpu, Globe, Shield, Layers, GitBranch, Server, Smartphone,
  Sparkles, TrendingUp, CheckCircle, Flame
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          setTimeout(() => {
            const intervals = skillCategories.flatMap((category, categoryIndex) =>
              category.skills.map((_, skillIndex) => {
                const globalIndex = categoryIndex * 10 + skillIndex;
                return setTimeout(() => {
                  setAnimatedBars(prev => new Set([...prev, globalIndex]));
                }, globalIndex * 200);
              })
            );
            return () => intervals.forEach(clearTimeout);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Backend Development',
      icon: <Server className="w-7 h-7" />,
      color: 'from-emerald-400 to-teal-600',
      bgGlow: 'emerald-glow',
      skills: [
        { name: 'Java', level: 90, icon: '☕', color: 'text-orange-400' },
        { name: 'Spring Boot', level: 85, icon: '🍃', color: 'text-green-400' },
        { name: 'Spring Framework', level: 80, icon: '🌱', color: 'text-green-300' },
        { name: 'REST APIs', level: 85, icon: '🔗', color: 'text-blue-400' },
        { name: 'Microservices', level: 75, icon: '🏗️', color: 'text-purple-400' },
        { name: 'JPA/Hibernate', level: 80, icon: '💾', color: 'text-indigo-400' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: <Smartphone className="w-7 h-7" />,
      color: 'from-sky-400 to-blue-600',
      bgGlow: 'blue-glow',
      skills: [
        { name: 'React.js', level: 85, icon: '⚛️', color: 'text-cyan-400' },
        { name: 'JavaScript', level: 88, icon: '🟨', color: 'text-yellow-400' },
        { name: 'HTML/CSS', level: 90, icon: '🎨', color: 'text-pink-400' },
        { name: 'Tailwind CSS', level: 80, icon: '💨', color: 'text-teal-400' },
        { name: 'Bootstrap', level: 85, icon: '🅱️', color: 'text-purple-400' },
        { name: 'Responsive Design', level: 85, icon: '📱', color: 'text-blue-400' }
      ]
    },
    {
      category: 'Database & Tools',
      icon: <Database className="w-7 h-7" />,
      color: 'from-purple-400 to-indigo-600',
      bgGlow: 'neon-glow',
      skills: [
        { name: 'MySQL', level: 85, icon: '🐬', color: 'text-blue-400' },
        { name: 'PostgreSQL', level: 80, icon: '🐘', color: 'text-blue-300' },
        { name: 'MongoDB', level: 70, icon: '🍃', color: 'text-green-400' },
        { name: 'Git/GitHub', level: 90, icon: '🐙', color: 'text-gray-300' },
        { name: 'Maven', level: 80, icon: '📦', color: 'text-orange-400' },
        { name: 'Postman', level: 85, icon: '📮', color: 'text-orange-300' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Problem Solver',
      description: '750+ DSA Problems',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      glow: 'gold-glow'
    },
    {
      title: 'LeetCode Expert',
      description: '1700+ Rating',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500',
      glow: 'emerald-glow'
    },
    {
      title: 'HackerRank Star',
      description: '5⭐ Gold Badge',
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-400 to-indigo-500',
      glow: 'blue-glow'
    },
    {
      title: 'Full-Stack Dev',
      description: '10+ Projects',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500',
      glow: 'neon-glow'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary-gradient relative overflow-hidden">
      {/* section accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-6xl sm:text-7xl font-black text-white mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills & <span className="text-shimmer">Expertise</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Proficient in modern technologies and frameworks for full-stack development
          </p>
          
          {/* Enhanced Section Accent */}
          <div className={`section-accent-line transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        {/* Achievement Badges */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-premium p-6 rounded-2xl text-center hover-lift card-interactive group relative overflow-hidden ${achievement.glow}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-premium`}>
                <div className="text-white">
                  {achievement.icon}
                </div>
              </div>
              <h4 className="font-bold text-white mb-1 group-hover:text-gradient-primary transition-all duration-300">
                {achievement.title}
              </h4>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`relative glass-premium p-8 rounded-3xl gradient-border hover-lift card-interactive overflow-hidden group ${category.bgGlow} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2 + 0.9}s` }}
            >
              {/* Enhanced Background Effects */}
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-white/3 to-transparent blur-2xl" />
              
              {/* Enhanced Category Header */}
              <div className="flex items-center mb-10 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mr-5 shadow-premium group-hover:scale-110 transition-all duration-500 ${category.bgGlow}`}>
                  <div className="text-white group-hover:animate-pulse">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-gradient-primary transition-all duration-300">
                    {category.category}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span className="text-sm text-slate-400">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Skills List */}
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 10 + skillIndex;
                  const isAnimated = animatedBars.has(globalIndex);
                  
                  return (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-slate-200 flex items-center gap-3 group-hover/skill:text-white transition-colors duration-300">
                          <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                          <span>{skill.name}</span>
                          {skill.level >= 85 && (
                            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
                          )}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-400 font-bold">
                            {skill.level}%
                          </span>
                          {skill.level >= 90 && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-800/60 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-white/5">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden shadow-inner`}
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%'
                            }}
                          >
                            {/* Progress bar shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                            
                            {/* Percentage display */}
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-white/90">
                              {isAnimated ? `${skill.level}%` : ''}
                            </span>
                          </div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div className="flex justify-between text-xs text-slate-500 mt-1">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Category Stats */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-slate-400">
                    Avg: {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${
                        i < Math.floor(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length / 20) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-slate-600'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Technology Stack */}
        <div className={`mt-24 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">
              Technology <span className="text-gradient-primary">Stack</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'Java', icon: '☕', color: 'from-orange-400 to-red-500' },
              { name: 'Spring Boot', icon: '🍃', color: 'from-green-400 to-emerald-500' },
              { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
              { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
              { name: 'MySQL', icon: '🐬', color: 'from-blue-400 to-indigo-500' },
              { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-300 to-blue-600' },
              { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
              { name: 'Git', icon: '🐙', color: 'from-gray-400 to-gray-600' },
              { name: 'Maven', icon: '📦', color: 'from-orange-400 to-red-500' },
              { name: 'HTML/CSS', icon: '🎨', color: 'from-pink-400 to-purple-500' },
              { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-cyan-500' },
              { name: 'REST APIs', icon: '🔗', color: 'from-blue-400 to-indigo-500' },
              { name: 'Microservices', icon: '🏗️', color: 'from-purple-400 to-pink-500' },
              { name: 'JPA/Hibernate', icon: '💾', color: 'from-indigo-400 to-purple-500' },
              { name: 'Postman', icon: '📮', color: 'from-orange-300 to-orange-500' }
            ].map((tech, index) => (
              <div
                key={index}
                className="glass-premium p-4 rounded-2xl text-center hover-lift magnetic-subtle group relative overflow-hidden card-interactive"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                  <span className="text-lg">{tech.icon}</span>
                </div>
                <span className="text-sm font-semibold text-white group-hover:text-gradient-primary transition-all duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-20 glass-premium p-8 rounded-3xl gradient-border text-center transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Award className="w-8 h-8 text-yellow-400" />
            <h4 className="text-2xl font-black text-white">
              Skill <span className="text-gradient-gold">Highlights</span>
            </h4>
            <Award className="w-8 h-8 text-yellow-400" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-gradient-primary mb-2">90%+</div>
              <div className="text-slate-300 font-semibold">Average Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-gradient-electric mb-2">15+</div>
              <div className="text-slate-300 font-semibold">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-gradient-gold mb-2">3+</div>
              <div className="text-slate-300 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
