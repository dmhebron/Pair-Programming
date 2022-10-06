//create a function that accepts a number ...
//to check whether it's a prime number or not
function checkPrime(number){
    //numbers less than or equal to one cannot be prime
    //so the code will print false if a number is <=1
        if(number <= 1){
        return false;
        //create a for loop in the else statement
        //the for loop starts at 2 because <=1 will return false
        //starting at 2 we will increase the value by 1 
            } else {
        for (let i = 2; i < number; i++){
            // if the remainder is 0 then it will be false because it is divisible by
            // a number other than 1 and itself
            if (number % i == 0) {
                return false;
            }
        } return true;
    }
}
//create an array with numbers 1 through 10
const numArray = [1,2,3,4,5,6,7,8,9,10];
const primeArray = [];
//The forEach() method calls a function for each element in an array
numArray.forEach(function (element) {

    const isPrime = checkPrime(element);
    if (isPrime) {
        //checks if the number is prime if it is it will print this:
     primeArray.push(element);
    
    }
  });
console.log(primeArray);

  //for each then push to a new array
//passing a function to filter
//when using brackets I need a return statement
const numArr = numArray.filter(number => checkPrime(number));
console.log(numArr);

  //use const unless there is something you know you want to be overwritten
  //const CANNOT be redeclared 

  for (const number of numArray) {
    //code you want to execute
    const isPrime = checkPrime(number);
    if (isPrime) {
            primeArray.push(number);
  };
};
console.log(primeArray);