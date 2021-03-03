import {ReactNode} from 'react'
import { ViewPropsAndroid } from 'react-native';

export interface contextProps {
    children: ReactNode;
}

interface data {
    nome: string;
    foto: string;
}

interface challenge{
    description: String;
    amount: number;
    type: String;
}

export interface dataContext {
    user: data;
    activeChallenge: challenge;
    activeModal: boolean;
    experienceBar: number;
    level: number;
    experienceToNextLevel: number,
    challengesCompleted: number,
    newChallenge: () => void;
    showModal: () => void;
    failChallenge: () => void;
    completeChallenge: ()=> void;
}

export interface dataContextCountdown{
    time: number;
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: ()=> void;
    stopCountodown: ()=> void;
    resetTimeCountdown: ()=> void;
}