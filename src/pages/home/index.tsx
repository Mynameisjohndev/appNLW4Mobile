import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { View } from 'react-native';

import styles from './styles';
import Profile from '../../components/ProFile/Profile';
import ExperienceBar from '../../components/ExperienceBar/ExperienceBar';
import Countdown from '../../components/Countdown/Countdown'
const Home = ()=> {
    const { } = useContext(AuthContext);
    return (

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Profile />
            <ExperienceBar/>
            <Countdown/>

        </View>
    );
}

export default Home;