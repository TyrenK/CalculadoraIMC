import { Text, StyleSheet } from 'react-native';
import React from 'react';

const ClassIMC = ({ classificacaoIMC }) => {
    return (
        <Text style={styles.result}>Sua classificacão é: {classificacaoIMC}</Text>
    );
};


const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        Fontsize: 24,
        textAlign: 'center',
        color: '#333',
    },
});