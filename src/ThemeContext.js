import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import Colors from './constant/Colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');

  useEffect(() => {
    setIsDarkTheme(systemTheme === 'dark');
  }, [systemTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <StatusBar 
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'} 
        backgroundColor={isDarkTheme ? Colors.bgDark : Colors.bgLight}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
