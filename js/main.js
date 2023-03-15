// // Lesson 2
//
//
// let question = prompt('What\'s your name?', "Name");
//
// alert(`Hello, ${question} How are you? `);
//
//
//
//
// // Lesson 2 End


// Lesson 3

// const form = document.getElementById( "myForm" );
// // let numbers = document.getElementById("numbers")
// form.addEventListener( "submit", function ( event ) {
//   event.preventDefault();
//   let name = document.getElementById("name").value
//   let lastName = document.getElementById("lastName").value
//   let age = Number(document.getElementById("age").value);
//   let town = document.getElementById("town").value
//   function makeUser(name,lastName, age ,town) {
//     return {
//       name,
//       lastName,
//       town,
//       age
//     };
//   }
//   let user = makeUser( name, lastName, age, town);
//   let agree = confirm("Разрешаете показывать ваши данные?")
//   function showUser() {
//     alert(`Имя:${user.name} Фамилия:${user.lastName}  Возраст:${user.age}  Городо:${user.town}`)
//   }
//   function hideUser() {
//     alert("Пользователь не дал доступа");
//   }
//
//   agree ? showUser() : hideUser()
//
// } );

// let idk = prompt('Введи цифру', "123456");;
// let probel = [].map.call(idk, function(x) {
//   return x;
// }).join(' ');
// numbers.value = probel
// Lesson 3 End




// Lesson 4


//   let firstNumber = prompt("Введите первое число",0) || 0;
//   let secondNumber = prompt("Введите второе число",22) || 22;
//   let bothTrue;
//   firstNumber && secondNumber ? bothTrue = 80 : bothTrue = 40;
//
//   const user = {};
//
//   if (firstNumber >= 90){
//     user.size = "big";
//   }else if(firstNumber <= 40){
//     user.size = "small";
// }else{
//     user.size = "medium";
//   }
// let sizeValue;
// switch (user.size) {
//   case "big":
//     sizeValue = 1000;
//     break;
//   case "small":
//     sizeValue = 10;
//     break;
//   case "medium":
//     sizeValue = 100;
//
// }
//     function haveResidual() {
//       console.log(`${finishNumber} бебека`)
//       }
//     function doNotHaveResidual() {
//       if (secondNumber > 50){
//         alert(secondNumber)
//       }else{
//         console.log("Не 50,но не плохо)")
//       }
//     }
//   let finishNumber = firstNumber * secondNumber * sizeValue;
//   finishNumber % 2 ? haveResidual() : doNotHaveResidual();


// Lesson 4 End



// Lesson 5
// let str = ``
// for (let i = 10; i <= 20; i++) {
//   str += i + (i < 20 ? "," : '');
// }
// console.log(str)
//


let arr = [];
for (let i = 10 ; i <= 20 ; i++){
  arr.push(i)
}
let result = arr.join()
console.log(`Numbers from "10" to "20" : ${result}`)


let arrSqrt = [];
for (let x = 10 ; x <= 20 ; x++){
  arrSqrt.push(Math.pow(x,2))
}
let resultSqrt = arrSqrt.join()
console.log(`resultSqrt : ${resultSqrt}`)


let ProductInt = 1;
for(let y = 15; y <= 35; y++) {
  ProductInt *= y;
};
console.log(`ProductInt: ${ProductInt}`);

// let avg = (1 + 500) / 2;
// console.log(avg)
//

let avg = 0;
for (let z = 1; z <= 500; z++ ) {
  avg += z;
}
avg /= 500;
console.log(`avg: ${avg}`)

let sum = 0;
for (let u = 30; u <= 80 ; u += 2 ){
  sum += u;
}
console.log(`Sum pair number: ${sum}`)



let multThree = []
for(let q = 100; q <= 300; q++) {
  if(q % 3 === 0)
    multThree.push(q)
}
let resultMultThree = multThree.join()
console.log(`resultMultThree : ${resultMultThree}`)







let someNum= +prompt("Введите число для анализа");
let checkNumber = false;
if (someNum > 1) {
  for (let w = 2; w <= someNum; w++) {
    if ((someNum % w) === 0) {
      console.log(someNum % w)
      checkNumber = true
    }
  }
  ;
}
let resultCheck = checkNumber ? `Число ${someNum} целое` : `Число ${someNum} не целое`
console.log(resultCheck)





// Lesson 5 End
