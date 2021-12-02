// chiedo il nome all'utente
const userName=prompt("inserisci il tuo nome");
// chiedo il cognome
const surname=prompt("inserisci il tuo cognome");
//chiedo il colore preferito
const favoriteColor=prompt("inserisci il tuo colore preferito");
//scrivo sulla pagina nomecognomecolorepreferito21
let htmlElement=document.getElementById('password');
htmlElement.innerHTML= `${userName}${surname}${favoriteColor}21`

alert("Mr Robot scansate proprio");