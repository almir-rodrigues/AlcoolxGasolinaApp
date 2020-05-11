function calcular() {
    var alcoolInput = document.querySelector('#alcool');
    var gasolinaInput = document.querySelector('#gasolina');
    var resultadoDiv = document.querySelector('div.resultado > span');

    if (alcoolInput && !alcoolInput.value) {
        resultadoDiv.innerHTML = '';
        M.toast({html: 'O valor do álcool não pode ser vazio!'});
        return
    }

    if(gasolinaInput && !gasolinaInput.value) {
        resultadoDiv.innerHTML = '';
        M.toast({html: 'O valor da gasolina não pode ser vazio!'});
        return
    }

    var quociente = parseFloat(alcoolInput.value) / parseFloat(gasolinaInput.value); 

    if (quociente > 0.7) {
      resultadoDiv.innerHTML = 'Melhor opção: Gasolina';
    } else{
        resultadoDiv.innerHTML = 'Melhor opção: Álcool ';      
    }
}