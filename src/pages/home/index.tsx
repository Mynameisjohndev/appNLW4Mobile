import React, { useState, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { View } from 'react-native';

import Profile from '../../components/ProFile/Profile';
import ExperienceBar from '../../components/ExperienceBar/ExperienceBar';
import Countdown from '../../components/Countdown/Countdown'
import Challenge from '../../components/Challenges/Challenges';

import { CountdowProvider } from '../../contexts/CountdowContext'
const Home = () => {
    const { } = useContext(ChallengesContext);
    return (

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <CountdowProvider>
                <Profile />
                <ExperienceBar />
                <Countdown />
                <Challenge/>
            </CountdowProvider>

        </View>
    );
}

export default Home;