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
// import Fontisto from "@expo/vector-icons/Fontisto";
import { checkboxStyle, styleCoatForm } from "../StyleSheet/formStyles";
import { useEffect } from "react";
import { fetchCollection } from "../functions/fetchCollection";
import { formStore } from "../data/formStoreHooks";
import { validateStoreHooks } from "../data/validateStoreHooks";
import { BiCheckSquare } from "react-icons/bi";
import { BiRectangle } from "react-icons/bi";

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
  const [softshell, setSoftshell] = useState([]);

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
  const fetchSoftshell = async () => {
    const response = await fetchCollection("softshell");
    if (response) {
      const allColors = response
        .filter((name) => name.color)
        .map((name) => ({
          label: name.color,
          value: name.color,
        }));
      setSoftshell(allColors);
    }
  };

  useEffect(() => {
    if (selectedCoatVariables.selectedModelCoat === "Cosy") {
      setSelectedCoatVariables.setColorColar(true);
    } else if (selectedCoatVariables.selectedModelCoat === "Limitless") {
      setSelectedCoatVariables.setSoftShellChosen(true);
    } else {
      setSelectedCoatVariables.setColorColar(false);
    }
  }, [selectedCoatVariables.selectedModelCoat]);

  useEffect(() => {
    fetchwoolColors();
    fetchSoftshell();
    setComingFromForm("Coat");
  }, []);
  console.log(selectedCoatVariables.selectedModelCoat);

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
    if (
      selectedCoatVariables.selectedModelCoat !== "Limitless" &&
      selectedCoatVariables.selectedColor === null
    ) {
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
          <View style={{ zIndex: 11 }}>
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
              showArrowIcon={false}
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
              placeholder="rygg, bröst, hals (i cm)"
              placeholderTextColor="#808080"
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
              showArrowIcon={false}
              open={openColor}
              value={selectedCoatVariables.selectedColor}
              items={woolColors}
              setOpen={setOpenColor}
              setItems={setWoolColors}
              placeholder={
                selectedCoatVariables.softShellChosen
                  ? "Ej valbar"
                  : "Välj färg"
              }
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedCoatVariables.selectedColor);
                setSelectedCoatVariables.setSelectedColor(newValue);
                setWarnings.setWoolWarning(false);
              }}
              disabled={selectedCoatVariables.softShellChosen}
              disabledStyle={{ backgroundColor: "#d3d3d3", opacity: 0.6 }}
            />
          </View>
          {(selectedCoatVariables.colorColar ||
            selectedCoatVariables.softShellChosen) && (
            <View style={{ zIndex: 8 }}>
              <Text style={{ color: themeColors.text }}>
                {selectedCoatVariables.colorColar
                  ? "Färg på Cosy krage"
                  : "Färg på Softshell"}
              </Text>
              <DropDownPicker
                showArrowIcon={false}
                open={openCozy}
                value={
                  selectedCoatVariables.colorColar
                    ? selectedCoatVariables.cosyCollarColor
                    : selectedCoatVariables.softshellColor
                }
                items={selectedCoatVariables.colorColar ? krage : softshell}
                setOpen={setOpenCosy}
                setItems={setKrage}
                placeholder="Välj en färg"
                style={styleCoatForm.dropDown}
                dropDownContainerStyle={{ maxHeight: 150 }}
                // setValue={(callback) => {
                //   const newValue = callback(
                //     selectedCoatVariables.cosyCollarColor
                //   );
                //   setWarnings.setModelWarningCoat(false);
                //   setSelectedCoatVariables.setCosyCollarColor(newValue);
                // }}
                setValue={(callback) => {
                  const newValue = callback(
                    selectedCoatVariables.colorColar
                      ? selectedCoatVariables.cosyCollarColor
                      : selectedCoatVariables.softshellColor
                  );
                  setWarnings.setModelWarningCoat(false);

                  if (selectedCoatVariables.colorColar) {
                    setSelectedCoatVariables.setCosyCollarColor(newValue);
                  } else {
                    setSelectedCoatVariables.setSoftshellColor(newValue);
                  }
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
              showArrowIcon={false}
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
                alignItems: "center",
                justifyContent: "center",
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: themeColors.text, margin: 2 }}
                  className="m-2">
                  Ja
                </Text>
                <Pressable
                  onPress={() => setSelectedCoatVariables.setLegString(true)}>
                  {selectedCoatVariables.legString === true ? (
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: themeColors.text, margin: 2 }}>Nej</Text>
                <Pressable
                  onPress={() => setSelectedCoatVariables.setLegString(false)}>
                  {selectedCoatVariables.legString === false ? (
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
            style={[
              styleCoatForm.bigInput,
              { textAlignVertical: "top" },
            ]}></TextInput>
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
