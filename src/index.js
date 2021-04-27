import './index.css' //Importação relativa
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'


//App.jsx chama ComParametro.jsx e o inclui como um componente;
ReactDOM.render(
    <div id="bloco">
        <App></App> 
    </div>,
document.getElementById('root'));

