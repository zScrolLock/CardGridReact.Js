import React, { useState } from 'react' 
import './Input.css';

export default props => {

    const [valor, setValor] = useState('Initial Value'); 

    function changeValue(event) {
        setValor(event.target.value);
    }

    /*
    <input value={valor} onChange={changeValue}/> Componente para input 
    <input value={valor} readOnly /> Apenas para leitura
    <input value={undefined} /> Componente sem Estado (Incontrolavel)
    */

    return (
        <div className="Input">
            <h3>{valor}</h3>
            <input value={valor} onChange={changeValue}/>  
            <input value={valor} readOnly />
            <input value={undefined} />
        </div>
    )
}