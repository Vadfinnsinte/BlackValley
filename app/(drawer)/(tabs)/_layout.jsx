import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import CustomHeader from "../../../components/CustomHeader";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
  
    <Tabs
      screenOptions={{
        header: () => <CustomHeader title="Black Valley" />,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

        tabBarBackground: TabBarBackground,
        tabBarStyle: { display: "none" },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
       
        }}
      />
      <Tabs.Screen
        name="material"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
