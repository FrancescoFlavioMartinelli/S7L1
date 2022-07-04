//Ripasso - Object
let car = {
    //proprietà
    marca: "Fiat",
    colore: "rosso",
    prezzo: 1000,
    _elettrica: false,
    //metodo
    calcolaConsumo: function () {
        return "La macchina " + this.marca + " consuma 200";
    }
}

console.log(car);
console.log(car.marca);
console.log(car["marca"]); //possiamo raggiungere le proprietà di un oggetto anche attraverso le parentesi quadre e la stringa del nome della proprietà
console.log(car.calcolaConsumo());

car.colore = "Bianco" //possiamo riassegnare le properietà

//Creazione di un'istanza della classe Date
// -> creare una variabile con precisi valori assegnati alle proprietà descritte dal modello definito dalla classe
let d = new Date("2021/02/03"); //keyword new serve a istanziare l'oggetto della classe (le parentesi rappresentano l'esecuzione del metodo constructor)
//Il metodo constructor della classe (costruttore) serve per inizializzare l'oggetto ed eseguire le assegnazioni dei valori alle proprietà
//Normalmente i constructor prendono come parametri i dati iniziali per creare l'oggetto

//Scrittura per la creazione di una classe
// class Automobile {
//     constructor() {

//     }
// }

//Scrittura originale per creare una struttura di oggetti utilizza la keyword function



function Automobile(marca, p, colore) {
    this.marca = marca //le proprietà dell'oggetto si raggiungono this.proprerty
    this.prezzo = p //se leggiamo la variabile senza il this. sicuramente non è la proprietà ma probabilmente un parametro
    this.colore = colore //Di solito si tende a usare lo stesso nome della variabile sia per il parametro sia per la proprietà 
    this.km = 0
    this.getInfo = function(){
        return "L'automobile è una " + this.marca + " " + this.colore
    }
    this.confronta = function(){
        if(this.prezzo > car.prezzo) { //possiamo usare variabili esterne alla classe (attenzione che le istanze della classe arrivino dopo la dichisrazione della variabile esterna) ma sarà una cosa rara, tendiamo a lavorare più sulle proprieta dell'oggetto
            return "Costa di più!"
        } else {
            return "Costa di meno o uguale!"
        }
    }
    this.prezzoFinale = function(){
        return this.prezzo + (this.prezzo * iva/100) //può essere utile avere una varibale esterna (usata da varie pati del codice o ottenuta da altre esecuzioni)
    }
}

let x = new Automobile("a", 100, "r")
let iva = 22
console.log(x.prezzoFinale())

// function confronto(auto){
//     if(auto.prezzo > car.prezzo) {
//         return "Costa di più!"
//     } else {
//         return "Costa di meno o uguale!"
//     }
// }

let c = new Automobile("Fiat", 1000, "Verde"); //creare un'istanza di automobile
let c1 = new Automobile("Lancia", 500, "Viola");
c1.prezzo += 10;
let c2 = {
    marca: "Lancia",
    prezzo: 5000,
    colore: "Viola",
    getInfo: function(){
        return "L'automobile è una " + this.marca + " " + this.colore
    }
}

//Methods - funzioni interne a un oggetto (che di solito servono a manipolare le proprietà, di solito della stessa istanza)
//get - set -> avere dei metodi per leggere e modificare comodamente le proprietaà dell'istanza
c.colore = "Nero"
console.log(c.marca)
//tenderemo a evitare di interagire direttametne con le proprietà al di fuori della efinizione della classe
function Persona(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;

    this.getNome = function(){
        //speeso prima di leggere una proprietà dobbiamo manipolarla o fare operazioni
        return this.nome;
    }

    this.setNome = function(n){
        //spesso prima di assegnare il valore vogliamo manipolarlo
        this.nome = n
    }
}

let p = new Persona("Flavio", "Martinelli")
console.log(p.nome);
console.log(p.getNome());

p.nome = "Paolo";
p.setNome("Paolo");

let prove = document.getElementsByClassName("prova") //ci restituisce una lista di HTMLElements, è simile a un array ma la classe è diversa, quiondi non abbiamo accesso alla maggior parte dei metodi
// prove.forEach((e)=>{console.log(e)}) //non c'è il metodo forEach in HTMLCollection
let arrProve = Array.from(prove) //I metodi che applichiamo non sull'sitanza ma sula Classe Genitore sono detti statici - sono definiti normlamente nella classe ma con la keyword static
arrProve.forEach((e)=>{console.log(e)})

