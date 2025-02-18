/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#82BCBD";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#C0C0C0",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    overlay: {
      flex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
    hamburgerIcon: "#11181C",
    backgorundActive: "#515151",
    hamburgerTextActive: "#fff",
    hamburgerText: "#000",
    detail: "#82BCBD"
  },
  dark: {
    text: "#ECEDEE",
    background: "#515151",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    hamburgerIcon: "#11181C",
    backgorundActive: "#C0C0C0",
    hamburgerText: "#fff",
    hamburgerTextActive: "#fff",
    detail: "#82BCBD"
  },
};
