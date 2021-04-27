//Padronização de .jsx 
import React from 'react'

export default function paramsFunction(props) {

    var status = '';

        if(props.nota >= 6){
            status = 'Aprovado'
        }else{
            status = 'Reprovado'
        }

    return (
    <div>
        <h2>{props.titulo} <b>{status}</b></h2>
        <p><b>{props.aluno}</b></p>
        <p>Sua nota é: <b>{props.nota}</b></p>
    </div>
    )
}
