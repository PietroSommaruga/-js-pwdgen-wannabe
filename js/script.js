// a chiedo il nome
const userName = prompt('Inserisci il tuo nome');

// b chiedo il cognome
const userLastname = prompt('Inserisci il tuo cognome');
// c chiedo il colore preferito
const mainColor = prompt('Inserisci il tuo coolore preferito');
// aggiungo l'anno corrente

// e genero la password con a + b + c + d
let htmlElement = document.getElementById('pw-generate');
htmlElement.innerHTML = `${userName}${userLastname}${mainColor}21`;