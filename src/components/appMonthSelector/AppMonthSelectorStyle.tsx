import { StyleSheet } from "react-native";
import Sizes from "../../constant/Sizes";
import Colors from "../../constant/Colors";

export const styles = StyleSheet.create({
  parentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: { 
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
    fontSize: 20,
    height:46,
    paddingHorizontal: 10,
    borderWidth: 1, 
    borderRadius: 8
  },
  text: {
    fontSize: Sizes.text
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