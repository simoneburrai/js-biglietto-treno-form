
const infoForm = document.querySelector("form");
const inputKm = document.getElementById("km");
const inputAge = document.getElementById("age");

const result = document.createDocumentFragment;

infoForm.addEventListener("submit", function(event){
    event.preventDefault();

    const kilometers = parseInt(inputKm.value);

    const age = parseInt(inputAge.value);

    const ticketPrice = totalTicketPrice(kilometers, age);
    const ticketPriceContainer = document.createElement("div");
    ticketPriceContainer.classList.add("price", "btn", "btn-danger");
    ticketPriceContainer.innerHTML = ticketPrice;
    const priceDiv = document.querySelector(".price-container");
    priceDiv.append(ticketPriceContainer);


    const formContainer = document.querySelector(".form-container");
    priceDiv.classList.replace("d-none", "d-flex");
    console.log( priceDiv.classList);
    formContainer.classList.add("d-none");
    console.log(formContainer.classList);
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


