var aleatorio = Math.floor(Math.random() * 100) + 1
var valor = 50
if(valor < aleatorio){
    console.log(`O valor é maior`)
} else if(valor > aleatorio){
    console.log(`O valor é menor`)
} else if(valor = aleatorio){
    console.log(`ACERTOU!`)
}