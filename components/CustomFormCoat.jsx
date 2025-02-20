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
import { styleCoatForm } from "../constants/formStyles";
import { useEffect } from "react";
import { fonts } from "../constants/fonts";
import { fetchCollection } from "../functions/fetchCollection";

const CustomFormCoat = ({
  stepThree,
  setStepThree,
  stepOne,
  setStepOne,
  stepTwo,
  setStepTwo,
  setCoatForm,
}) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);
  const [open, setOpen] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openFont, setOpenFont] = useState(false);
  const [colorColar, setColorColar] = useState(false);
  const [boneString, setBoneString] = useState(null);
  const [models, setModels] = useState([
    { label: "Cosy", value: "Cosy" },
    { label: "Limitless", value: "Limitless" },
    { label: "High-Neck", value: "High-Neck" },
    { label: "Swedish", value: "Swedish" },
  ]);
  const [woolColors, setWoolColors] = useState([]);
  const fontItems = fonts.map((font) => ({
    label: font,
    value: font.toLowerCase().replace(/\s+/g, "_"),
  }));
  const [chosenFont, setChosenFonts] = useState(fontItems);

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

  useEffect(() => {
    if (selectedModel === "Cosy") {
      setColorColar(true);
    } else {
      setColorColar(false);
    }
  }, [selectedModel]);

  useEffect(() => {
    fetchwoolColors();
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
              open={open}
              value={selectedModel}
              items={models}
              setOpen={setOpen}
              setValue={setSelectedModel}
              setItems={setModels}
              placeholder="Välj en modell"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              onChangeValue={(value) => {
                setSelectedModel(value);
              }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Mått</Text>
            <TextInput style={styleCoatForm.input}></TextInput>
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
              setValue={setSelectedColor}
              setItems={setWoolColors}
              placeholder="Välj färg"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              onChangeValue={(value) => {
                setSelectedColor(value);
              }}
            />
          </View>
          {colorColar && (
            <View>
              <Text style={{ color: themeColors.text }}>
                Önskad färg på Cosy krage
              </Text>
              <TextInput style={styleCoatForm.input}></TextInput>
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
            <TextInput style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Typsnitt</Text>
            <DropDownPicker
              open={openFont}
              value={selectedFont}
              items={chosenFont}
              setOpen={setOpenFont}
              setValue={setSelectedFont}
              setItems={setChosenFonts}
              placeholder="Välj font"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              onChangeValue={(value) => {
                setSelectedFont(value);
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
            <TextInput style={styleCoatForm.input}></TextInput>
            <Text style={{ color: themeColors.text }} className="text-sm">
              te.x. (AlViN)(alvin)
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
                <Pressable onPress={() => setBoneString(true)}>
                  <Fontisto
                    name={
                      boneString === true
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
                <Pressable onPress={() => setBoneString(false)}>
                  <Fontisto
                    name={
                      boneString === false
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
        <View style={setCoatForm.centerContent}>
          <Text style={{ color: themeColors.text }}>
            Commentarer och special-önskemål
          </Text>
          <TextInput style={styleCoatForm.bigInput}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            (symboler, andra färger?)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomFormCoat;
