
import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleUsers } from '@/data/users.js';

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
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const foundUser = sampleUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const register = (userData) => {
    const existingUser = sampleUsers.find(u => u.email === userData.email);
    
    if (existingUser) {
      return { success: false, error: 'Email already registered' };
    }

    const newUser = {
      id: `user-${Date.now()}`,
      email: userData.email,
      name: userData.name,
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150`,
      role: 'customer',
      createdAt: new Date().toISOString().split('T')[0],
      addresses: []
    };

    sampleUsers.push({ ...newUser, password: userData.password });
    
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const addAddress = (address) => {
    const newAddress = {
      id: `addr-${Date.now()}`,
      ...address,
      isDefault: user.addresses.length === 0
    };

    const updatedUser = {
      ...user,
      addresses: [...user.addresses, newAddress]
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const updateAddress = (addressId, updates) => {
    const updatedUser = {
      ...user,
      addresses: user.addresses.map(addr =>
        addr.id === addressId ? { ...addr, ...updates } : addr
      )
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const deleteAddress = (addressId) => {
    const updatedUser = {
      ...user,
      addresses: user.addresses.filter(addr => addr.id !== addressId)
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
