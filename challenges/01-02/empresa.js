const usuario = {
    nome: 'Diego',
    empresa: {
        nome: "RocketSeat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
};

const message = `A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}.`;

console.log(message);

// ************* Solução ****************
// **************************************
// const usuario = {
//     nome: 'Diego',
//     empresa: {
//         nome: "Rocketseat",
//         cor: "roxo",
//         foco: "Programação",
//         endereco: {
//             rua: "Rua Guilherme Gembala",
//             numero: 260
//         }
//     }
// }

// console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)