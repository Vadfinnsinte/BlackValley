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

const CustomFormCollar = ({
  stepThree,
  setStepThree,
  stepOne,
  setStepOne,
  stepTwo,
  setStepTwo,
  setCollarForm,
}) => {
  // -- colors and responsiv variables --
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //

  // -- State handlers --
  // Selected dropdown values
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedWidth, setSelectedWidth] = useState(null);
  const [selectedLeather, setSelectedLeather] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);
  const [selectedMetal, setSelectedMetal] = useState(null);
  // Open or closed dropdown
  const [modelOpen, setModelOpen] = useState(false);
  const [openWidth, setOpenWidth] = useState(false);
  const [openLeather, setOpenLeater] = useState(false);
  const [openFont, setOpenFont] = useState(false);
  const [openMetal, setOpenMetal] = useState(false);
  //  List ofbjects with dropdown selections
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
  const [leathers, setLeathers] = useState([]);
  const [chosenFont, setChosenFonts] = useState(fontItems);
  // --

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
          Tillbaka till steg 1
        </Text>
      </Pressable>
      <View>
        <Text
          className={`text-xl  ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          {" "}
          Halsband{" "}
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Modell</Text>
            <DropDownPicker
              open={modelOpen}
              value={selectedModel}
              items={models}
              setOpen={setModelOpen}
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
            <TextInput
              style={
                width < 790 ? styleCoatForm.input : styleCoatForm.inputSmall
              }></TextInput>
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
            { zIndex: 9 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>
              Önskad färg på skinn
            </Text>
            <DropDownPicker
              open={openLeather}
              value={selectedLeather}
              items={leathers}
              setOpen={setOpenLeater}
              setValue={setSelectedLeather}
              setItems={setLeathers}
              placeholder="Välj färg"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              onChangeValue={(value) => {
                setSelectedLeather(value);
              }}
            />
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Färg på brodyr</Text>
            <TextInput
              style={
                width < 790 ? styleCoatForm.input : styleCoatForm.inputSmall
              }></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>
              Önskad metall på ring
            </Text>
            <DropDownPicker
              open={openMetal}
              value={selectedMetal}
              items={metals}
              setOpen={setOpenMetal}
              setValue={setSelectedMetal}
              setItems={setMetals}
              placeholder="Välj ringar"
              style={styleCoatForm.dropDown}
              dropDownContainerStyle={{ maxHeight: 150 }}
              onChangeValue={(value) => {
                setSelectedMetal(value);
              }}
            />
          </View>
        </View>
        <View>
          <Text style={{ color: themeColors.text }}>Broderad text</Text>
          <TextInput style={styleCoatForm.input}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            te.x. (AlViN)(alvin)
          </Text>
        </View>
        <View>
          <Text style={{ color: themeColors.text, marginTop: 20 }}>
            Kommentarer och special-önskemål
          </Text>
          <TextInput style={styleCoatForm.bigInput}></TextInput>
          <Text style={{ color: themeColors.text }} className="text-sm">
            (symboler, andra färger?)
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setStepThree(true);
          setCollarForm(false);
          setStepTwo(false);
        }}>
        <Text style={checkboxStyle.button}>Gå vidare</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormCollar;
