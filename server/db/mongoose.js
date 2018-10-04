var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set up to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}).then (()=> {

}, (e)=> {
  console.log('not able to connect to Mongo DB');
});

module.exports = {
  mongoose
};
