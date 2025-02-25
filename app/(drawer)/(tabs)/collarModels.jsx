import {
  SafeAreaView,
  Text,
  View,
  useColorScheme,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import GradientBackground from "../../../components/GradiantBackground";
import { Colors } from "@/constants/Colors";

const CollorModels = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  return (
    <ImageBackground source={woolBg} style={{ flex: 1 }} resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
          className="mx-10">
          <GradientBackground>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: themeColors.text }}>Halsband</Text>
            </View>
          </GradientBackground>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default CollorModels;
