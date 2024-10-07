const updateResult = (bmi) => {
  const outcomeElement = document.querySelector(".outcome");
  outcomeElement.innerText = bmi.toFixed(2);
};

const calculateBmi = () => {
  const heightElement = document.querySelector(".height");
  const weightElement = document.querySelector(".weight");

  const height = heightElement.value;
  const weight = weightElement.value;

  const bmi = weight / (height / 100) ** 2;
  updateResult(bmi);
};

const onFormSubmit = (event) => {
  event.preventDefault();

  calculateBmi();
};

const init = () => {
  const formElement = document.querySelector(".form");

  formElement.addEventListener("submit", onFormSubmit);
};

init();
