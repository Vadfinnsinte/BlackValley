import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

// import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import CustomHeaderEng from "../../../components/CustomHeaderEng";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: { display: "none" },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
          header: () => <CustomHeaderEng />,
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
