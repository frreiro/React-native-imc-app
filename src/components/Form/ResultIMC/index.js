import { Text, View } from "react-native";
import styles from "./styles";

export default function ResultIMC(props){
	return (
		<View style={styles.resultIMC}>
			<Text style={styles.resultInfo}>{props.messageResultIMC}</Text>
			<Text style={styles.resultNumber}>{props.resultIMC}</Text>
		</View>
	)
}