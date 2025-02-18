import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
// import CustomHeader from "../../../components/CustomHeader";
import { navLinks } from "../../../constants/navLinks";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Header from "../../../components/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // headerLeft: () => <DrawerToggleButton />,
        header: () => <Header title="Black Valley" data={navLinks} />,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

        tabBarBackground: TabBarBackground,
        tabBarStyle: { display: "none" },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // headerShown: true,
          // header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="material"
        options={{
          title: "Explore",
          // headerShown: false,
          // header: () => <CustomHeader />,
        }}
      />
    </Tabs>
  );
}
