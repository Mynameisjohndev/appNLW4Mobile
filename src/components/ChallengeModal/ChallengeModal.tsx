import React, { useContext } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import Icon  from 'react-native-vector-icons/FontAwesome'
import styles from './styles';

const ChallengeModal = () =>{
    const {activeModal, showModal, activeChallenge} = useContext(ChallengesContext);
    console.log(activeModal)
    return(
        <Modal
        animationType='slide'
            transparent={true}
            visible={activeModal}>
            <View style={styles.container}>
            <View style={styles.subContainer} >
                <Icon name="times-circle" size={30} color="#ff3c3c"/>
                <TouchableOpacity onPress={showModal}>
                    <Text>Fechar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
    );
}

export default ChallengeModal;