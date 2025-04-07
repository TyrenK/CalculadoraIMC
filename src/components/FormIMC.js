import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
import ClassIMC from './ClassIMC';
import PesoIdeal from './PesoIdeal';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');
    const [pmax, setPmax] = useState('');
    const [pmin, setPmin] = useState('');


    const calcularIMC = () => {
        if (!peso || !altura) {return}

        const alturaMetros = parseFloat(altura) / 100;
        const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
        setImc(imcCalculado);

    //Variável pra classificar o IMC
        let classificacaoIMC;
    
    //Estrutura de condição para a classificação
        if (imcCalculado < 18.5) {
            setClassificacao('Abaixo do peso');
        }
        if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
            setClassificacao('Peso normal');
        }
        if (imcCalculado >= 25 && imcCalculado <= 29.9) {
            setClassificacao('Sobrepeso');
        }
        if (imcCalculado >= 30 && imcCalculado <= 34.9)  {
            setClassificacao('Obesidade grau 1');
        }
        if (imcCalculado >= 35 && imcCalculado <= 39.9) {
            setClassificacao('Obesidade grau 2');
        }
        if (imcCalculado >= 40) {
            setClassificacao('Obesidade grau 3 (obesidade mórbida)');
        }

        console.log(classificacao)

        //Cálculo do peso ideal
        const pesomin = (18.5 * ((alturaMetros) * (alturaMetros))).toFixed(2);
        setPmin(pesomin);
        const pesomax = (24.9 * ((alturaMetros) * (alturaMetros))).toFixed(2);
        setPmax(pesomax);
    
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
            {classificacao && <ClassIMC classific={classificacao}/>}
            {pmax && pmin && <PesoIdeal pesomin={pmin} pesomax={pmax}/>}
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