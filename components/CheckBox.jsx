import { Pressable, Text, useColorScheme, View } from "react-native";
import { checkboxStyle, styleCoatForm } from "../StyleSheet/formStyles";
import { Colors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import { formStore } from "../data/formStoreHooks";
import { validateStoreHooks } from "../data/validateStoreHooks";
const CheckBox = () => {
  const { chosenProduct, setChosenProduct, warningMessage } = formStore();
  const { setWarnings, checkBoxWarnings } = validateStoreHooks();
  const colorScheme = useColorScheme();

  const themeColors = Colors[colorScheme] || Colors.light;

  const handleCoat = () => {
    setWarnings.setCheckbox(false);
    setChosenProduct.setCoat(!chosenProduct.coat);
    setChosenProduct.setCollar(false);
    setChosenProduct.setOther(false);
  };
  const handleCollar = () => {
    setWarnings.setCheckbox(false);
    setChosenProduct.setCoat(false);
    setChosenProduct.setCollar(!chosenProduct.collar);
    setChosenProduct.setOther(false);
  };
  const handleOther = () => {
    setWarnings.setCheckbox(false);
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
        style={[
          styleCoatForm.redText,
          { opacity: checkBoxWarnings.bool ? 1 : 0 },
        ]}>
        {checkBoxWarnings.message}
      </Text>
    </View>
  );
};

export default CheckBox;
