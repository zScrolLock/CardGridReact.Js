import React from 'react' 
import alunos from '../../data/alunos'

export default props => {
    const li_1 = (
        <li>
            Prontuario: {alunos[0].id} :- {alunos[0].name}| Nota {alunos[0].nota}
        </li>
    );
    
    const li_s = alunos.map(aluno => {
        return (
        <li key = {aluno.id}>
            {aluno.id}) {aluno.name}| Nota {aluno.nota}
        </li>
        );    
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {li_s}
            </ul>
        </div>    
    )
}