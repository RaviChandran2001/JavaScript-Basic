// //Maximum number

// function name(num1,num2) {
//     return num = num1 > num2 ? num1 : num2
// }

// val  = name(10,20)

// console.log(val);

// // Is landscape

// function isLandscape(width,height){
//     return (width > height)
// }
// console.log(isLandscape(70,50));



//FizzBuzz 

function FizzBuzz (input) {
    
    if (input%3 == 0 && input%5 == 0) {
        return "FiZZBuZZ"
    }
    if (input%3 == 0) {
        return "BUZZ"
    }
    if (input%5 == 0) {
        return "FIZZ"
    }
    if (!input%3 == 0 && !input%5 == 0) {
        return input
    }
    
    else{
        return "Not a number"
    }
}

// if (typeof input !== 'number') return "Not a number"
// if (input%3 == 0)return "BUZZ"
// if (input%5 == 0)return "FIZZ"
// if ((input%3 == 0) && (input%5 == 0))return "FiZZBuZZ"
// else return input

let val1 = FizzBuzz("er") 

console.log(val1);
