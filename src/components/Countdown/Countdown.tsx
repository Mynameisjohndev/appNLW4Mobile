import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/ChallengesContext';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { CountdowContext } from '../../contexts/CountdowContext';


const Countdown = () => {
    const { time ,minutes, seconds, isActive, stopCountodown, hasFinished, startCountdown } = useContext(CountdowContext);
    

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', padding: 30 }}>

                <View style={styles.card}>
                    <Text style={styles.textCountdown}>
                        {minutesLeft}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.textCountdown}>
                        {minutesRight}
                    </Text>
                </View>

                <Text style={{ fontSize: 40 }}>:</Text>

                <View style={styles.card}>
                    <Text style={styles.textCountdown}>
                        {secondsLeft}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.textCountdown}>
                        {secondsRight}
                    </Text>
                </View>

            </View>

            {hasFinished ? (
                <TouchableOpacity style={styles.comecarCiclo}>
                <View>
                    <Text style={styles.buttonText}>Ciclo finalizado</Text>
                </View>
            </TouchableOpacity>
            ) : (
                    <>
                        {isActive ? (
                            <TouchableOpacity style={styles.finalizarCiclo}
                                onPress={stopCountodown}>
                                <View>
                                    <Text style={styles.buttonText}>Encerrar o ciclo</Text>
                                </View>
                            </TouchableOpacity>
                        ) :
                            (
                                <TouchableOpacity style={styles.comecarCiclo}
                                    onPress={startCountdown}>
                                    <View>
                                        <Text style={styles.buttonText}>Começar ciclo</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                    </>
                )}



        </View>




    );
}

export default Countdown;