import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Countdown = () => {
    const { } = useContext(AuthContext);
    const [time, setTime] = useState(25*60);
    const [isActive, setIsActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    const startCountdown = () =>{
        setIsActive(true);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            setTimeout(()=>{
                setTime(time - 1);
            }, 1000)
        }
    },[isActive, time])

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

            <TouchableOpacity style={styles.comecarCiclo}
            onPress={startCountdown}
            >
                <View>
                    <Text>Começar ciclo</Text>
                </View>
            </TouchableOpacity>

        </View>




    );
}

export default Countdown;