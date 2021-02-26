import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

let countdownTimeOut: NodeJS.Timeout;

const Countdown = () => {
    const { } = useContext(AuthContext);
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    const startCountdown = () => {
        setIsActive(true);
        //setHasFinished(false);
    }

    const stopCountodown = () => {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive == true && time == 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

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