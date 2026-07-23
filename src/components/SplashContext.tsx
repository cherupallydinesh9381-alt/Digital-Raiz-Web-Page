import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface SplashContextType {
  isSplashFinished: boolean;
  setSplashFinished: (value: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const SplashProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check session storage so we only show the long splash once per session
  const [isSplashFinished, setIsSplashFinishedState] = useState<boolean>(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash === 'true') {
      setIsSplashFinishedState(true);
    }
  }, []);

  const setSplashFinished = (value: boolean) => {
    if (value) {
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
    setIsSplashFinishedState(value);
  };

  return (
    <SplashContext.Provider value={{ isSplashFinished, setSplashFinished }}>
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
};
