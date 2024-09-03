//Assignment OPerators
  //let a = 5;
//let b = 2;
 // a %= 5;
  //console.log("a =", a);
  // comparision operator

  //let a = 6;
  //let b = 5;
  //console.log("a >= b", a>=b);

  //Logical Operators


  //console.log("!(a === 6)=", !(a===6));

   //Conditional statements
// to implement some condition in the code
// if statement
 

/* let mode = "dark";
 let color;

 if (mode === "dark") {
  color = "black";
 }
if (mode === "light") {
  color = "white";
}
console.log("color");*/

// if-else statement

/*let age = 15;

if (age >= 18) {
  console.log("vote");
}
else{
  console.log("not vote");
}*/

//let num = 10;

//if (num%2 === 0){
 // console.log("even");
//}
//else{
  //console.log("odd");
//}

// Else if statement

/*let mode = "silver";
let color;
 
if(mode === "dark"){
   color = "black";
}
else if (mode === "blue"){
  color ="blue";
}
 else if (mode === "pink"){
  color = "pink";
 }
 else{
  color = "white";
 }
 console.log(color);*/

// let age = 15;

 //let result = age >= 18 ? "adult" : "not adult";
 //console.log(result);
 //practice question
 //alert("Something happend to this page!");
 //let name = prompt("Hello, Please Provide Feedback!");
 //console.log(name);
 /*let num = prompt("enter a number:");

 if(num % 5 === 0){
  console.log(num, "is multiple of 5");
 }
 else{
  console.log(num, "number is Not a multipe of five");
 }*/

 // Question two
 /*
let score = prompt("Enter your marks :");

 let grade;

 if (score >= 90 && score <=100){
  grade = "A";
 }

 else if (score >=70 && score <=89){
  grade = "B";
 }

 else if (score >=60 && score <=69){
  grade = "C";
 }

 else if (score >=50 && score <=59){
  grade = "D";
 }

 else if (score >=0 && score <=49){
  grade = "F";
 }

 console.log("According to your marks, your grade is :", grade);
 */
/*
 for (let i = 1; i <= 1000; i++){
  console.log("I Love You :)")
 }
 console.log("Loop has ended!"); */

 // calculate sum of 1 to 5
/*
 let sum = 0;
 for (i = 1; i <= 5; i++){
  sum = sum + i;
 }
 console.log("sum =", sum);*/

 // while loop

 /*let i = 1;
 while (i <= 5) {
  console.log("Kushal Basnet");
  i++;
 }*/

 // Do whike loop

 /*let i = 20;
 do {
  console.log("Kushal Basnet");
  i++;
 } while( i <= 10);*/

 // For-of loop
/*
 let str = "Kushal Basnet";
 
 let size = 0;
 for (let i of str){ // iterator -> character
  console.log("i=", i);
  size++;
 }
 console.log("string size = ", size);*/

 // for-in loop
/*
 let student ={
  name: "Kushal Basnet",
  age: 19,
  gpa: 3.09,
  isPass: true,
 };

 for (let key in student) {
  console.log("key =", key, " value", student[key]);
 }
 */

 // to print even number q1
/*
 for (let i= 0; i <= 100; i++ ) {
 if (i %2 === 0){
console.log(i);
 }
 }*/

 //q2
 /*
 let gameNum = 60;
 let userValue = prompt("Enter your correct number :");

 while (userValue != gameNum) {
 userValue = prompt("You entered wrong number. Guess again!");
 }
 console.log("Congratulation, you have entered the correct number !!!");
 */


//String
/*
let str = "KushalBasnet";
let str2 = "Jiwan";
console.log(str[8]);
*/

//Template Literals In JS
/*
let obj ={
  item: "pen",
  price: 10,
};
console.log("The cost of", obj.item, "is", obj.price, "rupees");*/
/*
 let sentence = `This is a template literals`;
 console.log(typeof sentence);
 */
/*
 let output = `The cost of ${obj.item} is ${obj.price} rupees`;
 console.log(output);*/
/*
 let str = "Kushal\tBasnet";
 console.log(str.length);*/
/*
 let str = "    Kushal Basnet JS    ";
 let newStr = str.trim();
 console.log(str);
 console.log(newStr);*/
/*
 let str = "1234566";
 console.log(str.slice(2,6));*/
 
/*
 let str1 ="Kushal";
 let str2 = "Basnet";
let res = "My name is " + str1 + str2;
console.log(res);*/
/*
let str = "Hello";

console.log(str.replace("lo", "p"));*/
/*
let str = "Ilovejs";
str = str.replace("I", "s");
console.log(str);
*/
/*
let fullName = prompt("Enter your name without any space :");

let userName = "@" + fullName + fullName.length;
console.log(userName); */