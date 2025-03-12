import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

const ModelList = ({ images, name, info, important, price }) => {
  const { width } = useWindowDimensions();
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbImages, setThumbImages] = useState(images.slice(1));

  const swapImage = (selectedImage) => {
    setThumbImages([
      mainImage,
      ...thumbImages.filter((img) => img !== selectedImage),
    ]);
    setMainImage(selectedImage);
  };
  return (
    <View
      style={[
        CoatStyle.container,
        { width: width > 580 ? 470 : 270, padding: width > 580 ? 20 : 10 },
      ]}
      accessible={true}
      focusable={true}>
      <Text
        style={{
          color: "#ECEDEE",
          fontSize: 25,
          fontWeight: "600",
          marginLeft: 13,
        }}>
        {name}
      </Text>
      <Image
        style={[
          CoatStyle.bigImage,
          {
            width: width > 580 ? 470 : 200,
            height: width > 580 ? 300 : 180,
            alignSelf: width > 580 ? "center" : "auto",
            marginLeft: width > 580 ? 0 : 16.5,
          },
        ]}
        source={{ uri: mainImage }}
        resizeMode="contain"
      />
      <View style={CoatStyle.smallImagesContainer}>
        <FlatList
          horizontal
          data={thumbImages}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => swapImage(item)}>
              <Image
                source={{ uri: item }}
                style={CoatStyle.smallImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={CoatStyle.info}>
        <View>
          <Text style={{ color: "#ECEDEE", fontSize: 16 }}>Pris:</Text>
          <Text style={{ color: "#ECEDEE", fontSize: 16 }}>{price}</Text>
        </View>
        <View>
          <Text style={{ color: "#ECEDEE", fontSize: 16 }}>Info:</Text>
          <Text style={{ color: "#ECEDEE", fontSize: 16 }}>{info}</Text>
        </View>
        <View style={{ flexGrow: 1 }}>
          <Text style={{ color: "#ECEDEE", marginTop: "auto", fontSize: 16 }}>
            VIKTIGT:
          </Text>
          <Text style={{ color: "#ECEDEE", fontSize: 16 }}>{important}</Text>
        </View>
      </View>
    </View>
  );
};

const CoatStyle = StyleSheet.create({
  container: {
    margin: 10,
    gap: 5,
    borderRadius: 20,
    backgroundColor: "#515151",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  bigImage: {
    margin: 10,
    borderRadius: 10,
  },

  smallImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginLeft: 7,
  },
  smallImage: {
    borderRadius: 10,
    height: 100,
    width: 100,
    margin: 10,
  },
  info: {
    marginLeft: 15,
    gap: 20,
    flex: 1,
  },
});

export default ModelList;
