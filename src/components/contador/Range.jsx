import React from 'react' 

export default (props) => {
    return (
        <div>
            <label htmlFor="range">Range: </label>
            <input id="range" type="number" value={props.range} onChange={event => props.setRange(+event.target.value)}/>
        </div>
    )
}