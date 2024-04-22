import React, { createContext, useState, useMemo, useCallback } from "react";

export const initialState = { theme: "light", favorites: [] };

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const toggleTheme = useCallback(() => {
    setState((prev) => ({ ...prev, theme: prev.theme === "light" ? "dark" : "light" }));
  }, []);

  const addToFavorites = useCallback((equipment) => {
    setState((prev) => ({ ...prev, favorites: [...prev.favorites, equipment] }));
  }, []);

  const contextValue = useMemo(() => ({ 
    theme: state.theme, 
    favorites: state.favorites, 
    toggleTheme, 
    addToFavorites 
  }), [state, toggleTheme, addToFavorites]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};


