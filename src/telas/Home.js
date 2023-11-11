import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

import topo from '../../assets/topo-2.png';
import sugestao from '../../assets/sug.png';

const width = Dimensions.get('screen').width;

export default function Home() {
  return (
    <>
      <View style={estilos.back}>
        <View style={estilos.topo}>
          <Text style={estilos.topoT}>
            <Text>Qual será{'\n'}</Text>
            <Text>o seu próximo{'\n'}</Text>
            <Text>livro favorito?</Text>
          </Text>
          <Image source={topo} style={estilos.imgTopo} />
        </View>

        <View style={estilos.container}>
          <TextInput
            style={estilos.input}
            placeholder="game of thrones, a culpa é das estrelas..."
          />
        </View>

        <View style={estilos.sugestao}>
          <Text style={[estilos.title, estilos.titleLeft]}>Sugestão da Semana</Text>

          <View style={estilos.sugestaoPrincipal}>
            <View style={estilos.livroColuna}>
              <Image source={sugestao} style={estilos.sugestaoLivro} />
            </View>

              <View style={estilos.infoColuna}>

                <Text style={estilos.nomeLivroHome}>VOVÓ VIROU SEMENTE</Text>

                <View style={estilos.nomeAnoContainer}>
                  <Text style={estilos.nomeAutorHome}>Rodrigo Ciriaco</Text>
                  <Text style={estilos.anoLivroHome}>2019</Text>
                </View>

                <View style={estilos.descLivro}>
                  <Text style={estilos.descLivroHome}>
                    Luiza passava as tardes ouvindo histórias de sua avó, de como nos comunicamos com a natureza e somos parte dela. Até que um vírus atravessa sua existência...
                  </Text>
                </View>
              </View>
          </View>
        </View>

        <View>
          <View>

          </View>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  back: {
    width: '100%',
    height: '100%',
    backgroundColor:'#F8F2FA',
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgTopo: {
    flex: 2,
    marginTop: 19,
    width: null,
    resizeMode: 'contain',
    height: 160,
  },
  topoT: {
    fontFamily: "PalanquinSemiBold",
    fontSize: 25,
    color: '#7A2D98',
  },
  textNegrito: {
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: '90%',
    borderRadius: 13,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#BAB8BC',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  sugestao: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontFamily: "PalanquinThin",
    color: '#7A2D98',
    fontSize: 19,
  },
  titleLeft: {
    alignSelf: 'flex-start',
    marginStart: 20,
  },
  sugestaoLivro: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 150,
  },
  sugestaoPrincipal: {
    flexDirection: 'row',
    marginVertical:10,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-evenly', // Espaçamento entre as colunas
    alignSelf: 'center',
  },
  livroColuna: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:155,
  },
  infoColuna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 170, // Largura de 194px
    fontFamily: "PalanquinThin",
    height:200,
    justifyContent:'space-evenly',
  },
  nomeLivroHome: {
    width:'100%',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7A2D98',
    alignSelf: 'center',
    textAlign:'center',
  },
  nomeAnoContainer: {
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
    alignSelf:'center',
  },
  nomeAutorHome: {
    fontSize: 10,
    color: '#7A2D98',
  },
  anoLivroHome: {
    fontSize: 10,
    color: '#7A2D98',
  },
  descLivro:{
    backgroundColor: '#FFF',
    borderRadius: 9, // Define o arredondamento do fundo branco
    width:'100%',
  },
  descLivroHome: {
    fontSize: 9,
    padding: 8,
    color: '#7A2D98',
    alignSelf: 'center',
  },


});
