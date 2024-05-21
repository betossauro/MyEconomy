import { StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    alignSelf: "stretch",
    paddingStart: "10%",
  },
  
  buttons: {
    width: "80%",
    gap: 6,
    alignItems: "center",
    paddingBottom: 20,
  },
  darkLabel: {
    color: Colors.fontDark,
  },
  lightLabel: {
    color: Colors.fontLight,
  },
});
