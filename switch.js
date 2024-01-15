let nomeHeroi = "Kauan";
let XpHeroi = 10001;
let classificacao;

switch (true) {
    case XpHeroi <= 1000:
        classificacao = "Ferro";
        break;

    case XpHeroi <= 2000:
        classificacao = "Bronze";
        break;

    case XpHeroi <= 6000:
        classificacao = "Prata";
        break;

    case XpHeroi <= 7000:
        classificacao = "Ouro";
        break;

    case XpHeroi <= 8000:
        classificacao = "Platina";
        break;

    case XpHeroi <= 9000:
        classificacao = "Ascendente";
        break;

    case XpHeroi <= 10000:
        classificacao = "Imortal";
        break;

    case XpHeroi > 10000:
        classificacao = "Radiante";
        break;

    default:
        classificacao = "Classificação não definida";
}

console.log(classificacao);
