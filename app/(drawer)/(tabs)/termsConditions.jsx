import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  useColorScheme,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Terms from "../../../StyleSheet/termsConditions.js";
import { Colors } from "@/constants/Colors";
import woolBg from "../../../assets/images/woolImage.jpg";
import { checkboxStyle } from "../../../constants/formStyles";
import GradientBackground from "../../../components/GradiantBackground.jsx";

const TermsConditions = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const small = width > 450;

  return (
    <ImageBackground
      source={woolBg}
      style={checkboxStyle.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
          <SafeAreaView
            style={{
              flex: 1,
            }}
            className="mx-10">
            <GradientBackground>
              <View style={{ alignItems: "center" }}>
                <Text style={[Terms.heading, { color: themeColors.text }]}>
                  Köpvillkor
                </Text>
                <View style={Terms.body}>
                  <View style={small ? Terms.container : Terms.containerSmall}>
                    <View>
                      <Text style={[Terms.title, { color: themeColors.text }]}>
                        PRISER OCH BETALNING
                      </Text>
                      <Text style={{ color: themeColors.text }}>
                        Priserna på hemsidan anges i svenska kronor inkl moms.
                        Betalning sker mot faktura i förskott - Swish eller
                        bankgiro.
                      </Text>
                    </View>
                    <View>
                      <Text style={[Terms.title, { color: themeColors.text }]}>
                        LEVERANSTID
                      </Text>
                      <Text style={{ color: themeColors.text }}>
                        Tillverkningstiden är ca 3 veckor. Ni får ett
                        meddelande, samt faktura till er mail när er order är
                        färdig. Det kan förekomma längre tillverkningstider
                        beroende på hur många som står på kö. Er order postas
                        den inom 3 arbetsdagar från det att betalning inkommit.
                        (Vi ansvarar ej för postens leveranstid) Kontakta oss
                        gärna för mer information om just din order och vad vi
                        kan erbjuda dig.
                      </Text>
                    </View>
                    <View>
                      <Text style={[Terms.title, { color: themeColors.text }]}>
                        FRAKT
                      </Text>
                      <Text style={{ color: themeColors.text }}>
                        Fraktkostnad för halsband 69:- och för täcken 89:-
                        Skickas spårbart via PostNord. Vi ansvarar ej för brev
                        som skadas under leverans eller som kommer bort på
                        vägen. För beställningar utanför Sverige vänligen
                        kontakta oss för prisuppgift.
                      </Text>
                    </View>
                  </View>
                  <View style={small ? Terms.container : Terms.containerSmall}>
                    <View>
                      <Text style={[Terms.title, { color: themeColors.text }]}>
                        ÅNGERRÄTT och REKLAMATION
                      </Text>
                      <Text style={{ color: themeColors.text }}>
                        Ingen ångerrätt gäller då produkterna är
                        specialtillverkade efter varje kunds specifika önskemål.
                        Upptäcker ni att något inte stämmer med er beställning
                        måste ni återkoppla till oss inom 7 dagar från att ni
                        mottagit er beställning. Har vi gjort något fel så
                        åtgärdar vi såklart felet. Vid reklamation eller ändring
                        av något i er beställning får ni själva stå för
                        returfrakten. Slitage och oaktsamhet med era produkter
                        är inget vi ansvarar för. Skötselråd för respektive
                        produkt hittar ni under fliken material.
                      </Text>
                    </View>
                    <View>
                      <Text style={[Terms.title, { color: themeColors.text }]}>
                        ALLMÄNT
                      </Text>
                      <Text style={{ color: themeColors.text }}>
                        Är ni tveksam eller har frågor om
                        färger/design/kombinationer osv, tveka inte att höra av
                        er. Det kan vara svårt att föreställa sig designen i
                        förväg men vi gör så gott vi kan för att hjälpa er välja
                        rätt. Varje produkt är unik och handgjord vilket medför
                        att ingen produkt är exakt den andra lik. Färger på
                        hemsidan/bilder kan variera beroende på vilken skärm man
                        tittar på samt vilket ljus vi fotat i. Är du osäker på
                        din design så maila oss gärna så hjälper vi till att få
                        det som du önskar. Har du specifika önskemål annat än
                        det som finns på hemsidan vänligen maila oss för
                        kostnadsförslag.
                      </Text>
                    </View>
                  </View>
                </View>
                <Text
                  style={[
                    Terms.title,
                    { color: themeColors.text, marginTop: 10, fontSize: 18 },
                  ]}>
                  Godkänd för F-skatt
                </Text>
              </View>
            </GradientBackground>
          </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default TermsConditions;
