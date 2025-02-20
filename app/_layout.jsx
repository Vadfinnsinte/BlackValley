import { Stack } from "expo-router";
import { View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "./(drawer)/_layout";
// import woolBg from "../assets/images/woolImage.jpg";

export default function RootLayout() {
  //   const colorScheme = useColorScheme();
  //   const themeColors = Colors[colorScheme] || Colors.light;
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
