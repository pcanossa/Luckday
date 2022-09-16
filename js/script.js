//Bloco de verificação da validade dos valores inseridos peloo usuário, para número da sorte e cor, verificando se não são nulos u se valoor digitado não é maior que 99.
function verificaOpcoes (cor, num) {
    let validade = false;
    if (cor == "Escolha uma cor" || num == null ) {
        return validade;
    } else {
      validade = true;
      return validade; 
    }
}

//Bloco onde oos algarismos do número da sorte inseridos são somados, até se tornarem somente um algarismo (de 0 a 10), onde esse será utilizado como multiplicador para definir a sorte d dia
function somaUmNumero (numero) {
    let somaPartes = numero;
    while (somaPartes > 10) {
        let particionado = somaPartes / 10;
        let primeiraParte = parseInt(particionado);
        let segundaParte = parseInt((particionado - primeiraParte)*10);
        somaPartes = primeiraParte + segundaParte;
        console.log(particionado, primeiraParte, segundaParte, somaPartes);
    }
    if (somaPartes < 5) {
        let fator = 6 - somaPartes;
        let fatorRnd = Math.random()*fator;
        somaPartes += fatorRnd;
        console.log(somaPartes, fator, fatorRnd);
    }
    return somaPartes;
}

//bloco onde através de um laço de repetições, é gerado de forma randômica um valr de  0 a 10 para cada cor disponível para escolha, pelo qual será multiplicad pelo valor da soma de algarismos do número da srte inserido
function defineValorCores () {

    let cores = [];
    for (let i = 0; i < 10; i++) {
        let rnd = Math.random();
        rnd *= 10;
        console.log(rnd)
        cores.push(rnd);
    }

    return cores;

}

//Bloco onde é recolhido os valores da cor e da soma dos algarismos do número da sorte, e esses são multiplicados, gerando o valor da sorte em %  (0 a 100), e o valor impresso na página para o usuário.
function mostraResultado (valorNum, valorCor) {
    sorte = valorCor*valorNum;
    sorte = parseFloat(sorte).toFixed(2);
    console.log(sorte);
    if (sorte > 50) {
        $(document).ready(function() {
            $(".resultado").css("backgroundColor", "rgb(143, 179, 147)");
            $(".resultado").html("<p>Sorte: Percentual da sorte de "+sorte+"%<p>");
        });
    } else {
        $(document).ready(function() {
            $(".resultado").css("backgroundColor", "#caa299");
            $(".resultado").html("<p>Azar: Percentual da sorte de "+sorte+"%<p>");
        });
    } 
}

//Bloco onde os valores inseridos pelo usuário são recolhidos, tratados e validados, através da chamada das funções acima definidas.
function pegaForm () {
    let numero = document.getElementById('numero').value;
    let cor = document.getElementById('cor').value;
    let valida = verificaOpcoes(cor, numero);

    if (valida==true) {
        console.log(numero, cor);
        valorNumero = somaUmNumero(numero);
        arrayCor = defineValorCores();
        console.log(arrayCor);
        valorCor = arrayCor[cor];
        console.log(valorNumero, valorCor);
        mostraResultado(valorNumero, valorCor);
    } else {
        alert ("Valores não fornecdos da forma correta! Não foi possível calcular sua sorte.")
    }


}