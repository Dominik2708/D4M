'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface HighContrastContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const HighContrastContext = createContext<HighContrastContextType>({
  highContrast: false,
  toggleHighContrast: () => {},
});

export function HighContrastProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('highContrast');
    if (stored === 'true') {
      setHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const next = !prev;
      localStorage.setItem('highContrast', String(next));
      if (next) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
      return next;
    });
  };

  return (
    <HighContrastContext.Provider value={{ highContrast, toggleHighContrast }}>
      {children}
    </HighContrastContext.Provider>
  );
}

export const useHighContrast = () => useContext(HighContrastContext);
