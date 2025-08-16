import React, { useState, useRef, useEffect } from 'react';
import { 
  ExternalLink, Github, Star, Zap, Users, Award, TrendingUp, 
  X, Play, Code2, Database, Smartphone, Globe,
  Calendar, Eye, Heart, Sparkles, Rocket, Shield
} from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);
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

  const projects = [
    {
      id: 1,
      title: 'Track2Crack',
      description: 'Track2Crack is a platform designed to help users systematically prepare for coding interviews by tracking their problem-solving progress and mastering key algorithms and data structures.',
      longDescription: 'A comprehensive interview preparation platform that revolutionizes how developers prepare for coding interviews. Features personalized learning paths, progress tracking, and an extensive resource library with 750+ curated problems.',
      image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
      category: 'Full-Stack',
      featured: true,
      githubUrl: 'https://github.com/Shivansh-0910/Track2Crackk',
      liveUrl: 'https://github.com/Shivansh-0910/Track2Crackk',
      features: ['Personalized Roadmaps', 'Progress Tracking', 'Resource Library', 'Auth & Profiles'],
      stats: { users: '1k+', performance: '99.7%', rating: 4.9, views: '5.2k' },
      date: '2024',
      status: 'Live',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-emerald-400 to-teal-600'
    },
    {
      id: 2,
      title: 'SilverLink Banking App',
      description: 'Comprehensive banking application with secure transaction processing, account management, and real-time balance updates. Built with modern security practices.',
      longDescription: 'Enterprise-grade banking solution with advanced security features, real-time transaction processing, and comprehensive account management. Implements industry-standard security protocols and modern UI/UX design.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Spring Security', 'JWT', 'Material-UI'],
      category: 'Full-Stack',
      featured: true,
      githubUrl: 'https://github.com/Shivansh-0910/Silverlink-Banking-App',
      liveUrl: 'https://github.com/Shivansh-0910/Silverlink-Banking-App',
      features: ['Secure Transactions', 'Account Management', 'Real-time Updates', 'Transaction History'],
      stats: { users: '300+', performance: '99.8%', rating: 4.9, views: '3.1k' },
      date: '2024',
      status: 'Live',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 3,
      title: 'Hospital Management System',
      description: 'Complete hospital management solution with patient records, appointment scheduling, doctor management, and billing system. Streamlines healthcare operations.',
      longDescription: 'Comprehensive healthcare management platform designed to streamline hospital operations. Features patient record management, appointment scheduling, doctor profiles, and integrated billing system with role-based access control.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React', 'MySQL', 'JPA/Hibernate', 'Spring Security', 'Bootstrap'],
      category: 'Full-Stack',
      featured: false,
      githubUrl: 'https://github.com/Shivansh-0910/Hospital_M_System',
      liveUrl: 'https://github.com/Shivansh-0910/Hospital_M_System',
      features: ['Patient Records', 'Appointment Scheduling', 'Doctor Management', 'Billing System'],
      stats: { users: '200+', performance: '99.3%', rating: 4.7, views: '2.8k' },
      date: '2023',
      status: 'Live',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-600'
    }
  ];



  return (
    <section id="projects" className="py-20 bg-secondary-gradient relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-6xl sm:text-7xl font-black text-white mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured <span className="text-shimmer">Projects</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Showcasing my expertise in full-stack development and modern web technologies
          </p>
          
          {/* Enhanced Section Accent */}
          <div className={`section-accent-line transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>



        {/* Projects Statistics */}
        <div className={`grid grid-cols-2 gap-4 mb-12 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-premium p-6 rounded-2xl text-center hover-lift group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-black text-gradient-primary mb-1">
              10+
            </div>
            <div className="text-sm text-slate-400">Projects Built</div>
          </div>
          
          <div className="glass-premium p-6 rounded-2xl text-center hover-lift group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-black text-gradient-primary mb-1">
              4.8
            </div>
            <div className="text-sm text-slate-400">Avg Rating</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass-premium rounded-3xl overflow-hidden gradient-border hover-lift card-interactive shine-on-hover ${
                project.featured ? 'ring-2 ring-sky-400/30' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.2 + 0.9}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                setHoveredProject(null);
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
              }}
            >
              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}/60 group-hover:${project.color}/40 transition-all duration-500`} />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="glass-premium px-4 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2 shadow-premium">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Enhanced Stats */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <div className="glass-premium px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {project.stats.views}
                  </div>
                  <div className="glass-premium px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.stats.users}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-12 h-12 glass-premium rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 magnetic shadow-premium group/btn"
                  >
                    <Eye size={18} className="group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-premium rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 magnetic shadow-premium group/btn"
                  >
                    <Github size={18} className="group-hover/btn:scale-110 transition-transform duration-200" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-premium rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 magnetic shadow-premium group/btn"
                  >
                    <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform duration-200" />
                  </a>
                </div>

                {/* Enhanced Rating & Status */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="glass-premium px-3 py-1 rounded-full flex items-center gap-1 shadow-premium">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-bold">{project.stats.rating}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Live' ? 'bg-green-500/80 text-white' : 'bg-orange-500/80 text-white'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-3xl flex items-center justify-center`}>
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-all duration-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced Features Grid */}
                <div className="mb-6">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket size={16} className="text-sky-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-slate-300 flex items-center gap-3 glass-premium px-4 py-2 rounded-xl hover-lift group/feature"
                      >
                        <div className="w-2 h-2 bg-sky-400 rounded-full group-hover/feature:animate-pulse" />
                        <span className="group-hover/feature:text-white transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <div className="text-xs text-slate-500 px-4 py-1">
                        +{project.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Technology Stack */}
                <div className="mb-6">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Code2 size={16} className="text-purple-400" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs rounded-full font-semibold hover:scale-105 transition-transform duration-200 magnetic-subtle`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Links */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 font-semibold group/link text-sm"
                    >
                      <Github size={16} className="group-hover/link:animate-pulse" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors duration-200 font-semibold group/link text-sm"
                    >
                      <ExternalLink size={16} className="group-hover/link:animate-pulse" />
                      Live Demo
                    </a>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                  >
                    View Details →
                  </button>
                </div>
              </div>

              {/* Enhanced Hover Effect Overlay */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none rounded-3xl" />
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-premium p-8 rounded-3xl gradient-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-4">
              Ready to <span className="text-gradient-primary">Collaborate?</span>
            </h3>
            <p className="text-slate-300 mb-6">
              Let's create something extraordinary together. I'm always excited to work on innovative projects.
            </p>
            <a
              href="#contact"
              className="btn-premium text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-premium magnetic inline-flex items-center gap-3 group"
            >
              <Zap className="w-5 h-5 group-hover:animate-bounce-gentle" />
              Let's Build Something Amazing
            </a>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="glass-premium rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto gradient-border animate-scale-in">
              {/* Modal Header */}
              <div className="relative p-8 border-b border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 glass-premium rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 magnetic group"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
                
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedProject.color} rounded-3xl flex items-center justify-center shadow-premium`}>
                    {selectedProject.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color}/40`} />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-premium p-4 rounded-2xl text-center">
                        <div className="text-2xl font-black text-gradient-primary mb-1">
                          {selectedProject.stats.users}
                        </div>
                        <div className="text-sm text-slate-400">Users</div>
                      </div>
                      <div className="glass-premium p-4 rounded-2xl text-center">
                        <div className="text-2xl font-black text-gradient-electric mb-1">
                          {selectedProject.stats.rating}
                        </div>
                        <div className="text-sm text-slate-400">Rating</div>
                      </div>
                      <div className="glass-premium p-4 rounded-2xl text-center">
                        <div className="text-2xl font-black text-gradient-gold mb-1">
                          {selectedProject.stats.performance}
                        </div>
                        <div className="text-sm text-slate-400">Uptime</div>
                      </div>
                      <div className="glass-premium p-4 rounded-2xl text-center">
                        <div className="text-2xl font-black text-gradient-primary mb-1">
                          {selectedProject.stats.views}
                        </div>
                        <div className="text-sm text-slate-400">Views</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary text-white px-6 py-3 rounded-2xl font-semibold text-center flex items-center justify-center gap-2 group"
                      >
                        <Github size={18} className="group-hover:animate-pulse" />
                        View Code
                      </a>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-premium text-white px-6 py-3 rounded-2xl font-semibold text-center flex items-center justify-center gap-2 group"
                      >
                        <ExternalLink size={18} className="group-hover:animate-bounce-gentle" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                    <Rocket className="text-sky-400" />
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="glass-premium p-4 rounded-2xl flex items-center gap-3 hover-lift group"
                      >
                        <div className="w-2 h-2 bg-sky-400 rounded-full group-hover:animate-pulse" />
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mt-8">
                  <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                    <Code2 className="text-purple-400" />
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${selectedProject.color} text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 magnetic-subtle`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
