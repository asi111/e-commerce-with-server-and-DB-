require("dotenv").config()
const mongo = require("mongodb"),
  MongoClient = mongo.MongoClient,
  objectID = mongo.ObjectId,
  url = process.env.MONGOURL
  console.log(url);
  Products = require("../public/js/main"),
  dbName = "eCommerce",
  productsCol = "products";
  contactColl = "contact";
  cartTColl = "carts";
// console.log(Products);
// || "mongodb://localhost:27017"

// // console.log( Products);
// MongoClient.connect(url, function(err, db) {
//           // const body = req.body
//           if (err) throw err;
//           var dbo = db.db(dbName);
//           dbo.collection(productsCol).insertMany( Products, function(err, coll) {
//             if (err) throw err;
//             res.send(coll)
//             db.close();
//           });
//         });

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db(dbName);
//   dbo.createCollection("contact", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     //   db.close();
//   });
// });

function insertProducts(req, res) {
  MongoClient.connect(url, function (err, db) {
    const body = req.body;
    // console.log(body);
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(productsCol).insertOne(body, function (err, coll) {
      if (err) throw err;
      res.send(coll);
      //   db.close();
    });
  });
}

function insertContact(req, res) {
  MongoClient.connect(url, function (err, db) {
    const body = req.body;
    console.log(body);
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection( contactColl).insertOne(body, function (err,contact) {
      if (err) throw err;
      res.send(contact);
      console.log(contact);
      //   db.close();
    });
  });
}

function insertCarts(req, res) {
  MongoClient.connect(url, function (err, db) {
    const body = req.body;
    console.log(body);
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection( cartTColl).insertOne(body, function (err,carts) {
      if (err) throw err;
      res.send(carts);
      console.log(carts);
      //   db.close();
    });
  });
}


function getProduct(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo
      .collection(productsCol)
      .find({})
      .toArray(function (err, Products) {
        if (err) throw err;
        res.send(Products);
        // console.log(Products);
        //   db.close();
      });
  });
}

function getContact(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo
      .collection(contactColl)
      .find({})
      .toArray(function (err, Contact) {
        if (err) throw err;
        res.send(Contact);
        // console.log(Products);
        //   db.close();
      });
  });
}

function getCart(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo
      .collection(cartTColl)
      .find({})
      .toArray(function (err, p) {
        if (err) throw err;
        res.send(p);
        console.log(p);
        //   db.close();
      });
  });
}

function updateProductById(req, res) {
  MongoClient.connect(url, function (err, db) {
    const newObj = req.body;
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo.collection(productsCol).updateOne(
      { _id: objectID(req.params.id) },
      {
        $set: newObj,
      },
      (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
      }
    );
  });
}

function deleteProductById(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection( cartTColl )
      .deleteOne({ _id: objectID(req.params.id) }, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
      });
  });
}


function pushToCart(req,res) {
  MongoClient.connect(url, function (err, db){
    if (err) throw err;

  const dbo = db.db(dbName);

  const body = req.body
  const cartId = {_id: objectID("6190a5a6e446d8aae216cd54") }

  dbo.collection(cartTColl).updateOne(cartId,{ $push:{products:body} },
    (err, coll) => {
      if (err) throw err;
      res.send(coll)
      console.log(coll);
    }
  );
});
}


function deleteFromCart(req,res) {
  MongoClient.connect(url, function (err, db){
    if (err) throw err;

  const dbo = db.db(dbName);

  let id = req.params.id
  let _id = {_id:id}
  console.log( _id );
  const cartId = {_id: objectID("6190a5a6e446d8aae216cd54") }

  dbo.collection(cartTColl).findOneAndUpdate(cartId,{ $pull:{products:_id}},
    (err, product) => {
      if (err) throw err;
      res.send(product)
      console.log(product);
    }
  );
});
}


function findProduct(req, res) {
 
MongoClient.connect(url, function(err, db) {
console.log(1);
  let id = req.params.id 
  console.log(id)
  let _id = {_id: objectID(id) }
  if (err) throw err;
  var dbo = db.db(dbName);
  dbo.collection(productsCol).findOne(_id , function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
    db.close();
  });
});
}




// function getProduct(req, res) {
//   MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db(dbName);
//     dbo
//       .collection(productsCol)
//       .find({})
//       .toArray(function (err, Products) {
//         if (err) throw err;
//         res.send(Products);
//         // console.log(Products);
//         //   db.close();
//       });
//   });
// }

module.exports = {
  insertProducts,
  getProduct,
  updateProductById,
  deleteProductById,
  getContact,
  insertContact,
  insertCarts,
  pushToCart,
  getCart,
  deleteFromCart,
  findProduct

};
