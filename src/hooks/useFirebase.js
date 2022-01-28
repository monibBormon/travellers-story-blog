import { useEffect, useState } from "react";
import firebaseInit from "../firebase/fireabase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'

// firebase init 
firebaseInit();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    // get auth 
    const auth = getAuth();
    // google provider 
    const googleProvider = new GoogleAuthProvider();

    // register user 
    const registerUser = (email, password, name, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError("")
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save use to database 
                saveUser(email, name, 'POST')
                // send name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { })
                navigate('/')
            }).catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }
    // login user
    const loginUser = (email, password, location, navigate) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setError("")
            }).catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // google login 
    const googleSignIn = (location, navigate) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                // save to database 
                saveUser(user.email, user.displayName, 'PUT')
                setError("")
                const destination = location?.state?.from || '/'
                navigate(destination)
            }).catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // save user to database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                // console.log(data)
            })
    }

    // get admin user from database 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // dispatch(authUser(user))
            } else {
                setUser({});
                // dispatch(authUser(user))
            }
            setLoading(false);
        });
        return () => unSubscribe;
    }, [auth]);


    // log Out 
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => { })
            .catch(error => { })
            .finally(() => setLoading(false))
    }


    return {
        user,
        error,
        admin,
        registerUser,
        loginUser,
        googleSignIn,
        logOut,
        isLoading,
    }




}

export default useFirebase;