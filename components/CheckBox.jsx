import { Pressable, Text, useColorScheme, View } from "react-native";
import { checkboxStyle } from "../constants/formStyles";
import { Colors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import { formStore } from "../data/formStoreHooks";
const CheckBox = () => {
  const {
    chosenProduct,
    setChosenProduct,
    setWarning,
    warningmessage,
    warning,
  } = formStore();
  const colorScheme = useColorScheme();

  const themeColors = Colors[colorScheme] || Colors.light;

  const handleCoat = () => {
    setWarning(false);
    setChosenProduct.setCoat(!chosenProduct.coat);
    setChosenProduct.setCollar(false);
    setChosenProduct.setOther(false);
  };
  const handleCollar = () => {
    setWarning(false);
    setChosenProduct.setCoat(false);
    setChosenProduct.setCollar(!chosenProduct.collar);
    setChosenProduct.setOther(false);
  };
  const handleOther = () => {
    setWarning(false);
    setChosenProduct.setCoat(false);
    setChosenProduct.setCollar(false);
    setChosenProduct.setOther(!chosenProduct.other);
  };
  return (
    <View>
      <View style={checkboxStyle.containerCheck}>
        <View>
          <Text style={{ color: themeColors.text }}>Täcke</Text>
          <Pressable onPress={handleCoat}>
            <Fontisto
              name={chosenProduct.coat ? "checkbox-active" : "checkbox-passive"}
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
              name={
                chosenProduct.collar ? "checkbox-active" : "checkbox-passive"
              }
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
              name={
                chosenProduct.other ? "checkbox-active" : "checkbox-passive"
              }
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
  );
};

export default CheckBox;
