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
import DropDownPicker from "react-native-dropdown-picker";
import { fetchCollection } from "../functions/fetchCollection";
import { formStore } from "../data/formStoreHooks";

const CustomFormCollar = () => {
  // -- colors and responsiv variables --
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //
  const {
    setChosenForm,
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
    setChosenStep,
    selectedCollarVariables,
    setSelectedCollarVariables,
  } = formStore();
  const [models, setModels] = useState([
    { label: "Snäpplås", value: "Snäpplås" },
    { label: "Halvstryp", value: "Halvstryp" },
    { label: "Snäpp + Halvstryp", value: "Snäpp + halvstryp" },
    { label: "Annat( specifiera i kommentarer ) ", value: "Annat" },
  ]);
  const [collarWidth, setCollarWidth] = useState([
    { label: "5cm, 589:-", value: "5cm, 589:-" },
    { label: "3,5cm, 529:-", value: "3,5cm, 529:-" },
    { label: "4cm, 529:-", value: "4cm, 529:-" },
  ]);
  const [metals, setMetals] = useState([
    { label: "Svart", value: "Svart" },
    { label: "Silver", value: "Silver" },
    { label: "Solid mässing (40:- extra)", value: "Solid mässing" },
  ]);
  const [leathers, setLeathers] = useState(["loading"]);

  const fetchLeatherColors = async () => {
    const response = await fetchCollection("leather");
    if (response) {
      const allColors = response
        .filter((name) => name.color)
        .map((name) => ({
          label: name.color,
          value: name.color,
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
          setChosenStep.setStepOne(true);
          setChosenStep.setStepTwo(false);
          setChosenForm.setCollarForm(false);
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
          Halsband
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View style={{ zIndex: 13 }}>
            <Text style={{ color: themeColors.text }}>Modell</Text>
            <DropDownPicker
              open={collarModelOpen}
              onRequestClose={() => setCollarModelOpen(false)}
              items={models}
              value={selectedCollarVariables.selectedModalCollar}
              setOpen={setCollarModelOpen}
              setValue={(callback) => {
                const newValue = callback(
                  selectedCollarVariables.selectedModalCollar
                );
                setSelectedCollarVariables.setSelectedModalCollar(newValue);
              }}
              setItems={setModels}
              placeholder="Välj en modell"
              style={[styleCoatForm.dropDown, { zIndex: 110 }]}
              dropDownContainerStyle={{ maxHeight: 150 }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Mått</Text>
            <TextInput
              // keyboardType="numeric"
              style={
                width < 790 ? styleCoatForm.input : styleCoatForm.inputSmall
              }
              value={selectedCollarVariables.lengthCollar}
              onChangeText={(text) =>
                setSelectedCollarVariables.setLengthCollar(text)
              }></TextInput>
          </View>
          <View style={{ zIndex: 11 }}>
            <Text style={{ color: themeColors.text }}>Bredd</Text>
            <DropDownPicker
              open={openWidth}
              value={selectedCollarVariables.selectedWidth}
              items={collarWidth}
              setOpen={setOpenWidth}
              setItems={setCollarWidth}
              placeholder="Välj bredd"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(
                  setSelectedCollarVariables.selectedWidth
                );
                setSelectedCollarVariables.setSelectedWidth(newValue);
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
              Önskad färg på skinn
            </Text>
            <DropDownPicker
              open={openLeather}
              value={selectedCollarVariables.selectedLeather}
              items={leathers}
              setOpen={setOpenLeather}
              setItems={setLeathers}
              placeholder="Välj färg"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(
                  selectedCollarVariables.selectedLeather
                );
                setSelectedCollarVariables.setSelectedLeather(newValue);
              }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Färg på brodyr</Text>
            <TextInput
              style={
                width < 790 ? styleCoatForm.input : styleCoatForm.inputSmall
              }
              value={selectedCollarVariables.brodyrColor}
              onChangeText={(text) =>
                setSelectedCollarVariables.setBrodyrColor(text)
              }></TextInput>
          </View>
          <View style={{ zIndex: 10 }}>
            <Text style={{ color: themeColors.text }}>
              Önskad metall på ring
            </Text>
            <DropDownPicker
              open={openMetal}
              value={selectedCollarVariables.selectedMetal}
              items={metals}
              setOpen={setOpenMetal}
              setItems={setMetals}
              placeholder="Välj ringar"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(
                  selectedCollarVariables.selectedMetal
                );
                setSelectedCollarVariables.setSelectedMetal(newValue);
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
              value={selectedCollarVariables.brodyrText}
              onChangeText={(text) =>
                setSelectedCollarVariables.setBrodyrText(text)
              }
              style={styleCoatForm.input}></TextInput>
            <Text style={{ color: themeColors.text }} className="text-sm">
              te.x. (AlViN)(alvin)
            </Text>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Typsnitt</Text>
            <DropDownPicker
              open={openFont}
              value={selectedCollarVariables.selectedFont}
              items={selectedCollarVariables.chosenFont}
              setOpen={setOpenFont}
              setItems={setSelectedCollarVariables.setChosenFonts}
              placeholder="Välj font"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              setValue={(callback) => {
                const newValue = callback(selectedCollarVariables.selectedFont);
                setSelectedCollarVariables.setSelectedFont(newValue);
              }}
            />
          </View>
        </View>
        <View>
          <Text style={{ color: themeColors.text, marginTop: 20 }}>
            Kommentarer och special-önskemål
          </Text>
          <TextInput
            multiline={true}
            value={selectedCollarVariables.commentsCollar}
            onChangeText={(text) =>
              setSelectedCollarVariables.setCommentsCollar(text)
            }
            style={styleCoatForm.bigInput}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            (symboler, andra färger?)
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setChosenStep.setStepThree(true);
          setChosenForm.setCollarForm(false);
          setChosenStep.setStepTwo(false);
        }}>
        <Text style={checkboxStyle.button}>Gå vidare</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormCollar;
