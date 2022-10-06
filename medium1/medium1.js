//create a function that takes a single argument 
//and logs if it is a vowel

//created a function that is called vowelChecker
function vowelChecker(x){
    //if the parameter x matches aeiou then log you entered a vowel
    //g tells the function to continue looking for matches
    //i tells the function to match regardless of case
    if  (x.match(/[AEIOU]/gi)){
        console.log("You entered a vowel");
    } else {
        console.log("You did not enter a vowel");
    }
}
vowelChecker("u");
vowelChecker("d");
vowelChecker("z");
vowelChecker("i");
vowelChecker("o");
vowelChecker("l");

