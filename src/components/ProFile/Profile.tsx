import React, { useContext } from 'react';
import {View, Text, Image} from  'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles';

const Profile = () =>{
    const { user, level, challengesCompleted } = useContext(ChallengesContext);
    return(
        <View style={styles.container}>
                <Image style={styles.img} source={{ uri: `${user.foto}` }} />
                <View style={styles.containerText}>
                    <Text style={styles.textNome}>{user.nome}</Text>
                    <Text style={styles.textLevel}>Level {level}</Text>
                <Text style={styles.textLevel}>{challengesCompleted} Desafios completos</Text>
                </View>
        </View>
    );
}

export default Profile;
