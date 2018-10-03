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
   console.log('Connected to mongo');
   const db=client.db('TodoApp');

  db.collection('Users').updateOne(
    {_id:new ObjectID('5bb2533c41f6a01694de6f5d')},
    { $set: { name:'Big Tom',  age:21 } }
   ).then((docs)=> {
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err)=>{
     console.log('problem updating:',err);
   })


db.collection('Users').findOneAndUpdate(
  {_id:new ObjectID('5bb254624d607a169f9e1bef')},
  {
    $set: {name:'Mustang Sally'},
    $inc: { age: 1 } },
  {returnOriginal:false}
).then((result)=> {
   console.log(JSON.stringify(result, undefined, 2));
 }, (err)=>{
   console.log('problem updating:',err);
 })


  client.close();
});
