import React from "react";

const NavBar = () => {
  // trocar imagem
  // trocar display se logado
  return(
    <nav className="bg-color2 p-2 flex">
      <img className="w-20 ml-1 mr-auto "src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg"/>

      <button className="bg-color1 text-white p-2 rounded-lg self-start mr-1 ml-auto w-28 text-lg hover:scale-105 duration-100"> Login </button>
    </nav>
  );
}

export default NavBar;
