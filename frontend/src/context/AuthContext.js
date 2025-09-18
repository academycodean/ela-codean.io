import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '../mock';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedSession = localStorage.getItem('codean_session');
    if (savedSession) {
      try {
        const sessionData = JSON.parse(savedSession);
        setUser(sessionData);
      } catch (error) {
        localStorage.removeItem('codean_session');
      }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    const foundUser = mockUsers.find(
      u => u.username === username && u.password === password
    );
    
    if (foundUser) {
      const userData = { username: foundUser.username, role: foundUser.role };
      setUser(userData);
      localStorage.setItem('codean_session', JSON.stringify(userData));
      return { success: true };
    }
    
    return { success: false, error: 'Username atau password salah' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('codean_session');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};