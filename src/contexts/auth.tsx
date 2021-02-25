import React, {useState, createContext, useContext, ReactNode } from 'react'

//tipagem do children
interface contextProps{
    children: ReactNode;
}

interface data{
    nome : string;
    level: number;
    foto: string;
}

interface dataContext{
    user: data;
}

export const AuthContext = createContext({} as dataContext );

export function AuthProvider ({ children } : contextProps){
    const [user, setUser] = useState({
        nome: "João",
        level: 1,
        foto: "https://github.com/Jhon9191.png"
    });

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;