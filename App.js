import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from './src/ThemeContext';
import AppNavigation from './src/AppNavigation';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
