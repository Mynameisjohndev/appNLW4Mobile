import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ThemeContext } from 'styled-components';
import { AuthContext } from '../../contexts/auth';

import styles from './styles';

const ExperienceBar = () => {
    const {  } = useContext(AuthContext);

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
                    width: '90%',
                    height: 4,
                    borderRadius: 5,
                    backgroundColor: '#1cb924'
                }}>
                </View>

                <View style={{flexDirection: 'row'}}>
                <View style={{width: '90%' }}></View>
                <Text>300xp</Text>
                </View>

                </View>
                <Text style={{ marginStart: 10 }}>600 xp</Text>
            </View>
        </View>
    );
}

export default ExperienceBar;
