const nome = "Silvana";
const sexo = "F";
const idade = 50;
const contribuicao = 35;

const aposentadoria = contribuicao + idade;


if (sexo == 'F') {
    if (aposentadoria >= 85) {
        console.log(`${nome}, você pode se aposentar.`)
    } else {
        console.log(`${nome}, você não pode se aposentar.`)
    }
} else if (aposentadoria >= 95) {
    console.log(`${nome}, você pode se aposentar.`)
} else {
    console.log(`${nome}, você não pode se aposentar.`)
}


// ************* Solução ****************
// **************************************
// const nome = 'Silvana'
// const sexo = 'F'
// const idade = 48
// const contribuicao = 23

// const calculoContribuicao = idade + contribuicao

// // essas variáveis irão retornar true ou false
// const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
// const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

// if ( homemPodeAposentar || mulherPodeAposentar) {
//     console.log(`${nome}, você pode se aposentar!`)
// } else {
//     console.log(`${nome}, você não pode se aposentar!`)
// }


