const form = document.querySelector("#contactForm");
const contactButton = document.querySelector("#contactButton");
const errorMessages = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const subject = document.querySelector("#subject");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  let isValid = true;
  errorMessages.innerHTML = ""

  if (checkLength(firstName.value, 0) === false) {
    isValid = false;
    addErrorMessage("Please enter your first name.");
  }
 
  if (checkLength(lastName.value, 3) === false) {
    isValid = false;
    addErrorMessage("Please enter your last name.");
  }

  if (validateEmail(email.value) === false) {
    isValid = false;
    addErrorMessage("Please enter a valid email address.");
  }

  if (checkLength(message.value, 6) === false) {
    isValid = false;
    addErrorMessage("Please enter at least 5 characters.");
  }

  if (checkLength(subject.value, 9) === false) {
    isValid = false;
    addErrorMessage("Please enter a subject.");
  }

  if (!isValid) {
    event.preventDefault();
  }

  if (isValid) {
    console.log("IT WORKS");
    event.preventDefault();
    // form.innerHTML = `<p class="succeedMessage">"Success! Your form has been submitted."</p>`
  }

  form.reset();
});

function addErrorMessage(message) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
}

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }
