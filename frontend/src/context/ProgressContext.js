import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockProgress } from '../mock';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(mockProgress);

  useEffect(() => {
    const savedProgress = localStorage.getItem('codean_progress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  const updateProgress = (moduleId, data) => {
    const newProgress = {
      ...progress,
      [moduleId]: {
        ...progress[moduleId],
        ...data
      }
    };
    setProgress(newProgress);
    localStorage.setItem('codean_progress', JSON.stringify(newProgress));
  };

  const getModuleProgress = (moduleId) => {
    return progress[moduleId] || { completed: false, timeSpent: 0 };
  };

  const getCourseProgress = (courseModules) => {
    const totalModules = courseModules.length;
    const completedModules = courseModules.filter(module => 
      progress[module.id]?.completed
    ).length;
    
    return Math.round((completedModules / totalModules) * 100);
  };

  const value = {
    progress,
    updateProgress,
    getModuleProgress,
    getCourseProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};