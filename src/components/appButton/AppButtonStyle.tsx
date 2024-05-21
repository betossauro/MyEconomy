import { StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginTop: 40
  },
  text: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  darkButton: {
    backgroundColor: Colors.mainDark,
    borderColor: Colors.mainDark,
    color: Colors.fontLight
  },
  lightButton: {
    backgroundColor: Colors.mainLight,
    borderColor: Colors.mainLight,
    color: Colors.fontDark
  },
});
