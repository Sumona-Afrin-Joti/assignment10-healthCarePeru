import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }


    const handleRegistration = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (password.length < 6) {
            setError('password should be at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('successfully signed up');
                setUserName();
                verifyEmail();
            })
            .catch(error => {
                setError(error.message)
            })
        
    }

    const handleSignIn = () => {
        setIsLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    
    }

    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({})

            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    }, [auth])


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("verify your email")
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {

            })
    }


    return {
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleRegistration,
        handleSignIn,
        handleSignOut,
        isLoading,
        setIsLoading,
        error,
        setError,
        user
    }

}

export default useFirebase;