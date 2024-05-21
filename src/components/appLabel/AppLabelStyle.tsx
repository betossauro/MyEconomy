import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';

export const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  darkLabel: {
    color: Colors.fontDark,
  },
  lightLabel: {
    color: Colors.fontLight,
  },
});
