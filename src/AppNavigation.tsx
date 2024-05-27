import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from './ThemeContext';
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import Home from "./screens/home/Home";
import Expense from "./screens/expense/Expense";
import Limit from "./screens/limit/Limit";
import Profile from "./screens/profile/Profile";
import Colors from "./constant/Colors";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const { isDarkTheme } = useTheme();

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

export default function AppNavigation() {
  const { isDarkTheme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
          },
          headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
          },
          headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
          headerShadowVisible: false,
          headerLeft: () => false
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
          },
          headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
