import { View, Text, StyleSheet } from 'react-native';
export default function ItemEstado (props) {
    return (
        <View style={styles.item}>
            <Text style={styles.textItem}>
                {props.estado.capital} - ({props.estado.sig})
            </Text>
        </View>
    );
}

const styles = StyleSheet.create( {
    item: {
        backgroundCollor: "#00ff32",
        padding: 10,
        bordersRadius: 10,
    },
    textItem: {
        color '#fff',
    },
});