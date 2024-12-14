"use client"
import React, {useState} from "react";

interface Props{    
  options: string[];
}

const DropDown = (props: Props) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [selected, setSelected] = useState("Nome");
  
  const opt = props?.options ? props.options : [];

  const toggle = () => {
    SetIsOpen((prev) => !prev);
  }

  const handleClick = (e : React.MouseEvent<HTMLElement>) => {
    console.log((e.target as HTMLInputElement).innerText);
    setSelected((e.target as HTMLInputElement).innerText);
    toggle();
  }


  return( 
    <>
    <div className="relative">
      <button onClick={toggle} className="peer bg-color1 p-2 rounded-lg m-2 w-36">Ordenar por</button>
      <div className={`absolute top-11 z-30 bg-green-600 rounded-lg p-1.5 w-36 flex flex-col ${isOpen? "flex": "hidden"}`}>
        <ul>
          {opt.map((o) => {
              return <li key={o} className={`py-0.5 rounded-sm hover:bg-green-400 hover:cursor-pointer ${selected == o? "bg-green-500" : ""}`} onClick={handleClick}>{o}</li>
            })}
        </ul>
      </div>
    </div>
    {
      isOpen
        ?
        <div className="fixed top-0 right-0 left-0 bottom-0" onClick={toggle}></div>
        :
        <></>
      }
    </>
  );
}

export default DropDown;
