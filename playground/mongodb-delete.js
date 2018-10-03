//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);
// console.log(obj.getTimestamp());

// 2 args string for url, callback function, after connect success or fail
MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true},
(err, client) => {
   if(err) {
     return console.log('unable to connect to mongodb');
   }
   console.log('success, connected to mongodb');
   //console.log(client);

   const db=client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=> {
  //   console.log(result);
  // }) ;

  // deleteOne
  db.collection('Todos').deleteOne({text:'Something to do'}).then((result)=> {
    console.log(result);
  }) ;

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text:'Something to do'}).then((result)=> {

  });

  client.close();
});
