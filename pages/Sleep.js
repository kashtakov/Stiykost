import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SleepGuideScreen from "../components/SleepGuideScreen";
import SleepStressGuideScreen from "../components/SleepStressGuideScreen";
import RelaxationTechniquesScreen from "../components/RelaxationTechniquesScreen";

function SleepScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#6aa6f9"}, headerTintColor: '#fff'  })
  })
  
    return (<ScrollView>
      <SleepGuideScreen/>
      <SleepStressGuideScreen/>
      <RelaxationTechniquesScreen/>
      </ScrollView>
    );
  }

  export default SleepScreen;