"use strict";
const generaNumeroCasuale = () => {
    return Math.floor(Math.random() * 100) + 1;
};
const confrontaNumeri = () => {
    const giocatore1Input = document.getElementById('giocatore1');
    const giocatore2Input = document.getElementById('giocatore2');
    const risultatoDiv = document.getElementById('risultato');
    const numeroEstratto = generaNumeroCasuale();
    risultatoDiv.innerText = `Numero estratto: ${numeroEstratto}`;
    const numeroGiocatore1 = parseInt(giocatore1Input.value);
    const numeroGiocatore2 = parseInt(giocatore2Input.value);
    if (isNaN(numeroGiocatore1) ||
        isNaN(numeroGiocatore2) ||
        numeroGiocatore1 < 1 ||
        numeroGiocatore1 > 100 ||
        numeroGiocatore2 < 1 ||
        numeroGiocatore2 > 100) {
        alert('Il numero inserito non è valido! Devi inserire un numero da 1 a 100 per poter giocare');
    }
    else if (numeroGiocatore1 === numeroEstratto) {
        alert('Congratulazioni! Il giocatore 1 ha indovinato il numero!');
    }
    else if (numeroGiocatore2 === numeroEstratto) {
        alert('Congratulazioni! Il giocatore 2 ha indovinato il numero!');
    }
    else {
        const differenzaGiocatore1 = Math.abs(numeroGiocatore1 - numeroEstratto);
        const differenzaGiocatore2 = Math.abs(numeroGiocatore2 - numeroEstratto);
        if (differenzaGiocatore1 < differenzaGiocatore2) {
            alert('Il giocatore 1 si è avvicinato di più al numero estratto.');
        }
        else if (differenzaGiocatore2 < differenzaGiocatore1) {
            alert('Il giocatore 2 si è avvicinato di più al numero estratto.');
        }
        else {
            alert('Entrambi i giocatori sono alla stessa distanza dal numero estratto.');
        }
    }
};
const avviaConfronto = () => {
    confrontaNumeri();
    const risultatoDiv = document.getElementById('risultato');
    risultatoDiv.style.display = 'block';
};
// Aggiungi l'evento di click al pulsante di avvio
const avviaButton = document.getElementById('avviaButton');
avviaButton.addEventListener('click', avviaConfronto);
