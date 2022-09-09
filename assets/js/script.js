addEventListener('submit', function(e){
    var nome = document.getElementById('name');
    var primeiraNota = document.getElementById('n1').value;
    var segundaNota = document.getElementById('n2').value;
    var terceiraNota = document.getElementById('n3').value;
    var quartaNota = document.getElementById('n4').value;

    var notaN1 = parseFloat(primeiraNota);
    var notaN2 = parseFloat(segundaNota);
    var notaN3 = parseFloat(terceiraNota);
    var notaN4 = parseFloat(quartaNota);

    var notaFinal = (notaN1 + notaN2 + notaN3 + notaN4)/4
    var notaFixada = notaFinal.toFixed(1);
    var txtresultado = document.getElementById('resultadoFinal');
    if (notaFixada >= 7 ){
        var txtresultadoFinal = (" Parabéns, " + nome.value + " sua media é: " + notaFixada + ", você foi aprovado!");
    }else {
        var txtresultadoFinal = (nome.value + " sua media é: " + notaFixada + ", você foi reprovado.");
    }
    txtresultado.innerHTML = (txtresultadoFinal);
    e.preventDefault();
});
