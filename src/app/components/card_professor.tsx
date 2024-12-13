import React from "react";
import Image from "next/image";
import ProfilePic from "/public/media/profile_pic.svg";

interface Props{
  nome: string;
  materia: string;
}

const CardProfessor = (props: Props) => {
  // adicionar dados argumento
  return(
    <div className="bg-color1 p-3 w-40 text-center rounded-lg flex flex-col shrink-0 hover: cursor-pointer hover:scale-105 duration-100">
      <Image className="rounded-xl" src={ProfilePic} alt="logo UnB"/>
      <span className="mt-1"> {props.nome} </span>
      <span> {props.materia} </span>
    </div>
  );
}

export default CardProfessor;
