"use strict";


const form = document.querySelector("#new-account-form");
const form_inputs = form.querySelectorAll("input");
const form_values = form_inputs.forEach(input => {input.value.trim});
let errs = form.querySelectorAll(".error");
let err = form.querySelector(".error");

form_inputs.forEach(input => {
    if (input.value == "") {
        //blanks
        // alert("Please fill in all fields before submitting form");
        input.style.border = "2px solid red";
        err.innerHTML = `Please enter your ${input.id}`;
        // errs.forEach(err => {err.innerHTML = `Please enter your ${input.id}`});
    } else {
        // alert(`you're all set!`)
    }
    
});




console.log(form);
console.log(form_inputs);
console.log(form_values);
console.log(errs); 