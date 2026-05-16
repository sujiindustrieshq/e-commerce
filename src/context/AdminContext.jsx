
import React, { createContext, useContext, useState } from 'react';
import { books as initialBooks } from '@/data/books.js';
import { sampleUsers } from '@/data/users.js';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState(initialBooks);
  const [users, setUsers] = useState(sampleUsers);

  const addProduct = (product) => {
    const newProduct = {
      id: `book-${Date.now()}`,
      ...product,
      createdAt: new Date().toISOString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (productId, updates) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === productId ? { ...product, ...updates } : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

  const updateUser = (userId, updates) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId ? { ...user, ...updates } : user
      )
    );
  };

  const deleteUser = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const value = {
    products,
    users,
    addProduct,
    updateProduct,
    deleteProduct,
    updateUser,
    deleteUser
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
