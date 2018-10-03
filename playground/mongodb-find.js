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

  // db.collection('Todos').find({completed:false}).toArray().then ((docs)=> {
   // db.collection('Todos').find(
   //   new ObjectID("5bb2517a12868c15fd0058b1")
   // ).toArray().then ((docs)=>{
   //    console.log('Todos');
   //    console.log(JSON.stringify(docs, undefined, 2));
   // }, (err) => {
   //    console.log('Unable to fetch todos', err);
   // })

   // db.collection('Todos').find().count().then ((count)=>{
   //    console.log(`Todos count ${count}`);
   // }, (err) => {
   //    console.log('Unable to fetch todos', err);
   // })

   db.collection('Users').find().toArray().then( (docs)=> {
     console.log(JSON.stringify(docs, undefined, 2));
      // for (var o in docs) {
      //   console.log(o.name + '\n');
      // }
      console.log(`Users: ${docs.length}`);
      for (var i=0; i<docs.length; i++) {
         console.log(docs[i].name );
      }
   },(err)=> {
      console.log('Unable to fetch Users', err);
   });

   db.collection('Todos').find().toArray().then( (docs)=> {
     console.log(JSON.stringify(docs, undefined, 2));
      // for (var o in docs) {
      //   console.log(o.name + '\n');
      // }
      console.log(`Todos: ${docs.length}`);
      for (var i=0; i<docs.length; i++) {
         console.log(docs[i].text );
      }
   },(err)=> {
      console.log('Unable to fetch Todos', err);
   });

   client.close();
});
