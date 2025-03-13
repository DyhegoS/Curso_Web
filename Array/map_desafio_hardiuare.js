const carrinho = [
    '{"nome": "PS5", "preco": 50.99}',
    '{"nome": "Nintendo Switch 2", "preco": 50.60}',
    '{"nome": "Xbox Series X", "preco": 40.15}',
    '{"nome": "Zeebo", "preco": 1.89}',
    '{"nome": "3DO", "preco": 15.99}'
]
//Desafio Retornar um array apenas com preços
//minha resposta
let convert = array => JSON.parse(array)
let getPreco = array => `Preco : ${array.preco}`

console.log(carrinho.map(convert).map(getPreco))

//resposta do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)