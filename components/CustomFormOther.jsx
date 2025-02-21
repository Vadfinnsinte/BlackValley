import { Pressable, Text, View } from "react-native";
import { checkboxStyle } from "../constants/formStyles";
import { formStore } from "../data/formStoreHooks";
import { useEffect } from "react";

const CustomFormOther = () => {
  const {
    stepThree,
    setStepThree,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    setOtherForm,
    comingFromForm,
    setComingFromForm,
  } = formStore();
  useEffect(() => {
    setComingFromForm("Other");
  }, []);
  return (
    <View>
      <Text className="text-center text-xl"> Annat </Text>

      <Pressable
        onPress={() => {
          setStepOne(true);
          setStepTwo(false);
          setOtherForm(false);
        }}>
        <Text style={checkboxStyle.button}>Tillbaka till steg 1</Text>
      </Pressable>
      {/* LÄgg till NOLLSTÄLLNING av AKTIVA FormVariabeln  */}
    </View>
  );
};

export default CustomFormOther;
