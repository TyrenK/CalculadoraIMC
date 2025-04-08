import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        Fontsize: 24,
        textAlign: 'left',
        color: '#333',
        paddingLeft: 10,
    },
});

export default Result;