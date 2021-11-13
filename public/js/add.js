const myForm = document.getElementById("form");
const myName = document.getElementById("inputName");
const myPrice = document.getElementById("inputPrice");
const myCategory = document.getElementById("inputCategory");
const myDescription = document.getElementById("inputDescription");
const myImage = document.getElementById("inputImage");
const userImage = document.getElementById("secInputImage");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = myName.value;
  const price = myPrice.value;
  const category = myCategory.value;
  const description = myDescription.value;
  const image = myImage.value;
  const secImage = userImage.value;

  console.log(name);

  axios  
    .post("/products", {
      Name: name,
      price: price,
      category: category,
      description: description,
      image:[image,secImage] ,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
