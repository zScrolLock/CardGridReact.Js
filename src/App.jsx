import React from 'react'
import './App.css'
import Random from './components/basics/aleatorio'
import First from './components/basics/Primeiro'
import Card from './components/layout/Card'
import Params from './components/basics/ComParametro'
import Familia from './components/basics/Familia'
import Membro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParImpar'
import UserInfo from './components/condicional/UserInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import MegaSena from './components/mega/MegaSena'

//Com Default você pode retornar uma function anon
//Sem Default você não pode retornar uma function anon

export default (props) => { //è possivel utilizar Arrow Functions
    return (
        <div className="App">
            <h1>Fundamentos do React.js</h1>
            <div className="Cards">
                <Card titulo=" #12 - Desafio MegaSena" color="#900C3F">
                    <MegaSena qtd={8}></MegaSena>
                </Card>

                <Card titulo=" #11 - Contador (Class Component)" color="#900C3F">
                    <Contador initialNum={20}></Contador>
                </Card>

                <Card titulo=" #10 - Componente de Controle (Input)" color="#900C3F">
                    <Input></Input>
                </Card>

                <Card titulo=" #09 - Comunicação Indireta" color="#C70039">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo=" #08 - Comunicação Direta" color="#C70039">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo=" #07.1 - Componente Condicional" color="#D06C6C">
                    <UserInfo usuario={{name: 'Luis'}}></UserInfo>
                </Card>

                <Card titulo=" #07 - Render Condicional" color="#D06C6C">
                    <ParOuImpar num={10}></ParOuImpar>
                </Card>

                <Card titulo=" #06 - Desafio Repetição (TABLE)" Color="#C70039">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo=" #05 - Lista de Alunos" Color="#900C3F">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo=" #04 - Componente Com Filhos" Color="#D06C6C">
                    <Familia lastName="Cardoso">
                        <Membro firstName="Luís" ></Membro>
                        <Membro firstName="Ana" ></Membro>
                        <Membro firstName="Nilda" ></Membro>
                    </Familia>
                </Card>

                <Card titulo=" #03 - Desafio Random Number" color="#900C3F">
                    <Random min={1} max={10+1}></Random>
                </Card>

                <Card titulo=" #02 - Situação do Aluno" color="#581845">
                    <Params titulo="Situação do Aluno" aluno="Luis A. Cardoso Mota" nota={7.63}></Params>
                </Card>

                <Card titulo=" #01 - First Component Create" color="#C70039">
                    <First></First>
                </Card>
            </div>
        </div>
    )
}