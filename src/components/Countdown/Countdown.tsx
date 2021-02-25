import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Countdown = () => {
    const { } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', padding:30 }}>
                <View style={styles.card}>
                    <Text>2</Text>
                </View>
                <View style={styles.card}>
                    <Text>5</Text>
                </View>

                <Text style={{ fontSize: 40 }}>:</Text>

                <View style={styles.card}>
                    <Text>0</Text>
                </View>
                <View style={styles.card}>
                    <Text>0</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.comecarCiclo}>
                <View>
                <Text>Começar ciclo</Text>
                </View>
            </TouchableOpacity>

        </View>




    );
}

export default Countdown;