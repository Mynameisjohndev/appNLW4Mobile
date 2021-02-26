import React, { useContext } from 'react';
import { View, Text , Image} from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles';

const Challengs = () => {
    const { activeChallenge } = useContext(ChallengesContext);
    console.log(activeChallenge.amount);
    return (
        <View style={styles.containerChallenge}>
            <Text style={styles.title}>
                {activeChallenge.amount === 0 ? 'Nenhum desafio!' : activeChallenge.amount + " xp"}
            </Text>
            <View>
                <Image style={{width: 80, height: 80}} source={{ uri: `${
                    activeChallenge.type === "arrow" ? "https://cdn.pixabay.com/photo/2020/10/31/17/31/sad-5701778_960_720.png"
                    : (
                        <>
                        {activeChallenge.type === 'eye' ? "https://images.emojiterra.com/twitter/v13.0/512px/1f441.png"
                        : "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/65/flexed-biceps_emoji-modifier-fitzpatrick-type-4_1f4aa-1f3fd_1f3fd.png"}
                        </>
                    )}` }}/>
                <Text>{activeChallenge.type}</Text>
            </View>
            <Text>{activeChallenge.description}</Text>
        </View>
    );
}

export default Challengs;