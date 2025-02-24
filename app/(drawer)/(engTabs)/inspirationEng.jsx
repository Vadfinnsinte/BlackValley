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
import { useEffect, useState } from "react";
import { fetchCollection } from "../../../functions/fetchCollection";
import { Colors } from "@/constants/Colors";
import InspoListEng from "../../../components/InspoListEng";

const InspirationScreenEng = () => {
  const { width } = useWindowDimensions();
  const [inspirationList, setInspirationList] = useState([]);
  const numberOfcolums =
    width > 1700 ? 4 : width > 1380 ? 3 : width > 925 ? 2 : 1;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const fetchInspo = async () => {
    const picture = await fetchCollection("inspiration");
    console.log(picture);
    setInspirationList(picture);
  };

  useEffect(() => {
    fetchInspo();
    // console.log(picture);
  }, []);

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView
          style={{
            backgroundColor: themeColors.background,
            flex: 1,
            alignItems: "center",
          }}
          className="mx-10">
          <View>
            <Text
              style={[styles.Text, { color: themeColors.text }]}
              className="text-center ">
              Inspiration
            </Text>
          </View>
          <FlatList
            numColumns={numberOfcolums}
            data={inspirationList}
            key={numberOfcolums}
            renderItem={({ item }) => (
              <InspoListEng
                image={item.url}
                name={item.nameEng}
                width={width}
              />
            )}></FlatList>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default InspirationScreenEng;

const styles = StyleSheet.create({
  Text: {
    margin: 10,
    fontFamily: "monospace",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  imageBackground: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 200,
  },
  smallimage: {
    height: 150,
    width: 150,
  },
});
