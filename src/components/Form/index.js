import React, {useState} from "react"
import {
	View,
	Text, 
	TextInput, 
	TouchableOpacity, 
	Keyboard,
	Vibration
} from 'react-native'
import ResultIMC from "./ResultIMC";
import styles from "./styles";


export default function Form(){

	const [imc,setImc] = useState(null);
	const [weight,setWeight] = useState(null);
	const [height,setHeight] = useState(null);
	const [messageIMC,setmessageIMC] = useState("Preencha o peso e altura");
	const [textButton,setTextButton] = useState("Calcular IMC");
	const [errorMessage, setErrorMessage] = useState(null);



	
	function imcCalculator(){
		const parseHeight = Number(height) / 100
		return setImc((weight / (parseHeight * parseHeight)).toFixed(2))
	}

	function verificationIMC(){
		if(imc == null){
			Vibration.vibrate();
			setErrorMessage('Campo obrigatório*')
		}
	}
	
	function validatorImc(){
		Keyboard.dismiss();
		if(weight !== null && height !== null ){
			imcCalculator()
			setHeight(null)
			setWeight(null)
			setmessageIMC("Seu peso é:")
			setTextButton("Calcular novamente")
			setErrorMessage(null)
			return;
		}
		verificationIMC()
		setImc(null);
		setmessageIMC("Preencha o peso e altura")
		setTextButton("Calcular IMC")
	}
	
	return (
		<View style={styles.formContext}>
			<View style={styles.form}>
				<Text style={styles.formLabel}>Altura</Text>
				<Text style={styles.errorMessage}>{errorMessage}</Text>
				<TextInput
					style={styles.formInput}
					onChangeText={setHeight}
					value={height}
					placeholder="Ex. 175 to 1.75"
					keyboardType='numeric'
				/>

				<Text style={styles.formLabel}>Peso</Text>
				<Text style={styles.errorMessage}>{errorMessage}</Text>

				<TextInput
					style={styles.formInput}
					onChangeText={setWeight}
					value={weight}
					placeholder="Ex. 80"
					keyboardType='numeric'
				/>

				<TouchableOpacity 
				style={styles.formButton}
				onPress={validatorImc}
				>
					<Text style={styles.formButtonText}>{textButton}</Text>
				</TouchableOpacity>
			</View>
			<ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
		</View>
	)
}