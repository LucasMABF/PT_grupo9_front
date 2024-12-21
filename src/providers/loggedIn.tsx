"use client"
import {createContext, useState, ReactNode, useEffect} from "react";

type log = {
  loggedIn: boolean,
  login: (string) => void,
  logout: () => void,
}

const loggedInContext = createContext<log>({loggedIn: false, login: () => {}, logout: () => {}}); 
const LoggedInProvider = ({children} : {children: ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const logged = window.localStorage.getItem("token");
    if(logged){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  }, []);

  const login = (token: string) => {
    setLoggedIn(token);
    window.localStorage.setItem("token", token);
  }
  const logout = () => {
    setLoggedIn(false);
    window.localStorage.removeItem("token");
  }

  return(
    <loggedInContext.Provider value={{loggedIn, login, logout}}>
      {children}
    </loggedInContext.Provider>
  );
}

export default LoggedInProvider;
export {loggedInContext};

