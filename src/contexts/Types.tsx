import {ReactNode} from 'react'

export interface contextProps {
    children: ReactNode;
}

export interface data {
    nome: string;
    level: number;
    foto: string;
}


export interface challenge{
    description: String;
    amount: number;
    type: String;
}

export interface dataContext {
    user: data;
    newChallenge: () => void;
    activeChallenge: challenge;
}

export interface dataContextCountdown{
    time: number;
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: ()=> void;
    stopCountodown: ()=> void;
}