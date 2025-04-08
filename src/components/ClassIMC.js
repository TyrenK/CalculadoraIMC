import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

//Função que exibe a classificação
const ClassIMC = ({ classific }) => {
    return (
        <View style={styles.formResult}>
            <Text style={styles.classimc}>Sua classificacão é: {classific}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    classimc: {
        marginTop: 20,
        fontSize: 15,
        textAlign: 'left',
        color: '#333',
        paddingLeft: 10,
    },
});

export default ClassIMC;
