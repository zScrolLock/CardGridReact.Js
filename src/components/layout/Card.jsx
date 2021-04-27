import React from 'react'
import "./Card.css"

export default (props) => {
    
    const cardStyle = {
        backgroundColor: props.color || '#8b0000', /*CamelCase */
        borderColor: props.color || '#FFFFF'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title"> {props.titulo} </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
};