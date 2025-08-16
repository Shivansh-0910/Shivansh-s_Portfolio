import React, { useState, useEffect } from 'react';
import { Cloud, Code, Rocket, Star } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingSteps = [
    { progress: 20, text: 'Loading portfolio...' },
    { progress: 40, text: 'Preparing components...' },
    { progress: 60, text: 'Optimizing experience...' },
    { progress: 80, text: 'Finalizing details...' },
    { progress: 100, text: 'Welcome!' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 15 + 5, 100);
        
        // Update loading text based on progress
        const currentStep = loadingSteps.find(step => newProgress >= step.progress - 10 && newProgress <= step.progress + 10);
        if (currentStep) {
          setLoadingText(currentStep.text);
        }
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 800);
        }
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2
  }));

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-gradient overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-sky-500/20 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-blue-500/15 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-indigo-500/10 animate-spin-slow" />
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <div className="mb-12 relative">
          <div className="relative inline-block group">
            {/* Main logo circle */}
            <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-glow relative overflow-hidden">
              <Cloud className="w-12 h-12 text-white animate-pulse-slow" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
            </div>
            
            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce-gentle">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full flex items-center justify-center animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <Star className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-4xl font-black text-white mb-2 animate-fade-in-up">
          <span className="text-shimmer">Shivansh Singh</span>
        </h1>
        <p className="text-xl text-slate-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer
        </p>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {loadingText}
            </span>
            <span className="text-sm text-sky-400 font-mono animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Progress bar container */}
          <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div 
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Progress bar shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};

export default LoadingScreen;