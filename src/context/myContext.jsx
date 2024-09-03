// src/contexts/MyContext.jsx
import React, { createContext, useState } from "react";

// Create a Context
const MyContext = createContext();

// Create a Provider component
export const MyProvider = ({ children }) => {
  const [lang, setLang] = useState("me");

  return (
    <MyContext.Provider value={{ lang, setLang }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
