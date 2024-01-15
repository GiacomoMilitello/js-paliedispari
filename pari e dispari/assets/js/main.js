/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


const buttonOk = document.getElementById("ok");
var numberHtml = document.getElementById('number');
var pariDispari = document.getElementById('pari-dispari');
const result = document.getElementById('result');

function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function isEven(number) {
    return number % 2 === 0;
}

buttonOk.addEventListener('click', function() {
    let numberPc = randomNumber();
    var sum = parseInt(numberHtml.value) + numberPc;
    var even = isEven(sum);

    if (numberHtml.value >= 1 && numberHtml.value <= 5) {
        if ((even && pariDispari.value === 'pari') || (!even && pariDispari.value === 'dispari')) {
            result.innerHTML = 'hai vinto!! La Somma tra il tuo numero ' + numberHtml.value + ' ed il numero randomico ' + numberPc + ' è: ' + sum;
        } else {
            result.innerHTML = 'hai perso!! La Somma tra il tuo numero ' + numberHtml.value + ' ed il numero randomico ' + numberPc + ' è: ' + sum;
        }
    } else {
        result.innerHTML = 'Per favore inserisci un numero compreso tra 1 e 5.';
    }
})