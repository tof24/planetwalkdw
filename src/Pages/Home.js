import '../App.css'
import '../bootstrap.min.css'
import Timer from "../Components/Timer";
import Text2 from "./Text2";
import Earth from "./Earth";
import Uranus from "./Uranus";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import TextU from "../Components/TextU";
import TextDemo from "./TextDemo";

function Home() {

    const [current, setCurrent] = useState(<Earth/>);
    const [estilo, setEstilo] = useState("")
    const [page, setPage] = useState("1")
    const [days, setDays] = useState("365")
    const [planet, setPlanet] = useState("Earth")


    const [currentScreen, setCurrentScreen] = useState(1);
    const [wheel, setWheel] = useState(0);


    function handleScroll(event) {
        console.log("mee", currentScreen)

        if (event.deltaY > 0) {
            setCurrentScreen(prevScreen => prevScreen + 1);
            setWheel(0);
        } else {
            setCurrentScreen(prevScreen => prevScreen - 1);
            setWheel(1);
        }
    }




    useEffect(() => {
        console.log("inside useeefect", currentScreen)
        console.log("inside 2", wheel)

    //inicio da animação da Terra
        if (currentScreen === 5 && wheel === 1) {
            //scroll up
            setEstilo("fade-in2")
            setCurrent(<Earth/>)
            setPage("1")
            setDays("365")
            setPlanet("Earth")
        }
        if (currentScreen === 10 && wheel === 0) {
            setEstilo("fade-out1")
        }
        if (currentScreen === 20 && wheel === 1) {
            setEstilo("fade-in1 centra")
            setCurrent(<Earth/>)
            setPage("1")
            setDays("365")
            setPlanet("Earth")
        }
        if (currentScreen === 25 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }
    //fim da animação da Terra

        if (currentScreen === 34 && wheel === 1) {
            setCurrent(<Text2/>)
            setEstilo("textout centra")
            setPage("?")
            setDays("?")
            setPlanet("?")

        }

        if (currentScreen === 35 && wheel === 0) {
            setCurrent(<Text2/>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("?")
        }

        if (currentScreen === 40 && wheel === 0) {
            setCurrent(<Text2/>)
            setEstilo("textout centra")
            setPage("?")
            setDays("?")
            setPlanet("?")
        }
        if (currentScreen === 41 && wheel === 1) {
            setCurrent(<Text2/>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("?")
        }

    //inicio da animação de Uranus
        if (currentScreen === 47 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 50 && wheel === 0) {
            setCurrent(<Uranus/>)
            setPage("2")
            setDays("30 680")
            setPlanet("Uranus")
        }
        if (currentScreen === 55 && wheel === 0) {
            setEstilo("fade-in1 centra")
        }

        if (currentScreen === 64 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }

        if (currentScreen === 65 && wheel === 0) {

            setEstilo("fade-in2 centra")
        }

        if (currentScreen === 70 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }

        if (currentScreen === 80 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }
        //fim da animação da Uranus



        if (currentScreen === 90 && wheel === 0) {
            setCurrent(<TextDemo/>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("?")
        }

        if (currentScreen === 100 && wheel === 0) {
            setCurrent(<TextDemo/>)
            setEstilo("textout centra")
            setPage("?")
            setDays("?")
            setPlanet("?")
        }

    }, [currentScreen]);

    return (

        <div onWheel={handleScroll} className={"bgblack container-fluid"}>
            <div className={"sticky-top"}>
                <div className={"timer"}>
                    <span className={"text-white amiri"}><Timer></Timer></span>
                </div>
                <div className={"counter"}>
                    <div className={"frac text-white amiri"}>
                        <span>{page}</span>
                        <span className={"symbol"}>/</span>
                        <span className={"bottom"}>2</span>
                    </div>
                </div>
                <div className={"days"}>
                    <span className={"text-white amiri"}>{days} days</span>
                </div>
                <div className={"planeti"}>
                    <span className={"text-white amiri"}> {planet} </span>
                </div>
            </div>
            <div className={"bggrain"}>
                <div className={estilo}>
                {current}
                </div>
            </div>


        </div>
    );
}

export default Home;


