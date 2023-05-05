import React, { createContext, useState } from "react";
const AuthInfoProvider = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const authInfo = {
    user,
  };
  return (
    <AuthInfoProvider.Provider value={authInfo}>
      {children}
    </AuthInfoProvider.Provider>
  );
};

export default AuthProvider;
export { AuthInfoProvider };
