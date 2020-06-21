const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo(receitas, despesas) {
    const  totalReceitas = somaNumeros(receitas)
    const totalDespesas = somaNumeros(despesas)

    const total = totalReceitas - totalDespesas

    return total
    
}

function somaNumeros(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {

        soma = numeros[i] + soma
    }

    return soma
}

for (let i = 0; i < usuarios.length; i++) { 
    var valor = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas).toFixed(1)
    var sinal = 'POSITIVO'
    if (valor < 0) {
        sinal = 'NEGATIVO'
    }
    console.log(`${usuarios[i].nome} possui saldo ${sinal} de ${valor}`)
}