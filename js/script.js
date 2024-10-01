const formElement = document.querySelector(".form");
const heightElement = document.querySelector(".height");
const weightElement = document.querySelector(".weight");
const outcomeElement = document.querySelector(".outcome");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = heightElement.value;
  const weight = weightElement.value;

  const bmi = weight / (height / 100) ** 2;

  outcomeElement.innerText = bmi.toFixed(2);
});
