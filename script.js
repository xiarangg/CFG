function contact() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let h6Java = document.querySelector("h6");

  if (name === "" || email === "") {
    alert("Error in user input. Please try again.");
  } else if (name && email) {
    h6Java.innerHTML = `Thank you ${name}, I will be in touch shortly.`;
  } else {
    alert("Error in user input. Please try again.");
  }
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", contact);
