import {
  Pressable,
  Text,
  TextInput,
  View,
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
import { validateStoreHooks } from "../data/validateStoreHooks";

const CustomFormCoat = () => {
  const {
    selectedCoatVariables,
    setSelectedCoatVariables,
    openCoatModel,
    setOpenCoatModel,
    openColor,
    setOpenColor,
    openFont,
    setOpenFont,
    setComingFromForm,
    setChosenForm,
    setChosenStep,
  } = formStore();
  const {
    setWarnings,
    modelWarningCoat,
    measureWarning,
    woolWarning,
    legStringWarning,
  } = validateStoreHooks();
  // colors and responsiv variables.
  const [openCozy, setOpenCosy] = useState(false);
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
  const [krage, setKrage] = useState([
    { label: "Svart", value: "Svart" },
    { label: "Grå", value: "Grå" },
    { label: "Brun", value: "Brun" },
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

  useEffect(() => {
    if (selectedCoatVariables.selectedModelCoat === "Cosy") {
      setSelectedCoatVariables.setColorColar(true);
    } else {
      setSelectedCoatVariables.setColorColar(false);
    }
  }, [selectedCoatVariables.selectedModelCoat]);

  useEffect(() => {
    fetchwoolColors();
    setComingFromForm("Coat");
  }, []);
  const continueToNext = () => {
    let warning = false;
    if (selectedCoatVariables.selectedModelCoat === null) {
      setWarnings.setModelWarningCoat(true);
      warning = true;
    }
    if (selectedCoatVariables.measurementsCoat === "") {
      setWarnings.setMeasureWarning(true);
      warning = true;
    }
    if (selectedCoatVariables.selectedColor === null) {
      setWarnings.setWoolWarning(true);
      warning = true;
    }
    if (selectedCoatVariables.legString === null) {
      setWarnings.setLegStringWarning(true);
      warning = true;
    } else if (!warning) {
      setChosenStep.setStepThree(true);
      setChosenForm.setCoatForm(false);
      setChosenStep.setStepTwo(false);
      warning = false;
    }
  };

  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setChosenStep.setStepOne(true);
          setChosenStep.setStepTwo(false);
          setChosenForm.setCoatForm(false);
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
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Modell</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: modelWarningCoat.bool ? 1 : 0 },
                ]}>
                {modelWarningCoat.message}
              </Text>
            </View>
            <DropDownPicker
              open={openCoatModel}
              value={selectedCoatVariables.selectedModelCoat}
              items={models}
              setOpen={setOpenCoatModel}
              setItems={setModels}
              placeholder="Välj en modell"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(
                  selectedCoatVariables.selectedModelCoat
                );
                setWarnings.setModelWarningCoat(false);
                setSelectedCoatVariables.setSelectedModelCoat(newValue);
              }}
            />
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Mått</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: measureWarning.bool ? 1 : 0 },
                ]}>
                {measureWarning.message}
              </Text>
            </View>
            <TextInput
              // keyboardType="numeric"
              value={selectedCoatVariables.measurementsCoat}
              onChangeText={(text) => {
                setSelectedCoatVariables.setMeasurementsCoat(text);
                setWarnings.setMeasureWarning(false);
              }}
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 9 },
          ]}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>
                Önskad färg på tyg
              </Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: woolWarning.bool ? 1 : 0 },
                ]}>
                {woolWarning.message}
              </Text>
            </View>
            <DropDownPicker
              open={openColor}
              value={selectedCoatVariables.selectedColor}
              items={woolColors}
              setOpen={setOpenColor}
              setItems={setWoolColors}
              placeholder="Välj färg"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedCoatVariables.selectedColor);
                setSelectedCoatVariables.setSelectedColor(newValue);
                setWarnings.setWoolWarning(false);
              }}
            />
          </View>
          {selectedCoatVariables.colorColar && (
            <View>
              <Text style={{ color: themeColors.text }}>
                Färg på Cosy krage
              </Text>
              <DropDownPicker
                open={openCozy}
                value={selectedCoatVariables.cosyCollarColor}
                items={krage}
                setOpen={setOpenCosy}
                setItems={setKrage}
                placeholder="Välj en färg"
                style={styleCoatForm.dropDown}
                dropDownContainerStyle={{ maxHeight: 150 }}
                setValue={(callback) => {
                  const newValue = callback(
                    selectedCoatVariables.cosyCollarColor
                  );
                  setWarnings.setModelWarningCoat(false);
                  setSelectedCoatVariables.setCosyCollarColor(newValue);
                }}
              />
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
              value={selectedCoatVariables.brodyrColor}
              onChangeText={(text) => {
                setSelectedCoatVariables.setBrodyrColor(text);
              }}
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Typsnitt</Text>

            <DropDownPicker
              open={openFont}
              value={selectedCoatVariables.selectedFont}
              items={selectedCoatVariables.chosenFont}
              setOpen={setOpenFont}
              setItems={setSelectedCoatVariables.setChosenFont}
              placeholder="Välj font"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedCoatVariables.selectedFont);
                setSelectedCoatVariables.setSelectedFont(newValue);
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
              value={selectedCoatVariables.brodyrText}
              onChangeText={(text) =>
                setSelectedCoatVariables.setBrodyrText(text)
              }
              style={styleCoatForm.input}></TextInput>
            <Text style={{ color: themeColors.text }} className="text-sm">
              blir exakt som skrivet te.x. ALviN, alvin
            </Text>
          </View>

          <View
            style={[
              styleCoatForm.flexBoxSmall,
              {
                flex: 1,
                alignSelf: "center",
                alignItems: "center",
              },
            ]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Bensnören? </Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: legStringWarning.bool ? 1 : 0 },
                ]}>
                {legStringWarning.message}
              </Text>
            </View>
            <View
              style={[
                styleCoatForm.flexBox,
                { alignSelf: "center", marginBottom: 0 },
              ]}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 7,
                  marginRight: 7,
                }}>
                <Text
                  style={{ color: themeColors.text, margin: 2 }}
                  className="m-2">
                  Ja
                </Text>
                <View>
                  <Pressable
                    onPress={() => setSelectedCoatVariables.setLegString(true)}>
                    <Fontisto
                      name={
                        selectedCoatVariables.legString === true
                          ? "checkbox-active"
                          : "checkbox-passive"
                      }
                      size={24}
                      color={themeColors.detail}
                    />
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 7,
                    marginRight: 7,
                  }}>
                  <Text style={{ color: themeColors.text, margin: 2 }}>
                    Nej
                  </Text>
                  <Pressable
                    onPress={() =>
                      setSelectedCoatVariables.setLegString(false)
                    }>
                    <Fontisto
                      name={
                        selectedCoatVariables.legString === false
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
        </View>
        <View>
          <Text style={{ color: themeColors.text }}>
            Kommentarer och special-önskemål
          </Text>
          <TextInput
            multiline={true}
            value={selectedCoatVariables.commentsCoat}
            onChangeText={(text) =>
              setSelectedCoatVariables.setCommentsCoat(text)
            }
            style={styleCoatForm.bigInput}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            (symboler, andra färger?)
          </Text>
        </View>
      </View>
      <Pressable onPress={continueToNext}>
        <Text style={checkboxStyle.button}>Gå vidare</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormCoat;
