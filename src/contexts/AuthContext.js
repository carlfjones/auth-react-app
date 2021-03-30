import React, {useContext, useState, useEffect} from 'react' 
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentuser] = useState()

    const value = {
        currentUser,
        signup
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubcscribe = auth.onAuthStateChanged(user => {
            setCurrentuser(user)
        })
        return (unsubcscribe)
    }, [])


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}