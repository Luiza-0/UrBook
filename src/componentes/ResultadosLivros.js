import React from 'react';
import { View, Text } from 'react-native';

const ResultadosLivros = ({ livros }) => (
  <View>
    <Text>Resultados da Busca:</Text>
    {livros.map((livro) => (
      <Text key={livro.id}>{livro.volumeInfo.title}</Text>
    ))}
  </View>
);

export default ResultadosLivros;
