import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { currency, currencyConvert } from '../assets/currencyData';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';


export default function Home() {

    const [selectedValueOne, setSelectedValueOne] = useState('United State Doller');
    const [selectedValueTwo, setSelectedValueTwo] = useState('United State Doller');    
    const [amountOne, setAmountOne] = useState(0);
    const [amountTwo, setAmountTwo] = useState(0);

    function convertCurrency(amount, tempFlag) {

        if(selectedValueOne != selectedValueTwo) {
            if(tempFlag > 0) {
                console.log(tempFlag)
                if(tempFlag == 1) {
                    const temp = currencyConvert.find((ele) => (selectedValueOne === ele.currency))
                    const tempTwo = temp.convert.find((ele) => (selectedValueTwo === ele.country))
                    const convertCurrency = amount * tempTwo.convertPrice
                    setAmountTwo(convertCurrency)
                }
                else {
                    const temp = currencyConvert.find((ele) => (selectedValueTwo === ele.currency))
                    const tempTwo = temp.convert.find((ele) => (selectedValueOne === ele.country))
                    const convertCurrency = amount * tempTwo.convertPrice
                    setAmountOne(convertCurrency)
                }
            }
        }
    }

    return (

        <View style={styles.container}>
            <Text variant='headlineLarge' style={{ color: 'black' }}>Currency Convertor</Text>

            <TextInput
                label={'Enter Your Amount'}
                value={amountOne}
                onChangeText={(amount) => {
                    setAmountOne(amount)
                    convertCurrency(amount, 1)
                    }}/>
            <Picker
                selectedValue={selectedValueOne}
                onValueChange={(itemValue) => {
                    setSelectedValueOne(itemValue)
                    convertCurrency(amountOne, 1)
                }}
            >
                {
                    currency.map((element, index) => (
                        <Picker.Item label={element} key={index} value={element} />
                    ))
                }
            </Picker>
            <TextInput
                label={'Enter Your Amount'}
                value={amountTwo}
                onChangeText={(amount) => {
                    setAmountTwo(amount)
                    convertCurrency(amount, 2)
                    }}/>
            <Picker
                selectedValue={selectedValueTwo}
                onValueChange={(itemValue) => {
                    setSelectedValueTwo(itemValue)
                    convertCurrency(amountTwo, 2)
                }}
            >
                {
                    currency.map((element,index) => (
                        <Picker.Item label={element} key={index} value={element} />
                    ))
                }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});