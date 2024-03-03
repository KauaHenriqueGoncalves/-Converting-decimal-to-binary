//Receber os dados; Transformando em DOM
const numDecimal = document.getElementById('inDecimal')
const numBinary = document.getElementById('outBinary')
const button = document.getElementById('button')

//Função para converter números decimais em Binários
function convert() {
    //Limpar console e a Saída de dados
    numBinary.value = ""
    console.clear()

    //Convertendo a entrada em Number e criando uma array para armazenar o resto
    let number = Number( numDecimal.value )
    let getBinary = []

    //Coletando o resto que é 0 ou 1
    for (let i = 0; number != 0; i++) {
        let rest = number % 2
        getBinary[i] = rest
        number = (number - rest) / 2
    }

    //Saída de dados, rodando a array de trás para frente com o objeto do número binário sair corretamente
    for (let i = getBinary.length - 1; i >= 0; i--) {
        //Sempre retorna um valor positivo, caso o valor informado for negativo, somente o ultimo valor da array permanece negativo
        if ( i != getBinary.length - 1 ) {
            getBinary[i] = Math.abs( getBinary[i] )
        }
        numBinary.value += getBinary[i]
        console.log(getBinary[i])
    }
    console.log(getBinary)
}

//Dispara um evento 'click' no button para converter o número decimal em binário
button.addEventListener('click', () => {

    //Verificação se é, realmente, um número
    if (!isNaN(numDecimal.value)) {   //false == true
        convert()
    } else {
        alert("Informe somente números!")
    }

})