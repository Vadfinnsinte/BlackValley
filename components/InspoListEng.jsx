import { ImageBackground, StyleSheet, View } from "react-native";

const InspoListEng = ({ image, name, width }) => {
  return (
    <View
      accessible={true}
      focusable={true}
      style={width > 780 ? styles.imageContainer : styles.smallImageContainer}>
      <ImageBackground
        accessibilityLabel={`${name}`}
        source={{ uri: image }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 7,
    overflow: "hidden",
    margin: 10,
  },
  smallImageContainer: {
    width: 240,
    height: 240,
    borderRadius: 6,
    overflow: "hidden",
    margin: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default InspoListEng;
