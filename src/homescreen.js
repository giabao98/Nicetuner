import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GuitarTuner from "./guitartuner";
import ChordLibrary, {  } from "./ChordLibrary/chordlibrary";

function Metronome() {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Metronome</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'TUNER') {
              return (
                <Image style={styles.tabIcon} source={require('./Images/tuner.png')}/>
              );
            } else if (route.name === 'METRONOME') {
              return (
                <Image style={styles.tabIcon} source={require('./Images/metronome.png')}/>
              );
            } else if (route.name === 'CHORD LIBRARY') {
              return (
                <Image style={styles.tabIcon} source={require('./Images/chord.png')}/>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="METRONOME" component={Metronome}/>
        <Tab.Screen name="TUNER" component={GuitarTuner}/>
        <Tab.Screen name="CHORD LIBRARY" component={ChordLibrary}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon:{
    width: 30,
    height:30,
    //backgroundColor:'pink'
  }
});