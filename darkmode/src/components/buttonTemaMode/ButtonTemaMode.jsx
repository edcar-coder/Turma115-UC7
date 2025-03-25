import React, {useState, useEffect} from "react";
import style from "./ButtonTemaMode.module.css";
function ButtonTemaMode(){

   //const [dark, setdarkMode] = useState(false); 
    const [dark, setdarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";  // converter uma string em boleando
    })
    useEffect(() => {
        localStorage.setItem("darkMode", dark);                
    }, [dark])
    return(
         <div className={dark ? style.dark : style.light}>
            <h1>{dark ? "Modo Escuro 🌚" : "Modo Claro 🌞"}</h1>
            <button onClick={()=> setdarkMode(!dark)}>Alterar Tema</button>
         </div>
    );
}

export default ButtonTemaMode;    