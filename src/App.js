import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Research from './components/Research';
import Projects from './components/Projects';
import Internship from './components/Internship';
import GadgetDecorations from './components/GadgetDecorations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative max-w-4xl mx-auto"> {/* コンテナに relative を追加 */}
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
  );
}

export default App;