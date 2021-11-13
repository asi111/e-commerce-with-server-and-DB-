let  imgContainer = document.getElementById("container")
let  counterCartItems = document.getElementById("cartId")
let counter = 1




axios.get("/products/headphones")
  .then(function (response) {
      console.log(response);
      const products  = response.data;
      let  Electronics = products.filter((prod)=>{
             return prod.category == "headphones"
      })
    
      for(let i = 0 ; i< Electronics.length; i++){
         
              imgContainer.innerHTML+=
              `<article>
              <span>id: ${Electronics[i].id}</span><br>
              <span>Name: ${Electronics[i].Name}</span><br>
              <span>price: $${Electronics[i].price}</span><br>
              <span>category: ${Electronics[i].category}</span><br>
              <span class="description">description: ${Electronics[i].description}</span><br>
              <img src="${Electronics[i].image[0]}" >
              <img src="${Electronics[i].image[1]}" >
              <button type="button" onclick= "findOne('${Electronics[i]._id}')">add item</button><br>
              <form method="get" action="update.html"><button class=""btnUpdate" type="submit" name="id" value="${Electronics[i]._id}">update</button>
              </article>`
          
      }
    
  })
  .catch(function (error) {

    console.log(error);
  })

   
function findOne(id) {
  axios
    .get(`/cart/findProduct/${id}`, {
  
    })
    .then(function (response) {
      console.log(response);
      addToCart(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function addToCart(res) {

  axios
    .patch("/carts/update", res, {
    
    })
    .then(function (response) {
      counterCartItems.innerText = counter++
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


