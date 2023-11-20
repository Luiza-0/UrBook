// DetalhesLivro.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import img from '../../assets/estatic.png'

export default function DetalhesLivro() {

  return (
    <ScrollView style={estilos.back} contentContainerStyle={estilos.scrollContainer}>
        <View style={estilos.container}>
        <Text>Detalhes do Livro ID </Text>
        <Image source={img} style={estilos.capa} />
        <Text></Text>
        </View>
    </ScrollView>
  );
  }

    const estilos = StyleSheet.create({
        scrollContainer: {
            flexGrow:1,
        }, 
        back: {
            width: '100%',
            height: '100%',
            backgroundColor:'#F8F2FA',
        },
        container:{
            flex:1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        capa: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            alignSelf:'center',
            width:330,
            height:490,
          },
        
    });




