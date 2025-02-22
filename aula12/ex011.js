var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} hrs`)

if (hora <=11){
    console.log(`está de manhã`)
} else if(hora <= 18) {
        console.log(`está de tarde`)
} else {
        console.log(`está de noite`)
} 