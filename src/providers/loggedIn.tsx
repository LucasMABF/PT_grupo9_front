"use client"
import {createContext, useState, ReactNode, useEffect} from "react";

type log = {
  loggedIn: boolean,
  login: () => void,
  logout: () => void,
}

const loggedInContext = createContext<log>({loggedIn: false, login: () => {}, logout: () => {}}); 
const LoggedInProvider = ({children} : {children: ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const logged = window.localStorage.getItem("loggedin");
    if(logged){
      try {
        setLoggedIn(JSON.parse(logged));
      } catch{
        setLoggedIn(false);
      }
    }else{
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("loggedin", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return(
    <loggedInContext.Provider value={{loggedIn, login, logout}}>
      {children}
    </loggedInContext.Provider>
  );
}

export default LoggedInProvider;
export {loggedInContext};
