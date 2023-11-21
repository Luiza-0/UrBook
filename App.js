import React, { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Palanquin_100Thin, Palanquin_600SemiBold } from '@expo-google-fonts/palanquin';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry } from 'react-native';
import { name as urbook } from './app.json';

AppRegistry.registerComponent(urbook, () => App);

import Initial from './src/telas/Initial';
import Home from './src/telas/Home';
import DetalhesLivro from './src/telas/DetalhesLivro';

const Stack = createStackNavigator();

export default function App() {
  const[fontCarregada] = useFonts({
    "PalanquinThin": Palanquin_100Thin,
    "PalanquinSemiBold": Palanquin_600SemiBold,
  });
 
  if(!fontCarregada){
    return <View/>;
  }else{
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="DetalhesLivro" component={DetalhesLivro} />   
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



