import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PesoIdeal = ({ pesomin, pesomax }) => {
    return (
        <View style={styles.formResult}>
            <Text style={styles.pesoideal}>Peso mínimo ideal: {pesomin}</Text>
            <Text style={styles.pesoideal}>Peso máximo ideal: {pesomax}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    pesoideal: {
        marginTop: 20,
        Fontsize: 24,
        textAlign: 'left',
        color: '#333',
        paddingLeft: 10,
    },
});

export default PesoIdeal;
