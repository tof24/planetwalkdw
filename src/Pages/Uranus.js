import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Timer from "../Components/Timer";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import TextU from "../Components/TextU";

function Uranus() {


    return (

        <div className={"container-fluid"}>


            <div className={" container-fluid w-100"}>


                <Album name={"A Song For Every Moon"} artist={"Bruno Major"} class={"oddity"} cover={"./Uranus/moon.jfif"}></Album>
                <Album name={"Undercurrent"} artist={"Bill Evans"} class={"scuola "} cover={"./Uranus/undercurrent.jpg"}></Album>
                <Painting name={"Nighthawks"} artist={"Edward Hopper"} class={"dark mb-5"} cover={"./Uranus/nightwalks.jpg"}></Painting>
                <TextU class={"poemaU"}></TextU>
                <div className={"text-right"}>
                    <h1 className={"text-white we amiri"}> We may be alone in <br/> this darkness.</h1>
                </div>

                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Uranus.glb"}></Planet>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Uranus;


