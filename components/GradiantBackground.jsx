import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

const GradientBackground = ({ children }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const lightGradient = ["#808080", "#D3D3D3", "#B0B0B0", "#A9A9A9", "#808080"];
  const darkGradient = ["#888888", "#666666", "#444444", "#555555", "#888888"];

  const gradientColors = colorScheme === "dark" ? darkGradient : lightGradient;

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        backgroundColor: themeColors.background,
      }}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
