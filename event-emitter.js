const events = require('events');
const util = require('util');
function Person(name){
     this.name = name;
}
var tom = Person("tom");
var jerry = Person("jerry");

var people = [tom,jerry];
console.log(tom.name);
//people.forEach(function(Person){
//    console.log(Person.name);
//});
