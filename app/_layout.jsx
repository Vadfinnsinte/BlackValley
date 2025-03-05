import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "./(drawer)/_layout";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
