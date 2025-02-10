import { useNavigation } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";

export default function HomeScreenEng() {
const navigation = useNavigation();

  const goToSweTabs = () => {
    navigation.navigate("(tabs)");
  };

    return (
        <SafeAreaView>
                <SafeAreaView>
                  <View> 
                    <Pressable onPress={goToSweTabs}>
                    <Text className="text-white m-10">
                      Swedish! 
                    </Text>
            
                    </Pressable>
            
                      <Text className="text-white m-10"> 
                        English! 
                      </Text>
                  </View>
                </SafeAreaView>
        </SafeAreaView>
    )
}