function verificar() {
    var numero1 = document.getElementById('num1')
    var numero2 = document.getElementById('num2')
    var numero3 = document.getElementById('num3')

    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    let n3 = Number(numero3.value)
    let c = n1
    while (c <= n3) {
        res.innerHTML += `${c} 👉 `
        c += n2
    }
    res.innerHTML += `🏁`
}