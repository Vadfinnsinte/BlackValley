import { Tabs } from "expo-router";
import React from "react";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { navLinks } from "../../../constants/navLinks";
import Header from "../../../components/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        header: () => <Header title="Black Valley" data={navLinks} />,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarBackground: TabBarBackground,
        tabBarStyle: { display: "none" },
      }}>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      /> */}
    </Tabs>
  );
}
