import React from 'react'

export default function(props){
    const randomN = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p> <b>Valor Mínimo:</b> {props.min}</p>
            <p> <b>Valor Máximo:</b> {props.max-1}</p> 
            <p> <b>Número Gerado:</b> {randomN}</p>
        </div>
    )
};