import {
	Text,
	View,
	TouchableOpacity,
	Share
 } from "react-native";
import styles from "./styles";

export default function ResultIMC(props){

	const onShare = async () => {
		const result = await Share.share({
			message: "Meu imc hoje é: " + props.resultIMC
		})

	}

	return (
		<View style={styles.resultIMC}>
			<View style={styles.shareBox}> 
				{
					props.resultIMC ?  
					<TouchableOpacity style={styles.share} onPress={onShare}>
						<Text style={styles.shareText}>Share</Text>
					</TouchableOpacity>
					: <View/>
				}
			</View>
			<Text style={styles.resultInfo}>{props.messageResultIMC}</Text>
			<Text style={styles.resultNumber}>{props.resultIMC}</Text>
		</View>
	)
}