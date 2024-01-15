/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const buttonOk = document.getElementById("ok");
var wordHtml = document.getElementById('word');
const result = document.getElementById('result');

function palindrome() {
    /// !!!!!!!!!!!!!!!!!
}

buttonOk.addEventListener('click', function() {
    const word = wordHtml.value;
    if(palindrome()) {
        result.textContent = "La parola " + wordHtml.value + " è palindroma";
    } else {
        result.textContent = "La parola " + wordHtml.value + " non è palindroma";
    }
});