import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';


const LivroComponent = ({ livroId }) => {
    const [livro, setLivro] = useState(null);
  
    useEffect(() => {
      const fetchLivroDetails = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${livroId}`);
          setLivro(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do livro:', error);
        }
      };
  
      fetchLivroDetails();
    }, [livroId]);
  
    if (!livro) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.livroColuna}>
          {livro.volumeInfo.imageLinks ? (
            <Image source={{ uri: livro.volumeInfo.imageLinks.thumbnail }} style={styles.sugestaoLivro} />
          ) : (
            <Text>No image available</Text>
          )}
        </View>
  
        <View style={styles.infoColuna}>
          <Text style={styles.nomeLivroHome}>{livro.volumeInfo.title}</Text>
  
          <View style={styles.nomeAnoContainer}>
            <Text style={styles.nomeAutorHome}>{livro.volumeInfo.authors.join(', ')}</Text>
            <Text style={styles.anoLivroHome}>{livro.volumeInfo.publishedDate}</Text>
          </View>
  
          <View style={styles.descLivro}>
            <Text style={styles.descLivroHome}>{livro.volumeInfo.description}</Text>
          </View>
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  livroColuna: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
  },
  infoColuna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 170,
    height: 200,
    justifyContent: 'space-evenly',
  },
  sugestaoLivro: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
  },
  nomeLivroHome: {
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7A2D98',
    alignSelf: 'center',
    textAlign: 'center',
  },
  nomeAnoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  nomeAutorHome: {
    fontSize: 10,
    color: '#7A2D98',
  },
  anoLivroHome: {
    fontSize: 10,
    color: '#7A2D98',
  },
  descLivro: {
    backgroundColor: '#FFF',
    borderRadius: 9,
    width: '100%',
  },
  descLivroHome: {
    fontSize: 9,
    padding: 8,
    color: '#7A2D98',
    alignSelf: 'center',
  },
});

export default LivroComponent;
