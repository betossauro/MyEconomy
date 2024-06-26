import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';
import Sizes from "../../constant/Sizes";

export const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.title,
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "flex-start",
    textAlign: "center",
    paddingBottom: 40,
  },
  darkTitle: {
    color: Colors.fontDark,
  },
  lightTitle: {
    color: Colors.fontLight,
  },
});
