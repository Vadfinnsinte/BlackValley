import { StyleSheet } from "react-native";

const Terms = StyleSheet.create({
  body: {
    // marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 70,
    justifyContent: "center",
    padding: 10,
  },

  container: {
    width: 350,
    gap: 20,
  },
  containerSmall: {
    width: "100%",
    maxWidth: 300,
    gap: 20,
  },
  heading: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
});

export default Terms;
