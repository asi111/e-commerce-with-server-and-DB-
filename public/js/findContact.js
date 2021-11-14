const myDiv = document.getElementById("div");
axios
  .get("/contact")
  .then(function (response) {
    console.log(response);
    let Electronics = response.data;
    for (var i = 0; i < Electronics.length; i++) {
      myDiv.innerHTML += `<article>
              
            <span> <h2>Name:${Electronics[i].name}</h2></span><br>
            <span> <h2> LastName: ${Electronics[i].LastName}</h2></span><br>
            <span class="description"> <h2> message: ${Electronics[i].message}</h2></span><br><hr>
           
            </article>`;
    }
  })
  .catch(function (error) {  
    console.log(error);
  });
