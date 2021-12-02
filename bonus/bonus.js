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
let primaFrase="Sempre caro mi fu ";
let secondaFrase="quest'ermo colle";
let leopardi=`${primaFrase} ${secondaFrase}`;
console.log(leopardi);