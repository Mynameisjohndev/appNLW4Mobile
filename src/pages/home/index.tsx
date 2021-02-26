import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/ChallengesContext';
import { View } from 'react-native';

import Profile from '../../components/ProFile/Profile';
import ExperienceBar from '../../components/ExperienceBar/ExperienceBar';
import Countdown from '../../components/Countdown/Countdown'

import { CountdowProvider } from '../../contexts/CountdowContext'
const Home = () => {
    const { } = useContext(AuthContext);
    return (

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <CountdowProvider>
                <Profile />
                <ExperienceBar />
                <Countdown />
            </CountdowProvider>

        </View>
    );
}

export default Home;