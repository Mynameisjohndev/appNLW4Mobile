import React, { useState, createContext, useContext, ReactNode } from 'react'
import CountdowProvider from './CountdowContext';
import { dataContext, contextProps} from './Types'
const challengs = require('../challenges.json');


export const ChallengesContext = createContext({} as dataContext);

export function AuthProvider({ children }: contextProps) {

    const [user, setUser] = useState({
        nome: "João",
        foto: "https://github.com/Jhon9191.png"
    });

    const [activeChallenge, setActiveChallenge] = useState({
        description: "Beautifull",
        amount: 0,
        type: 'arrow'
    });

    const newChallenge = () => {
        const randomChallenge = Math.floor(Math.random() * challengs.length);
        const challenge = challengs[randomChallenge];
        setActiveChallenge(challenge);
    }

    const[activeModal, setActiveModal] = useState(false)

    const showModal = () =>{
        setActiveModal(!activeModal);
    }

    const failChallenge = () =>{
        showModal();
        setActiveChallenge({
            description: "Beautifull",
            amount: 0,
            type: 'arrow'
        });
    }

    function levelUp(){
        setLevel(level+1)
    }
    const[challengesCompleted, setChallengesCompleted] = useState(0)
    const[level, setLevel] = useState(0);
    const[experienceBar, setExperienceBar] = useState(0);

    const experienceToNextLevel = Math.pow( ( level + 2) * 4 , 2 );

    function completeChallenge(){
        if(!activeChallenge){
            return ;
        }
        showModal();
        const { amount } = activeChallenge;
        let finalExperince = experienceBar + amount;
        if(finalExperince >= experienceToNextLevel){
            levelUp();
            finalExperince = finalExperince - experienceToNextLevel;
        }
        setExperienceBar(finalExperince);
        setActiveChallenge({
            description: "Beautifull",
            amount: 0,
            type: 'arrow'
        });
        setChallengesCompleted(challengesCompleted + 1);

    }

    return (
        <ChallengesContext.Provider value={{
             user, 
             newChallenge, 
             showModal,
             activeChallenge,
             activeModal,
             failChallenge,
             completeChallenge,
             experienceBar,
             level,
             experienceToNextLevel,
             challengesCompleted,

             }}>
            {children}
        </ChallengesContext.Provider>
    );
}

export default AuthProvider;