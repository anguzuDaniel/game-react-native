import {Text, View, StyleSheet } from 'react-native';
import Colors from './constants/Colors';

function NumberContainer({ children }) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    conatiner: {
        borderWidth: 4,
        borderColor: Colors.accents500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContentL 'center'
    },
    numberText: {
        color: Colors.accent500,
        padding: 24
    }
});