


// INPUT VARIABLES
const Name = document.getElementById("name");
const last = document.getElementById("LastName");
const Email = document.getElementById("Email");
const area = document.getElementById("area");
const check = document.getElementById("check");
// LABELS
const nameLabel = document.getElementById("nameLabel");
const lastLabel = document.getElementById("lastLabel");
const areaLabel = document.getElementById("areaLabel");
const emailLabel = document.getElementById("emailLabel");
const checkLabel = document.querySelector(".check");
// RADIO CHECK
const op1 = document.querySelector("#option1");
const op2 = document.querySelector("#option2");

const Selection = document.querySelector(".query");

const success = document.querySelector(".success");

const btn = document.querySelector(".btn");

const cleanForm = () => {
  Name.value = "";
  last.value = "";
  Email.value = "";
  area.value = "";
  check.checked = false;
};

const validationInput = (input, label) => {
  if (!input.value) {
    input.classList.add("error-message");
    label.classList.add("error");
  }
};
const validationEmail = (input, label) => {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!input.value || !regexEmail.test(input.value)) {
    input.classList.add("error-message");
    label.classList.add("error-email");
  }
};
const validationRadio = (first, second, option) => {
  console.log(first.checked)
  console.log(second.checked)
  if (!first.checked && !second.checked) {
    option.classList.add("error");
  }
};

const validationCheck = (check, label) => {
  if (!check.checked) {
    label.classList.add("error");
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (Name.value && last.value && Email.value && area.value && check.checked) {
    success.style.opacity = "1";
    setTimeout(() => {
      success.style.opacity = "0";
    }, 10000);
    cleanForm();
  } else {
    validationInput(Name, nameLabel);
    validationInput(last, lastLabel);
    validationInput(area, areaLabel);
    validationEmail(Email, emailLabel);
    validationCheck(check, checkLabel);
    validationRadio(op1, op2, Selection);
  }
});
