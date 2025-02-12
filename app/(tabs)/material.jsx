import { SafeAreaView, Text, View } from "react-native";

import CustomHeader from "../../components/CustomHeader";

const MaterialScreen = () => {
  return (
    <SafeAreaView>
      <CustomHeader />
      <View>
        <Text>Material</Text>
      </View>
    </SafeAreaView>
  );
};

export default MaterialScreen;
