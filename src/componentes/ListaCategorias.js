
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const ListaCategorias = () => {
    const [livros, setLivros] = useState([]);
    const navigate = (livroId) => {
      // Adicione a navegação para a tela de detalhes do livro com o ID do livro
      navigation.navigate('DetalhesLivro', { livroId });
    };
    useEffect(() => {
        const buscarLivrosPopulares = async () => {
          try {
            const generos = ['science', 'romance']; 
            const livrosPopulares = await Promise.all(
              generos.map(async (genero) => {
                const response = await axios.get(
                  `https://www.googleapis.com/books/v1/volumes?q=subject:${genero}&maxResults=1`
                );
                return response.data.items[0];
              })
            );
            setLivros(livrosPopulares);
          } catch (error) {
            console.error('Erro ao buscar livros:', error);
          }
        };
    
        buscarLivrosPopulares();
      }, []);
    
      return (
        <View style={estilos.container}>
          <FlatList
            horizontal
            data={livros}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigateToDetalhesLivro(sugestaoLivro.id)}>
              <View style={estilos.item}>
                <Image
                  source={{ uri: item?.volumeInfo?.imageLinks?.thumbnail }}
                  style={estilos.imagemLivro}
                />
                <Text style={estilos.nomeLivro}>{item?.volumeInfo?.title}</Text>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
};

const estilos = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    titulo: {
      fontFamily: 'PalanquinThin',
      color: '#7A2D98',
      fontSize: 19,
      marginBottom: 10,
    },
    item: {
      marginRight: 10,
      padding: 10,
      backgroundColor: '#FFF',
      borderRadius: 9,
      borderWidth: 1,
      borderColor: '#BAB8BC',
    },
    imagemLivro: {
      width: 100,
      height: 150,
      marginBottom: 5,
    },
    nomeLivro: {
      fontSize: 12,
      textAlign: 'center',
    },  
});

export default ListaCategorias;
