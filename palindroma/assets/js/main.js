/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const buttonOk = document.getElementById("ok");
var wordHtml = document.getElementById('word');
const result = document.getElementById('result');

function palindrome( word ) {
    let parolaAlContrario = ''
    for (let i = word.length - 1; i >= 0; i--){
        parolaAlContrario += word[i]
    }
    return parolaAlContrario
}

buttonOk.addEventListener('click', function() {
    const word = wordHtml.value;
    if(word === palindrome(word)) {
        result.textContent = "La parola " + wordHtml.value + " è palindroma";
    } else {
        result.textContent = "La parola " + wordHtml.value + " non è palindroma";
    }
});