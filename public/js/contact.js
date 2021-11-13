const contactForm = document.getElementById("form");
const myName = document.getElementById("inputName");
const myLastName = document.getElementById("inputLastName");
const myMessage = document.getElementById("inputMessage");


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = myName.value;
  const LastName = myLastName.value;
  const message = myMessage.value;
  axios
    .post("/contact", {
      name: name,
      LastName:LastName,
      message : message 
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
