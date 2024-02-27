// Definindo o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Superman";
let xpHeroi = 7000;
let mensagem;

// Utilizando uma estrutura de decisão para determinar o nível
if (xpHeroi < 1000) {
    mensagem = `${nomeHeroi} tem nível: Ferro`;
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    mensagem = `${nomeHeroi} tem nível: Bronze`;
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    mensagem = `${nomeHeroi} tem nível: Prata`;
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    mensagem = `${nomeHeroi} tem nível: Ouro`;
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    mensagem = `${nomeHeroi} tem nível: Platina`;
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    mensagem = `${nomeHeroi} tem nível: Ascendente`;
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    mensagem = `${nomeHeroi} tem nível: Imortal`;
} else {
    mensagem = `${nomeHeroi} tem nível: Radiante`;
}

// Exibindo a mensagem correspondente ao nível do herói
console.log(mensagem);
