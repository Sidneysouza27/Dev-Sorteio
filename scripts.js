function generateNumber() {
 // Pegar os valores de mínimo e máximo
 const min = parseInt(document.getElementById('minValue').value);
 const max = parseInt(document.getElementById('maxValue').value);

 // Verificar se os valores de min e max são válidos
 if (isNaN(min) || isNaN(max)) {
    alert("Por favor, insira valores válidos para o intervalo.");
    return;

}

if (min >= max){
    alert("O valor mínimo tem que ser MENOR que o valor MÁXIMO.")
}else{

// Gerar número aleatório entre min e max
const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

// Mostrar o resultado no input "result"
document.getElementById('result').value = resultado;
 }

}
setTimeout(function() {
    alert("Seja bem vindo(a)!")
}, 100);
