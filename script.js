// Exercício 02

/*
1- Inserindo lista de estudantes com as seguintes informações
    - nome
    - nota da primeira prova
    - nota da segunda prova
*/

const students = [
    {
        name: "João",
        firstNote: 6,
        secondNote: 6,
    },
    {
        name: "Letícia",
        firstNote: 9,
        secondNote: 10,
    },
    {
        name: "Diego",
        firstNote: 9,
        secondNote: 9,
    },
    {
        name: "Julia",
        firstNote: 6,
        secondNote: 5,
    },
]


// 2- Criar uma função para calcular a média das notas de cada estudante

function printAverageNoteStudents (student) {
    return ((student.firstNote + student.secondNote) / 2).toFixed(1)
}

// 3- Aplicar uma condição para confirmar se o(a) estudante atingiu a média "7" e obteve sucesso ou não para entrar no concurso

for (let student of students) {
    const averageNote = printAverageNoteStudents(student)
        
    if(averageNote >= 7) {
        alert(
            `A média do(a) aluno(a) ` + student.name + `, é: ` + averageNote + `! \n Parabéns ` + student.name + `! Você foi aprovado(a) no concurso!`)
    }
    else {
        alert(
            `A média do(a) aluno(a) ` + student.name + `, é: ` + averageNote + `! \n Não foi dessa vez ` + student.name + `! Tente novamente!`)
    }
}



