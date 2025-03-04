import { Tabs } from "expo-router";
import React from "react";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { navLinksEng } from "../../../constants/navLinksEng";
import Header from "../../../components/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        header: () => <Header title="Black Valley" data={navLinksEng} />,
        tabBarBackground: TabBarBackground,
        tabBarStyle: { display: "none" },
      }}>
      <Tabs.Screen
        name="indexEng"
        options={{
          title: "Home",
          headerShown: true,
          header: () => <Header title="Black Valley" data={navLinksEng} />,
        }}
      />
    </Tabs>
  );
}
