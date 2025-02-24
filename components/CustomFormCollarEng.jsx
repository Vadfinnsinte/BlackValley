import {
  Pressable,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { checkboxStyle, styleCoatForm } from "../constants/formStyles";
import { Colors } from "../constants/Colors";
import { useEffect, useState } from "react";
import { fontItems } from "../constants/fonts";
import DropDownPicker from "react-native-dropdown-picker";
import { fetchCollection } from "../functions/fetchCollection";
import { formStore } from "../data/formStoreHooks";

const CustomFormCollarEng = () => {
  // -- colors and responsiv variables --
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //
  const {
    stepThree,
    setStepThree,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    setCollarForm,
    selectedModalCollar,
    setSelectedModalCollar,
    selectedWidth,
    setSelectedWidth,
    selectedLeather,
    setSelectedLeather,
    selectedFont,
    setSelectedFont,
    selectedMetal,
    setSelectedMetal,
    collarModelOpen,
    setCollarModelOpen,
    openWidth,
    setOpenWidth,
    openLeather,
    setOpenLeather,
    openFont,
    setOpenFont,
    openMetal,
    setOpenMetal,
    setComingFromForm,
  } = formStore();
  const [models, setModels] = useState([
    { label: "Snap Lock", value: "Snap Lock" },
    { label: "Half Choke", value: "Half Choke" },
    { label: "Snap + Half Choke", value: "Snap + Half Choke" },
    { label: "Other (specify in comments)", value: "Other" },
  ]);
  const [collarWidth, setCollarWidth] = useState([
    { label: "5cm, 589:-", value: "5cm, 589:-" },
    { label: "3,5cm, 529:-", value: "3,5cm, 529:-" },
    { label: "4cm, 529:-", value: "4cm, 529:-" },
  ]);
  const [metals, setMetals] = useState([
    { label: "Black", value: "Black" },
    { label: "Silver", value: "Silver" },
    { label: "Solid Brass (40 SEK extra)", value: "Solid Brass" },
  ]);
  const [leathers, setLeathers] = useState([]);
  const [chosenFont, setChosenFonts] = useState(fontItems);
  // --

  const fetchLeatherColors = async () => {
    const response = await fetchCollection("leather");
    if (response) {
      const allColors = response
        .filter((name) => name.color)
        .map((name) => ({
          label: name.colorEng,
          value: name.colorEng,
        }));

      setLeathers(allColors);
    }
  };

  useEffect(() => {
    fetchLeatherColors();
    setComingFromForm("Collar");
  }, []);

  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setStepOne(true);
          setStepTwo(false);
          setCollarForm(false);
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
          Collar
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View style={{ zIndex: 13 }}>
            <Text style={{ color: themeColors.text }}>Model</Text>
            <DropDownPicker
              open={collarModelOpen}
              items={models}
              value={selectedModalCollar}
              setOpen={setCollarModelOpen}
              setValue={(callback) => {
                const newValue = callback(selectedModalCollar);
                setSelectedModalCollar(newValue);
              }}
              setItems={setModels}
              placeholder="Choose model"
              style={[styleCoatForm.dropDown, { zIndex: 110 }]}
              dropDownContainerStyle={{ maxHeight: 150 }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Measurements</Text>
            <TextInput
              style={
                width < 790 ? styleCoatForm.input : styleCoatForm.inputSmall
              }></TextInput>
          </View>
          <View style={{ zIndex: 11 }}>
            <Text style={{ color: themeColors.text }}>Width</Text>
            <DropDownPicker
              open={openWidth}
              value={selectedWidth}
              items={collarWidth}
              setOpen={setOpenWidth}
              setItems={setCollarWidth}
              placeholder="Choose Width"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedWidth);
                setSelectedWidth(newValue);
              }}
            />
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 9 },
          ]}>
          <View style={{ zIndex: 11 }}>
            <Text style={{ color: themeColors.text }}>
              Desired leather colour
            </Text>
            <DropDownPicker
              open={openLeather}
              value={selectedLeather}
              items={leathers}
              setOpen={setOpenLeather}
              setItems={setLeathers}
              placeholder="Pick a colour"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedLeather);
                setSelectedLeather(newValue);
              }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Embroidery colour</Text>
            <TextInput
              style={
                width < 790 ? styleCoatForm.input : styleCoatForm.inputSmall
              }></TextInput>
          </View>
          <View style={{ zIndex: 10 }}>
            <Text style={{ color: themeColors.text }}>
              Desired metal for the ring
            </Text>
            <DropDownPicker
              open={openMetal}
              value={selectedMetal}
              items={metals}
              setOpen={setOpenMetal}
              setItems={setMetals}
              placeholder="Choose metal rings"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedMetal);
                setSelectedMetal(newValue);
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
              e.g. (AlViN)(alvin)
            </Text>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Font</Text>
            <DropDownPicker
              open={openFont}
              value={selectedFont}
              items={chosenFont}
              setOpen={setOpenFont}
              setItems={setChosenFonts}
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
        <View>
          <Text style={{ color: themeColors.text, marginTop: 20 }}>
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
          setCollarForm(false);
          setStepTwo(false);
        }}>
        <Text style={checkboxStyle.button}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormCollarEng;
