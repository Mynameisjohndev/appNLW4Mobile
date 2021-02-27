import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles';

const Challengs = () => {
    const { activeChallenge } = useContext(ChallengesContext);
    console.log(activeChallenge.amount);
    return (
        <View style={styles.containerChallenge}>
            {activeChallenge.type === "arrow" ? (
                <View style={styles.card}>
                    <Text style={styles.title}>Nada por aqui</Text>
                    <Image style={{ width: 80, height: 80, margin: 3 }} source={{ uri: "https://cdn.pixabay.com/photo/2020/10/31/17/31/sad-5701778_960_720.png" }} />
                    <Text>Comece um novo ciclo</Text>
                </View>
            ) : (

                    <View style={styles.card}>
                        <View style={{ height: 35,display: 'flex', flexDirection: 'row' }}></View>
                        <Text>Valendo: </Text>
                        <Text style={styles.title}>{activeChallenge.amount} xp</Text>
                        <View style={{ height: 35 }}></View>
                        <TouchableOpacity style={styles.novoBotao}>
                        <Text style={styles.buttonText}>Novo desafio</Text>
                        </TouchableOpacity>

                    </View>

                )}
        </View>
    );
}

export default Challengs;