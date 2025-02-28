var amigo = {nome: 'Pig', sexo:'M', peso: 60, engordar(p){
    console.log('Engordou')
    this.peso +=p   
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

