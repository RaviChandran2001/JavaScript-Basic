//Maximum number

function name(num1,num2) {
    return num = num1 > num2 ? num1 : num2
}

val  = name(10,20)

console.log(val);


// Is landscape

function isLandscape(width,height){
    return (width > height)
}
console.log(isLandscape(70,50));



//FizzBuzz 

function FizzBuzz (input) {
    
    if (typeof input !== 'number') {
        return "Not a number"
    }
    if (input%3 == 0 && input%5 == 0) {
        return "FiZZBuZZ"
    }
    if (input%3 == 0) {
        return "BUZZ"
    }
    if (input%5 == 0) {
        return "FIZZ"
    }
    else {
        return input
    }
    
}


const val1 = FizzBuzz(20) 

console.log(val1);


//Check Speed 

checkSpeed(119)

function checkSpeed(speed){
    const speedLimit = 70 
    if (speed <= speedLimit) {
        return console.log("ok");
    }
    else{
        let point = Math.floor((speed - speedLimit) / 5)

        if (point == 0) {
            return console.log("ok");
        }
         if (point < 12) {
            return console.log(point);
            
         }
         else{
            console.log("Licence suspended");
         }
    }
     


}

