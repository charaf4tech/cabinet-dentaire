
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors duration-300 relative overflow-hidden group"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative z-10 transition-transform duration-500 ease-in-out">
        {isDarkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-blue-600" />
        )}
      </div>
      <span className="absolute inset-0 transform scale-0 rounded-full bg-muted transition-transform duration-300 group-hover:scale-100" />
    </button>
  );
};

export default ThemeToggle;
