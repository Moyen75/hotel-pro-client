import initializeAuthentication from "./firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})

    const auth = getAuth();
    // google sign in
    const googleSignIn = (success, navigate, location) => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                success()
                let from = location.state?.from?.pathname || "/";
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }


    // create user with email and password
    const emailSignUp = (email, password, name, success, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                success(result.user.displayName)
                navigate('/')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(result => {
                    setUser(result.user)

                }).catch(error => {
                    setError(error.message)
                })
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

    // sign in with email and password
    const emailSignIn = (email, password, success, navigate, location) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                let from = location.state?.from?.pathname || "/";
                success()
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser({})
            }
        })

        return () => unsubscribe;
    }, [auth])


    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

    return {
        error,
        user,
        loading,
        googleSignIn,
        emailSignUp,
        emailSignIn,
        logOut
    }
}
export default useFirebase;