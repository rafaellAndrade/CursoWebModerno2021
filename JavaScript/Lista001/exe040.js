/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada
 uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o 
 conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

const mostraConcei = (vet) => {
    let conceito = 'D'

    for (let i in vet) {
        if(vet[i] > 8.9) {
            conceito = 'A'

        } else if(vet[i] > 6.9) {
            conceito = 'B'

        } else if(vet[i] > 4.9) {
            conceito = 'C'

        } else {
            conceito = 'D'
        }

        console.log(`Nota: ${vet[i]} Conceito: ${conceito}`)
    }
}

mostraConcei([5, 8, 3, 9, 4.9, 10, 0])