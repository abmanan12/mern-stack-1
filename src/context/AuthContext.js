import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext()

const initialState = { isAuthenticated: false }

const reducer = (state, { type }) => {
    switch (type) {
        case 'LOGIN':
            return { isAuthenticated: true }
        case 'LOGOUT':
            return { isAuthenticated: false }
        default:
            return state
    }
}

export default function AuthContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
