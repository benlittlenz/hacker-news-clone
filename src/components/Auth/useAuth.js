import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';

const useAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })
    }, [])
}

export default useAuth;