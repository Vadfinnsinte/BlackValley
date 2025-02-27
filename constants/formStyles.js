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
  contactInfoConatainer: {
    backgroundColor: "#82BCBD",
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: "center",
  },

  contactText: {
    color: "#000",
    margin: 6,
  },
  productText: {
    color: "#000",
    margin: 6,
    fontSize: 16,
  },
  redText: {
    textAlign: "center",
    color: "#f87171",
    marginBottom: -2,
    marginTop: -2,
  },
});
export const stylesModalForm = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Mörk bakgrund
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "60%", // Bestäm storlek på modalen
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // För Android-skugga
  },
  modalText: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  buttons: {
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "600",
    margin: 12,
  },
});
