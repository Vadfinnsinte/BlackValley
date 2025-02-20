import { Image, StyleSheet, View } from "react-native";

const InspoList = ({ image, name, width }) => {
  return (
    <View style={styles.div}>
      <Image
        accessibilitylabel={`${name}`}
        source={{ uri: image }}
        style={width > 780 ? styles.image : styles.smallimage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
  },
  smallimage: {
    height: 150,
    width: 150,
  },
  div: {
    margin: 10,
  },
});

export default InspoList;
