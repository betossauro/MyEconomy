import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./src/screens/signin/Signin";
import Signup from "./src/screens/signup/Signup";
import Home from "./src/screens/home/Home";
import Expense from "./src/screens/expense/Expense";
import Limit from "./src/screens/limit/Limit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: "Signin" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Signup" }}
        />
        <Stack.Screen
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}