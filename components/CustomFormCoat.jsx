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
  const [open, setOpen] = useState(false);
  const [boneString, setBoneString] = useState(null);
  const [items, setItems] = useState([
    { label: "Modell 1", value: "model1" },
    { label: "Modell 2", value: "model2" },
  ]);

  return (
      
    <View style={styleCoatForm .centerContent} >
      <Pressable
          onPress={() => {
            setStepOne(true);
            setStepTwo(false);
            setCoatForm(false);
          }}>
          <Text >Tillbaka till steg 1</Text>
        </Pressable>
      <View >
      <Text className={`text-xl  ${width < 790 ? "text-center" : ""}` } styleCoatForm ={{color: themeColors.detail}}>Täcke</Text>
        <View style={[width > 750 ? styleCoatForm .flexBox : styleCoatForm .flexBoxSmall , { zIndex: 10 }]}>
          <View>
            <Text>Model</Text>
            <DropDownPicker
              open={open}
              value={selectedModel}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedModel}
              setItems={setItems}
              style={styleCoatForm .dropDown}
              dropDownContainerStyle={styleCoatForm .dropDownContainer}
            />
          </View>
          <View>
            <Text>Mått</Text>
            <TextInput style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <View style={[width > 750 ? styleCoatForm .flexBox : styleCoatForm .flexBoxSmall , { zIndex: 9 }]}>
          <View>
            <Text>Önskad färg på tyg</Text>
            <TextInput style={styleCoatForm .input}></TextInput>
          </View>
          <View>
            <Text>Önskad färg på Cosy krage</Text>
            <TextInput style={styleCoatForm .input}></TextInput>
            {/* gör conditional */}
          </View>
        </View>
        <Text className={`text-xl ${width < 790 ? "text-center" : ""}` }
        style={{color: themeColors.detail}}>Brodyr</Text>
        <View style={[width > 750 ? styleCoatForm .flexBox : styleCoatForm .flexBoxSmall , { zIndex: 8 }]}>
          <View>
            <Text>Önskad Färg</Text>
            <TextInput style={styleCoatForm .input}></TextInput>
          </View>
          <View>
            <Text>Typsnitt</Text>
            <TextInput style={styleCoatForm .input}></TextInput>
          </View>
        </View>
        <View >
          <Text>Text</Text>
          <TextInput style={styleCoatForm .input}></TextInput>
          <Text className="text-sm"> te.x. (AlViN)(alvin)</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{ color: themeColors.text }}>Bensnöre</Text>
          <View style={styleCoatForm .flexBox}>
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
                   {/* behöver lägga till så man ej kan gå vidare ifall man ej klickat i ja eller nej */}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View>
        
      </View>
    </View>
 
  );
};

export default CustomFormCoat;


