import style from "./Main.module.css";
import Frameworks from "../Frameworks/Frameworks";
import Intro from "../Intro/Intro";
import Noticias from "../Noticias/Noticias";
import Recursos from "../Recursos/Recursos";
import Tipos from "../Tipos/Tipos";

function Main(){
    return(
        <main className={style.main}>
        <Intro />
        <Tipos />
        <Noticias />
        <Frameworks />
        <Recursos />
        </main>
    );
}
export default Main;