import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  labelContainer: {
    alignSelf: "stretch",
    paddingStart: "10%",
  },
  label: {
    color: "black",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  buttons: {
    width: "80%",
    gap: 6,
    alignItems: "center",
    paddingBottom: 20,
  },
  margin: {
    marginTop: 20,
  },
  itemContainer: {
    marginTop: 16,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    padding: 8,
  },
  iconButtons: {
    flexDirection: 'row',
    padding: 4,
  },
  iconButton: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 8,
  },
});
