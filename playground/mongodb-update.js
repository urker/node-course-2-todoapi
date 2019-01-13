const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server !!!');
  }
  console.log('Succefully connected to MongoDb server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5be4a49efe7ad003957579ea')
  },{
    $set: {
      name: 'Uros'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
