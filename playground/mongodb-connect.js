const MongoClient= require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server !!!');
  }
  console.log('Succefully connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   'text': 'some text',
  //   'completed': false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert document to MongoDb !!!', err);
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2));
  // });
  db.collection('Users').insertOne({
    'name': 'Uros',
    'age': 40,
    'location': 'Ireland'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user document !!!', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  db.close();
});
