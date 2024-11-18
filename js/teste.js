// function gerarListaDeFaxina () {
//     dadosDosMoradores = dadosDosMoradores.reduce((acc, morador) => {
//         if (morador.aptoAFazerFaxina === 0) {
//             acc.push(morador);
//         }
//         else {
//             acc.unshift(morador);
//         }
//         return acc;
//     }, [])
    
//     for (let i = 0; i < comodos.length; i++) {
//         if (dadosDosMoradores[i].jaRealizouFaxinaEm != comodos[i]) {
//             let c = comodos[i];
//             dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
//         } else if
//     }

//     listaDeFaxina = dadosDosMoradores.slice(0, 5);

//     dadosDosMoradores.forEach(dado => {
//         dado.tempoSemFazerFaxina++
//     });

// }

// console.log(gerarListaDeFaxina())




// for (let i = 0; i < comodos.length; i++) {
//     if (dadosDosMoradores[i].jaRealizouFaxinaEm != comodos[i]) {
//         let c = comodos[i];
//         dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
//     } 
//     else if (dadosDosMoradores[i].jaRealizouFaxinaEm === comodos[i]) {
//         let c = comodos[i + 1];
//         dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
//     }
//     else if (comodos[i + 1] === comodos[comodos.length]) {
//         dadosDosMoradores[i].jaRealizouFaxinaEm = []
//         let c = comodos[i];
//         dadosDosMoradores[i].jaRealizouFaxinaEm.push({...c});
//     }
// }