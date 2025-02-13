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

const HomeScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const bigger = width > 750;

  const goToEngTabs = () => {
    navigation.navigate("(engTabs)");
  };

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
                  Välkommen till Black Valley
                </Text>
                <Text style={{ color: themeColors.text }}>
                  På den här sidan hittar du massa inspiration om du är ute
                  efter skräddarsydda produkter till din hund. Jag syr främst
                  ulltäcken och halsband i svenskt skinn, men älskar även
                  specialbeställningar.
                </Text>
                <Text className={"mt-5"} style={{ color: themeColors.text }}>
                  Välkommen att kika runt! Beställer gör du enligt instruktioner
                  under fliken ”Beställ här”. Har du frågor, tveka inte att
                  kontakta mig.
                </Text>
              </View>
              <View
                style={[
                  bigger ? styles.placeholderBoxBig : styles.placeholderBox,
                  bigger && { order: -1 },
                ]}>
                <Text>
                  <Text className="text-black text-center mt-12">Picture!</Text>
                </Text>
              </View>
            </View>
            <View style={bigger && styles.layoutBig}>
              <View style={styles.textContainer} className="ml-7">
                <Text
                  style={{ color: themeColors.text }}
                  className={bigger ? "text-3xl mb-5" : " text-2xl mb-5"}>
                  Om mig
                </Text>
                <Text style={{ color: themeColors.text }}>
                  Therese heter jag och jag driver firman Black Valley. Jag har
                  alltid brunnit för djur och natur, är uppvuxen på bondgård och
                  har präglats av att man tar tillvara på och lever nära jorden.{" "}
                </Text>
                <Text className={"mt-5"} style={{ color: themeColors.text }}>
                  Under flera år har jag bott på Tjörn, men har nu återvänt till
                  gården jag växt upp på, där vi bedriver lammuppfödning i liten
                  skala. Att känna till ursprunget på allt från det som ligger
                  på tallriken, till det jag har på mig är en viktig värdering.
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

{
  /* <Pressable onPress={goToEngTabs}>
<Text style={{ color: themeColors.text}}> 
  Engelska! 
</Text>

</Pressable> */
}
export default HomeScreen;
