"use strict";
const acknowledgement = document.querySelector(".acknowledgement");
const subscribeBtn = document.querySelector(".form-btn");
const dismissBtn = document.querySelector(".btn-dismiss");
const input = document.querySelector(".email");
const formErrorMessage = document.querySelector(".form-error");
const cards = document.querySelectorAll(".card");

const cardsVisibility = () => {
  acknowledgement.classList.toggle("hidden");
  cards.forEach((card) => {
    card.classList.toggle("hidden");
  });
};
const throwError = () => {
  input.classList.add("error");
  formErrorMessage.classList.remove("hidden");
};
const reset = () => {
  input.value = "";
  input.classList.remove("error");
  formErrorMessage.classList.add("hidden");
  cardsVisibility();
};

const formValidation = () => {
  const inputLetters = input.value.split("");
  inputLetters.includes("@") && inputLetters.includes(".")
    ? cardsVisibility()
    : throwError();
};
subscribeBtn.addEventListener("click", formValidation);

dismissBtn.addEventListener("click", reset);
