import React from 'react' 
import If, { Else } from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <b>{props.usuario.nome}</b> !
                <Else>
                    Seja bem vindo <b> Amigão </b> !
                </Else>
            </If>
        </div>
    )
}