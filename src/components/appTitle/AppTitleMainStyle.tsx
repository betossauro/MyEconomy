import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';
import Sizes from "../../constant/Sizes";

export const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.subtitle,
    fontWeight: "bold",
    justifyContent: "flex-start",
    textAlign: "center",
    paddingBottom: 8,
  },
  darkTitle: {
    color: Colors.fontDark,
  },
  lightTitle: {
    color: Colors.fontLight,
  },
});
