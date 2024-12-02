import React from "react";

const CardProfessor = () => {
  // trocar imagem
  // adicionar dados argumento
  return(
    <div className="bg-color1 p-3 w-40 text-center rounded-lg flex flex-col shrink-0 hover: cursor-pointer">
      <img className="rounded-xl" src="https://as1.ftcdn.net/v2/jpg/08/05/28/22/1000_F_805282248_LHUxw7t2pnQ7x8lFEsS2IZgK8IGFXePS.jpg"/>
      <span className=""> Nome </span>
      <span> matéria </span>
    </div>
  );
}

export default CardProfessor;
