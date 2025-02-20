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
import WoolColor from "../../../components/MaterialColor";
import { Colors } from "@/constants/Colors";
import InspoList from "../../../components/InspoList";

const InspirationScreen = () => {
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
            <Text className="text-center text-2xl">Inspiration</Text>
          </View>
          <FlatList
            numColumns={numberOfcolums}
            data={inspirationList}
            key={numberOfcolums}
            renderItem={({ item }) => (
              <InspoList image={item.url} width={width} />
            )}></FlatList>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default InspirationScreen;

const styles = StyleSheet.create({
  //   container: {
  //     justifyContent: "center",
  //     alignContent: "center",
  //     alignItems: "center",
  //     alignSelf: "center",
  //     padding: 2,
  //   },
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
