var hora = -1

if(hora > 23 || hora < 0){
    console.log(`Insira um valor valido`)
} else if(hora < 6){
    console.log(`Boa madrugada`)
} else if(hora < 12){
    console.log(`Bom dia`)

} else if (hora < 18){
    console.log(`Boa tarde`)
} else if (hora <= 23){
    console.log(`Boa noite`)
}