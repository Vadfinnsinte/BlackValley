
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { useEffect, useState } from "react";
import { fetchCollection } from "../../../functions/fetchCollection";
import WoolColor from "../../../components/MaterialColor";



const MaterialScreen = () => {
 const { width } = useWindowDimensions();
 const [listOfWools, setListofWools] = useState([])
 const numberOfcolums = width > 1200 ? 5 : width > 880 ? 4 : width > 700 ? 3 : 2;

  const fetchProducts = async () => {
      const snapshot = await fetchCollection("wool")
      const sortedList = snapshot.sort((a, b) => a.colorGroup.localeCompare(b.colorGroup));
      setListofWools(sortedList)
      console.log(listOfWools);

  }
    useEffect(() => {
     fetchProducts()
    }, []);
  
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View >
        <Text className="text-center text-2xl">Ull till täcken</Text>
      </View>
      <FlatList
      contentContainerStyle={styles.container}
      data={listOfWools}
      numColumns={numberOfcolums}
      key={numberOfcolums}
      renderItem={({ item }) => <WoolColor image={item.url} color={item.color} width={width}/> }
      >

      </FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
})

export default MaterialScreen;
