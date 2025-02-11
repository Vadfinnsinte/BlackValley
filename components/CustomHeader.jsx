import { ImageBackground, SafeAreaView, View, StyleSheet, useWindowDimensions, Text, useColorScheme, Pressable } from 'react-native';
import wool from "../assets/images/woolImage.jpg";
import blackValleylogo from "../assets/images/BlackValleylogo.png";
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function CustomHeader() {
	// const colorScheme = useColorScheme();
	// // const themeColors = Colors[colorScheme] || Colors.light;
	const router = useRouter()

	const { width } = useWindowDimensions();
	
  return (
    <SafeAreaView>
      <ImageBackground 
        style={ width > 750 ?  styles.backgroundImage: styles.smallbackground}
        source={wool} 
        resizeMode="cover"
      >    
       <View style={styles.logoContainer}>
          <ImageBackground source={blackValleylogo } style={ width > 750 ?  styles.logo: styles.smallLogo} resizeMode="contain" />
        </View>
      </ImageBackground>
	  <View style={styles.navbar}>
		<View><Pressable onPress={() => router.back("index")}>  <Text style={styles.navbarText}>Black Valley</Text> </Pressable>
		</View>
		<View>
		<Pressable onPress={() => router.push("product")}> <Text style={styles.navbarText}>Produkter</Text>
		</Pressable></View>
		<View> 
		<Pressable onPress={() => router.push("material")}> 
		<Text style={styles.navbarText}>Material</Text>
		</Pressable>
		</View>
		<View> <Pressable onPress={() => router.push("order")}>  <Text style={styles.navbarText}>Beställ här</Text> </Pressable>
		</View>
		<View> 
		<Pressable onPress={() => router.push("inspiration")}>
		<Text style={styles.navbarText}>Inspiration</Text>
		</Pressable>
		</View>
		<View> 
		<Pressable onPress={() => router.push("home")}>
		<Text style={styles.navbarText}>Eng</Text>
		</Pressable>
		</View>
		</View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	backgroundImage: {
	  width: "100%",
	  height: 160, 
	  justifyContent: "center"
	},
	smallbackground: {
		width: "100%",
		height: 100, 
		justifyContent: "center"
	},
	logo: {
		width: "100%",
		height: 130,
	},
	logoContainer: {
		alignContent: "center",
	  },
	  smallLogo: {
		width: "100%",
		height: 80,
	},
	navbar: {
		width: "100%",
		height: 50,
		backgroundColor: "#E8E8E9", 
		borderWidth: 1, 
		borderColor: "black", 
		borderStyle: "solid" ,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
		
	},
	navbarText: {
		fontSize: 25,
		textAlign: "center"
	}
	
  });



