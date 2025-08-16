import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, Calendar, MapPin, Award, BookOpen, Star, 
  Trophy, Target, CheckCircle, Sparkles, TrendingUp, Users,
  Clock, Globe, Brain, Zap, Medal, School, Building
} from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      institution: 'ABES Engineering College',
      location: 'Ghaziabad',
      degree: 'B.Tech in Computer Science',
      period: 'Nov 2022 – July 2026',
      gpa: '8.1/10.0',
      type: 'Bachelor\'s Degree',
      status: 'Current',
      coursework: [
        'Computer Science',
        'Data Structures and Algorithms',
        'Operating System',
        'Compiler Design',
        'Computer Networking'
      ],
      achievements: [
        'Consistent Academic Performance',
        'Active in Technical Projects',
        'Competitive Programming Focus'
      ],
      icon: <Building className="w-8 h-8" />,
      color: 'from-emerald-400 to-teal-600',
      glow: 'emerald-glow',
      year: '2022-2026'
    },
    {
      institution: 'St.Thomas Sr. Sec. School',
      location: 'Mainpuri',
      degree: 'Senior Secondary Education',
      period: '2020 – 2022',
      scores: [
        { level: 'Senior Secondary (ISC Board)', score: '82/100', grade: 'First Class' },
        { level: 'Secondary (ICSE Board)', score: '92/100', grade: 'Distinction' }
      ],
      type: 'High School',
      status: 'Completed',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science',
        'English'
      ],
      achievements: [
        'Distinction in Secondary Education',
        'Strong Foundation in Sciences',
        'Computer Science Excellence'
      ],
      icon: <School className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-600',
      glow: 'blue-glow',
      year: '2020-2022'
    }
  ];

  const academicStats = [
    {
      icon: <Trophy className="w-6 h-6" />,
      label: 'Current GPA',
      value: '8.1/10.0',
      description: 'Computer Science Engineering',
      color: 'text-gradient-primary',
      bgColor: 'from-emerald-400 to-teal-500'
    },
    {
      icon: <Medal className="w-6 h-6" />,
      label: 'Secondary Score',
      value: '92/100',
      description: 'ICSE Board - Distinction',
      color: 'text-gradient-electric',
      bgColor: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: 'Senior Secondary',
      value: '82/100',
      description: 'ISC Board - First Class',
      color: 'text-gradient-gold',
      bgColor: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: 'Academic Focus',
      value: 'CS & Tech',
      description: 'Specialized in Computer Science',
      color: 'text-gradient-primary',
      bgColor: 'from-sky-400 to-blue-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1100px] h-[1100px] rounded-full border border-white/5" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-6xl sm:text-7xl font-black text-white mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Education & <span className="text-shimmer">Learning</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My academic journey and educational background in computer science and technology
          </p>
          
          {/* Enhanced Section Accent */}
          <div className={`section-accent-line transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        {/* Academic Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {academicStats.map((stat, index) => (
            <div
              key={index}
              className="glass-premium p-6 rounded-2xl text-center hover-lift card-interactive group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 bg-gradient-radial from-white/10 to-transparent" />
              
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-premium group-hover:scale-110 transition-transform duration-500`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              
              <div className={`text-2xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1 group-hover:text-gradient-primary transition-all duration-300">
                {stat.label}
              </div>
              <div className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass-premium p-6 rounded-2xl gradient-border hover-lift card-interactive group ${edu.glow} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2 + 0.9}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-black text-white group-hover:text-gradient-primary transition-all duration-300">
                      {edu.institution}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gradient-electric mb-2">
                    {edu.degree}
                  </h4>
                  
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA/Scores */}
              {edu.gpa && (
                <div className="glass-premium p-4 rounded-xl text-center mb-4">
                  <div className="text-2xl font-black text-gradient-gold mb-1">{edu.gpa}</div>
                  <div className="text-xs text-slate-400">Current GPA</div>
                </div>
              )}

              {edu.scores && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {edu.scores.map((score, scoreIndex) => (
                    <div key={scoreIndex} className="glass-premium p-3 rounded-xl text-center">
                      <div className="text-lg font-black text-gradient-primary mb-1">{score.score}</div>
                      <div className="text-xs text-slate-400">{score.level.split(' ')[0]}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Subjects */}
              {(edu.coursework || edu.subjects) && (
                <div>
                  <h5 className="font-bold text-white mb-3 text-sm">Key Subjects</h5>
                  <div className="flex flex-wrap gap-2">
                    {(edu.coursework || edu.subjects).slice(0, 4).map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 glass-premium rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                    {(edu.coursework || edu.subjects).length > 4 && (
                      <span className="px-3 py-1 text-xs text-slate-500">
                        +{(edu.coursework || edu.subjects).length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Education;
