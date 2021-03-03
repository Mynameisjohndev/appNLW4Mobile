import { ColorValue, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        margin: 20,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#f2f3fa',
        elevation: 5,
        borderBottomColor: '#1cb924',
        borderBottomWidth: 4
    }, img: {
        width: 70,
        height: 70,
        borderRadius: 50
    }, containerText: {
        marginStart: 20
    }, textNome: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#474747',
    }, textLevel: {
        fontSize: 14,
        fontWeight: '800',
        color: '#474747',
    },challengesCompleted:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#474747',
    }

});


export default styles;