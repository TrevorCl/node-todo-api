var express = require('express');
var bodyParser=require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User}=require('./models/user');
var {Todo}=require('./models/todo');


var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res) => {
   console.log(req.body);
   var newTodo = new Todo({
       text: req.body.text
   });

   newTodo.save().then((doc)=> {
     res.send(doc);
     console.log('saved task', doc);
   }, (e)=> {
     res.status(400).send(e);

     console.log('not able to save task',e);
   })
})


app.get('/todos', (req, res)=> {
  Todo.find().then((todos)=> {
    res.send({todos});
  }, (e)=> {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
   console.log('Listening on port 3000');
});

module.exports = {app};


//
// var newTodo = new Todo({
//   text:'task 1'
// });
//
// newTodo.save().then((doc)=> {
//   console.log('Saved todo:', doc);
// }, (err)=> {
//   console.log('unable to save todo');
// });
//
//
// //var newUser=new User({email:"x.y@z.com"});
// var newUser=new User({email: 'x.y@z.com'});
//
// newUser.save().then((doc)=> {
//   console.log('Save user ', doc);
// },(err)=> {
//   console.log('unable to save user', err);
// });
