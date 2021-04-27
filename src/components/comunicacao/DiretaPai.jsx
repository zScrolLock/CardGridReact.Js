import React from 'react' 
import DiretaFilho from './DiretaFilho'

//Comunicação é o ato de passar informações por Props (Propriedades)

export default props => {
    return (
        <div>
            <DiretaFilho text='Filho 1 ' num={20} bool={true}></DiretaFilho>
        </div>
    )
}