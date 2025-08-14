import { Image, StyleSheet, View, Text, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const LeashColor = ({ image, color, width, group }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  return (
    <View accessible={true} focusable={true} style={styles.div}>
      <Text style={{ color: themeColors.text }}>
        {" "}
        {group === "leather" ? "Läder" : "Hex"}
      </Text>
      <Image
        accessibilityLabel={`${color} `}
        style={width > 780 ? styles.image : styles.smallimage}
        source={{ uri: image }}
        resizeMode="contain"
      />
      <Text style={[styles.text, { color: themeColors.text }]}>{color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  smallimage: {
    height: 150,
    width: 150,
  },
  div: {
    margin: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default LeashColor;
