import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'rn_sqlite',
});

const initDatabase = () => {
  createTables();
  console.log('Iniciando');
};

const createTables = () => {
  db.transaction((txn) => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS livroslidos (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(20), description TEXT, image TEXT )',
      [],
      (sqlTxn, res) => {
        console.log('Tabela criada com sucesso');
      },
      (error) => {
        console.log('Erro na criação ' + error.message);
      }
    );
  });
};

const addLivros = (livro) => {
  if (!livro) {
    initDatabase();
  }

  db.transaction((txn) => {
    txn.executeSql(
      'INSERT INTO livroslidos (title, description, image) VALUES (?, ?, ?)',
      [livro.title, livro.description, livro.image],
      () => {
        console.log(`${livro.title} livro adicionado com sucesso`);
        getLivros();
      },
      (error) => {
        console.log('Erro ' + error.message);
      }
    );
  });
};

const getLivros = (setLivros) => {
  db.transaction((txn) => {
    txn.executeSql(
      'SELECT * FROM livroslidos ORDER BY id DESC',
      [],
      (sqlTxn, res) => {
        console.log('Livros lidos com sucesso');
        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({ id: item.id, title: item.title, description: item.description, image: item.image });
          }

          setLivros(results);
        }
      },
      (error) => {
        console.log('Erro ' + error.message);
      }
    );
  });
};

export { initDatabase, addLivros, getLivros };