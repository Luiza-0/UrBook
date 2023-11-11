import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Palanquin_100Thin, Palanquin_600SemiBold } from '@expo-google-fonts/palanquin';

import Initial from './src/telas/Initial';
import Home from './src/telas/Home';

export default function App() {
  const[fontCarregada] = useFonts({
    "PalanquinThin": Palanquin_100Thin,
    "PalanquinSemiBold": Palanquin_600SemiBold,
  });

  if(!fontCarregada){
    return <View/>;
  }else{
    return (
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    );
  }
}



