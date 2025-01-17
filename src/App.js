// App.js
import React from 'react';
import Header from './components/Header.jsx';
import Research from './components/Research.jsx';
import Projects from './components/Projects.jsx';
import Internship from './components/Internship.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="space-y-12">
          <Research />
          <Projects />
          <Internship />
        </div>
      </main>
    </div>
  );
}

export default App;