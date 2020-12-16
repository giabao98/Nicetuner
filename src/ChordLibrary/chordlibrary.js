import { Component } from "react";
import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function A() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Metronome</Text>
      </View>
    );
}
function B() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Metronome</Text>
      </View>
    );
}
function C() {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Metronome</Text>
      </View>
    );
}


export default class ChordLibrary extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'TUNER') {
              return (
                <Image style={styles.tabIcon} source={require('../Images/tuner.png')}/>
              );
            } else if (route.name === 'METRONOME') {
              return (
                <Image style={styles.tabIcon} source={require('../Images/metronome.png')}/>
              );
            } else if (route.name === 'CHORD LIBRARY') {
              return (
                <Image style={styles.tabIcon} source={require('../Images/chord.png')}/>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
                <Tab.Screen name="METRONOME" component={A}/>
                <Tab.Screen name="TUNER" component={B}/>
                <Tab.Screen name="CHORD LIBRARY" component={C}/>

                </Tab.Navigator>
            </NavigationContainer>
        
        );
    }
}