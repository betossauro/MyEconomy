import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 20,
  },
  darkTitle: {
    color: Colors.fontDark,
  },
  lightTitle: {
    color: Colors.fontLight,
  },
});
