const form = document.querySelector('#formulario');
// Faz com que a página não recarregue.
form.addEventListener('submit', function(event){
    event.preventDefault();

    // Pega o input de peso e altura.
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    // essas constantes recebem o peso e altura.
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //Definem numeros com unicos jeito do codigo prosseguir.
    
    if (!peso) {
        setResultado('Peso inválido',false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida',false);
        return;
    }
    // const imc recebe getImc() que faz o calculo IMC.
    const imc = getImc(peso, altura);
    // const nivelImc recebe getNivelImc que diz o nivel IMC.
    const nivelImc = getNivelImc(imc);

    const msg= `Seu IMC é ${imc}, e nível é ${nivelImc}.`;
    setResultado(msg, true);
});
// Mostra o nivel do IMC de acordo com getImc()
function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso','Peso normal','SobrePeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
    
    if (imc >= 39) {
        return nivel[5];
    }
    if(imc >= 34.9) {
        return nivel[4];
    }
    if(imc >=29.9){
        return nivel[3];
    }
    if(imc >=24.9){
        return nivel[2];
    }
    if(imc >=18.5){
        return nivel[1];
    }
    if (imc < 18){
        return ('Desnutrição')
    }
}


// Faz o calculo do IMC e deixa com duas casas decimais.
function getImc(peso,altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}
// Cria elemento paragrafo.
function criaP () {
    const p = document.createElement('p');
    return p;
};
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {p.classList.add('#resultado');
} else{ p.classList.add('bad');}
    
p.innerHTML = msg;
    resultado.appendChild(p);
};
