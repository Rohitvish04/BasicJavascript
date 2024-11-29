// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function call
// let message = greet("John"); // "Hello, John"
// console.log(greet)
// console.log(message)
// Assignment #1
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
// function sum(num1,num2){
//   return num1 + num2;
// }
// console.log(sum('2',3))

// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

// function canVote(age){
//   if(age>=18){
//     console.log("You are an adult.");
//     return true;
//   }else{
//     console.log("You are a minor.");
//     return false;
//   } 
// }
// console.log(canVote(19))

// Assignment
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

// num=3
// if(num%2==0){
//   console.log(`The number is even.`)
// }else{
//   console.log(`The number is odd.`)
// }

// For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i); // Outputs 0 to 4
// }

// // While loop
// let j = 0;
// while (j < 5) {
//   console.log(j); // Outputs 0 to 4
//   j++;
// }

// Write a function called sum that finds the sum from 1 to a number

function sum(n){
  if(n<=0 || !Number.isInteger(n)){
    return "Please enter a positive integer.";
  }
  return sum(n(n+1)/2)
}

console.log(sum(3))

