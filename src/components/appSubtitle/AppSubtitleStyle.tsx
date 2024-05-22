import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';
import Sizes from "../../constant/Sizes";

export const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.text,
    justifyContent: "flex-start",
    textAlign: "center",
    paddingBottom: 40,
    paddingLeft: 10
  },
  darkTitle: {
    color: Colors.fontDark,
  },
  lightTitle: {
    color: Colors.fontLight,
  },
});
