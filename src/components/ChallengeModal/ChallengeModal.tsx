import React, { useContext } from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles';
import { CountdowContext } from '../../contexts/CountdowContext';

function ChallengeModal() {
    const { activeModal, showModal, activeChallenge, failChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetTimeCountdown } = useContext(CountdowContext);

    const failChallenges = () =>{
        failChallenge();
        resetTimeCountdown();
    }

    const winChallenges = () =>{
        completeChallenge();
        resetTimeCountdown();
    }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={activeModal}>
            <View style={styles.container}>
                <View style={styles.subContainer}>

                    <TouchableOpacity onPress={showModal}>
                        <Icon size={32} color="#000" name="x-circle" />
                    </TouchableOpacity>

                    <View style={{ height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>{activeChallenge.amount} XP</Text>
                        <Icon2 size={100} color="#000" name={`${activeChallenge.type === "eye" ?
                        "eye-outline" :
                        "run"}`}/>
                        <Text>{activeChallenge.description} XP</Text>
                    </View>

                   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                   <TouchableOpacity onPress={failChallenges}>
                        <Text style={{color: '#d14848', fontSize: 16}}>Falhei</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={winChallenges}>
                        <Text style={{color: '#1cb924', fontSize: 16}}>Completei</Text>
                    </TouchableOpacity>
                   </View>

                </View>
            </View>
        </Modal>
    );
}

export default ChallengeModal;