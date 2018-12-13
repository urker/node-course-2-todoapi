const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server !!!');
  }
  console.log('Succefully connected to MongoDb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5be4a2b8abdd26038c198d34')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Error:', err);
  // });

  db.collection('Users').find({ name: 'Uros'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error:', err);
  });

  // db.close();
});
