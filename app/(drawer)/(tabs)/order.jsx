import woolBg from "../../../assets/images/woolImage.jpg";
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";
// import { Ionicons } from '@expo/vector-icons'
import Fontisto from '@expo/vector-icons/Fontisto';
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import CustomFormCoat from "../../../components/CustomFormCoat";
import CustomFormCollar from "../../../components/CustomFormCollar";
import CustomFormOther from "../../../components/CustomFormOther";
const OrderScreen = () => {
  const [coat, setCoat] = useState(false)
  const [coatForm, setCoatForm] = useState(false)
  const [collar, setCollar] = useState(false)
  const [collarForm, setCollarForm] = useState(false)
  const [other, setOther] = useState(false)
  const [otherForm, setOtherForm] = useState(false)
  const [warning, setWarning] = useState(false)
  const [warningmessage, setWarningmessage] = useState("Please check one of the boxes")
  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(true)
  const [stepThree, setStepThree] = useState(true)

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const openCustomForm = () => {
    if(coat) {
      setCoatForm(true)
      setStepOne(false)
      setStepTwo(true)
    }
    else if(collar) {
      setCollarForm(true)
      setStepOne(false)
      setStepTwo(true)
    }
    else if(other){
      setOtherForm(true)
      setStepOne(false)
      setStepTwo(true)
    }
    else {
      setWarning(true)
    }
  } 
  const handleCoat = () => {
    setWarning(false)
    if(collar || other){
      return
    }else {
      setCoat(prevCoat => !prevCoat) 
    }
  }
  const handleCollar = () => {
    setWarning(false)
    if(coat || other){
      return
    }else {
      setCollar(prevCollar => !prevCollar) 
    }
  }
  const handleOther = () => {
    setWarning(false)
    if(coat || collar){
      return
    }else {
      setOther(prevOther => !prevOther)
    }
  }

  return (
      <ImageBackground
       source={woolBg}
        style={checkboxStyle.imageBackground}
        resizeMode="cover">
      <View style={themeColors.overlay}>
      <SafeAreaView style={{ backgroundColor: themeColors.background, flex: 1, }} className="mx-10">
      <View style={checkboxStyle.container}>
        <View style={checkboxStyle.containerText}>
          <Text className="text-2xl mb-3" style={{color: themeColors.text}}>Här kan du lägga din beställnig</Text>
          <Text style={{color: themeColors.text}}>
            Skicka en beställning/förfrågan så återkommer vi med prisinformation.
            Vänligen läs igenom våra köpvillkor (ADD MODAL), dessa godkänner du genom att beställa.
          </Text>

        </View>
        <View style={[checkboxStyle.blueSeperator, { backgroundColor: themeColors.detail }]}>
        <Text className="text-xl text-center"style={{color: "#11181C"}} >1. Vänligen välj vad du vill beställa</Text>
        </View>
       
{     stepOne && 
<View>
        <View style={checkboxStyle.containerCheck}>  
          <View>
            <Text style={{color: themeColors.text}}>
              Täcke
            </Text>
            {coat ? <Pressable onPress={handleCoat}>
              <Fontisto name="checkbox-active" size={24} color={themeColors.detail}style={{ alignSelf: 'center' }} /> 
              </Pressable>
            : 
            <Pressable onPress={handleCoat}>
              <Fontisto name="checkbox-passive" size={24} color={themeColors.detail} style={{ alignSelf: 'center' }}/>

            </Pressable>}
          </View>
          <View >
            <Text style={{color: themeColors.text}} >
              Halsband
            </Text>
            {collar ? 
            <Pressable onPress={handleCollar}>
              <Fontisto name="checkbox-active" size={24} color={themeColors.detail}style={{ alignSelf: 'center' }} /> 

            </Pressable>
            : 
            <Pressable onPress={handleCollar}>
            <Fontisto name="checkbox-passive" size={24} color={themeColors.detail} style={{ alignSelf: 'center' }}/>

            </Pressable>}
            </View>
          <View>
            <Text style={{color: themeColors.text}}>
              Annat
            </Text>
            {other ? 
            <Pressable onPress={handleOther}> 
              <Fontisto name="checkbox-active" size={24} color={themeColors.detail}style={{ alignSelf: 'center' }} /> 

            </Pressable>
            : 
            <Pressable  onPress={handleOther}>
              <Fontisto name="checkbox-passive" size={24} color={themeColors.detail} style={{ alignSelf: 'center' }} />

            </Pressable>}
          </View>
          
        </View>
              <Text className={`text-red-400 text-center -mb-2 mt-2 ${!warning ? "invisible" : ""}`}>{warningmessage}</Text>
          <Pressable onPress={openCustomForm}>
            <Text style={checkboxStyle.button} >Gå vidare</Text> 
            
          </Pressable>
          <Text style={{color: themeColors.text}} className="text-center text-xs -mt-2">Om du vill beställa flera produkter så finns det alternativet i nästa steg.</Text> 
          </View>
          }
          

        <View style={[checkboxStyle.blueSeperator, { backgroundColor: themeColors.detail }]}>
        <Text className="text-xl text-center"style={{color: "#11181C"}} >2. Mått, färg och specifikationer.</Text>
        </View>
        { stepTwo && 
        <View>
              {coatForm && <CustomFormCoat setStepThree={setStepThree} stepThree={stepThree} stepOne={stepOne} setStepOne={setStepOne} stepTwo={stepTwo} setStepTwo={setStepTwo}/>}
              {collarForm && <CustomFormCollar setStepThree={setStepThree} stepThree={stepThree} stepOne={stepOne} setStepOne={setStepOne} stepTwo={stepTwo} setStepTwo={setStepTwo} />}
              {otherForm && <CustomFormOther setStepThree={setStepThree} stepThree={stepThree} stepOne={stepOne} setStepOne={setStepOne} stepTwo={stepTwo} setStepTwo={setStepTwo}/>}
        </View>
        }

        <View style={[checkboxStyle.blueSeperator, { backgroundColor: themeColors.detail }]}>
          
        <Text className="text-xl text-center"style={{color: "#11181C"}} >3. Kontaktuppgifter.</Text>
        </View>
               {/* LÄGG IN COMPONENT. */}
      </View>


    </SafeAreaView>
    </View>
    </ImageBackground>
  );
};
export const checkboxStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    alignItems: "center",
    margin: 20,
  },
  containerCheck: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    margin: 10,
  },

  imageBackground: {
    flex: 1,
  },
  blueSeperator: {
    flex: 1,
    maxHeight: 40,
    padding: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    placeSelf: "center",
    backgroundColor: "#000", 
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20, 
    textAlign: "center",
    color: "#82BCBD",
    fontWeight: "600",
    margin: 12
  }
})
export default OrderScreen;
