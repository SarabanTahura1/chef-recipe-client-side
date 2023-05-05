import React, { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
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

  const authInfo = {
    user,
    googleLogin,githubLogin
  };

  return (
    <AuthInfoProvider.Provider value={authInfo}>
      {children}
    </AuthInfoProvider.Provider>
  );
};

export default AuthProvider;
export { AuthInfoProvider };
