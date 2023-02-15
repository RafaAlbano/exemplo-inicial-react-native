import { StyleSheet, Text, View, FlatList } from 'react-native';
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={{ color: 'white', fontSize: 20}}>
                Minha lista de Tarefas
            </Text>
        </View>
    
    );
}

const styles = StyleSheet.create({
 header: {
    backgroundColor: 'pink',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});