import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Research from './components/Research';
import Projects from './components/Projects';
import Internship from './components/Internship';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="space-y-12">
          <Profile />
          <Research />
          <Projects />
          <Internship />
        </div>
      </main>
    </div>
  );
}

export default App;