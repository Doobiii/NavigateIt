// NavigationContext.jsx
import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [navigationData, setNavigationData] = useState(null);

  return (
    <NavigationContext.Provider value={{ navigationData, setNavigationData }}>
      {children}
    </NavigationContext.Provider>
  );
};
