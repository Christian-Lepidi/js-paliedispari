const pariOdispari = prompt("Seleziona pari o dispari");
const numeroUtente = parseIntprompt("Seleziona un numero da 1 a 5");

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random * 5 + 1);
  return randomNumber;
}

const numeroPc = getRandomNumber();
let risultato = numeroUtente + numeroPc;
console.log(risultato);