//NB NodeList (return di .querySelectorAll()) ha il metodo forEach quindi non serve convertire in array a menon che non vogliamo usare altri metodi che mancano
let nodes = document.querySelectorAll(".prova")
nodes.forEach((n)=>{console.log(n)})
let nodeArr = Array.from(nodes)
nodeArr.includes(1)


//Prototype - rappresenta la struttura dell'oggetto di una classe ed è condivisa da tutti gli oggetti di quella classe

console.log("Oggetti iniziali");
console.log(c);
console.log(c1);

//Possiamo aggiungere proprieta a un'oggetto semplicemnte assegnando un valore a quella proprietà (anche se non e stata definita)
c1.sconto = 20 //creareà la proprietà sconto nell'istanza c1, ma non nella classe (quindi nemmeno nelle altre istanze)

console.log("Aggiunta proprietà sconto a c1");
console.log(c); //c non ha la propreità .sconto
console.log(c1); //c1 ha la proprietà .sconto

//Se volessimo impostare una proprietà a tutte le istanze di una classe possiamo modificare il .protoype della classe
c1.protoype //la proprietà .prototype di un oggetto contiene come proprietà tutte quelle della classe/oggetto (in quwesto caso quello di c1)
Automobile.prototype //Questo è il prototype che più comunemente modificheremo, aggiunegere o modifcare una propreità di .prototype imposterà tale proprietà su tutte li istanze di classe Automobile
//Usiamo il prototype per aggiunger eprorpietà a tutti gli elementi senzaa farlo uno alla volta
Automobile.prototype.sconto = 50 //questo aggiungerà la prop sconto a tutti gli elemetni di classe Automobile e sarà di base 50

//NB
//la prop inserita nel prototype non fa parte delle altre prop ma fa parte di quell del prototype. Se non ci sono altre proprietà con lo stesso nome possiamo leggerla con obj.prop, altrimenti Object.getPrototypeOf(obj)
//a riga128 abbiamo aggiunto sconto a c1, quindi dopo riga 138 l'elemtno c1 ha sia c1.sconto == 20 sia c1.protype.sconto == 50 (scrittura non valida, solo per spiegazione)
console.log(c); //si puo vedere dalla console che ci sono 2 proprietà sconto (una nel prototype)
console.log(c.sconto); //darà la prop .sconto 20
conole.log(Object.getPrototypeOf(c).sconto) //darà la prop .sconto del prototype 50 (getPrototypeOf() è un meotdo statico di Object). getProtoypeOf restituisce un'oggetto con prop e metodi che sono quelli del prototype

//Modificando il prototype interveniamo su più elemnti (con la classe comune) in una sola esecuzione senza dover specificare quali sono (raccogleirli ina rray, avere più variabili, ecc)


//Usi di classi e oggetti

//avere variabili più organizzate
//avere una variabile di riferimento per eseguire precise logiche
let utenti = []
document.getElementById("form").submit("submit", ()=>{
    let nome = document.getElementById("nome").value
    //normlamente aggiugnerei il nome utente a un array per tenere traccia degli utenti
    //utenti.push(nome)  
    // e ciclerei l'array per manipolare ogni utente aggiunto (immaginma che console.log() rappresenti una serie di oerazioni per, ad esempio, creare un elemento html da inserire nel dom per visualizzare i dati degli utenti)
    // utenti.forEach((e)=>{console.log(e)})
    let cognome = document.getElementById("cognome").value //avendo più dati questa cosa è più complicata

    //modi sconsigliati
    // creare diversi array per i due dati 
    // nomeUtenti.push(nome)
    // congomeUtenti.push(congnome)
    // nomeUtenti.forEach((e,i)=>{console.log(e+" "+cognomeUtenti[i])})

    // Usare array multidimensionali per salvare piu dati a ogni posizione
    // utenti.push([nome, cognome])
    // utenti.forEach((e)=>{console.log(e[0] +" "+ e[1])})

    //Il modo più comodo e preferibile è passare un oggetto, più semplice da manipolare.
    // utenti.push({nome: nome, cognome: cognome})
    // utenti.forEach((e)=>{console.log(e.nome + " " + e.cognome)})
    //Se poi quel tipo di oggetto può essere utile in altre parti di codice potrebbe essere sensato definirlo in una classe per rendere ancora più organizzato il codice (in questa classe ho aggiunto un metodo, nell'oggetto sopra senza classe la logica per le info la devo descrivere ogni volta nel punto che mi serve)
    utenti.push(new Utente(nome, cognome))
    utenti.forEach((e)=>{console.log(e.getInfo())})
})
function Utente(nome, congnome){
    this.nome = nome
    this.cognome = congnome
    this.getInfo = function(){
        return this.nome + " " + this.cognome
    }
}


