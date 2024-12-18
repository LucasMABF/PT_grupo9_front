"use client"
import React, { useEffect, useState } from "react";
import CardProfessor from "@/components/card_professor";
import DropDown from "@/components/dropdown"
import Image from "next/image";
import SearchIcon from "/public/media/search_icon.svg";
import {getProfessores} from "@/utils/api"
import {Professor} from "@/types/Professor"


export default function Home() {
  const [professoresRecentes, setProfessoresRecentes] = useState<Professor[]>([]);
  const [professores, setProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    getProfessores({limit: 5, order_field: "updatedAt", order: "desc"}).then((response) => {
      setProfessoresRecentes(response);
    })
  }, []);

  useEffect(() => {
    getProfessores({order_field: "nome"}).then((response) => {
      setProfessores(response);
    })
  }, []);

  const options_dropdown = [
    {text: "Nome", order_field: "nome"}, 
    {text: "Departamento", order_field: "departamento"},
    {text: "Recentes", order_field: "updatedAt", order: "desc"},
    {text: "Antigos", order_field: "updatedAt", order: "asc"},
  ];

  const reorder = async (option: {order_field: string, order?: string}) => {
    getProfessores(option).then((response) => {
      if(response){
        setProfessores(response);
      }
    })
  };

  return (
    <main className="grow flex flex-col gap-5 py-5 px-0.5 relative">

      <div className="absolute top-1.5 right-1.5 self-end flex w-1/3 max-w-96 bg-white rounded-lg p-1 gap-0 m-1.5 border-[3px] border-green-700 has-[:focus]:border-green-900">
        <Image src={SearchIcon} alt="ícone de pesquisa"/>
        <input type="text" placeholder="Buscar Professor(a) ou matéria" className="w-full  p-1 text-gray-700 outline-0"/>     
      </div>
      <div className="m-1">
        <h2 className="md:text-3xl text-2xl">Recentemente avaliados</h2> 

        <section className="flex gap-5 m-2 overflow-x-auto p-1.5 justify-around">
          {professoresRecentes.map((professor, index) => <CardProfessor key={index} departamento={professor.departamento} nome={professor.nome}/>)}
        </section>
      </div>
      <div className="m-1">
        <div className="flex justify-between">
          <h2 className="md:text-3xl text-2xl">Todos os professores</h2>
          <DropDown onChange={reorder} options={options_dropdown} initial={options_dropdown[0]}/>
        </div>
        <section className="flex gap-5 m-2 flex-wrap  p-1.5 justify-center">
          {professores.map((professor, index) => <CardProfessor key={index} departamento={professor.departamento} nome={professor.nome}/>)}
        </section>
      </div>
    </main>
  );
}

