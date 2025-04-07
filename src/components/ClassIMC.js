import { Text, StyleSheet } from 'react-native';
import React from 'react';

//Função que exibe a classificação
const ClassIMC = ({ classific }) => {
    return (
        <Text style={styles.classimc}>Sua classificacão é: {classific}</Text>
    );
};


const styles = StyleSheet.create({
    classimc: {
        marginTop: 20,
        Fontsize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default ClassIMC;