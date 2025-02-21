import { Image, StyleSheet, View, Text } from "react-native";

const WoolColor = ({ image, color, width }) => {
  return (
    <View style={styles.div}>
      <Image
        accessibilityLabel={`${color} ull`}
        style={width > 780 ? styles.image : styles.smallimage}
        source={{ uri: image }}
      />
      <Text style={styles.text}>{color}</Text>
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

export default WoolColor;
