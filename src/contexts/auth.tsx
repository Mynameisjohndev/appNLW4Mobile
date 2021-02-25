import React, {useState, createContext, useContext, ReactNode } from 'react'

//tipagem do children
interface contextProps{
    children: ReactNode;
}

interface dataContext{
    user: number;
}

export const AuthContext = createContext({} as dataContext );

export function AuthProvider ({ children } : contextProps){
    const [user, setUser] = useState(0);



    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;