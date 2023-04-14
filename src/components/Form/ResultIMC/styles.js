import {StyleSheet} from 'react-native'	

const styles = StyleSheet.create({
	resultIMC: {
		flex: 1,
		marginTop: 15,
		paddingTop: 40,
		borderRadius: 50,
		width:'100%',
		alignItems: 'center',
	},
	resultInfo: {
		fontSize: 18,
		color: '#ff0043',
		fontWeight: 'bold',

	},
	resultNumber: {
		color:'#ff0043',
		fontWeight: 'bold',
		fontSize: 48,
	},
	shareBox: {
		width:'100%',
		alignItems: 'center',
		marginBottom: 10,
	},
	share: {
		backgroundColor: '#1877f2',
		borderRadius: 50,
		paddingBottom: 5,
		paddingTop: 5,
	},
	shareText: {
		color: '#fff',
		fontWeight: 'bold',
		paddingHorizontal: 30
	}
})

export default styles