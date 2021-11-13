let imgContainer = document.getElementById("container");
let counterCartItems = document.getElementById("cartId");
let counter = 1;

let url_string = window.location.href;
let url = new URL(url_string);
let updateID = url.searchParams.get("id");

const myForm = document.getElementById("form");
const myName = document.getElementById("inputName");
const myPrice = document.getElementById("inputPrice");
const myCategory = document.getElementById("inputCategory");
const myDescription = document.getElementById("inputDescription");
const myImage = document.getElementById("inputImage");
const userImage = document.getElementById("secImage");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = myName.value;
  const price = myPrice.value;
  const category = myCategory.value;
  const description = myDescription.value;
  const image = myImage.value;
  axios
    .patch(`/products/update/${updateID}`, {
      name: name,
      price: price,
      Category: category,
      description: description,
      image: [myImage, userImage],
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
