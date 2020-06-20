const usuarios = [
    {
        nome: "Carlos",
        tecnologias:["HTML", "CSS"],
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    }, 
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
];

// for (let i = 0; i < usuarios.length; i++) {
//     let message = `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]} e ${usuarios[i].tecnologias[1]}`
//     console.log(message)
// };

// function cssWork(usuarios) {
//     for(let usuario of usuarios) {
//         for (let tecnologia of usuario.tecnologias) {
//             if (tecnologia == "CSS") {
//                 return usuario.css = true
//             } else {
//                 return usuario.css = false
//             }
//         }
//     }
// }

// cssWork(usuarios)


function usuarioUsaCss(usuario) {
    usuario.css = false;
    for(let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] == "CSS") {
            return usuario.css = true
        } 
    }
    return usuario.css = false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = usuarioUsaCss(usuarios[i])
    
    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}