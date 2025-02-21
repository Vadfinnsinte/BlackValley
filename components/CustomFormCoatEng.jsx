import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import { getSyntheticTrailingComments } from "typescript";
import { checkboxStyle, styleCoatForm } from "../constants/formStyles";
import { useEffect } from "react";
import { fontItems } from "../constants/fonts";
import { fetchCollection } from "../functions/fetchCollection";
import { formStore } from "../data/formStoreHooks";

const CustomFormCoatEng = () => {
  const {
    stepThree,
    setStepThree,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    setCoatForm,
    selectedModelCoat,
    setSelectedModelCoat,
    selectedColor,
    setSelectedColor,
    selectedFont,
    setSelectedFont,
    openCoatModel,
    setOpenCoatModel,
    openColor,
    setOpenColor,
    openFont,
    setOpenFont,
    colorColar,
    setColorColar,
    chosenFont,
    setChosenFont,
    legString,
    setLegString,
    setComingFromForm,
  } = formStore();
  // colors and responsiv variables.
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //
  const [woolColors, setWoolColors] = useState([]);

  const [models, setModels] = useState([
    { label: "Cosy", value: "Cosy" },
    { label: "Limitless", value: "Limitless" },
    { label: "High-Neck", value: "High-Neck" },
    { label: "Swedish", value: "Swedish" },
  ]);

  const fetchwoolColors = async () => {
    const response = await fetchCollection("wool");
    if (response) {
      const allColors = response
        .filter((name) => name.color)
        .map((name) => ({
          label: name.colorEng,
          value: name.colorEng,
        }));
      setWoolColors(allColors);
      console.log(allColors);
    }
  };

  useEffect(() => {
    if (selectedModelCoat === "Cosy") {
      setColorColar(true);
    } else {
      setColorColar(false);
    }
  }, [selectedModelCoat]);

  useEffect(() => {
    fetchwoolColors();
    setComingFromForm("Coat");
  }, []);

  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setStepOne(true);
          setStepTwo(false);
          setCoatForm(false);
        }}>
        <Text
          style={{
            color: themeColors.text,
            textDecorationLine: "underline",
            marginBottom: 6,
          }}>
          Back to step 1
        </Text>
      </Pressable>
      <View>
        <Text
          className={`text-xl  ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          Coat
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Model</Text>
            <DropDownPicker
              open={openCoatModel}
              value={selectedModelCoat}
              items={models}
              setOpen={setOpenCoatModel}
              // setValue={setSelectedModelCoat}
              setItems={setModels}
              placeholder="Choose model"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedModelCoat);
                setSelectedModelCoat(newValue);
              }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Measurements</Text>
            <TextInput style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 9 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>
              Desired fabric colour
            </Text>
            <DropDownPicker
              open={openColor}
              value={selectedColor}
              items={woolColors}
              setOpen={setOpenColor}
              // setValue={setSelectedColor}
              setItems={setWoolColors}
              placeholder="Pick a colour"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedColor);
                setSelectedColor(newValue);
              }}
            />
          </View>
          {colorColar && (
            <View>
              <Text style={{ color: themeColors.text }}>
                Desired color for the Cosy collar
              </Text>
              <TextInput style={styleCoatForm.input}></TextInput>
            </View>
          )}
        </View>
        <Text
          className={`text-xl ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          Embroidery
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 8 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Desired Color</Text>
            <TextInput style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Font</Text>
            <DropDownPicker
              open={openFont}
              value={selectedFont}
              items={chosenFont}
              setOpen={setOpenFont}
              // setValue={setSelectedFont}
              setItems={setChosenFont}
              placeholder="Pick a font"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedFont);
                setSelectedFont(newValue);
              }}
            />
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 7 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Embroidered text</Text>
            <TextInput style={styleCoatForm.input}></TextInput>
            <Text style={{ color: themeColors.text }} className="text-sm">
              It will be exactly as written, e.g. ALviN, alvin
            </Text>
          </View>

          <View
            style={[
              width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
              { marginTop: 15, alignItems: "center" },
            ]}>
            <Text style={{ color: themeColors.text }}>Leg strings? </Text>
            <View
              style={[
                styleCoatForm.flexBox,
                { alignSelf: "center", marginBottom: 0 },
              ]}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: themeColors.text, margin: 2 }}
                  className="m-2">
                  Yes
                </Text>
                <Pressable onPress={() => setLegString(true)}>
                  <Fontisto
                    name={
                      legString === true
                        ? "checkbox-active"
                        : "checkbox-passive"
                    }
                    size={24}
                    color={themeColors.detail}
                  />
                </Pressable>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: themeColors.text, margin: 2 }}>No</Text>
                <Pressable onPress={() => setLegString(false)}>
                  <Fontisto
                    name={
                      legString === false
                        ? "checkbox-active"
                        : "checkbox-passive"
                    }
                    size={24}
                    color={themeColors.detail}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: themeColors.text }}>
            Comments and special requests
          </Text>
          <TextInput style={styleCoatForm.bigInput}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            (Symbols, other colors?)
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setStepThree(true);
          setCoatForm(false);
          setStepTwo(false);
        }}>
        <Text style={checkboxStyle.button}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormCoatEng;
