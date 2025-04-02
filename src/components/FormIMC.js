import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
import {ClassIMC} from './ClassIMC';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacaoIMC, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
        let classificacaoIMC;
            if (imc < 18.5) {
                classificacaoIMC = 'Abaixo do peso';
                setClassificacao(classificacaoIMC);
            }
            if (imc >= 18.5 && imc <= 24.9) {
                classificacaoIMC = 'Peso normal';
                setClassificacao(classificacaoIMC);
            }
            if (imc >= 25 && imc <= 29.9) {
                classificacaoIMC = 'Sobrepeso';
                setClassificacao(classificacaoIMC);
            }
            if (imc >= 30 && imc <= 34.9)  {
                classificacaoIMC = 'Obesidade grau 1';
                setClassificacao(classificacaoIMC);
            }
            if (imc >= 35 && imc <= 39.9) {
                classificacaoIMC = 'Obesidade grau 2';
                setClassificacao(classificacaoIMC);
            }
            if (imc >= 40) {
                classificacaoIMC = 'Obesidade grau 3 (obesidade mórbida)';
                setClassificacao(classificacaoIMC);
            } 
    
    };
    
    return (
        <View style={styles.formContainer}>
            <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
            />
            <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {imc && <ClassIMC classificacaoIMC={classificacaoIMC}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;