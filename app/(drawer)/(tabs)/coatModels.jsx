import {
  SafeAreaView,
  Text,
  View,
  useColorScheme,
  StyleSheet,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import GradientBackground from "../../../components/GradiantBackground";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import CoatModelList from "../../../components/coatModelsList";
import { fetchCollection } from "../../../functions/fetchCollection";

const CoatModels = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const [coatModelList, setCoatModelList] = useState([]);
  const { width } = useWindowDimensions();
  const numberOfcolums =
    width > 1700 ? 2 : width > 1140 ? 2 : width > 925 ? 1 : 1;

  const fetchModels = async () => {
    const response = await fetchCollection("modelsCoat");
    setCoatModelList(response);
    console.log(coatModelList);
  };
  useEffect(() => {
    fetchModels();
    console.log(coatModelList);
  }, []);

  return (
    <ImageBackground source={woolBg} style={{ flex: 1 }} resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView
          style={{
            flex: 1,
            marginHorizontal: width > 580 ? 40 : 20,
          }}>
          <GradientBackground>
            <View style={{ alignSelf: "center" }}>
              <Text
                style={{
                  color: themeColors.text,
                  fontSize: 30,
                  fontWeight: "600",
                  margin: 10,
                }}>
                Modeller täcke
              </Text>
            </View>

            <FlatList
              contentContainerStyle={styles.container}
              data={coatModelList}
              numColumns={numberOfcolums}
              key={numberOfcolums}
              renderItem={({ item }) => (
                <CoatModelList
                  images={item.images}
                  name={item.name}
                  info={item.info}
                  price={item.price}
                  important={item.important}
                />
              )}
            />
          </GradientBackground>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    gap: 20,
    marginBottom: 20,
  },
});

export default CoatModels;
