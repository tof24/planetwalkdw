import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function TextU(props) {
    return (
        <div className={props.class}>
            <span className={"text-white titulo text-right"}>
                <div className={"nunito"}>
                    <p >Não tenho ambições nem desejos</p>
                    <p>Ser poeta não é uma ambição minha</p>
                    <p>É a minha maneira de estar sozinho.</p>
                    <p><small>Livro do Desassossego, Fernando Pessoa</small></p>
                </div>
            </span>


        </div>
    );
}

export default TextU
