// // There are three types Variables .It is an temporary memory locator
 
var nameIs = "Ravi chandran"
let ageIs = 23
const addressIs = "Madurai"

//  Primitive data/value type    Reference type

//    string                       Object
//    number                       Array
//    boolean                      function
//    undefined
//    null

let personalData = {
   name : "Ravi",
   age : 23,
   gender : "male"
}

// using Dot Notation
personalData.name = "Rajan"
console.log(personalData.name);

// using Bracket Notation
personalData['age'] = 24
console.log(personalData.age);

// nested object
let personalInfo = {
   name : "Prasanna",
   address : {
       state : 'Tamil Nadu',
       district :'Cuddalore',
       pinCode : 607303
   },
   phoneNumber: 6382083939
}

// using Dot Notation in nested object
console.log(personalInfo.name);
console.log(personalInfo.address.state);

// Array concept
let colors = ['red','green','blue']
console.log('this are colors getting with array',colors[0]);
console.log('We are defining array length here -',colors.length);

// function concept
function greet(firstName,lastName) {
   console.log('Hello '+firstName+' '+lastName);
}
greet('Prasanna')

// calculating a Value
function doubleTheValue(numberIs){
   return numberIs*numberIs
}
console.log(doubleTheValue(10));

// JavaScript Operators
// Arithmetic operator , Assignment operator , Comparison operator , Logical operator , Bitwise operator

// Arithmetic Operator :
let x = 7;
let y = 3;
  
console.log('Addition',x+y);
console.log('Subtraction',x-y);
console.log('Multiplication',x*y);
console.log('Division',x/y);
console.log('Remainder of Division',x%y);
console.log('exponentiation',x**y);

// Increment Operator
console.log("increment",x++);
console.log("increment",x);

// Decrement Operator
console.log("Decrement",x--);
console.log("Decrement",x);

// Assignment Operator
let assignValue = 20

assignValue = assignValue + 5
assignValue += 5

console.log(assignValue);

assignValue *= 2
console.log(assignValue);

// Comparision Operators
let comparNum = 7

// Relation
console.log(comparNum > 4);
console.log(comparNum >= 4);
console.log(comparNum < 4);
console.log(comparNum <= 4);
// Equality
console.log('Strict Equality Operator',comparNum === '7');   // Strict Equality Operator it will check (Type + Value)
console.log(comparNum !== 4);

console.log('Lose Equality Operator',comparNum == '7');   // Lose Equality Operator it will check (Value)


// Ternary Operator
let points = 90
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);


// Logical Operator

let highIncome = false 
let goodCreaditScore = false 
let eligibleForLone = highIncome && goodCreaditScore    // And Operator (&&)
 
console.log('Eligible',eligibleForLone);


eligibleForLone = highIncome || goodCreaditScore    // or Operator ||
 
console.log('Eligible',eligibleForLone);

// Not Operator
let applicationRefused = !eligibleForLone
console.log('Application Refused',applicationRefused);

function Operator(params) {
    
    if (params%5 === 0 && params%3 === 0) {
        console.log('The Value is Div by both 5 & 3');
    }
    else if(params%5 === 0) {
        console.log('The Value is Div by 5');
    }
    else if(params%3 === 0){
        console.log('The Value is Div by 3');
    }
}

Operator(10)

Objects


// Oop (Object Orientde Programming)

const circle = {
    radius : 1,
    location : {
        X: 2,
        y:6
    },
    isVisible :true,
    draw: function (){
        console.log(this.radius);
    }
}

circle.draw() //Method

// Factory Functions

function createCircle(radius){
    return {
        radius,
        isVisible :true,
        graw:function(){
            console.log(this.radius);
        }
    }
}

const circle1 = createCircle(15)

// Constructor Function

function createCircle1 (radius){
    this.radius = radius;
    this.draw = function(){
        console.log(this.radius);
    }
}

const circle2 = new createCircle1(1)


//Nature of Object

const circles ={
    radius : 1
}

circle.color = "red"
delete circle.color

console.log(circles);
