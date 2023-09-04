const express = require("express");
const myfs = express.Router();
const fetch = require("node-fetch");


// Init firestore
const a_firestore = require("@google-cloud/firestore")

// specify firestore settings
const db = new a_firestore({
  projectId: 'fire-testy-378316',
  keyFilename: '.fire_key.json',
});






const tryfirestore = async () => {


  console.log("try firestore lower")

  const docRef = db.collection('users').doc('alovelace');

  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

}

//
// private read firestore called by API get readFirestore
//
const readFirestore = async (collection) => {


    console.log("== readFirestore() ==")
    console.log("collection: %s", collection)
    console.log('lower')
 
  
    const snapshot = await db.collection(collection).get();
    console.log("typeof(snapshot) " + typeof(snapshot))

    var jsonData = {};
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        jsonData[doc.id] = doc.data()
    });

    return jsonData
  }
  
//
// private write firestore called by API get writeFirestore
//
// age: is JSON. for now just a number but it could be a JSON payload
const writeFirestore = async (collection, doc, age) => {


    console.log("== writeFirestore() ==")
    console.log('lower')
    console.log("collection: %s", collection)
    console.log("doc: %s", doc)
    console.log("age: %s", age)
 
// reference  
//
//    const docRef = db.collection('users').doc('alovelace');
//
//    await docRef.set({
//      first: 'Ada',
//      last: 'Lovelace',
//      born: 1815
//    });
  

    const docRef = db.collection(collection).doc(doc);

    // Building JSON and sending 
    var aJSONString = ' { "age": 33 } '
    // Rewrite the value of the "age" property
    const newJSON = JSON.parse(aJSONString);
    newJSON.age = Number(age);
    console.log("newJSON: ", newJSON)
    const res = await docRef.set(newJSON)
    console.log('res: ', res);


    return res

}
  



//////////////////////////////////////////////////////////////
//
// Web Server Web App API URLS
//
//////////////////////////////////////////////////////////////


//
// https://server.com/router/
//
// use of an anymous function to make a callback
myfs.get("/", (req, res) => {
    res.json({ success: "hello myfs"});
});




//
// https://server.com/router/readFirestore
//
// use of an anymous function to make a callback
myfs.get("/readFirestore/:collection", async(req, res) => {
    console.log('== rest api /readFirestore/:collection upper ==')
    console.log('in searchtext url %s', req.params)
    console.log('req.params.collection: %s', req.params.collection)
    const collection = req.params.collection;
    const data = await readFirestore(collection)
    console.log("data: " + data)
    res.json(data);
});
 


//
// https://server.com/router/writeFirestore
//
// collection, doc, writeData
// use of an anymous function to make a callback
myfs.get("/writeFirestore/:collection/:doc/:age", async(req, res) => {
    console.log('== rest api /writeFirestore/:collection/:doc/:age upper ==')

    // apparantly, you can't pull by the name as you can
    // when its just a single parameter
    //
    //console.log('collection: ' + collection)
    //console.log('doc: ' + doc)
    //console.log('age: ' + age)
    console.log('in searchtext url %s', req.params)
    console.log('req.params.collection: %s', req.params.collection)
    console.log('req.params.doc: %s', req.params.doc)
    console.log('req.params.age: %s', req.params.age)
    const collection = req.params.collection;
    const doc = req.params.doc;
    const age = req.params.age;
    const data = await writeFirestore(collection, doc, age)
    console.log("data: " + data)
    res.json(data);
});
 


// This creates a stub api of myrouter/ so that
// it can be connected in the parent app.
module.exports = myfs;
