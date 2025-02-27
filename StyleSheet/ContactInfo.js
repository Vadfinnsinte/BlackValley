import { StyleSheet } from "react-native";

export const contact = StyleSheet.create({
  Body: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    flex: 1,
    flexWrap: "wrap",
  },
  Container: {
    gap: 40,
    justifyContent: "center",
  },
  SmallContainer: {
    gap: 40,
    padding: 10,
  },

  HedarText: {
    fontSize: 23,
    fontWeight: "500",
  },

  SmallText: {
    fontSize: 16,
  },
});
