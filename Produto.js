let vestidos = [];
lerVestidos();

// Função para ler os vestidos do arquivo "vestidos.json"
function lerVestidos() {
    vestidos = require("./vestidos.json");
}

function cadastrarVestido(cor, tamanho, tipo, formato, preco) {
    const encontrado = encontrar(vestidos, "cor", cor);
    if (typeof encontrado === "undefined") {
        const vestido = {
            cor: cor,
            tamanho: tamanho,
            tipo: tipo,
            formato: formato,
            preco: preco
        };
        vestidos.push(vestido);

        // Persistindo os dados no arquivo "vestidos.json"
        const fs = require('fs');
        const vestidosJSON = JSON.stringify(vestidos);
        fs.writeFileSync("vestidos.json", vestidosJSON);
        console.log("Dados foram adicionados com sucesso!");
    }
}

// Função para encontrar um item na lista por chave e valor
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave] === valor);
}

// Função para ordenar a lista de vestidos por uma chave específica
function ordenar(lista, chave) {
    return lista.sort((a, b) => {
        if (a[chave] < b[chave]) {
            return -1;
        }
        if (a[chave] > b[chave]) {
            return 1;
        }
        return 0;
    });
}

// Cadastrando novos vestidos
cadastrarVestido("bege", 20, "bordado", "longo", 29.0);
cadastrarVestido("branco", 25, "listrado", "médio", 33.0);
cadastrarVestido("azul", 10, "florido", "médio", 10.0);
cadastrarVestido("rosa", 30, "liso", "longo", 25.0);
cadastrarVestido("amarelo", 24, "macio", "longo", 20.0);

// Ordenando os vestidos por preço
const ordenadoPreco = ordenar(vestidos, "preco");

// Mostrando os vestidos ordenados na tela
console.log("-- VESTIDOS ORDENADOS POR PREÇO --");
ordenadoPreco.forEach(vestido => {
    console.log(`Vestido: ${vestido.cor}, 
Tamanho: ${vestido.tamanho}cm, 
Tipo: ${vestido.tipo}, 
Formato: ${vestido.formato}, 
Preço: R$ ${vestido.preco}`);
});
