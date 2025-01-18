import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Research from './components/Research';
import Projects from './components/Projects';
import Internship from './components/Internship';
import GadgetDecorations from './components/GadgetDecorations';
import InteractiveBackground from './components/InteractiveBackground';
import BouncingShapes from './components/BouncingShapes';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300">
        <div className="z-0">
          <InteractiveBackground />
          <BouncingShapes />
        </div>
        <div className="relative z-10">
          <Header />
          <div className="relative max-w-4xl mx-auto">
            <GadgetDecorations />
            <main className="py-12 px-4 mt-8">
              <div className="space-y-12">
                <Profile />
                <Research />
                <Projects />
                <Internship />
              </div>
            </main>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;