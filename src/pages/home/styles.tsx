import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#f2f3fa',
        elevation: 5
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
        fontWeight: '800'
    }

});

export default styles;