
var day="monday";
var day="tuesday"
var day="wed"
var day="thurs"
//arrays
// here day is a array name 
//array values will be stored in square brackets
//Array indexes start with 0.
//[0] is the first element. [1] is the second element.
//  index     0         1        2       3
var day=['monday','tuesday','wed','thurs']
// length     1         2        3       4

// for accessing of an array elements
console.log(day[0]);

// to get length of an array array.length
console.log(day)
var b=day.length

//insert an  element in array at end
day.push('holiday');
console.log(day)

//delete an  elememnt in array at end
day.pop('holiday');
console.log(day)

// insert an element in array at starting
day.unshift('day starts ');
console.log(day)

// deleted  an in the array at start
day.shift();
console.log(day)

//Adding or Removing Elements at Any Position temperorily
// by using slice we can extract the element
const fruits = ['apple', 'grapes', 'mango', 'peach', 'bannana'];

console.log(fruits.slice(2));
// expected output: Array ["mango", "peach", "bannana"]

console.log(fruits.slice(2, 4));


console.log(fruits.slice(1, 5));




//Adding or Removing Elements at Any Position permanently
// by using splice we cn extract element permanently
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//concat  concat() method joins two or more strings.does not change the existing strings.returns a new string.
var item1 =[ 'ap','bihar']
var item2 =['karn','chennai']
var  result = item1.concat(item2);
console.log(result);

var text1='hi';
var text2='hello';
var text3='world';
var  scentence = text1.concat(text2,text3);
console.log(scentence);
// using tostring()method  this method is used to convert string into unstring
console.log(result.toString())

// looping statements   -   Loops can execute a block of code a number of times.
//for                   -   loops through a block of code a number of times
//while                 -   loops through a block of code while a specified condition is true
 
  var brands=['hp','lenovo','apple','dell','asus']
  //syntax:    for (statement 1; statement 2; statement 3) {
  // code block to be executed    }

 for (var index=0;index <brands.length; index++){
    const element = brands[index];
    console.log(element)
}
//  syntax:    while (condition) {
//     // code block to be executed
//   }
var count = ['red','yellow','black','blue','violet','blue']
            console.log("Starting Loop ");
         
            while (count < 'violet') {
               console.log( 'color is', count );
               count++;
            }

            // 2nd april class  
// object means collection of properties
/* in javascript every data type is an objects only */
let person = "zb";
console.log(person);
// JavaScript variables can also contain many values
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name and value separated by a colon).
//key and value
let patient = {
    firstName : "fb",
    lastName  : "bh",
    age     : 56,
    bloodgroup  : "a+"
  };
  // to access an object by using dot or square brackets
  console.log(patient);
  console.log(patient.firstName);
  console.log(patient['lastName']);
  // here patient is a object name and  firstname is key raj is value

  // to add new property to that object variable
  patient.bloodpointss="12";
  console.log(patient);


  // calling a function in object
var a=10;
var d=20;
var addition = a+d;
console.log(addition);
var c=30;
var d=40;
var res = c+d;
console.log(res);
// dry principal means don't repeat your self
  function add (a ,d) {
    var addition = a+d;
    console.log(addition);
    return addition;
}

add(60, 90);

var add1 = function( c,d){
 var res = c+d
 console.log(res);
}


add1(10, 20);

var result=add(25,35);
console.log(result);

// Call back function is an function passes in to another function as an argument
// var video= {
//     mute: false;
//    play: function( ){
//        console.log('called play method');
//    }
  
// }


var x = function(){
    console.log("x is called")
 }
 x('hii hello');
  console.log(x)
  console.log([x])
  // call  back function
      function callbackFunction(name) {
    console.log("hello" + name);
  }
  callbackFunction('zb') ;