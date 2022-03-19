let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elBtn = document.querySelector(".form__btn");

let elResultUsd = document.querySelector(".result__usd");
let elResultEuro = document.querySelector(".result__euro");
let elResultRubl = document.querySelector(".result__rubl");

let RUBL_TO_UZS = 93;
let EURO_TO_UZS = 	11600;
let DOLLAR_TO_UZS = 11130;

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    let elInputVal = Math.round(elInput.value);
    let rubl = (elInputVal / RUBL_TO_UZS).toFixed(2);
    let euro = (elInputVal / EURO_TO_UZS).toFixed(2);
    let dollar = (elInputVal / DOLLAR_TO_UZS).toFixed(2);
    
    elResultUsd.textContent = "Dolarda = $ " + dollar;
    elResultEuro.textContent = "Euroda = € " + euro;
    elResultRubl.textContent = "Rublda = " + rubl;
    
    if (elInputVal <= 0) {
        alert("Iltimos, Alisher aka siz kursni bilishingiz uchun 0 dan farqli son kiriting !");
    }
    if (isNaN(elInputVal)) {
        alert("Iltimos raqam kiriting !");
    }
})
