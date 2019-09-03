const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log("Unable to connect to the MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    db.collection('Users').findOneAndDelete({name: 'Ricardo Montero'}).then((result) => {
        console.log(result);
    });
    // client.close();
});

