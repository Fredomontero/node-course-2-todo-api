const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log("Unable to connect to the MongoDB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5d6d65a3b6bf412767f5c3f4')
        },{
            $set: {
                completed: true
            }
        },{
            returnOriginal: false
        }).then((result) => {
            console.log(result);
    })
    client.close();
});

