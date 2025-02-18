import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Text,
  Pressable,
  useColorScheme,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const HomeScreenEng = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const bigger = width > 750;

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView
          style={{ backgroundColor: themeColors.background, flex: 1 }}
          className="mx-10">
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
            <View style={bigger && styles.layoutBig}>
              <View style={styles.textContainer}>
                <Text
                  style={{ color: themeColors.text }}
                  className={bigger ? "text-4xl my-5" : " text-2xl my-5"}>
                  Welcome To Black Valley
                </Text>
                <Text style={{ color: themeColors.text }}>
                  On this page, you'll find plenty of inspiration if you're
                  looking for custom-made products for your dog. I primarily sew
                  wool coats and collars made from Swedish leather, but I also
                  love working on special orders.
                </Text>
                <Text className={"mt-5"} style={{ color: themeColors.text }}>
                  Feel free to look around! You can place an order by following
                  the instructions under the "Order Here" tab. If you have any
                  questions, don't hesitate to contact me.
                </Text>
              </View>
              <View
                style={[
                  bigger ? styles.placeholderBoxBig : styles.placeholderBox,
                  bigger && { order: -1 },
                ]}>
                <Text className="text-black text-center mt-12">Picture!</Text>
              </View>
            </View>
            <View style={bigger && styles.layoutBig}>
              <View style={styles.textContainer} className="ml-7">
                <Text
                  style={{ color: themeColors.text }}
                  className={bigger ? "text-3xl mb-5" : " text-2xl mb-5"}>
                  About Me
                </Text>
                <Text style={{ color: themeColors.text }}>
                  My name is Therese, and I run Black Valley. I have always been
                  passionate about animals and nature. Growing up on a farm, I
                  learned the importance of using what the land provides and
                  living close to nature.{" "}
                </Text>
                <Text className={"mt-5"} style={{ color: themeColors.text }}>
                  For several years, I lived on Tjörn, but I have now returned
                  to the farm where I grew up, where we raise sheep on a small
                  scale. Knowing the origin of everything—from the food on my
                  plate to the clothes I wear—is a core value of mine.
                </Text>
              </View>
              <View
                style={
                  bigger ? styles.placeholderBoxBig : styles.placeholderBox
                }>
                <Text className="text-black text-center mt-12">Picture!</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  placeholderBox: {
    width: 200,
    height: 150,
    backgroundColor: "white",
    margin: 10,
  },
  placeholderBoxBig: {
    width: 450,
    height: 350,
    backgroundColor: "white",
  },
  layoutBig: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    justifyContent: "space-around",
  },
  textContainer: {
    maxWidth: 550,
    alignSelf: "center",
  },
});

export default HomeScreenEng;
