let userWord = prompt("Scegli una parola");
let contraryWord = "";

for (i = userWord.length - 1; i >= 0; i--) {
  console.log(userWord[i]);
  contraryWord += userWord[i];
}
if (userWord === contraryWord) {
  console.log("PAROLA PALINDROMA");
} else {
  console.log("parola non palindroma");
}
