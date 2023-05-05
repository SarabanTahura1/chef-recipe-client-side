import React, { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase.config";

const AuthInfoProvider = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  // Github & google provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert("Google login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = () => {
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
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // New account create
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    googleLogin,
    githubLogin,
    newAccountCreate,
    userLogin,
  };

  return (
    <AuthInfoProvider.Provider value={authInfo}>
      {children}
    </AuthInfoProvider.Provider>
  );
};

export default AuthProvider;
export { AuthInfoProvider };
