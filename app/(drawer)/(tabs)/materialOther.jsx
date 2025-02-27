import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import GradientBackground from "../../../components/GradiantBackground";
import { Colors } from "@/constants/Colors";
import { styles } from "./materialWool";
import fontpic from "../../../assets/images/Typsnitt.png";
import { fetchCollection } from "../../../functions/fetchCollection";
import { useEffect, useState } from "react";
const MaterialOther = () => {
  const [list, setList] = useState([]);
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();

  const numberOfcolums = width > 800 ? 3 : 2;
  const fetch = async () => {
    const response = await fetchCollection("other");
    const sortedList = response.sort((a, b) => a.group.localeCompare(b.group));
    setList(sortedList);
  };
  useEffect(() => {
    fetch();
  }, []);

  const OtherList = ({ image, name, alt }) => {
    return (
      <View accessible={true} focusable={true}>
        <Image
          style={[
            width > 780 ? otherImageStyle.image : otherImageStyle.smallimage,
            { margin: 10 },
          ]}
          source={{ uri: image }}
          accessibilityLabel={alt}
        />
        <Text
          style={{ color: themeColors.text }}
          className="text-center -mt-2 mb-2">
          {name}
        </Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView style={{ flex: 1 }} className="mx-3">
          <GradientBackground>
            <Text
              style={{ color: themeColors.text }}
              className="text-center text-2xl">
              Tillbehör och font
            </Text>

            <FlatList
              contentContainerStyle={styles.container}
              data={list}
              numColumns={numberOfcolums}
              key={numberOfcolums}
              renderItem={({ item }) => (
                <OtherList image={item.image} name={item.name} alt={item.alt} />
              )}></FlatList>
          </GradientBackground>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const otherImageStyle = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
  },
  smallimage: {
    height: 200,
    width: 200,
  },
});
export default MaterialOther;
