'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Props {
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
}

const AppContext = createContext<Props | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const closeCart = () => setIsCartOpen(false);

  return <AppContext.Provider value={{ isCartOpen, toggleCart, closeCart }}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('App must be used within a AppProvider');
  }
  return context;
};
