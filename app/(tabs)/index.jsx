import { Image, StyleSheet, Platform, SafeAreaView, View, Text, Pressable } from 'react-native';

import { useNavigation } from 'expo-router';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToEngTabs = () => {
    navigation.navigate("(engTabs)");
  };

  return (
    <SafeAreaView>
      <View > 
        <Text className="text-white m-10">
          Svenska! 
        </Text>
        <Pressable onPress={goToEngTabs}>
          <Text className="text-white m-10"> 
            Engelska! 
          </Text>

        </Pressable>

      </View>
    </SafeAreaView>
  );
}

