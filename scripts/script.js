"use strict";
//input elements
const billInputEl = document.getElementById("bill");
const personInputEl = document.getElementById("people");
const tipInputEl = document.querySelectorAll(".tip-percentage");
const customInputEl = document.getElementById("custom-tip");
const amountEl = document.getElementById("amount");
const totalEl = document.getElementById("total");
const btnReset = document.getElementById("btn-reset");
const errorEl = document.getElementById("error");

//global variables
let bill,persons,tipPercent
// init function
function init() {
    bill = 0;
    persons = 0;
    tipPercent = 0;
    personInputEl.value = null;
    billInputEl.value = null;
    customInputEl.value = null;
    amountEl.innerText = `$0.00`;
    totalEl.innerText = `$0.00`;
  }
//start
//step-1
    function calBills(tipPercent) {

    //converting all inputs in number
    bill = Number(billInputEl.value);
    persons = Number(personInputEl.value);
    if (persons === 0 || persons < 0) {
      errorEl.style.display = "block";
      personInputEl.style.border = "2px solid blue";
      billInputEl.style.border = "2px solid var(--clr-Strong-cyan)";

      amountEl.innerText = `$0.00`;
      totalEl.innerText = `$0.00`;
    }
    else{
    const totalTip = bill * tipPercent;
    const totalBill = bill + totalTip;

    const tipPerPerson = totalTip / persons;
    const billPerPerson = totalBill / persons;

    amountEl.innerText = "$" + tipPerPerson.toFixed(2);
    totalEl.innerText = "$" + billPerPerson.toFixed(2);

    personInputEl.value = null;
    billInputEl.value = null;
  }
}
//step-2
  for (let i = 0; i < tipInputEl.length; i++) {
    tipInputEl[i].addEventListener("click", function () {
      tipPercent = Number(this.value) / 100;
      calBills(tipPercent);
      billInputEl.style.border = "none";
      customInputEl.style.border = "none";
      personInputEl.style.border = "none";
    });
  }
//step-3
    customInputEl.addEventListener("change", function () {
      tipPercent = Number(this.value) / 100;
      console.log(customInputEl.value)
    this.value = null;
     calBills(tipPercent);
     billInputEl.style.border = "none";
     customInputEl.style.border = "none";
     personInputEl.style.border = "none";
  });
  //adding border to all inputs
customInputEl.addEventListener("click", function () {
  this.style.border = "2px solid var(--clr-Strong-cyan)";
  btnReset.style.transform = "none";
});

billInputEl.addEventListener("click", function () {
  this.style.border = "2px solid var(--clr-Strong-cyan)";
  btnReset.style.transform = "none";
});

personInputEl.addEventListener("click", function () {
  this.style.border = "2px solid var(--clr-Strong-cyan)";
  btnReset.style.transform = "none";
  errorEl.style.display = "none";
});

  //step-4
  btnReset.addEventListener("click",function(){
    this.style.transform = "scale(0.99) translateZ(-5px)";
    errorEl.style.display = "none";
    customInputEl.style.border = "none";
    personInputEl.style.border = "none";
    billInputEl.style.border = "none";
    init();
  
  })
init();


