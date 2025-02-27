import {
  Image,
  ImageBackground,
  SafeAreaView,
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
const MaterialOther = () => {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView style={{ flex: 1 }} className="mx-3">
          <GradientBackground>
            <View>
              <Text
                style={{ color: themeColors.text }}
                className="text-center text-2xl">
                Tillbehör och font
              </Text>
            </View>
            <View style={styles.container}>
              <Image
                source={fontpic}
                style={width > 780 ? styles.image : styles.smallimage}
              />
            </View>
          </GradientBackground>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default MaterialOther;
