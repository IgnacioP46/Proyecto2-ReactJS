import React, { createContext, useContext, useState, useEffect } from 'react';

const HoraContext = createContext();

export const HoraProvider = ({ children }) => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HoraContext.Provider value={hora}>
      {children}
    </HoraContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHora = () => useContext(HoraContext);
