import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { useColorScheme } from 'react-native';
import Signin from "./src/screens/signin/Signin";
import Signup from "./src/screens/signup/Signup";
import Home from "./src/screens/home/Home";
import Expense from "./src/screens/expense/Expense";
import Limit from "./src/screens/limit/Limit";
import Profile from "./src/screens/profile/Profile";
import Colors from "./src/constant/Colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: isDarkTheme ? Colors.mainDark : Colors.mainLight,
          },
          tabBarActiveTintColor: isDarkTheme ? Colors.activeDark : Colors.activeLight,
          tabBarInactiveTintColor: isDarkTheme ? Colors.inactiveDark : Colors.inactiveLight,
        }}
      >
        <Tab.Screen 
          name="Inicio" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Despesas" 
          component={Expense} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Limite" 
          component={Limit} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={({ route }) => ({ 
            title: "",
            headerStyle: {
              backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
            },
            headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={({ route }) => ({ 
            title: "",
            headerStyle: {
              backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
            },
            headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
            headerShadowVisible: false,
            headerLeft: () => false
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({ 
            title: "",
            headerStyle: {
              backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
            },
            headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}