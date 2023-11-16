// Let- when you can change the value of the variable
let number = 15
number = 10
console.log(number)
// Const- will not allow you to change the value
const name1 = 'Haylee'
// name1 = 'Lollipop'
//var- allows you to grab variable out of other "private" sections
var number2 = 0
number2 = 10
// DATA TYPES

// Number/Integer
let x = 2

// String - '', "", 
const name2 = 'Good morning'
// Concatanation- when the first and second string are stuck together that makes a new string
let sentence1 = 'hi'
let sentence2 = 'bye'
let sentence3 = sentence1 +' '+ sentence2
let sentence4 = `Hi I'm Haylee. ${sentence2}`
console.log(sentence4)
let o = 200
let s = `${o}`
let num = '20000'
let num2 = 20
console.log(num + num2)
const num3 = 10
console.log(num3)
// Truthy- anything with value
// Falsey- undefined; no value, null
const emptyArr = [];
console.log(emptyArr);
const nameArr = ["Haylee", "Collin", "Lucycan"];
console.log(nameArr);
const lengthofemptyArray = emptyArr.length;
console.log(lengthofemptyArray)
const lengthofnameArr = nameArr.length;
console.log(lengthofnameArr)
console.log(nameArr[1]);
const hello = `Hi my name is ${nameArr[1]}`;
console.log(hello)
nameArr.push("Cortez");
nameArr.push("Romeo")
nameArr.push("Pao")
console.log(nameArr);
console.log(nameArr.pop())
const mixArr = [1, 'Collin', 3]
console.log(mixArr)

let arr2 = [1,2,3,4,5]

arr2[arr2.length]

console.log(arr2[arr2.length -1 ])

let arr = [1,2,3,4,5]
let lastitem = arr.slice(-1)
let num5 = lastitem.slice(0)
num5 = 9
arr[arr.length -1] = 9
console.log(arr, num)

const arr1 = [5,6,2,9]
arr1[1] = 10
arr1.push(90)
arr1.pop(1)
console.log(arr1)

console.log(arr1[Math.floor(Math.random() * arr1.length)])

//let arr6 = [1,2,3,4,5]
//let sin = Math.random() * arr6.length
//console.log(arr6[Math.random])
let arr6 = [1,2,3,4,5,6]
let randomnumber = Math.floor(Math.random() * arr6.length)
console.log(Math.floor(454.34556))
// if random number = 3 then it would be the index of 4


// let len = arr.length
// arr [len-1] + 10
// console.log(arr) THIS IS JUST A SHORTER WAY TO DO IT
// useful because if we ever want a random number from the data set use this
// FLOOR rounds a number down  Math.floor
// CIEL rounds a number up Math.ciel

const me = ['Collin',2,3,4,5]
let k = 0

while (k != me.length) {
    console.log(me[k])
    k++
}
 let me2 = ["Haylee", "Lollipop", "Acelee"]
 let k2 = me2.length -1
//  for(let k2 = me2.length -1; k > 0; x--)
//  {console.log(me2[k2])} 

 let input = prompt("i play video games")
 let input2 = prompt("give me your age")
 console.log(input)
 alert("Hi my name is" + ' ' + input + ' ' +"and I am " + ' ' + input2 + "")
 
 alert("good for you")

 alert(`Hi my name is ${input} and I am ${input2}`)

 let p = prompt('Guess a number!')
 while (p != 5) {
    p = prompt("Guess a number!")
 }
 alert("Hahahaha")

 let y  = prompt("You shall try again")
 while (y != 6){
    y = prompt("You shall try again")
 }

  