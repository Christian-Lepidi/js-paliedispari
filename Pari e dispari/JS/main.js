const pariOdispari = prompt("Seleziona pari o dispari");
const numeroUtente = parseInt(prompt("Seleziona un numero da 1 a 5"));

if (pariOdispari != "pari" && "dispari") {
  console.error("I valori non sono corretti");
}
if (isNaN(numeroUtente)) {
  console.error("I valori non sono corretti");
}
if (numeroUtente < 1 || numeroUtente > 5) {
  console.error("I valori non sono corretti");
} else {
  function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    console.log(randomNumber);
    return randomNumber;
  }
}

const numeroPc = getRandomNumber();
let risultato = numeroUtente + numeroPc;
console.log(risultato);

if (pariOdispari == "pari" && risultato % 2 == 0) {
  console.log("UTENTE VINCE");
} else if (pariOdispari == "dispari" && risultato % 2 != 0) {
  console.log("UTENTE VINCE");
} else {
  console.log("COMPUTER VINCE");
}
