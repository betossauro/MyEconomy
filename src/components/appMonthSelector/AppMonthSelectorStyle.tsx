import { StyleSheet } from "react-native";
import Sizes from "../../constant/Sizes";

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
  }
});