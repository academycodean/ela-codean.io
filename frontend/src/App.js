import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { Toaster } from './components/ui/toaster';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CoursePage from './components/CoursePage';
import './App.css';

function AppContent() {
  const { user, loading } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  if (selectedCourse) {
    return (
      <CoursePage 
        course={selectedCourse} 
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <Dashboard onCourseSelect={setSelectedCourse} />
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <AppContent />
            <Toaster />
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;