var valores=[8, 1, 7, 2, 4, 9, 6, 5, 3]
valores.sort()

var pos = valores.indexOf(8)
var pas = valores.indexOf(10)
console.log(`O 5 esta na posição ${valores.indexOf(5)}`)
console.log(`O ${valores[pos]} está na ${pos}`)
if(pas == -1){
    console.log(` ${pas} Valor não encontrado`)
    
}
console.log(`O 10 esta na posição ${valores.indexOf(10)}`)