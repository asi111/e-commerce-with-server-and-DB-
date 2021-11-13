const myForm = document.getElementById("form");
const myName = document.getElementById("inputName");


myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = myName.value;
  axios
    .post("/carts", {
      products :[],
     
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
