/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // サイバーパンクカラーパレット
        cyber: {
          primary: '#00ff41',
          secondary: '#00ccaa',
          muted: '#008866',
          dark: '#004433',
          cyan: '#00ffff',
          pink: '#ff0088',
          orange: '#ff4400',
          purple: '#8800ff',
          blue: '#0088ff',
          yellow: '#ffff00',
        },
        dark: {
          primary: '#000000',
          secondary: '#1a1a2e',
          accent: '#16213e',
          muted: '#333333',
        },
        // グラデーション用カラー
        neon: {
          green: '#39ff14',
          cyan: '#00ffff',
          pink: '#ff073a',
          purple: '#bf00ff',
          blue: '#0080ff',
          orange: '#ff8000',
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'mono-cyber': ['Share Tech Mono', 'monospace'],
        'sans': ['Share Tech Mono', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'cyber-xs': ['0.7rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'cyber-sm': ['0.8rem', { lineHeight: '1.2rem', letterSpacing: '0.05em' }],
        'cyber-base': ['0.9rem', { lineHeight: '1.4rem', letterSpacing: '0.05em' }],
        'cyber-lg': ['1.1rem', { lineHeight: '1.6rem', letterSpacing: '0.05em' }],
        'cyber-xl': ['1.3rem', { lineHeight: '1.8rem', letterSpacing: '0.1em' }],
        'cyber-2xl': ['1.6rem', { lineHeight: '2rem', letterSpacing: '0.1em' }],
        'cyber-3xl': ['2rem', { lineHeight: '2.4rem', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'data-flow': 'data-flow 3s linear infinite',
        'hologram-scan': 'hologram-scan 3s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'energy-pulse': 'energy-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'cyber-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 20px currentColor, 0 0 30px currentColor',
            transform: 'scale(1.05)',
          },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
        'hologram-scan': {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        },
        'neon-glow': {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '100%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan-line': {
          '0%': { top: '0', opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'energy-pulse': {
          '0%': { 
            transform: 'scale(0.8)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'scale(1.2)', 
            opacity: '0.5' 
          },
          '100%': { 
            transform: 'scale(1.6)', 
            opacity: '0' 
          },
        },
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 65, 0.3)',
        'cyber-lg': '0 0 30px rgba(0, 255, 65, 0.4)',
        'cyber-xl': '0 0 40px rgba(0, 255, 65, 0.5)',
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 136, 0.5)',
        'neon-orange': '0 0 20px rgba(255, 68, 0, 0.5)',
        'inset-cyber': 'inset 0 2px 4px rgba(0, 255, 65, 0.1)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 255, 255, 0.1) 50%, rgba(255, 0, 136, 0.1) 100%)',
        'matrix-gradient': 'linear-gradient(180deg, rgba(0, 255, 65, 0.2) 0%, transparent 100%)',
        'hologram-gradient': 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
        'neon-grid': `
          linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
        `,
      },
      backdropBlur: {
        'cyber': '12px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '100': '100',
      },
      letterSpacing: {
        'cyber': '0.1em',
        'cyber-wide': '0.2em',
      },
      lineHeight: {
        'cyber': '1.6',
        'cyber-tight': '1.3',
      },
      borderRadius: {
        'cyber': '0.375rem',
        'cyber-lg': '0.5rem',
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 10px currentColor',
        },
        '.text-glow-strong': {
          textShadow: '0 0 20px currentColor, 0 0 30px currentColor',
        },
        '.border-glow': {
          borderColor: 'rgba(0, 255, 65, 0.3)',
          boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
        },
        '.border-glow-active': {
          borderColor: 'rgba(0, 255, 255, 0.6)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
        },
        '.bg-cyber-panel': {
          background: 'rgba(26, 26, 46, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 65, 0.3)',
        },
        '.cursor-cyber': {
          cursor: 'none',
        },
        '.select-cyber': {
          userSelect: 'none',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
