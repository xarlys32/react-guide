import React, { useState, useEffect } from "react";
const AuthContext= React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, pass) => {}
});



export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     
    useEffect(() => {
        const isLoggedBrowser = localStorage.getItem('isLogged');
        if (isLoggedBrowser) {
          setIsLoggedIn(true);
        }
    }, [])
   
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
        localStorage.setItem('isLogged', true)
      };
    
    const logoutHandler = () => {
        localStorage.removeItem('isLogged')
        setIsLoggedIn(false);
    };
    return <AuthContext.Provider value={
        {
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler
        }}>
        {props.children}
    </AuthContext.Provider>

};
export default AuthContext;
