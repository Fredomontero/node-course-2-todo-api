const MongoClient = require('mongodb').MongoClient;
// import * as mongodb from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log("Unable to connect to the MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'walk the dog',
    //     completed: true
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert todo", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    db.collection('Users').insertOne({
        name: 'Fernando Montero',
        age: 27,
        location: 'Tijuana'
    }, (error, result) => {
        if(error){
            return console.log("Unable to insert user", error);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    })
    client.close();
});

