'use client';

import { useEffect, useState } from 'react';
import { Contrast } from 'lucide-react';
import { Button } from './button';

export function ContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Check if high contrast mode is saved in localStorage
    const saved = localStorage.getItem('high-contrast');
    if (saved === 'true') {
      setHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('high-contrast', 'false');
    }
  };

  return (
    <Button
      variant={highContrast ? 'default' : 'outline'}
      size="icon"
      onClick={toggleContrast}
      aria-label={highContrast ? 'Normalen Kontrast aktivieren' : 'Hohen Kontrast aktivieren'}
      title={highContrast ? 'Normalen Kontrast aktivieren' : 'Hohen Kontrast aktivieren'}
      aria-pressed={highContrast}
      className={highContrast ? 'bg-accent hover:bg-accent/90' : ''}
      style={
        highContrast
          ? { backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }
          : undefined
      }
    >
      <Contrast className="h-5 w-5" />
      <span className="sr-only">
        {highContrast ? 'Normalen Kontrast aktivieren' : 'Hohen Kontrast aktivieren'}
      </span>
    </Button>
  );
}
