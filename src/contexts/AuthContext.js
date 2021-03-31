import React, {useContext, useState, useEffect} from 'react' 
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentuser] = useState()
    const [loading, setLoading] = useState(true)

    const value = {
        currentUser,
        signup,
        login,
        checkIfEmailIsRegistered
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function checkIfEmailIsRegistered(email) {
        return auth.fetchSignInMethodsForEmail(email)
    }

    useEffect(() => {
        const unsubcscribe = auth.onAuthStateChanged(user => {
            setCurrentuser(user)
            setLoading(false)
        })
        return unsubcscribe
    }, [])


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}