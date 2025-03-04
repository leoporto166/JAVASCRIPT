var aleatorio = Math.floor(Math.random() * 100) + 1
var valor = 50
if(valor < aleatorio){
    console.log(`O número é maior que ${valor}`)
} else if(valor > aleatorio){
    console.log(`O número é menor que ${valor}`)
} else if(valor = aleatorio){
    console.log(`Parabéns você acertou!! o número era ${aleatorio}`)
}