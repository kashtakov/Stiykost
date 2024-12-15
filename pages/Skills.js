import { useEffect } from "react";

import { Text, ScrollView, StyleSheet } from "react-native";
import SkillsPsycho from "../components/SkillsPsycho";
import SkillsORT from "../components/SkillsORT";



function SkillsScreen() {



    return (
      <ScrollView>
        <Text style={styles.titeleText}>Шкала психічного здоров’я</Text>
  <SkillsPsycho/>
  <Text style={styles.titeleText}>Навички стійкості під час операцій</Text>
  <SkillsORT/>

      </ScrollView>

    
    );
  }

  export default SkillsScreen;

  const styles = StyleSheet.create({
    titeleText:{
      fontSize:20,
      fontWeight:'500',
      textAlign:'center',
      marginVertical: 20
    }
  });