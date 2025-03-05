import { StyleSheet } from "react-native";

const Navstyles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 160,
    justifyContent: "center",
  },

  smallbackground: {
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 130,
  },
  logoContainer: {
    alignContent: "center",
    marginBottom: -5,
    flexDirection: "row",
  },
  menuButton: {
    // alignSelf: "start",
    marginBottom: -10,
    justifyContent: "flex-end",
    zIndex: 20,
  },
  smallLogo: {
    width: "100%",
    height: 80,
    // marginTop: 40,
    marginLeft: -40,
  },

  navbar: {
    width: "100%",
    height: 50,
    backgroundColor: "#E8E8E9",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navbarText: {
    fontSize: 25,
    cursor: "pointer",
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: -5,
    paddingVertical: 5,
    zIndex: 10,
  },
  innerDropdown: {
    top: 7,
    borderColor: "black",
    borderWidth: 1,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderTopWidth: 0,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    transform: [{ translateX: -10 }],
    backgroundColor: "#E8E8E9",
    zIndex: 10,
  },
  dropdownText: {
    fontSize: 18,
    paddingVertical: 5,
    color: "#000",
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default Navstyles;
