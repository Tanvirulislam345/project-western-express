import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isLogining, setIsLogining] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // }).catch((error) => {
        //     console.log(error.message);
        // }).finally(() => setLoading(false));
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
            setIsLogining(false);
        });
        return () => unsubscribed;
    }, [auth, isLoading]);

    const signOutUsingGoogle = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                console.log('logOut successfull');
                setUser({});
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => setLoading(false));
    }

    return {
        user,
        isLoading,
        isLogining,
        signInUsingGoogle,
        signOutUsingGoogle
    }
}

export default useFirebase;