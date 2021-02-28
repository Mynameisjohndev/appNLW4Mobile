import React, { useState, createContext, useContext, ReactNode } from 'react'
import { dataContext, contextProps} from './Types'
const challengs = require('../challenges.json');


export const ChallengesContext = createContext({} as dataContext);

export function AuthProvider({ children }: contextProps) {
    const [user, setUser] = useState({
        nome: "João",
        level: 1,
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
        console.log(challenge);
        setActiveChallenge(challenge);
    }

    return (
        <ChallengesContext.Provider value={{ user, newChallenge, activeChallenge }}>
            {children}
        </ChallengesContext.Provider>
    );
}

export default AuthProvider;