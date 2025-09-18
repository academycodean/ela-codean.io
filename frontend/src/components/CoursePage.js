import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Checkbox } from './ui/checkbox';
import { 
  ArrowLeft, 
  LogOut, 
  Moon, 
  Sun, 
  Search, 
  Menu, 
  X, 
  ChevronUp, 
  ChevronDown,
  BookOpen,
  CheckCircle2,
  Clock
} from 'lucide-react';
import CodeDownloader from './CodeDownloader';

const CoursePage = ({ course, onBack }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { updateProgress, getModuleProgress, getCourseProgress } = useProgress();
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedModules, setExpandedModules] = useState({});
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    if (course?.modules?.length > 0) {
      setSelectedModule(course.modules[0]);
      // Expand first module by default
      setExpandedModules({ [course.modules[0].id]: true });
    }
  }, [course]);

  const filteredModules = course?.modules?.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const toggleAllModules = () => {
    const newState = !allExpanded;
    const newExpandedState = {};
    course.modules.forEach(module => {
      newExpandedState[module.id] = newState;
    });
    setExpandedModules(newExpandedState);
    setAllExpanded(newState);
  };

  const markModuleComplete = (moduleId, completed) => {
    updateProgress(moduleId, { 
      completed,
      timeSpent: getModuleProgress(moduleId).timeSpent + (completed ? 30 : 0)
    });
  };

  const courseProgress = getCourseProgress(course?.modules || []);

  const iconComponents = {
    'Code2': require('lucide-react').Code2,
    'Server': require('lucide-react').Server,
    'Database': require('lucide-react').Database
  };

  const IconComponent = iconComponents[course?.icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-3">
              {IconComponent && (
                <div className={`p-2 rounded-lg bg-gradient-to-r ${course.color}`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
              )}
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  {course?.title}
                </h1>
                <div className="flex items-center space-x-2">
                  <Progress value={courseProgress} className="w-20 h-2" />
                  <span className="text-xs text-gray-500">{courseProgress}%</span>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden rounded-full"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAllModules}
                className="text-xs"
              >
                {allExpanded ? 'Collapse All' : 'Expand All'}
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="rounded-full text-red-600 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out
        `}>
          <div className="h-full flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari materi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Modules List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  Daftar Modul ({filteredModules.length})
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleAllModules}
                  className="text-xs lg:hidden"
                >
                  {allExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </Button>
              </div>

              {filteredModules.map((module) => {
                const moduleProgress = getModuleProgress(module.id);
                const isExpanded = expandedModules[module.id];
                const isSelected = selectedModule?.id === module.id;
                
                return (
                  <Card 
                    key={module.id}
                    className={`
                      cursor-pointer transition-all duration-200 border
                      ${isSelected 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }
                    `}
                  >
                    <CardHeader 
                      className="p-4 pb-2"
                      onClick={() => {
                        setSelectedModule(module);
                        setSidebarOpen(false);
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {module.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2">
                            {moduleProgress.completed ? (
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                            ) : (
                              <BookOpen className="h-3 w-3 text-gray-400" />
                            )}
                            <span className="text-xs text-gray-500">
                              {moduleProgress.timeSpent}m
                            </span>
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleModule(module.id);
                          }}
                          className="ml-2 p-1 h-6 w-6"
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {isExpanded && (
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`complete-${module.id}`}
                            checked={moduleProgress.completed}
                            onCheckedChange={(checked) => markModuleComplete(module.id, checked)}
                          />
                          <label 
                            htmlFor={`complete-${module.id}`}
                            className="text-xs text-gray-600 dark:text-gray-400 cursor-pointer"
                          >
                            Tandai selesai
                          </label>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8 max-w-4xl">
            {selectedModule ? (
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedModule.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <CodeDownloader 
                        moduleId={selectedModule.id}
                        moduleTitle={selectedModule.title}
                        content={selectedModule.content}
                      />
                      {getModuleProgress(selectedModule.id).completed && (
                        <Badge variant="default" className="bg-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Selesai
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {getModuleProgress(selectedModule.id).timeSpent}m
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div 
                    className="prose prose-blue dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedModule.content }}
                  />
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={`complete-main-${selectedModule.id}`}
                        checked={getModuleProgress(selectedModule.id).completed}
                        onCheckedChange={(checked) => markModuleComplete(selectedModule.id, checked)}
                      />
                      <label 
                        htmlFor={`complete-main-${selectedModule.id}`}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                      >
                        Tandai modul ini sebagai selesai
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Pilih Modul untuk Mulai Belajar
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pilih modul dari sidebar untuk mulai mempelajari materi.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CoursePage;