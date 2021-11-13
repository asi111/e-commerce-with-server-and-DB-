
let divContainer = document.getElementById("tbContainer");
let total = document.getElementById("Total");


let sum = 0;
let arrayOfSum = [];
axios
  .get("/cart")
  .then(function (response) {
    const cartProducts = response.data[0].products;
    console.log(cartProducts);
    for (let i = 0; i < cartProducts.length; i++) {
      console.log(cartProducts[i], 1);
      divContainer.innerHTML += `
              <tr class = "cartTableRow">    
              <td class="tb_cart"> <img  src="${cartProducts[i].image[0]}"  class="img"></td>
              <td class="tb_cart">  ${cartProducts[i].Name}</td>
              <td class="tb_cart" > $${cartProducts[i].price} </td>
              <td> <button  id = "btn" onclick =  "removeItem('${cartProducts[i]._id}')" )>remove item</button></td>
              </tr>`;
      sum += Number(cartProducts[i].price);
      arrayOfSum.push(Number(cartProducts[i].price));
      sum += arrayOfSum[i];
      total.innerText = `total : $${sum}`;
      console.log(sum);
      console.log(cartProducts[i]._id);
    }
   
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

let button = document.getElementById("btn");
function removeItem(id) {
 
    axios
      .patch(`/carts/delete/${id}`, {
   
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


