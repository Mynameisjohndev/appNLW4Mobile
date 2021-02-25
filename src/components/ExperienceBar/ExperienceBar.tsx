import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import styles from './styles';

const ExperienceBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.barContainer}>
            <Text style={{ marginEnd: 10 }}>0 xp</Text>
            <View style={styles.barra}>
                <View style={styles.barra2}>
                </View>
            </View>
            <Text style={{ marginStart: 10 }}>600 xp</Text>
        </View>
    );
}

export default ExperienceBar;
