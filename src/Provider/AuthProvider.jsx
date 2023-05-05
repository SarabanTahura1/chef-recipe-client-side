import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase.config";

const AuthInfoProvider = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  // Github & google provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert("Google login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        alert("Google login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // New account create
  const newAccountCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // New account create
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update profile
  const profileUpdate = (user, name, url) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  // User observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    profileUpdate,
    googleLogin,
    githubLogin,
    loading,
    newAccountCreate,
    userLogin,
    userLogOut,
  };

  return (
    <AuthInfoProvider.Provider value={authInfo}>
      {children}
    </AuthInfoProvider.Provider>
  );
};

export default AuthProvider;
export { AuthInfoProvider };
