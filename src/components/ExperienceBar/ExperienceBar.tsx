import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ThemeContext } from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles';

const ExperienceBar = () => {
    const { experienceBar } = useContext(ChallengesContext);

    return (
        <View style={styles.barContainer}>
            <View style={styles.subContainer}>
                <Text style={{ marginEnd: 10 }}>0 xp</Text>
                <View style={{
                    width: '100%',
                    height: 4,
                    borderRadius: 5,
                    backgroundColor: '#cacaca'
                }}>
                <View style={{
                    width: `${experienceBar}%`,
                    height: 4,
                    borderRadius: 5,
                    backgroundColor: '#1cb924'
                }}>
                </View>

                <View style={{flexDirection: 'row'}}>
                <View style={{width: `${experienceBar}%` }}></View>
                <Text>{experienceBar}xp</Text>
                </View>

                </View>
                <Text style={{ marginStart: 10 }}>600 xp</Text>
            </View>
        </View>
    );
}

export default ExperienceBar;
