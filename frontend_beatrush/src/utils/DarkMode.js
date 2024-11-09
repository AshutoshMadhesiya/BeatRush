// src/utils/DarkMode.js
import { useState, useEffect } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if dark mode is saved in local storage
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Toggle dark mode and save preference in local storage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', JSON.stringify(newMode));
      return newMode;
    });
  };

  // Apply the appropriate class to the body element
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default DarkMode;
