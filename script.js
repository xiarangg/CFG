function contact() {
  alert("Thank you for your message. We will be in contact soon.");
}

function cat() {
  alert("You found a kitty! 😺");
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", contact, cat);
