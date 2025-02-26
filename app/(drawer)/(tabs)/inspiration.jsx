import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
  View,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import { useEffect, useState } from "react";
import { fetchCollection } from "../../../functions/fetchCollection";
import { Colors } from "@/constants/Colors";
import InspoList from "../../../components/InspoList";
import GradientBackground from "../../../components/GradiantBackground";

const InspirationScreen = () => {
  const { width } = useWindowDimensions();
  const [inspirationList, setInspirationList] = useState([]);
  const numberOfcolums =
    width > 1700 ? 4 : width > 1380 ? 3 : width > 925 ? 2 : 1;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const fetchInspo = async () => {
    const picture = await fetchCollection("inspiration");
    setInspirationList(picture);
  };

  useEffect(() => {
    fetchInspo();
  }, []);

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
          <SafeAreaView
            style={{
              flex: 1,
            }}
            className="mx-10">
            <GradientBackground>
              <View style={{ alignItems: "center" }}>
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
                    <InspoList
                      image={item.url}
                      name={item.name}
                      width={width}
                    />
                  )}></FlatList>
              </View>
            </GradientBackground>
          </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default InspirationScreen;

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
});
