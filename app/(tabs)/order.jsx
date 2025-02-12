import { SafeAreaView, Text, View } from "react-native";
import CustomHeader from "../../components/CustomHeader";

const OrderScreen = () => {
  return (
    <SafeAreaView>
      <CustomHeader />
      <View>
        <Text>Beställ här</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
