import {
	Pressable,
	Text,
	useColorScheme,
	View,
  } from "react-native";
  import { useState } from "react";
  import { checkboxStyle } from "../constants/formStyles";
  import { Colors } from "@/constants/Colors";
  import Fontisto from "@expo/vector-icons/Fontisto";
const CheckBox = ({ coat, setCoat, collar, setCollar, other, setOther,setWarning, warningmessage, warning })=> {
	const colorScheme = useColorScheme();
	const themeColors = Colors[colorScheme] || Colors.light;

	const handleCoat = () => {
		setWarning(false);
		setCoat(!coat);
		setCollar(false);
		setOther(false);
	  };
	  const handleCollar = () => {
		setWarning(false);
		setCoat(false);
		setCollar(!collar);
		setOther(false);
	  };
	  const handleOther = () => {
		setWarning(false);
		setCoat(false);
		setCollar(false);
		setOther(!other);
	  };
return(
	<View>
	<View style={checkboxStyle.containerCheck}>
	  <View>
		<Text style={{ color: themeColors.text }}>Täcke</Text>
		  <Pressable onPress={handleCoat}>
			<Fontisto
			  name={ coat ? "checkbox-active": "checkbox-passive"}
			  size={24}
			  color={themeColors.detail}
			  style={{ alignSelf: "center" }}
			/>
		  </Pressable>
	  </View>
	  <View>
		<Text style={{ color: themeColors.text }}>Halsband</Text>             
		  <Pressable onPress={handleCollar}>
			<Fontisto
			  name={collar ? "checkbox-active" : "checkbox-passive"}
			  size={24}
			  color={themeColors.detail}
			  style={{ alignSelf: "center" }}
			/>
		  </Pressable>
	  </View>
	  <View>
		<Text style={{ color: themeColors.text }}>Annat</Text>
		  <Pressable onPress={handleOther}>
			<Fontisto
			  name={ other ? "checkbox-active": "checkbox-passive"}
			  size={24}
			  color={themeColors.detail}
			  style={{ alignSelf: "center" }}
			/>
		  </Pressable>
	  </View>
	</View>
	<Text
	  className={`text-red-400 text-center -mb-2 mt-2 ${
		!warning ? "invisible" : ""
	  }`}>
	  {warningmessage}
	</Text>
	</View>
)

}

export default CheckBox