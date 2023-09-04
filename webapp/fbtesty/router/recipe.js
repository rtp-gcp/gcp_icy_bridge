const express = require("express");
const recipe = express.Router();
const fetch = require("node-fetch");


// Init firestore
const a_firestore = require("@google-cloud/firestore")

// specify firestore settings
const db = new a_firestore({
  projectId: 'fire-testy-378316',
  keyFilename: '.fire_key.json',
});







//
// private read firestore called by API get readFirestore
// doc is recipe name
// assumes collection is "recipe"
const readFirestoreRecipe = async (doc) => {


    //console.log("== readFirestoreRecipe() ==")
    //console.log("doc: %s", doc)
    //console.log('lower')
 

    var jsonData = {}
    const recipeRef = db.collection("recipe").doc(doc)
    const a_doc = await recipeRef.get();
    if (!a_doc.exists) {
      //console.log("No such document")
      jsonData["none"] = "none"
    } else {
      //console.log('document data: ', a_doc.data())
      jsonData = a_doc.data()
    }

    //console.log("jsonData: ", jsonData)


    return jsonData

  }

  
//
// private read firestore called by API get readFirestore
//
const readFirestoreAllRecipes = async () => {


  //console.log("== readFirestoreAllRecipes() ==")
  //console.log('lower')


  var jsonData = {}
  var resultsArray = []

  const recipeRef = db.collection("recipe")
  const docs = await recipeRef.get()
  if (docs.empty) {
    //console.log("No docs for collection: recipe.")
    jsonData["none"] = "none"
  } else {
    docs.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
      resultsArray.push(doc.id)
    });    
    //console.log('collection data: ', resultsArray)
    jsonData["results"] = resultsArray
  }

  //console.log("jsonData: ", jsonData)


  return jsonData

}



//
// private write firestore called by API get writeFirestore
//
// age: is JSON. for now just a number but it could be a JSON payload
const writeFirestore = async (collection, doc, attributes) => {


    //console.log("== writeFirestore() ==")
    //console.log('lower')
    //console.log("collection: %s", collection)
    //console.log("doc: %s", doc)
    //console.log("attributes: %s", attributes)
 

    const docRef = db.collection(collection).doc(doc);

    // Building JSON and sending 
    var aJSONString = ' { } '
    // Rewrite the value of the "age" property
    const newJSON = JSON.parse(aJSONString);
    newJSON.ingredients = attributes.ingredients;
    newJSON.procedure = attributes.procedure;
    newJSON.notes = attributes.notes;
    //console.log("newJSON: ", newJSON)
    const res = await docRef.set(newJSON)
    //console.log('res: ', res);

    return res

}
  



//////////////////////////////////////////////////////////////
//
// Web Server Web App API URLS
//
//////////////////////////////////////////////////////////////






//
// https://server.com/recipe/readFirestore/:doc
//
// GET
//
// For get requests, you can not use body parameters.
// Instead, use the query url to specify the parameters.
// 
// This requires use of a query url like this:
// /recipe/<name, corresponding to doc>
//
//
// use of an anymous function to make a callback
recipe.get("/readFirestore/:doc", async(req, res) => {
    //console.log('== rest api /readFirestore/:doc upper ==')

    // We use the collection:doc:entity form and 
    // we assume collection=recipe and doc=specific recipe name
    // eg.:
    // collection: recipe
    // doc: BBQ Sauce #1
    //
    // Params in url
    //console.log('in searchtext url %s', req.params)
    //console.log('req.params.doc: %s', req.params.doc)




    const collection = "recipe"
    const doc = req.params.doc;
    const data = await readFirestoreRecipe(doc)
    //console.log("upper data: " + data)  // since this is an object, this will print obj
                                        // [object Object]
    //console.log("upper data: ", data)  // since this is an object, this will stringify the obj
                                       // {
                                      // notes: 'Traditional Carolina BBQ Sauce Recipe!',
                                      // ingredients: '["1.5 cups apple cider vinegar","1/4 cup brown sugar", "..."]',
                                        // procedure: '["mix", "bring to boil", "simmer 10 mins"]'
                                         //}
    //console.log("upper type of data: " + typeof data)
    //console.log("stringify of data: " + JSON.stringify(data) )
    res.json(data);
});
 


//
// https://server.com/recipe/readFirestore
//
// GET
//
// For get requests, you can not use body parameters.
// Instead, use the query url to specify the parameters.
// 
// This requires use of a query url like this:
// /recipe/<name, corresponding to doc>
//
//
// use of an anymous function to make a callback
recipe.get("/readFirestore/", async(req, res) => {
  
  //console.log('== rest api /readFirestore upper ==')





  const collection = "recipe"
  const data = await readFirestoreAllRecipes()
  //console.log("upper data: " + data)  // since this is an object, this will print obj
                                      // [object Object]
  //console.log("upper data: ", data)  // since this is an object, this will stringify the obj
                                     // {
                                    // notes: 'Traditional Carolina BBQ Sauce Recipe!',
                                    // ingredients: '["1.5 cups apple cider vinegar","1/4 cup brown sugar", "..."]',
                                      // procedure: '["mix", "bring to boil", "simmer 10 mins"]'
                                       //}
  //console.log("upper type of data: " + typeof data)
  //console.log("stringify of data: " + JSON.stringify(data) )
  res.json(data);
});



//
// https://server.com/recipe/writeFirestore
//
// POST
//
// collection, doc, writeData
// use of an anymous function to make a callback
recipe.post("/writeFirestore", async(req, res) => {

  //console.log('== rest api POST /recipe/writeFirestore upper ==')

  // apparantly, you can't pull by the name as you can
  // when its just a single parameter
  //
  //console.log('collection: ' + collection)
  //console.log('doc: ' + doc)
  //console.log('age: ' + age)
  // 
  // This is the syntax for parameters which are specified 
  // as part of the URL. ie. /writeFirestore/:doc/:collection.
  //console.log('in searchtext url %s', req.params)
  //console.log('req.params.collection: %s', req.params.collection)
  //console.log('req.params.doc: %s', req.params.doc)


  // Syntax for getting parameters passed in the
  // body of the request
  //console.log('params in body %s', req.body)
  //console.log('req.body.collection: %s', req.body.collection)
  //console.log('req.body.doc: %s', req.body.doc)
  //console.log('req.body.attributes: %s', req.body.attributes)


  const collection = req.body.collection;
  const doc = req.body.doc;
  const attributes = req.body.attributes;

  const data = await writeFirestore(collection, doc, attributes)
  //console.log("data: " + data)
  res.json(data);
});



// This creates a stub api of myrouter/ so that
// it can be connected in the parent app.
module.exports = recipe;
