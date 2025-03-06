import { Pressable, Text, useColorScheme, View } from "react-native";
import { checkboxStyle, styleCoatForm } from "../StyleSheet/formStyles";
import { Colors } from "@/constants/Colors";
// import Fontisto from "@expo/vector-icons/Fontisto";
import { BiCheckSquare } from "react-icons/bi";

import { formStore } from "../data/formStoreHooks";
import { validateStoreHooks } from "../data/validateStoreHooks";
import { BiRectangle } from "react-icons/bi";
import { useState } from "react";
const CheckBox = () => {
  const [other, setOther] = useState(false);
  const [otherother, setOtherother] = useState(false);
  const { chosenProduct, setChosenProduct, warningMessage } = formStore();
  const { setWarnings, checkBoxWarnings } = validateStoreHooks();
  const colorScheme = useColorScheme();

  const themeColors = Colors[colorScheme] || Colors.light;

  const handleCoat = () => {
    setWarnings.setCheckbox(false);
    setChosenProduct.setCoat(!chosenProduct.coat);
    setChosenProduct.setCollar(false);
    setOther(false);
    setChosenProduct.setOther(false);
    setOtherother(false);
  };
  const handleCollar = () => {
    setWarnings.setCheckbox(false);
    setChosenProduct.setCoat(false);
    setOther(false);
    setChosenProduct.setCollar(!chosenProduct.collar);
    setChosenProduct.setOther(false);
    setOtherother(false);
  };
  const handleOther = () => {
    setWarnings.setCheckbox(false);
    setChosenProduct.setCoat(false);
    setChosenProduct.setCollar(false);
    setOther(false);
    setChosenProduct.setOther(!otherother);
    setOtherother(!otherother);
    console.log(chosenProduct.other);
  };
  const handleOtherOther = () => {
    setWarnings.setCheckbox(false);
    setChosenProduct.setCoat(false);
    setChosenProduct.setCollar(false);
    setChosenProduct.setOther(!other);
    setOther(!other);
    setOtherother(false);
  };

  return (
    <View>
      <View style={checkboxStyle.containerCheck}>
        <View>
          <Text style={{ color: themeColors.text, fontSize: 16 }}>Täcke</Text>
          <Pressable onPress={handleCoat}>
            {chosenProduct.coat ? (
              <BiCheckSquare
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            ) : (
              <BiRectangle
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            )}
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 16,
            }}>
            Halsband
          </Text>
          <Pressable onPress={handleCollar}>
            {chosenProduct.collar ? (
              <BiCheckSquare
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            ) : (
              <BiRectangle
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            )}
          </Pressable>
        </View>
        <View>
          <Text style={{ color: themeColors.text, fontSize: 16 }}>Koppel</Text>
          <Pressable onPress={handleOther}>
            {otherother ? (
              <BiCheckSquare
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            ) : (
              <BiRectangle
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            )}
          </Pressable>
        </View>

        <View>
          <Text style={{ color: themeColors.text, fontSize: 16 }}>Annat</Text>
          <Pressable onPress={handleOtherOther}>
            {other ? (
              <BiCheckSquare
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            ) : (
              <BiRectangle
                style={{
                  fontSize: 30,
                  color: themeColors.detail,
                  alignSelf: "center",
                }}
              />
            )}
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
