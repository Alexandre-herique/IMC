const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valiorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valiorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valiorIMC < 25) {
            classificacao = 'com peso ideal. Parabens !!!'
        } else if (valiorIMC < 30) {
            classificacao = 'com sobre peso. Cuidado !!!'
        } else if (valiorIMC < 35) {
            classificacao = 'com obesidade grau 1. Cuidado !!!';
        } else if (valiorIMC < 40) {
            classificacao = 'com obesidade grau 2. Cuidado !!!'
        } else if (valiorIMC > 40) {
            classificacao = 'com obesidade grau 3. Cuidado !!!'
        };


        resultado.textContent = `${nome} seu IMC é ${valiorIMC} e você esta ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos !!!';
    }
}
calcular.addEventListener('click', imc);


// fim