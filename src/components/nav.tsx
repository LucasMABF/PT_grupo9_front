"use client"
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { loggedInContext } from "@/providers/loggedIn";
import LogoUnB from "/public/media/logo_unb.svg";
import LogoutIcon from "/public/media/logout_icon.svg";
import DefaultProfilePic from "/public/media/profile_icon.svg";

const NavBar = () => {
  const {loggedIn, login, logout} = useContext(loggedInContext);

  if(loggedIn){
    return(
      <nav className="bg-color2 p-2 max-h-16 h-16 min-h-16 flex">
        <Image className="w-24 ml-1 mr-auto" src={LogoUnB} alt="logo UnB"/>
        <Link href="/perfil/">
        <Image className="self-center h-14 w-14 p-0.5 mr-1 ml-auto object-fit-contain hover:scale-105 duration-100" src={DefaultProfilePic}  alt="foto de perfil"/>
        </Link>
        <Link href="../" passHref>
          <Image className="self-center h-11 w-11 p-0.5 mt-1.5 mr-2 hover:scale-105 duration-100" onClick={logout} src={LogoutIcon} alt="ícone logout"/>
        </Link>
      </nav>
    );

  }

  return(
    <nav className="bg-color2 max-h-16 min-h-16 p-2 flex">
      <Image className="w-24 ml-1 mr-auto" src={LogoUnB} alt="logo UnB"/>
     { /* <Link href="/usuario" passHref> */}
        <button onClick={login} className="bg-color1 text-white p-2 rounded-lg self-center mr-1 ml-auto w-28 text-lg hover:scale-105 duration-100"> Login </button>
      {/* </Link> */}
    </nav>
  );
}

export default NavBar;
