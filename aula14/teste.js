let num = [5,2,3]
console.log(num)

num[3] = 6 //podemos selecionar a posição e o valor à ser adicionado
console.log(num)

num.push(2) //coloca o valor sempre na próxima chave
console.log(num)

console.log(num.length) //qntd de elementos

num.sort() //ordena do menor ao maior
console.log(num)

for (let n = 0; n<num.length; n++) {
    console.log(num[n])
}

for (let c in num) {
    console.log(num[c])
}

console.log(num.indexOf(5)) //encontra o valor desejado e mostra sua posição