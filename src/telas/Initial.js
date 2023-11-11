import React from 'react';
import {ImageBackground,  StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import cadeira from '../../assets/cadeira.png';
import title from '../../assets/titulo.png';

const width = Dimensions.get('screen').width;
const back = require('../../assets/back.png');

export default function Home(){
    return <>
    
    <View>
        <ImageBackground source={back} style={estilos.back}>
            <Image source={cadeira} style={estilos.cadeira}/>
            <Image source={title} style={estilos.title}/>
        </ImageBackground>
    </View>
    </>
}

const estilos = StyleSheet.create({
   back:{
    width: '100%',
    height: '100%',
   },
    cadeira: {
        marginTop: 39,
        width: null,
        resizeMode: 'contain',
        height: 356,
        //marginTop: 40
    },
    title:{
        width: null,
        resizeMode: 'contain',
        height: 169,
    },
  });