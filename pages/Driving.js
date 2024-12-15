import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import StressManagementScreen from "../components/StressManagementScreen";
import MindfulBreathingScreen from "../components/MindfulBreathingScreen";
import LongFormBreathingScreen from "../components/LongFormBreathingScreen";
import VisualizationScreen from "../components/VisualizationScreen";
import TalkingTechniquesScreen from "../components/TalkingTechniquesScreen";
import PostponingWorriesScreen from "../components/PostponingWorriesScreen";
import PreparatoryMeasuresScreen from "../components/PreparatoryMeasuresScreen";
import WhatMattersNowScreen from "../components/WhatMattersNowScreen";
import PerspectiveShiftScreen from "../components/PerspectiveShiftScreen";
import GroundingScreen from "../components/GroundingScreen";
import ActiveGratitudeScreen from "../components/ActiveGratitudeScreen";

function DrivingScreen({navigation}) {
  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#fad707" }, headerTintColor: '#fff'  })
  })

    return (<ScrollView>
      <StressManagementScreen/>
      <MindfulBreathingScreen/>
      <LongFormBreathingScreen/>
      <VisualizationScreen/>
      <TalkingTechniquesScreen/>
      <PostponingWorriesScreen/>
      <PreparatoryMeasuresScreen/>
      <WhatMattersNowScreen/>
      <PerspectiveShiftScreen/>
      <GroundingScreen/>
      <ActiveGratitudeScreen/>
    </ScrollView>
      
    );
  }

  export default DrivingScreen;