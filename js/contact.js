// const form = document.querySelector("#contactForm");
// const contactButton = document.querySelector("#contactButton");
// const errorMessages = document.querySelector("#message");

// form.addEventListener("submit", function(event) {
//   const firstName = document.querySelector("#firstName");
//   const lastName = document.querySelector("#lastName");
//   const subject = document.querySelector("#subject");
//   const email = document.querySelector("#email");
//   const message = document.querySelector("#message");

//   let isValid = true;
//   errorMessages.innerHTML = ""

//   if (checkLength(firstName.value, 0) === false) {
//     isValid = false;
//     addErrorMessage("Please enter your first name.");
//   }
 
//   if (checkLength(lastName.value, 3) === false) {
//     isValid = false;
//     addErrorMessage("Please enter your last name.");
//   }

//   if (validateEmail(email.value) === false) {
//     isValid = false;
//     addErrorMessage("Please enter a valid email address.");
//   }

//   if (checkLength(message.value, 6) === false) {
//     isValid = false;
//     addErrorMessage("Please enter at least 5 characters.");
//   }

//   if (checkLength(subject.value, 9) === false) {
//     isValid = false;
//     addErrorMessage("Please enter a subject.");
//   }

//   if (!isValid) {
//     event.preventDefault();
//   }

//   if (isValid) {
//     console.log("IT WORKS");
//     event.preventDefault();
//     // form.innerHTML = `<p class="succeedMessage">"Success! Your form has been submitted."</p>`
//   }

//   form.reset();
// });

// function addErrorMessage(message) {
//   const errorMessage = document.createElement("div");
//   errorMessage.classList.add("error-message");
//   errorMessage.textContent = message;
//   errorMessages.appendChild(errorMessage);
// }

//   function checkLength(value, len) {
//     if (value.trim().length > len) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
//   }

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
