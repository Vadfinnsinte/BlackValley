import { SafeAreaView, Text, View } from "react-native";
import CustomHeader from "../../components/CustomHeader";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <CustomHeader />
      <View>
        <Text>Produkter</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
