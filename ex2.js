function soma(x,y){
    return (x + y)
}

function subtrai(x,y){
    return (x - y)
}

function multiplica(x,y){
    return (x * y)
}

function divide(x,y){
    return (x/y)
}

while (true) {
    var operacao = prompt("Informe a operação desejada (soma, subtração, multiplicação ou divisão)")
    operacao = operacao.toLocaleLowerCase()

    switch(operacao) {
        case "soma":
            var soma1 = parseInt(prompt("Informe o primeiro número da soma:"))
            var soma2 = parseInt(prompt("Informe o segundo número da soma:"))
            alert(soma1 + " + " + soma2 + " = " + soma(soma1,soma2))
            break;
        case "subtração":
            var sub1 = parseInt(prompt("Informe o primeiro número da subtração:"))
            var sub2 = parseInt(prompt("Informe o segundo número da subtração:"))
            alert(sub1 + " - " + sub2 + " = " + subtrai(sub1,sub2))
            break;
        case "multiplicação":
            var mult1 = parseInt(prompt("Informe o primeiro número da multiplicação:"))
            var mult2 = parseInt(prompt("Informe o segundo número da multiplicação:"))
            alert(mult1 + " x " + mult2 + " = " + multiplica(mult1,mult2))
            break;
        case "divisão":
            var dividendo = parseInt(prompt("Informe o dividendo da divisão:"))
            do {
                if (divisor == 0) {
                    alert("O divisor não pode ser igual a zero!")
                }
                var divisor = parseInt(prompt("Informe o divisor da divisão:"))
            } while (divisor == 0)
            alert(dividendo + " / " + divisor + " = " + divide(dividendo,divisor))
            break;
    }
}