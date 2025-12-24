/**
 * THEME CONTEXT
 * 
 * Manages light/dark mode theme for the entire application.
 * Stores user preference in localStorage and provides theme toggle functionality.
 * 
 * USAGE:
 * Import useTheme hook in any component:
 * const { theme, toggleTheme } = useTheme();
 */

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Get initial theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Apply theme class to document root on mount and when theme changes
  useEffect(() => {
    // Set initial theme on mount
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    // Update theme when it changes
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

