import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ListaCategorias = () => {
  const [livrosPopulares, setLivrosPopulares] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const buscarLivrosPopulares = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=filter=free-ebooks&maxResults=5'
        );
        setLivrosPopulares(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar livros populares:', error);
      }
    };

    buscarLivrosPopulares();
  }, []);

  const handlePress = (livro) => {
    navigation.navigate('DetalhesLivro', { livro });
  };

  return (
    <View style={estilos.container}>
      <FlatList
        horizontal
        data={livrosPopulares}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
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
