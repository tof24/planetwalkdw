import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function Text(props) {
    return (
        <div className={props.class}>
            <span className={"text-white titulo "}>
                <div className={"nunito"}>
                     <p >Não sou nada.</p>
                    <p>Nunca serei nada.</p>
                    <p>Não posso querer ser nada.</p>
                    <p>À parte isso, tenho em mim todos os sonhos do mundo.</p>
                    <p className={"text-white-50"}><small>Tabacaria, Álvaro de Campos</small></p>
                </div>
            </span>


        </div>
    );
}

export default Text
