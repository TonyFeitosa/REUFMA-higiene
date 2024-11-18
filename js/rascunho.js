let dadosDosMoradores = [
    {nome: 'Adenilson Reis', ultimaFaxina: 5},
    {nome: 'Antonio Caudio', ultimaFaxina: 2},
    {nome: 'Antonio Leal', ultimaFaxina: 3},
    {nome: 'Cristiano Benigno', ultimaFaxina: 1},
    {nome: 'Djalma Solsa', ultimaFaxina: -1},
    {nome: 'Fabrício de Araújo', ultimaFaxina: 3},
    {nome: 'Fernando Ribeiro', ultimaFaxina: 4},
    {nome: 'Flaianderson Pereira', ultimaFaxina: 1},
    {nome: 'Gleidson', ultimaFaxina: 6},
    {nome: 'Janielson Jhonathan (jhon)', ultimaFaxina: 2},
    {nome: 'Joel Leite', ultimaFaxina: 1},
    {nome: 'Jonas Morais', ultimaFaxina: -1},
    {nome: 'João Vitor', ultimaFaxina: 1},
    {nome: 'Leonardo Pontes', ultimaFaxina: 4},
    {nome: 'Lucas Moraes', ultimaFaxina: 2},
    {nome: 'Luís Carlos', ultimaFaxina: 2},
    {nome: 'Luís Fernando', ultimaFaxina: 5},
    {nome: 'Matheus Dutra', ultimaFaxina: 2},
    {nome: 'Matheus Conceição', ultimaFaxina: 6},
    {nome: 'Pedro Chacon', ultimaFaxina: 3},
    {nome: 'Renan Rodrigues', ultimaFaxina: 3},
    {nome: 'Tony Pereira', ultimaFaxina: -1},
    {nome: 'William França', ultimaFaxina: 3},
    {nome: 'Luís Pedro', ultimaFaxina: 1},
    {nome: 'Ranyery', ultimaFaxina: 4},
    {nome: 'Sandro', ultimaFaxina: 4}
];

const comodos = [
    'banheiro inferior',
    'piso inferior',
    'banheiro superior',
    'piso superior',
    'cozinha'
];

let listaDeFaxina = [];

//o mátodo sort me ajudou a percorrer o array e organizalo em ordem decrecente!
dadosDosMoradores.sort((a, b) => b.ultimaFaxina - a.ultimaFaxina);

function gerarListaDeFaxina () {
    //a variável top5 pega os 5 primeiros elementos do array e os guarda como objetos.
    //em seguida com o método .push() eu pego os objetos da variável e coloco dentro do array, contabilizando assim 5 objetos
    let top5 = dadosDosMoradores.slice(0, 5);
    listaDeFaxina.push(...top5);
    //nesse momento eu uso o método .forEach() para percorre os 5 objetos para mudar a propriedade ultimaFaxina.
    top5.forEach((item) => {
        item.ultimaFaxina = 0
    })
    dadosDosMoradores.forEach((item) => {
        item.ultimaFaxina++
    })
    dadosDosMoradores.sort((a, b) => b.ultimaFaxina - a.ultimaFaxina);
}
// gerarListaDeFaxina()

// console.log(listaDeFaxina)

// console.log(dadosDosMoradores)

//neste laço eu associo cada cômodo a um morador, como uma propriedade!.
for (let i = 0; i < comodos.length; i++) {
    listaDeFaxina[i].comodo = comodos[i]
}

gerarListaDeFaxina()
console.log(listaDeFaxina)
console.log(dadosDosMoradores)