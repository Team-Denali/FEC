import React, { createContext, useState, useEffect } from 'react';

export const BodyContext = createContext();

export const BodyProvider = ({ children }) => {
  const [body1, setBody1] = useState(null);

  useEffect(() => {
    setBody1(document.body);
  }, []);
  return (
    <BodyContext.Provider value={{ body1, setBody1 }}>
      {children}
    </BodyContext.Provider>
  );
};