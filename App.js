import { Component } from 'react';
import { FlatList, Text } from 'react-native';
import ItemEstado from './ItemEstado';
export default class ListaEstado extends Component {
  state = {
    estados:[
      { sigla: 'SC', capital: 'Florianopolis' },
      { sigla: 'RS', capital: 'Posto Alegre' },
      { sigla: 'PR', capital: 'Curitiba' },
      { sigla: 'SP', capital: 'São Paulo' },
    ],
  };
}
render () {
  return (
     <>
      <FlatList 
        data = {this.state.estados}
        renderItem = {({ item })} =>
          <ItemEstado estado={item} />
      }
      />
      <Text>Total: {this.state.estado.length}</Text>
     </>
   );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  header: {
    backgroundColor: 'pink',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
