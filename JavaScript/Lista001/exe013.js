/* 13)​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o 
número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
Utilize a estrutura Switch.*/

const diaUtil = (dia) => {
    switch(dia) {
        case 1:
            console.log('Domingo fim de semana!')
            break
        case 2:
            console.log('Segunda-feira dia útil!')
            break
        case 3:
            console.log('Terça-feira dia útil!')
            break
        case 4:
            console.log('Quarta-feira dia útil!')
            break
        case 5:
            console.log('Quinta-feira dia útil!')
            break
        case 6:
            console.log('Sexta-feira dia útil!')
            break
        case 7:
            console.log('Sábado fim de semana!')
            break
        default:
            console.log('Dia inválido!')
    }
}

diaUtil(0)
diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)
diaUtil(99)