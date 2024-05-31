import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors';

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputWOBorder: {
    width: "100%",
    paddingVertical: 4,
    paddingHorizontal: 4,
    fontSize: 16,
  },
  darkInput: {
    backgroundColor: Colors.bgInputDark,
    borderColor: Colors.fontDark,
    color: Colors.fontDark,
  },
  lightInput: {
    backgroundColor: Colors.bgInputLight,
    borderColor: Colors.fontLight,
    color: Colors.fontLight,
  },
});
