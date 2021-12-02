// chiedo nome, cognome, email e numero di telefono per spammare
const userName = prompt('Inserisci il tuo nome');
const userLastname = prompt('Inserisci il tuo cognome');
const userEmail = prompt('Inserisci la tua email');
const userTelephone = prompt('Inserisci il tuo numero di telefono');

// trascrivo tutte le informazioni su console
console.log `${userName}${userLastname}${userEmail}${userTelephone}`;

//  rivelo di aver chiesto le informazioni sensibili a scopo di marketing
let htmlElement = document.getElementById(`contratto`);
htmlElement.innerHTML = `Tutto salvato su console! grazie per avemi dato le tue informazioni sensibili adesso ti manderò un mail ogni due giorni. Ciao!`;

