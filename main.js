// course variables and function
counter = 1
theme = ""
description = ""


elementHeadId = "jsHeader"
elementHeader = `Lesson`

elementDescId = "jsDescription"

elementDescription = "let's see"


function header(lessHeaderId, LessDescriptionId, lessHeader, lessDescription){
  document.getElementById(lessHeaderId).textContent = lessHeader
  document.getElementById(LessDescriptionId).textContent = lessDescription
}

function counterUpdate(){counter++}

function setContent(th, desc){
  counterUpdate()
  theme = th
  description = desc
}

//------------------ lesson 2 -------------------
setContent("variables", "how js store the data in memory with variables")
header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`);

//numbers

//let x;
//x = 123;
//
//let y = 123;
//
//let age = 25;
//console.log(age);
//
//let price = 10.99;
//console.log(price);
//
//let gpa = 5.0;
//console.log(gpa);
//
//let firstName = "Mike";

//console.log(typeof firstName);
//console.log(`you are ${age} years old`);
//console.log(`the price is $${price}`);
//console.log(`your gpa is ${gpa}`);

//strings

//let firstName = "Mike";
//let favoriteFood = "rice and sausages";
//let email = "example123@mail.com";
//
//
//console.log(typeof firstName);
//console.log(`your name is ${firstName}`);
//console.log(`your favorite food is ${favoriteFood}`);
//console.log(`your email is ${email}`);

//boolean

//let online = true;
//let forSale = false; 
//let isStudent = true
//
//console.log(`let's just check it. Are you online? Answer: ${online}`)
//console.log(`is this car for sale? Answer: ${forSale}`)
//console.log(`is this dude are student? Answer: ${isStudent} `)


// interacting with document

//let fullName = document.getElementById("p1").textContent + "Tigran Manucharyan"
//let age = document.getElementById("p2").textContent + 23
//let student = false
//let result 

//if (student){
//  result = document.getElementById("p3").textContent + "yes"
//} else{
//  result = document.getElementById("p3").textContent + "no"
//}
//
//document.getElementById("p1").textContent = fullName
//document.getElementById("p2").textContent = age
//document.getElementById("p3").textContent = result

//------------------ lesson 3 -------------------
setContent("arithmetic operators", "how we can make js do math")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)


//let students = 31;
//
//students = students + 1
//students = students - 1
//students = students * 2
//students = students / 2
//students = students ** 3
//let extraStudent = students % 3
//
//augmented assignment operator 
//
//students += 1
//students -= 1
//students *= 2
//students /= 2
//students **2
//students %= 2
//
//students++
//students--
//
//console.log(students)


//operator precedence
/*
  1. parenthesis ()
  2. exponents 
  3. multiplication & division & modulo 
  4. addition & subtraction  
*/
//
//let result = 1 + 2 * 3 + 4 ** 2;
//
//console.log(result)


//------------------ lesson 4 -------------------
setContent("accept user value ", "how we can make js listen to what user might write for some result")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)

// 1.EASY WAY: window prompt
//let username;
//
//username = window.prompt("What is yor username?: ")
//
//console.log(username)
//document.getElementById("username").textContent = "Oh hello " + username

// 2.PROFESSIONAL WAY: HTML textBox
//
//let username;
//
//document.getElementById("mySubmit").onclick = function(){
//  username = document.getElementById("myText").value
//  console.log(username)
//  document.getElementById("username").textContent = "Oh hello " + username
//}

//------------------ lesson 5 -------------------
setContent("type convection  ", "how we can use relationship of types in js")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)


//let age = window.prompt("how old are you")
//age = Number(age)
//
//console.log(age + age)
//console.log(typeof age)
//
//let x = "shashlik";
//let y = "shashlik";
//let z = "shashlik";
//
//x = "0";
//y = "0";
//z = "0";
//
//x = "";
//y = "";
//z = "";
//
//let x;
//let y;
//let z;
//
//x = Number(x);
//y = String(y);
//z = Boolean(z);
//
//console.log(x ,typeof x);
//console.log(y ,typeof y);
//console.log(z ,typeof z);

//------------------ lesson 6 -------------------
setContent("Constants", "let's see how we can make our code more... protected from errors and incorrect values")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)

//let pi = 3.14159;
//let radius;
//let circumFerence;
//
//const PI = pi
//
//radius = window.prompt("what radius do you need: ")
//radius = Number(radius) 
//
////original math
//circumFerence = 2 * pi *  radius
//console.log(circumFerence)
//
//pi = 33;
//
////after change
//circumFerence = 2 * pi *  radius
//console.log(circumFerence)
//
////using const
//circumFerence = 2 * PI *  radius
//console.log(circumFerence)
//
////proof that constants is unchangeable 
////PI = 22;
//circumFerence = 2 * PI *  radius
//console.log(circumFerence)

//const PI = 3.14159;
//let radius;
//let circumFerence;
//
//document.getElementById("mySubmit1").onclick = function(){
//  radius = document.getElementById("myText1").value
//  radius = Number(radius)
//  
//  circumFerence = 2 * PI *  radius
//
//  console.log(`your result = ${circumFerence}`)
//  document.getElementById('radiusResult').textContent = `your result = ${circumFerence}`
//}
//

//------------------ lesson 8 -------------------
setContent("counter program", "let's finally make something")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)


// set the buttons names and name of program
document.getElementById("programName").textContent = "Counter Program";

document.getElementById("btn3").textContent = "plus";
document.getElementById("btn2").textContent = "reset";
document.getElementById("btn1").textContent = "minus";

//add counter variable  
let counterBase = 0

// add functions for each button
document.getElementById("counterNumber").textContent = counterBase

document.getElementById("btn3").onclick = function(){
  counterBase += 1
  document.getElementById("counterNumber").textContent = counterBase
}

document.getElementById("btn2").onclick = function(){
  counterBase = 0
  document.getElementById("counterNumber").textContent = counterBase
}

document.getElementById("btn1").onclick = function(){
  counterBase -= 1
  document.getElementById("counterNumber").textContent = counterBase
  
}


//------------------ lesson 9 -------------------
setContent("Math object", "let's learn about some useful instrument as Math obj. With it we can make our work more easy ")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)


//console.log(Math.PI);
//console.log(Math.E);
//
//let x = 3.47;
//let y =2;
//let z;
//
//z = Math.round(x);
//console.log(z)
//
//z = Math.floor(x);
//console.log(z);
//
//z = Math.ceil(x);
//console.log(z);
//
//z = Math.trunc(x);
//console.log(z);
//
//x = 3;
//
//z = Math.pow(x, y);
//console.log(z);
//
//x = 81;
//
//z = Math.sqrt(x);
//console.log(z);
//
//x = 10;
//
//z = Math.log(x);
//console.log(z);
//
//x = 45;
//
//z = Math.sin(x);
//console.log(z);
//
//z = Math.cos(x);
//console.log(z);
//
//z = Math.tan(x);
//console.log(z);
//
//x = -3.21;
//
//z = Math.abs(x);
//console.log(z);
//
//z = 1;
//y = 2;
//x = 3;
//
//let max = Math.max(x,y,z)
//console.log(max)
//
//let min = Math.min(x,y,z)
//console.log(min)

//------------------ lesson 7 -------------------
setContent("Math object", "let's learn about some useful instrument as Math obj. With it we can make our work more easy ")

header(`${elementHeadId}${counter}`, `${elementDescId}${counter}`, `${elementHeader} ${counter}: ${theme}`, `${elementDescription} ${description}`)
