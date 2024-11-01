import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2, 
        borderColor: Colors.accent500,
        padding: 12
    }
});
