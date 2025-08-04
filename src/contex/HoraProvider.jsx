import React, { createContext, useState, useEffect } from 'react';

export const HoraContext = createContext();

export const HoraProvider = ({ children }) => {
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HoraContext.Provider value={hora}>
      {children}
    </HoraContext.Provider>
  );
};
