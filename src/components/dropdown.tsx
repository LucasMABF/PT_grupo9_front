"use client"
import React, {useState, useEffect} from "react";
 
interface Props<T extends Option>{    
  options: T[];
  onChange: (arg0: T) => Promise<void>;
  initial: T;
}

interface Option{
  text: string,
}


const DropDown = <T extends Option,>(props: Props<T>) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [selected, setSelected] = useState<T>(props.initial);
  

  const opt = props?.options ? props.options : [];

  const toggle = () => {
    SetIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if(props.onChange){
      props.onChange(selected);
    }
  }, [selected])
  

  const handleClick = (option: T) => {
    setSelected(option);
    toggle();
  }


  return( 
    <>
    <div className="relative">
      <button onClick={toggle} className="peer bg-color1 p-2 rounded-lg m-2 w-36">Ordenar por</button>
      <div className={`absolute top-11 z-30 bg-green-600 rounded-lg p-1.5 w-36 flex flex-col ${isOpen? "flex": "hidden"}`}>
        <ul>
          {opt.map((o) => {
              return <li key={o.text} className={`py-0.5 rounded-sm hover:bg-green-400 hover:cursor-pointer ${selected.text == o.text? "bg-green-500" : ""}`} onClick={() => handleClick(o)}>{o.text}</li>
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
