const alunos = [
    {nome: 'Jailson Mendes', nota: 7.3, bolsista: false},
    {nome: 'Carlinhos', nota: 9.2, bolsista: false},
    {nome: 'Paulo Guina', nota: 9.8, bolsista: false},
    {nome: 'Mecanico Kauan', nota: 8.7, bolsista: false},
]

//Desafio 1: Todos os alunos são bolsistas???
const getBolsista = a => a.bolsista;
const verifyBolsista = (accumulatorBolsista, currentBolsista) => accumulatorBolsista && currentBolsista;

console.log(alunos.map(getBolsista).reduce(verifyBolsista));

//Desafio 2: Algum aluno é bolsista?

const isBolsista = (accumulatorBolsista, currentBolsista) => accumulatorBolsista || currentBolsista

console.log(alunos.map(getBolsista).reduce(isBolsista));

