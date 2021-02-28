import React, {useState, createContext, useEffect, ReactNode, useContext } from 'react'
import { ChallengesContext } from './ChallengesContext';
import {  contextProps , dataContextCountdown} from './Types';
//tipagem do children

let countdownTimeOut: NodeJS.Timeout;

export const CountdowContext = createContext({} as dataContextCountdown );

export function CountdowProvider ({ children } : contextProps){
   
    const { newChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const startCountdown = () => {
        setIsActive(true);
        //setHasFinished(false);
    }

    const stopCountodown = () => {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive == true && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            newChallenge();
        }
    }, [isActive, time])

    return(
        <CountdowContext.Provider value={{
            time,
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountdown,
            stopCountodown,
          }}>
            {children}
        </CountdowContext.Provider>
    );
}

export default CountdowProvider;