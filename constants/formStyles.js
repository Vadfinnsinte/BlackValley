import { StyleSheet } from "react-native";

export const checkboxStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    alignItems: "center",
    margin: 20,
  },
  containerCheck: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    margin: 10,
  },

  imageBackground: {
    flex: 1,
  },
  blueSeperator: {
    flex: 1,
    maxHeight: 40,
    minHeight: 35,
    padding: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    placeSelf: "center",
    backgroundColor: "#000",
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    textAlign: "center",
    color: "#82BCBD",
    fontWeight: "600",
    margin: 12,
  },
});

export const styleCoatForm = StyleSheet.create({
  flexBox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  flexBoxSmall: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
  },
  inputSmall: {
    width: 150,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  bigInput: {
    height: 110,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
  },
  dropDown: {
    // zIndex: 1000,
    position: "relative",
    width: 250,
    height: 40,
    minHeight: 40,
  },
  dropDownSmall: {
    position: "relative",
    width: 150,
    height: 40,
    minHeight: 40,
  },
  // dropDownContainer: {
  //   zIndex: 1000,
  //   position: "absolute",
  //   backgroundColor: "white",
  //   top: 50,
  // },
});
