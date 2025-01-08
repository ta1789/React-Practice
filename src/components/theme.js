import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('dark');

function ThemeDisplay() {
  const theme = useContext(ThemeContext); // Access the current theme
  return <p>The current theme is: {theme}</p>;
}

function Theme() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}

export default Theme;