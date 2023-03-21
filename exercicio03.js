/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.
*/

let students = [ 
    { 
        name:'Maria', 
        firstNote: 8, 
        secondNote:7 
    },
    { 
        name:'Carol', 
        firstNote: 6, 
        secondNote:4 
    },
    { 
        name:'Yasmin', 
        firstNote: 10, 
        secondNote:9 
    }
]

// Crie uma função que irá calcular a média das notas de cada aluno;

function notes( firstNote , secondNote ){
    return ((firstNote + secondNote) / 2).toFixed(1)
}

// Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. 

for (let student of students) {
    if(notes(student.firstNote, student.secondNote) >= 7 ) {
        alert(` A média do(a) aluno(a) ${student.name} é: ${notes(student.firstNote, student.secondNote)} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else { 
        alert(` A média do(a) aluno(a) ${student.name} é: ${notes(student.firstNote, student.secondNote)} \n Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}