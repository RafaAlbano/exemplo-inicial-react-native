import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './scr/comp/Header';

export default function App() {
  const tasks = ['Tafera 1','Tafera 2','Tafera 3','Tafera 4']
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList data={tasks} renderItem={({ item })=> <Text>{item}</Text>} />
      </View>
    </View >
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
