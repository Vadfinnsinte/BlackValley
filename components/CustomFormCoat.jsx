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
import { checkboxStyle, styleCoatForm } from "../constants/formStyles";
import { useEffect } from "react";
import { fetchCollection } from "../functions/fetchCollection";
import { formStore } from "../data/formStoreHooks";

const CustomFormCoat = () => {
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
    setMeasurementsCoat,
    measurementsCoat,
    cosyCollarColor,
    setCosyCollarColor,
    brodyrColor,
    setBrodyrColor,
    brodyrText,
    setBrodyrText,
    commentsCoat,
    setCommentsCoat,
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
          label: name.color,
          value: name.color,
        }));
      setWoolColors(allColors);
    }
  };
  console.log("measuremenst: ", measurementsCoat);
  console.log("cosyCollarColor: ", cosyCollarColor);
  console.log("brodyrColor: ", brodyrColor);
  console.log("brodyrText: ", brodyrText);
  console.log("commentsCoat: ", commentsCoat);

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
          Tillbaka till steg 1
        </Text>
      </Pressable>
      <View>
        <Text
          className={`text-xl  ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          Täcke
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Modell</Text>
            <DropDownPicker
              open={openCoatModel}
              value={selectedModelCoat}
              items={models}
              setOpen={setOpenCoatModel}
              setItems={setModels}
              placeholder="Välj en modell"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedModelCoat);
                setSelectedModelCoat(newValue);
              }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Mått</Text>
            <TextInput
              value={measurementsCoat}
              onChangeText={(text) => setMeasurementsCoat(text)}
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 9 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Önskad färg på tyg</Text>
            <DropDownPicker
              open={openColor}
              value={selectedColor}
              items={woolColors}
              setOpen={setOpenColor}
              setItems={setWoolColors}
              placeholder="Välj färg"
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
                Önskad färg på Cosy krage
              </Text>
              <TextInput
                value={cosyCollarColor}
                onChangeText={(text) => setCosyCollarColor(text)}
                style={styleCoatForm.input}></TextInput>
            </View>
          )}
        </View>
        <Text
          className={`text-xl ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          Brodyr
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 8 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Önskad Färg</Text>
            <TextInput
              value={brodyrColor}
              onChangeText={(text) => setBrodyrColor(text)}
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Typsnitt</Text>
            <DropDownPicker
              open={openFont}
              value={selectedFont}
              items={chosenFont}
              setOpen={setOpenFont}
              setItems={setChosenFont}
              placeholder="Välj font"
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
            <Text style={{ color: themeColors.text }}>Broderad text</Text>
            <TextInput
              value={brodyrText}
              onChangeText={(text) => setBrodyrText(text)}
              style={styleCoatForm.input}></TextInput>
            <Text style={{ color: themeColors.text }} className="text-sm">
              blir exakt som skrivet te.x. ALviN, alvin
            </Text>
          </View>

          <View
            style={[
              width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
              { marginTop: 15, alignItems: "center" },
            ]}>
            <Text style={{ color: themeColors.text }}>Bensnören? </Text>
            <View
              style={[
                styleCoatForm.flexBox,
                { alignSelf: "center", marginBottom: 0 },
              ]}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: themeColors.text, margin: 2 }}
                  className="m-2">
                  Ja
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
                <Text style={{ color: themeColors.text, margin: 2 }}>Nej</Text>
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
            Kommentarer och special-önskemål
          </Text>
          <TextInput
            value={commentsCoat}
            onChangeText={(text) => setCommentsCoat(text)}
            style={styleCoatForm.bigInput}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            (symboler, andra färger?)
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setStepThree(true);
          setCoatForm(false);
          setStepTwo(false);
        }}>
        <Text style={checkboxStyle.button}>Gå vidare</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormCoat;
