const produtos = [
    {nome: 'Gincobiloba', preco: 5551.99, fragil: false},
    {nome: 'Tadalafila', preco: 679.99, fragil: true},
    {nome: 'Gardenal', preco: 2224.99, fragil: true},
    {nome: 'seila', preco: 99.99, fragil: false},
]

const getProdutoFragil = p => p.fragil == true
const getPrecoMaior500 = p => p.preco > 500

const result = produtos.filter(getProdutoFragil).filter(getPrecoMaior500)
console.log(result)