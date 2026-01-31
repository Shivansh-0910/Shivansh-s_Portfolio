import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Ensure minimum loading time for better UX
  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      if (!showContent) {
        // If loading hasn't completed naturally, force completion after 4 seconds
        handleLoadingComplete();
      }
    }, 2000);

    return () => clearTimeout(minLoadingTime);
  }, [showContent]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-primary-gradient transition-opacity duration-500 ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`}>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
