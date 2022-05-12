import React, { useState, createContext } from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [emailError, setEmailError] = useState(false);
  return (
    <AuthContext.Provider value={{ emailError, setEmailError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
