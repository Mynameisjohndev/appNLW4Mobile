import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    },card:{
        width: '24%',
        height: 140,
        backgroundColor: "#f5f5f5",
        elevation:2,
        margin: 6,
        borderBottomColor: '#67ff6f',
        borderBottomWidth: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },textCountdown:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#888888'
    }

    ,finalizarCiclo:{
        width: '95%',
        height: 60,
        backgroundColor: '#d14848',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },comecarCiclo:{
        width: '95%',
        height: 60,
        backgroundColor: '#5148d1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },buttonText:{
        color: '#fff',
        fontSize: 16
    }

});

export default styles;