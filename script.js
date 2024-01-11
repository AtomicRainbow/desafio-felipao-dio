let nomeHeroi= "Kauan"
let XpHeroi=10001
let classificacao="sem classificação"

if (XpHeroi <= 1000) {
    classificacao= "Ferro"
} 

else if (XpHeroi <= 2000) {
    classificacao="Bronze"
} 


else if (XpHeroi <= 6000) {
    classificacao="Prata"
}



 else if (XpHeroi <= 7000) {
    classificacao="Ouro"
}


else if (XpHeroi <=8000) {
    classificacao="Platina";
} 

else if (XpHeroi <=9000) {
    classificacao="Ascendente"
}


else if (XpHeroi <=10000) {
    classificacao="Imortal"
} 



else if (XpHeroi > 10000) {
    classificacao="Radiante"
}

console.log("O herói de nome "+nomeHeroi+" está classificado como "+classificacao)
//tentei fazer utilizando switch, porém não consegui, depois dei uma olhadinha no chatgpt e consegui entender o que estava dando errado com o switch
//fato curioso: quando eu tentei fazer essa estrutura condicional, acabava puxando mais de uma classificação....
//, pesquisando um pouco, descobri que estavam sendo puxadas, pois a forma como eu coloquei os valores, se aplicavam a mais de uma classificação
// por exemplo :
// if (XpHeroi > 1000) {
//     classificacao=("Ferro");
// } 

// else if (XpHeroi > 1001) {
//     classificacao=("Bronze");
// } 
