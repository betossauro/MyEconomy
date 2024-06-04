import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';
import Sizes from "../../constant/Sizes";

export const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: Sizes.label
  },
  darkLabel: {
    color: Colors.fontDark,
  },
  lightLabel: {
    color: Colors.fontLight,
  },
  labelNoBold: {
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
    fontSize: Sizes.text
  },
});
