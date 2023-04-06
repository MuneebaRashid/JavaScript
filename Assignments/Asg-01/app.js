//question-1 
//Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.
let value1 = prompt("Enter the first number:"); // Prompt for two numbers
let value2 = prompt("Enter the second number:");
//Compare the numbers and display answer in the console
if (value1 > value2) {
    console.log(value1 + " is larger than " + value2);
} else if (value2 > value1) {
    console.log(value2 + " is larger than " + value1);
} else {
    console.log("Both numbers are equal");
}
// the above code will work only for integers
// for decimal values, we need to parse float, example: 
let num1 = prompt("Enter the first number:"); // Prompt for two numbers
let num2 = prompt("Enter the second number:");
num1 = parseFloat(num1); // Convert the input to numbers
num2 = parseFloat(num2);
if (num1 > num2) { // Compare the numbers and display answer in the console
    console.log("The larger number is " + num1);
} else if (num2 > num1) {
    console.log("The larger number is " + num2);
} else {
    console.log("The two numbers are equal.");
}
g
/********************************************************************/
// // question2
// //Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the 
//specified sign (Sample:3 ; Output:The sign is +) (Sample:-5 ; Output:The sign is -)
// let num = prompt("Enter a number:"); // Prompt user for a number
// num = parseFloat(num); // Convert the input to a number
// // Check the sign of the number 
// if (num > 0) {
//     alert("The sign is +");
// } else if (num < 0) {
//     alert("The sign is -");
// } else {
//     alert("The value is zero");
// }

/********************************************************************/
// //question 3
// //Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console
// // Prompt user for five numbers
// let num1 = prompt("Enter 1st value:");
// let num2 = prompt("Enter 2nd value:");
// let num3 = prompt("Enter 3rd value:");
// let num4 = prompt("Enter 4th value:");
// let num5 = prompt("Enter 5th value:");
// //Converting to numbers
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// num3 = parseFloat(num3);
// num4 = parseFloat(num4);
// num5 = parseFloat(num5);
// //Finding largest value
// let largest = num1;
// if (num2 > largest) {
//     largest = num2;
// }
// if (num3 > largest) {
//     largest = num3;
// }
// if (num4 > largest) {
//     largest = num4;
// }
// if (num5 > largest) {
//     largest = num5;
// }
// //Display largest value
// console.log("The largest value is" + largest);

/********************************************************************/
// //question 4
// //Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//it will check if the current number is odd or even, and display a message to the screen
// for (let i = 0; i <= 15; i++) {
//   // Check if the current number is odd or even
//   if (i % 2 === 0) {
//     console.log(i + " is even.");
//   }
//   else {
//     console.log(i + " is odd.");
//   }
// }

/********************************************************************/
// //question 5
// //Write a JavaScript program which computes the average marks of the following students 
//Then, this average is used to determine the corresponding grade.
// // Prompt user for five numbers
// let num1 = prompt("Enter marks for Sub1:");
// let num2 = prompt("Enter marks for Sub2:");
// let num3 = prompt("Enter marks for Sub3:");
// let num4 = prompt("Enter marks for Sub4:");
// let num5 = prompt("Enter marks for Sub5:");
// //sum of total amrks
// let sum =
//   parseFloat(num1) +
//   parseFloat(num2) +
//   parseFloat(num3) +
//   parseFloat(num4) +
//   parseFloat(num5);
// //calculating percentage
// let percentage = (sum / 500) * 100;
// //finding grade with percemtage
// if (percentage >= 100) {
//   grade = "A";
// } else if (percentage >= 90) {
//   grade = "B";
// } else if (percentage >= 80) {
//   grade = "C";
// } else if (percentage >= 70) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// console.log("Your Grade is: " + grade);

/********************************************************************/
// //question 6
// //Write a JavaScript program which iterates the integers from 1 to 100. 
// //But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// //For numbers which are multiples of both three and five print "FizzBuzz".
// // Loop from 1 to 100
// for (let n = 1; n <= 100; n++) {
//   // Check if the current number is a multiple of 3 and/or 5
//   let output = "";
//   if (n % 3 === 0) {
//     output += "Fizz";
//   }
//   if (n % 5 === 0) {
//     output += "Buzz";
//   }
//   // If the current number is the multiple of 3 and 5 both, it will print FizzBuzz itself from above if statements.
//   // If the current number is not a multiple of 3 or 5, use the number itself
//   if (output === "") {
//     output = n;
//   }
//   // Display the output
//   console.log(output);
// }

/********************************************************************/
// //question 7
// //Write a Write a JavaScript program to construct the following pattern, using a nested for loop.
// //*
// //* *
// //* * *
// //* * * *
// //* * * * *
// //Display Rows
// for (let m = 1; m <= 5; m++) {
//   let star = "";
//   //Display Columns
//   for (let n = 1; n <= m; n++) {
//     star += "* ";
//   }
//   // Display Output
//   console.log(star);
// }
