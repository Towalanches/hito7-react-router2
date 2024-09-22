import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        const savedToken = sessionStorage.getItem('token')
        return savedToken !== null ? savedToken === 'true' : true
    })

    const logout = () => {
        setToken(false)
        sessionStorage.setItem('token', 'false')
    }

    const login = () => {
        setToken(true)
        sessionStorage.setItem('token', 'true')
    }

    useEffect(() => {
        sessionStorage.setItem('token', token.toString())
    }, [token])

    return (
        <UserContext.Provider value={{ token, logout, login }}>
            {children}
        </UserContext.Provider>
    )
}
