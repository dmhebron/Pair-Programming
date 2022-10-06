//created an array with the following numbers
const arr = [2, 4, 7, 11, 15, 16];
//created a function that will filter numbers
// if when the remainder is 0 then the number will be 
//logged into the even list
const odds = arr.filter(number => {
  return number % 2 == 0;
});
// if the remainder is 1 then the number will be 
//logged into the even list
const evens = arr.filter(number => {
    return number % 2 == 1;
  });
console.log(odds + " " + "even numbers");
console.log(evens + " " + "odd numbers");