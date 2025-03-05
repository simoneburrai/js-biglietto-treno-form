// // Dichiarazione e inizializzazione Variabili
// let kilometers = parseFloat(prompt("Inserire il numero di chilometri da percorrere"));
// if (isNaN(kilometers)){
//     alert("Inserire un valore numerico");
//     exit();
// }
// const age = parseFloat(prompt("Inserire la propria età"));
// if (isNaN(age)){
//     alert("Inserire un valore numerico");
//     exit();
// }
// const pricePerKilometer = 0.21;

// let ticketPrice = kilometers * pricePerKilometer;

// // Condizioni per lo sconto 
// if (age < 18) {
//     ticketPrice = ticketPrice - ((20 * ticketPrice)/ 100);
//     alert("Avete ottenuto lo sconto del 20%");
// } else if (age >= 65) {
//     ticketPrice = ticketPrice - ((40 * ticketPrice)/ 100);
//     alert("Avete ottenuto lo sconto del 40%");
// }

// // Arrotondamento a 2 cifre decimali del prezzo del biglietto 
// ticketPrice = ticketPrice.toFixed(2);
// // Stampa dei dati acquistiti (Chilometri da percorrere e età del passeggero)
// // Stampa del prezzo effettivo del biglietto 
// alert(`I chilometri che dovrete percorrere sono ${kilometers}
//     La vostra età è di ${age} anni
//     Il prezzo del vostro biglietto è di ${ticketPrice} €`);


const infoForm = document.querySelector("form");
console.log(infoForm);
const inputKm = document.getElementById("km");
console.log(inputKm);
const inputAge = document.getElementById("age");
console.log(inputAge);

infoForm.addEventListener("submit", function(event){
    event.preventDefault();

    const kilometers = parseInt(inputKm.value);
    console.log("I chilometri inseriti dall'utente sono", kilometers);

    const age = parseInt(inputAge.value);
    console.log("L'età dell'utente è", age);

    console.log(totalTicketPrice(kilometers, age));
})




// Functions 


function totalTicketPrice (km, age){
     const priceKm = 0.21;
     const minorDiscountPercentage = 20;
     const seniorDiscountPercentage = 40;
     let ticketPrice = km * priceKm;
     console.log(ticketPrice);
     if(age < 18){
        ticketPrice = ticketPrice - ((ticketPrice * minorDiscountPercentage) / 100);
     } else if(age >= 65){
        ticketPrice = ticketPrice - ((ticketPrice * seniorDiscountPercentage) / 100);
     }
     ticketPrice = ticketPrice.toFixed(2);
     return ticketPrice;
}


