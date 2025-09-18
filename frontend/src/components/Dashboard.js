import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { mockCourses } from '../mock';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import TypingAnimation from './TypingAnimation';
import { LogOut, Moon, Sun, Code2, Server, Database, ArrowRight } from 'lucide-react';
import SpringBootProjectDownloader from './SpringBootProjectDownloader';

const iconComponents = {
  Code2,
  Server,
  Database
};

const Dashboard = ({ onCourseSelect }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleCourseClick = (course) => {
    onCourseSelect(course);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Codean Bootcamp
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="hidden sm:inline-flex">
              {user?.role === 'admin' ? 'Administrator' : 'Siswa'}
            </Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
              Halo, {user?.username}!
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="rounded-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <TypingAnimation
              text="Codean Bootcamp"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              speed={150}
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Platform pembelajaran IT terlengkap untuk menjadi developer profesional. 
            Pelajari Frontend, Backend, dan Database dengan materi terkini.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>🎯 Materi Terstruktur</span>
            <span>📊 Tracking Progress</span>
            <span>🌙 Dark Mode</span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => {
            const IconComponent = iconComponents[course.icon];
            
            return (
              <Card 
                key={course.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm overflow-hidden"
                onClick={() => handleCourseClick(course)}
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {course.modules.length} Modul
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Mulai Belajar
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Download Project Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Complete Spring Boot Project
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Download project Spring Boot lengkap dengan CRUD operations, validation, exception handling, dan testing. 
            Siap untuk dipelajari dan dikembangkan lebih lanjut!
          </p>
          <SpringBootProjectDownloader />
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">Jalur Pembelajaran</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-400">Modul Pembelajaran</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Praktis & Aplikatif</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;