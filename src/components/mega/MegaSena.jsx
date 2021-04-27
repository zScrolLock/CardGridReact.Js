import React, { useState } from 'react' 
import "./Mega.css"

export default (props) => {
    
    function containsNumber(min, max, array){
        const randNumber = parseInt(Math.random() * (max + 1 - min) + min)
            if(array.includes(randNumber)){
                containsNumber(min, max, array)
            }else{
                console.log(randNumber)
                return randNumber
            }
    }

    function randNumbers(qtdNumbers){
        const numbers = Array(qtdNumbers).fill(0).reduce((auxNumber) => {
            const newNumber = containsNumber(1, 60, auxNumber)
            return [...auxNumber, newNumber]
        },[]).sort((n1, n2) => n1 - n2)

        return numbers
    }

    const [qtde, setQtd] = useState(props.qtdNumbers || 6)
    const initalNumbers = randNumbers(qtde)
    const [number, setNumber] = useState(initalNumbers)
    

    return(
        <div className="Mega">
            <h3>MegaSena da Virada</h3>
            <h4>{number.join(" ")}</h4>

            <div>
                <label htmlFor="numbers"> Qtd. da Cartela: </label>
                <input min="6" max="15" type="number" value={qtde} onChange={event => setQtd(+event.target.value)}></input>
            </div>

            <button onClick={_ => setNumber(randNumbers(qtde))}>Gerar Números</button>
        </div>
    )
}