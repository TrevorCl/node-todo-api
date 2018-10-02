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
   console.log(client);

   const db=client.db('TodoApp');

   // db.collection('Todos').insertOne({
   //    text:'Something to do',
   //    completed: false
   // },(err, result)=> {
   //   if(err) {
   //     return console.log('unable to insert todo', err);
   //   }
   //   console.log(JSON.stringify(result.ops, undefined, 2));
   // });

   db.collection('Users').insertOne({
      name:'Tex Mex',
      age:43,
      location:'Swindon'
   }, (err,result) => {
      if (err) {
        return console.log('Unable to connect to Users collection', err);
      }
      console.log('COnnected to Users collection');
      console.log(result.ops[0]._id.getTimestamp());
   });
   client.close();
});
