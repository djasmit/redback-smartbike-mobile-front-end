// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", email: "", id: "" }); // User state will store logged-in user info

  // Mocked logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
