import React, {useState} from "react"
import {
	View,
	Text, 
	TextInput, 
	TouchableOpacity, 
	Keyboard,
	Vibration,
	Pressable, 
	FlatList
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
	const [imcList, setImcList] = useState([])



	
	function imcCalculator(){
		const parseHeight = height.replace(',','.')
		const resultIMC = (weight / (parseHeight * parseHeight)).toFixed(2)
		setImcList((arr) => [...arr, {
			id: new Date().getTime(),
			imc: resultIMC
		}])
		setImc(resultIMC);
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
		}else{
			verificationIMC()
			setImc(null);
			setmessageIMC("Preencha o peso e altura")
			setTextButton("Calcular IMC")
		}
	}
	
	return (
			<View style={styles.formContext}>
				{ !imc ? 
			<Pressable style={styles.form} onPress={Keyboard.dismiss}>

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
			</Pressable>
			:
			<View style={styles.exhibitionResultImc}>
				<ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
				<TouchableOpacity 
				style={styles.formButton}
				onPress={validatorImc}
				>
					<Text style={styles.formButtonText}>{textButton}</Text>
				</TouchableOpacity>
			</View>
				}
			
			<FlatList
				showsVerticalScrollIndicator={false}
				style={styles.listImc}
				data={imcList.reverse()}
				renderItem={({item}) =>{
					return (
						<Text style={styles.restultIMCItem}>
							Resultado IMC =  
							<Text style={styles.resultIMCItemList}> {item.imc}</Text>
						</Text>
					)
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	)
}