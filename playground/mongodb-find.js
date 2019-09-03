const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log("Unable to connect to the MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5d6da9c008a26650eb0d8d88')
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log("Unable to fetch todos: ", error)
    // });
    db.collection('Users').find({name: 'Ricardo Montero'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    client.close();
});

