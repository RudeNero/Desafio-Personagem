
let xp = 0
let Personagem = {
    nome: "Nero",
    xp: 500
}

function Nivel(){
if (Personagem.xp < 1000){return 'Ferro'}
else if (Personagem.xp >= 1001 && Personagem.xp <= 2000){return'Bronze'}
else if (Personagem.xp >= 2001 && Personagem.xp <= 3000){return'Prata'}
else if (Personagem.xp >= 3001 && Personagem.xp <= 4000){return'Ouro'}
else if (Personagem.xp >= 4001 && Personagem.xp <= 5000){return'Platina'}
else if (Personagem.xp >= 5001 && Personagem.xp <= 6000){return'Ascendente'}
else if (Personagem.xp >= 6001 && Personagem.xp <= 7000){return'Imortal'}
else if (Personagem.xp > 7000){return'Ascendente'}
}    




console.log(`O personagem ${Personagem.nome} está no nível ${Nivel()}`)


let Elos = [{min: 0, max:  1000, nome: 'ferro'},{min: 1000, max:  2000, nome: 'ferro2'},{min: 2000, max:  3000, nome: 'ferro3'}]
    Elos.forEach(item => {
        if (Personagem.xp > item.min && Personagem.xp <= item.max){
            console.log(item.nome)
        }
    })