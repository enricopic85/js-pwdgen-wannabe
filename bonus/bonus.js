//inserisco un elemento attraverso l'id, concatenandolo al contenuto di un altro elemeno
const element=document.getElementById("title");
document.getElementById("content").innerHTML=
"scriviamo all'interno di p il testo dell'H1, quindi " + element.innerHTML;

//inseriamo un contenuto attraverso il tag

const elementByTag= document.getElementsByTagName("p");
document.getElementById("demo").innerHTML=
"selezioniamo il contenuto del paragrafo, quindi " + elementByTag[1].innerHTML;

//facciamo la somma di due numeri utilizzando le parentesi
let somma= (4*8) + (8/2);
console.log(somma); 

//concateniamo 2 stringhe
let primaFrase="Sempre caro mi fu";
let secondaFrase="quest'ermo colle";
let leopardi=`${primaFrase} ${secondaFrase}`;
console.log(leopardi);

//inseriamo i dati di un utente(l'ho commentato per impedire l'avvio ad ogni apertura)
// let nome=prompt("inserisci il tuo nome")
// document.getElementById("nome").innerHTML = nome;
// let cognome=prompt("inserisci il tuo cognome")
// document.getElementById("cognome").innerHTML = cognome;
// let indirizzo=prompt("inserisci il tuo indirizzo")
// document.getElementById("indirizzo").innerHTML = indirizzo;
// let telefono=prompt("inserisci il tuo telefono")
// document.getElementById("telefono").innerHTML = telefono;

//cambiamo il colore del testo in rosso
var line=document.getElementById("line");
line.style.color="red";
line.style.backgroundColor="grey";

//chiedo il colore all'utente e lo uso per settare il colore del testo
let coloreTesto= prompt("inserisci il colore");
document.getElementById("colore").style.color=coloreTesto;

//visualizzare data e ora locale
let ora= document.getElementById("ora");
ora.innerHTML="Date : " + Date();

