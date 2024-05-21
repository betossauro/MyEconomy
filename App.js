import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { useColorScheme } from 'react-native';
import Signin from "./src/screens/signin/Signin";
import Signup from "./src/screens/signup/Signup";
import Home from "./src/screens/home/Home";
import Expense from "./src/screens/expense/Expense";
import Limit from "./src/screens/limit/Limit";
import Colors from "./src/constant/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

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
            title: "Cadastro",
            headerStyle: {
              backgroundColor: isDarkTheme ? Colors.bgDark : Colors.bgLight,
            },
            headerTintColor: isDarkTheme ? Colors.fontDark : Colors.fontLight,
            headerShadowVisible: false,
          })}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Expense"
          component={Expense}
          options={{ title: "Expense" }}
        />
        <Stack.Screen
          name="Limit"
          component={Limit}
          options={{ title: "Limit" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}