"use client"
import {createContext, useState, ReactNode, useEffect} from "react";

type log = {
  loggedIn: number | null,
  login: (arg0: {access_token: string, id: number}) => void,
  logout: () => void,
}

const loggedInContext = createContext<log>({loggedIn: null, login: () => {}, logout: () => {}}); 
const LoggedInProvider = ({children} : {children: ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState<number | null>(null);

  useEffect(() => {
    const logged = Number(window.localStorage.getItem("id"));
    if(logged){
      setLoggedIn(logged);
    }else{
      setLoggedIn(null);
    }
  }, []);

  const login = (login_info: {access_token: string, id: number}) => {
    setLoggedIn(login_info.id);
    window.localStorage.setItem("token", login_info.access_token);
    window.localStorage.setItem("id", login_info.id?.toString());
  }
  const logout = () => {
    setLoggedIn(null);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
  }

  return(
    <loggedInContext.Provider value={{loggedIn, login, logout}}>
      {children}
    </loggedInContext.Provider>
  );
}

export default LoggedInProvider;
export {loggedInContext};

