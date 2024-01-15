let classificacao="indefinida"
let SaldoVitorias= vitorias(82)
function vitorias(victory,defeat=0){
    let result= victory-defeat
    return result
}
switch(true){
    case SaldoVitorias<=10:
    classificacao=("Ferro")
    break
    case SaldoVitorias>=11 && SaldoVitorias<=20:
    classificacao=("Bronze")
    break
    case SaldoVitorias>=21 && SaldoVitorias<=50:
    classificacao=("Prata")
    break
    case SaldoVitorias>=51 && SaldoVitorias<=80:
    classificacao=("Ouro")
    break
    case SaldoVitorias>=81 && SaldoVitorias<=90:
    classificacao=("Diamante")
    break
    case SaldoVitorias>=91 && SaldoVitorias<=100:
    classificacao=("Lendário")
    break
    default:classificacao=("Imortal")
    break

}
console.log("O herói tem um total de "+SaldoVitorias+" vitórias e se encontra no ranking "+classificacao )
//dessa vez utilizzei a estrutura de switch ao invés da if else if, 
//também coloquei as vitórias e derrotas em uma mesma função reduzindo o tamanho do código