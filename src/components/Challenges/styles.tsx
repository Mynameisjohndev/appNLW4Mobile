import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    containerChallenge:{
        width: '100%',
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },card:{
        backgroundColor: '#f2f3fa',
        elevation: 5,
        borderRadius: 6,
        width: '95%',
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
    ,novoBotao:{
        marginBottom: 10,
        width: '50%',
        height: 30,
        backgroundColor: '#5148d1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },buttonText:{
        color: '#fff',
        fontSize: 16
    }

});

export default styles;