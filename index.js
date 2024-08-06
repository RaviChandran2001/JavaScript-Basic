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
personalData.name = "Ravi"
console.log(personalData.name);

// using Bracket Notation
personalData['age'] = 24
console.log(personalData.age);

// nested object
let personalInfo = {
   name : "Ravi",
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
greet('Ravi')

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

// Objects


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
            console.log('draw');
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

// Nature of Object

const circles ={
    radius : 1
}

circle.color = "red"
delete circle.color

console.log(circles);

// Create string using new
let strs =  new String('hello')

let obj = new Object({name:"ravi"})
console.log(typeof strs);


Value Type            Reference Type  

Number                 Object
String                 function
Boolean                Array
Symbol
undifined
null

Primitive are copied by their value
Objects are copied by their reference


// Object Enumurate

const newcir = {
    radius:1,
    draw(){
        console.log('draw');
    }
};

for (let circle in newcir)
    console.log(circle ,":",newcir[circle]  );

//convert key to array
for (let key of Object.keys(newcir)) {
    console.log(key , ":", newcir[key]);
}
//convert property to array
for (let entry of Object.entries(newcir))
    console.log(entry)

//Cloning an Object
const anothor = {}
for (let key in circle)
    anothor[key] = circle[key];

//--
const anothor1 = Object.assign({},circle)
//--
const anothor2 = {...circle}

// String method

// String Primitive
const message = "this is my first message"

//String Object 
const another = new String('hi')

console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));     //return boolean 
console.log(message.startsWith("this")); //return boolean 
console.log(message.endsWith('e'));      //return boolean
console.log(message.indexOf('my'));
console.log(message.replace('first,second'));
console.log(message.toUpperCase);
console.log(message.split(''));

// Array 

//Adding Element ------
const number = [3,4]

//End

number.push(5,6);

//beginning

number.unshift(1,2)

//middle

number.splice(2,0,'a','b')

// Finding Element ------ primitive

const num = [1,2,3,1,5,6]

console.log(num.indexOf(2));  // If false return -1
console.log(num.lastIndexOf(1));  
console.log(num.includes(1));


// Finding Element ------ Reference type

const courses = [
    {id:1,name:'a'},
    {id:2,name:'b'}
];

const course = courses.find( (course) => course.name === 'xyz')

console.log(course);    //if not match return -1

// Removing Elements

const numb = [1,2,3,4,5]

//End
const last = numb.pop();

//Beginning
const first = number.shift();

//MIddle
number.splice(2,2)

// Emptying Array

let numbers = [1,2,3,4,5]
let anothers = numbers

//sol - 1
numbers = []

//sol - 2
number.length = 0

//sol - 3
number.splice(0,numbers.length)


//Combining ------

const first1 = [{id:1}]
const second = [4,5,6]

const combined = first1.concat(second)
first[0].id = 10;

const slice = combined.slice();

console.log(combined)
console.log(slice);

const combin = [...first1,'a',...second,'b']

// iterating -----

const nums = [ 1,2,3 ]

for (let num of nums) console.log(num);

number.forEach(number,id => console.log(number)
)

//Joining Array -------

const number = [1,2,3];
const joined = number.join(',');
console.log(joined);

const messages = 'this is my first message'
const parts = message.split(' ');
console.log(parts);

const combineds = parts.join('-')
console.log(combined);


//Sorting Array

const letter = [2,3,1]
number.sort()
console.log(letter);

number.reverse();
console.log();

const coursee = [
    {id:1,name: "Node.js"},
    {id:2,name: "JavaScript"}
]


// Map and filter
const oneNumber = [1,-1,2,3,4]

const filtered = oneNumber.filter(n => n >=0)

const items = filtered.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);


// -------- Finctions ------------

// Function Declaration
function walk(){
    console.log('walk');
}

walk()

// function expression
let run = function(){
    console.log("run");
};

run()

function intrest(principal,rate = 3.5 ,years){
    // console.log(rate);
    
    return principal * rate / 100 * years
}

console.log(intrest(10000,undefined,5));

const out1 = fizzBuzz(15)
console.log(out1)
function fizzBuzz(input){
  if(input%3 == 0){
    console.log("fizz")
  } if(input%5 == 0){
     console.log("Buzz")
  }  if(input%3==0 && input%5==0){
    console.log("FizzBuzz")
  }else{
    console.log(input)
  }
}