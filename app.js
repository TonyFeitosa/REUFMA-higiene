let nomeMoradores = [
    'Adenilson Reis',
    'Antonio Caudio',
    'Antonio Leal',
    'Cristiano Benigno',
    'Djalma Solsa',
    'Fabrício de Araújo',
    'Fernando Ribeiro',
    'Flaianderson Pereira',
    'Gleidson',
    'Janielson Jhonathan (jhon)',
    'Joel Leite',
    'Jonas Morais',
    'João Vitor',
    'Leonardo Pontes',
    'Lucas Moraes',
    'Luís Carlos',
    'Luís Fernando',
    'Matheus Dutra',
    'Matheus Conceição',
    'Pedro Chacon',
    'Renan Rodrigues',
    'Tony Pereira',
    'William França',
    'Luís Pedro',
    'Ranyery',
    'Sandro'
];

let moradores = [];

let dadosDosMoradores = [];

let moradoresNaoAptosAFazerFaxina = [
{nome: 'Djalma Solsa', moradorId: 5},
{nome: 'Jonas Morais', moradorId: 12},
{nome: 'Tony Pereira', moradorId: 22}
]

let listaDeFaxina = []

let comodos = [
    {banheiroInferior: 1},
    {pisoInferior: 2},
    {banheiroSuperior: 3},
    {pisoSuperior: 4},
    {cozinha: 5}
];




//essa função adiciona o nome dos moradores ao array moradores e junto a isso um id associado.
function addTodosMoradores() {
    for (let morador of nomeMoradores) {
        if (moradores.length == 0) {
            newId = 1;
        } else {
            newId = moradores[moradores.length-1].moradorId + 1;
        }
        moradores.push({
            nome: morador,
            moradorId: newId
        });
    }
}
addTodosMoradores();



function addDados () {
    for (let {nome, moradorId} of moradores) {
        dadosDosMoradores.push({
            nome: nome,
            moradorId: moradorId,
            jaRealizouFaxinaEm: [],
            tempoSemFazerFaxina: 0,
            aptoAFazerFaxina: 1
        });
    }
}
addDados()



dadosDosMoradores.sort((a, b) => b.tempoSemFazerFaxina - a.tempoSemFazerFaxina)



for (let i = 0; i < moradores.length; i++) {
    for (let j = 0; j < moradoresNaoAptosAFazerFaxina.length; j++) {
        if (moradores[i].moradorId == moradoresNaoAptosAFazerFaxina[j].moradorId) {
            dadosDosMoradores[i].aptoAFazerFaxina = 0;
            break;
        }
    }
}



function gerarListaDeFaxina () {
    dadosDosMoradores = dadosDosMoradores.reduce((acc, morador) => {
        if (morador.aptoAFazerFaxina === 0) {
            acc.push(morador);
        }
        else {
            acc.unshift(morador);
        }
        return acc;
    }, [])
    
    // for (let i = 0; i < comodos.length; i++) {
    //     if (dadosDosMoradores[i].jaRealizouFaxinaEm[i] != comodos[i]) {
    //         let c = comodos[i];
    //         dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
    //     } 
    //     else if (dadosDosMoradores[i].jaRealizouFaxinaEm[i] === comodos[i]) {
    //         let c = comodos[i + 1];
    //         dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
    //     }
    //     else if (comodos[i + 1] === comodos[comodos.length]) {
    //         dadosDosMoradores[i].jaRealizouFaxinaEm = []
    //         let c = comodos[i];
    //         dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
    //     }
    // }

    listaDeFaxina = dadosDosMoradores.slice(0, 5);

    dadosDosMoradores.forEach(dado => {
        dado.tempoSemFazerFaxina++
    });

}

gerarListaDeFaxina()




console.log(moradores)

console.log(moradoresNaoAptosAFazerFaxina)

console.log(listaDeFaxina)

console.log(dadosDosMoradores)