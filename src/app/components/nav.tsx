"use client"
import React, { useContext } from "react";
import Image from "next/image";
import { loggedInContext } from "../providers/loggedIn";

const NavBar = () => {
  // trocar imagem

  const {loggedIn, login, logout} = useContext(loggedInContext);

  if(loggedIn){
    return(
      <nav className="bg-color2 p-2 max-h-16 min-h-16 flex">
        <img className="w-24 ml-1 mr-auto"src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg"/>
        <img className="rounded-3xl h-16 self-center p-2 mr-1 ml-auto" src="https://as1.ftcdn.net/v2/jpg/08/05/28/22/1000_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"/>
        <img className="h-14 self-center p-2 mr-2 hover:scale-105 duration-100" onClick={logout} src="https://www.svgrepo.com/show/21304/logout.svg"/>
      </nav>
    );

  }

  return(
    <nav className="bg-color2 max-h-16 min-h-16 p-2 flex">
      <img className="w-24 ml-1 mr-auto"src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg"/>
      <button onClick={login} className="bg-color1 text-white p-2 rounded-lg self-center mr-1 ml-auto w-28 text-lg hover:scale-105 duration-100"> Login </button>
    </nav>
  );
}

export default NavBar;
