import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-web";
import { checkboxStyle } from "../app/(drawer)/(tabs)/order";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";

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
  const [selectedModel, setSelectedModel] = useState(null);
  const [open, setOpen] = useState(false);
  const [boneString, setBoneString] = useState(null);
  const [items, setItems] = useState([
    { label: "Modell 1", value: "model1" },
    { label: "Modell 2", value: "model2" },
  ]);
  return (
    <View>
      <Text className="text-center text-xl"> Täcke </Text>
      <View>
        <View style={[style.flexBox, { zIndex: 1000 }]}>
          <View>
            <Text>Model</Text>
            <DropDownPicker
              open={open}
              value={selectedModel}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedModel}
              setItems={setItems}
              style={style.dropDown}
              dropDownContainerStyle={style.dropDownContainer}
            />
          </View>
          <View>
            <Text>Mått</Text>
            <TextInput style={style.input}></TextInput>
          </View>
        </View>
        <View style={style.flexBox}>
          <View>
            <Text>Önskad färg på tyg</Text>
            <TextInput style={style.input}></TextInput>
          </View>
          <View>
            <Text>Önskad färg på Cosy krage (om man valt model)</Text>
            <TextInput style={style.input}></TextInput>
          </View>
        </View>
        <Text>Brodyr</Text>
        <View style={style.flexBox}>
          <View>
            <Text>Önskad Färg</Text>
            <TextInput style={style.input}></TextInput>
          </View>
          <View>
            <Text>Typsnitt</Text>
            <TextInput style={style.input}></TextInput>
          </View>
        </View>
        <View>
          <Text>Text(skriv exakt som önskat te.x. (AlViN)(alvin))</Text>
          <TextInput style={style.input}></TextInput>
        </View>
        <View>
          <Text style={{ color: themeColors.text }}>Bensnöre</Text>
          <View style={style.flexBox}>
            {/* JA-alternativ */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Ja</Text>
              <Pressable onPress={() => setBoneString(true)}>
                <Fontisto
                  name={
                    boneString === true ? "checkbox-active" : "checkbox-passive"
                  }
                  size={24}
                  color={themeColors.detail}
                />
              </Pressable>
            </View>

            {/* NEJ-alternativ */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Nej</Text>
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
      <View>
        <Pressable
          style={checkboxStyle.button}
          onPress={() => {
            setStepOne(true);
            setStepTwo(false);
            setCoatForm(false);
          }}>
          <Text style={{ color: "#82BCBD" }}>Tillbaka till steg 1</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomFormCoat;

const style = StyleSheet.create({
  flexBox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  dropDown: {
    zIndex: 1000,
    position: "relative",
    width: 250,
  },
  dropDownContainer: {
    zIndex: 1000,
    position: "absolute",
    backgroundColor: "white",
    top: 50,
  },
});
