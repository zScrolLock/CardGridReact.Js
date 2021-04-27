import React from 'react'

export default props => {

    const minAge = 40;
    const maxAge = 70;

    function randomNumber() {
        return parseInt(Math.random() * (maxAge - minAge)) + minAge;
    }

    function isNerd() {
        return Math.random() > 0.5
    }

    return (
        <div>
            <button onClick={
                function () {
                    props.click('Luis', randomNumber(), isNerd());
                }
            }>Informações</button>
        </div>
    )
}