Array.prototype.map2 = function(callback){
    let newArray = []
    for(let i = 0; i < this.length;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray//errei pq faltou colocar esse return...
}

const carrinho = [
    '{"nome": "PS5", "preco": 50.99}',
    '{"nome": "Nintendo Switch 2", "preco": 50.60}',
    '{"nome": "Xbox Series X", "preco": 40.15}',
    '{"nome": "Zeebo", "preco": 1.89}',
    '{"nome": "3DO", "preco": 15.99}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)