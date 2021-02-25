import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import styles from './styles';

export default function Home() {
    const { user } = useContext(AuthContext);
    return (
        
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: `${user.foto}` }} />
                <View style={styles.containerText}>
                    <Text style={styles.textNome}>{user.nome}</Text>
                    <Text style={styles.textLevel}>Level {user.level}</Text>
                </View>
            </View>
    );
}
