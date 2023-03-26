
const form = document.querySelector("#contactForm");
const contactBtn = document.querySelector("#contactButton");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");



function validateForm(event) {
  
  const errorMessages = document.querySelectorAll(".error-message");


  let isValid = true;

  errorMessages?.forEach((message) => {
    message.innerHTML = ""
  })

  if (!checkLength(firstName.value, 1)) {
    isValid = false;
    addErrorMessage("Please enter your first name.", firstName);
  }
 
  if (!checkLength(lastName.value, 3)) {
    isValid = false;
    addErrorMessage("Please enter your last name (at least 3 characters).", lastName);
  }

  if (!validateEmail(email.value)) {
    isValid = false;
    addErrorMessage("Please enter a valid email address.", email);
  }

  if (!checkLength(message.value, 24)) {
    isValid = false;
    addErrorMessage("Please enter a message (at least 25 characters).", message);
  }

  if (!checkLength(subject.value, 9)) {
    isValid = false;
    addErrorMessage("Please enter a subject (at least 10 characters).", subject);
  }

  if (!isValid) {
  }

  if (isValid === true) {
    console.log("IT WORKS");
    event.preventDefault();
  }
}

// validateForm();

form.addEventListener("input", validateForm);


function addErrorMessage(message, field) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  field.classList.add("error");
  field.parentNode.insertBefore(errorMessage, field.nextSibling);
}

function checkLength(value, len) {
  return value.trim().length >= len;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm) {

    form.innerHTML = `<div>
                        <h3 style="text-align: center; font-size: 2rem; margin-top: 50px;">Thank you! Form has been submitted.
                        </h3> 
                        <button id="successReturn"
                        class=cta" style="padding: 5px;
                        margin: right;">Go back</button>
                      </div>`;
    let btn = document.querySelector("#successReturn");

    btn.addEventListener("click", function () {
      location.reload();
    });
  } else {
    console.log("Complete form");
    event.preventDefault();
  }
});