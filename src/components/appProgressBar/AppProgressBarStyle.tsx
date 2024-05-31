import { StyleSheet } from "react-native";
import Colors from "../../constant/Colors";
import Sizes from "../../constant/Sizes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20
  },
  text: {
    fontSize: Sizes.text,
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    paddingBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 20
  },
  emoji: {
    paddingTop: 80,
    fontSize: 80,
    textAlign: "center",
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
