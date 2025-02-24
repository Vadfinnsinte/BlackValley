import {
  FlatList,
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

const MaterialScreenEng = () => {
  const { width } = useWindowDimensions();
  const [listOfWools, setListofWools] = useState([]);
  const numberOfcolums =
    width > 1200 ? 5 : width > 880 ? 4 : width > 700 ? 3 : 2;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const fetchProducts = async () => {
    const snapshot = await fetchCollection("wool");
    const sortedList = snapshot.sort((a, b) =>
      a.colorGroup.localeCompare(b.colorGroup)
    );
    setListofWools(sortedList);
    console.log(listOfWools);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView
          style={{ backgroundColor: themeColors.background, flex: 1 }}
          className="mx-3">
          <View>
            <Text className="text-center text-2xl">Wool for coats</Text>
          </View>
          <FlatList
            contentContainerStyle={styles.container}
            data={listOfWools}
            numColumns={numberOfcolums}
            key={numberOfcolums}
            renderItem={({ item }) => (
              <WoolColor image={item.url} color={item.colorEng} width={width} />
            )}></FlatList>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imageBackground: {
    flex: 1,
  },
});

export default MaterialScreenEng;
