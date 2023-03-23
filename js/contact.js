
const form = document.querySelector("form");

function validateForm(event) {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const subject = document.querySelector("#subject");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const errorMessages = document.querySelectorAll(".error-message");
  event.preventDefault();
  

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

  if (isValid) {
    console.log("IT WORKS");
    // event.preventDefault();
    // form.innerHTML = `<p class="succeedMessage">"Success! Your form has been submitted."</p>`
  }

  // form.reset();
}

form.addEventListener("submit", validateForm);
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

  if (
    checkLength(firstNameInput.value, 1) &&
    checkLength(lastNameInput.value, 3) &&
    validateEmail(emailInput.value) && 
    checkLength(messageInput.value, 9) && 
    checkLength(subjectInput.value, 24)
  ) {
    form.innerHTML = `<div>
                        <h3 style="text-align: center;">Thank you! Form has been submitted.
                        </h3>
                        <button id="successReturn"
                        class=cta" style="padding: 5px;
                        float: right;">Go back</button>
                      </div>`;
    let btn = document.querySelector("#successReturn");

    btn.addEventListener("click", function () {
      location.reload();
    });
  } else {
    console.log("Complete form");
  }
});