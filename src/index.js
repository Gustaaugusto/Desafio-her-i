// Desafio: Criar um sistema de ranqueamento do nível do herói e utilizar uma estrutura de decisão para fixar o aprendizado

// Declaração das variáveis
let nomeHeroi = "Mário"
let xp = 10001
let nivel

// Estrutura de decisão

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

switch (true){
    case (xp < 1000):
        nivel = "Ferro"
        break
    case (xp >= 1001 && xp < 5000):
        nivel = "Bronze"
        break

    case (xp >= 5001 && xp < 7000):
        nivel = "Ouro"
        break

    case (xp >= 7001 && xp < 8000):
        nivel = "Platina"
        break

    case (xp >= 8001 && xp < 9000):
        nivel = "Ascendente"
        break

    case (xp >= 9001 && xp < 10000):
        nivel = "Imortal"
        break

    case (xp >= 10001 && xp < 12000):
        nivel = "Radiante"
        break

    default:
        nivel = "Campeão"
        break

}   

// Mengaegem de saída informando o nivel e nome do herói

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel)

