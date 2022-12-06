const input = document.getElementById("input")

function capitalizadorPalavra(txt) {
    var capitalizado = txt[0].toUpperCase() + txt.slice(1).toLowerCase();

    return capitalizado
    
}

function capitalizadorFrase(txt) {
    var textoPronto = "";
    const texto = txt.split(" ");
    let tamanho = texto.length;
    for (let palavra = 0; palavra < tamanho; palavra++) {
        textoPronto += capitalizadorPalavra(texto[palavra]) + " ";
    }
    return textoPronto
}

input.addEventListener('input', function handleChange(event) {
    console.log(event.target.value);
});

document.getElementById('maiusculo').addEventListener("click", function() {
    input.value = input.value.toUpperCase();
})

document.getElementById('minusculo').addEventListener("click", function() {
    input.value = input.value.toLowerCase();
})

/* separo palavras num array, pego a primeira letra de cada palavra e mando pra maiusculo
junto todas as palavras numa string e retorno*/
document.getElementById('capitalizado').addEventListener("click", function() {
    input.value = capitalizadorFrase(input.value.trimEnd());
    return input.value
    
})

