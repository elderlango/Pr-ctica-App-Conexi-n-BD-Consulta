import React from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserInput from './components/usuario';
import PassInput from './components/pass';
import Dropdown from './components/dropdown';
import DropdownV from './components/dropdownV';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

import Chart from './components/ChartPage';

 function handlePress() {
    console.log('You tapped the button!');
  }


function ProductsList({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFC0CB', '#FF69B4']}
        style={styles.background}
      >
        <Text style={{ fontSize: 50, color: 'white' }}>Home</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="user" size={90} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'white' }}>Usuario</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 3, width: 10, flex: 1 }} />
              <Text style={{ marginLeft: 10, color: 'white' }}>En línea</Text>
            </View>
          </View>
        </View>
        <Button
          title="Registro pendiente"
          onPress={() => navigation.navigate('Home')}
          color="crimson"
        />        
        <Text style={{ fontSize: 20, color: 'white' }}>Confirmar Correo</Text>

        <Dropdown />
        <DropdownV />
      </LinearGradient>
    </View>
  );
}

function ChartR({ navigation }) {

  return (
  <Chart/>
  );
}

function Bottomtap() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProductsList} />
        <Tab.Screen name="Charts" component={ChartR} />
      </Tab.Navigator>
  );
}

function Inicio({navigation}) {
  return (
    <View style={[styles.container, styles.blackBackground]}>
      <FontAwesome name="user" size={100} color="black" />
            <Text style={styles.smallText}>!REGISTRATE AHORA!</Text>
      <UserInput />
      <PassInput />
      <Button color='#a7a8ac' title="Iniciar Sesion" 
      onPress={() => 
    navigation.navigate('Details')}
/> 
    </View> 
  );
}
const Tab = createMaterialBottomTabNavigator();
  const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Inicio}
            options={{
              headerTitle: '',
              headerStyle: {
                height: 0,
              },
            }}
          />
        <Stack.Screen name="Details" component={Bottomtap}
         options={{
              headerTitle: '',
              headerStyle: {
                height: 20,
              },
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBackground: {
    backgroundColor: '#28373f',
  },
    smallText: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
background: {
    height: 400,
       justifyContent: 'center',
    alignItems: 'center',
    width:335
  },
});

export default Main;
