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
// // let nums = document.getElementById("nums")
// form.addEventListener( "submit", function ( event ) {
//   event.preventDefault();
//   let name = document.getElementById("name").value
//   let lastName = document.getElementById("lastName").value
//   let age = num(document.getElementById("age").value);
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
// nums.value = probel
// Lesson 3 End




// Lesson 4


//   let firstnum = prompt("Введите первое число",0) || 0;
//   let secondnum = prompt("Введите второе число",22) || 22;
//   let bothTrue;
//   firstnum && secondnum ? bothTrue = 80 : bothTrue = 40;
//
//   const user = {};
//
//   if (firstnum >= 90){
//     user.size = "big";
//   }else if(firstnum <= 40){
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
//       console.log(`${finishnum} бебека`)
//       }
//     function doNotHaveResidual() {
//       if (secondnum > 50){
//         alert(secondnum)
//       }else{
//         console.log("Не 50,но не плохо)")
//       }
//     }
//   let finishnum = firstnum * secondnum * sizeValue;
//   finishnum % 2 ? haveResidual() : doNotHaveResidual();


// Lesson 4 End



// Lesson 5
// let str = ``
// for (let i = 10; i <= 20; i++) {
//   str += i + (i < 20 ? "," : '');
// }
// console.log(str)
//

//
// let arr = [];
// for (let i = 10 ; i <= 20 ; i++){
//   arr.push(i)
// }
// let result = arr.join()
// console.log(`nums from "10" to "20" : ${result}`)
//
//
// let arrSqrt = [];
// for (let x = 10 ; x <= 20 ; x++){
//   arrSqrt.push(Math.pow(x,2))
// }
// let resultSqrt = arrSqrt.join()
// console.log(`resultSqrt : ${resultSqrt}`)
//
//
// let ProductInt = 1;
// for(let y = 15; y <= 35; y++) {
//   ProductInt *= y;
// };
// console.log(`ProductInt: ${ProductInt}`);
//
// // let avg = (1 + 500) / 2;
// // console.log(avg)
// //
//
// let avg = 0;
// for (let z = 1; z <= 500; z++ ) {
//   avg += z;
// }
// avg /= 500;
// console.log(`avg: ${avg}`)
//
// let sum = 0;
// for (let u = 30; u <= 80 ; u += 2 ){
//   sum += u;
// }
// console.log(`Sum pair num: ${sum}`)
//
//
//
// let multThree = []
// for(let q = 100; q <= 300; q++) {
//   if(q % 3 === 0)
//     multThree.push(q)
// }
// let resultMultThree = multThree.join()
// console.log(`resultMultThree : ${resultMultThree}`)
//
//
//
//


//
// let someNum= +prompt("Введите число для анализа");
// let checknum = false;
// if (someNum > 1) {
//   for (let w = 2; w <= someNum; w++) {
//     if ((someNum % w) === 0) {
//       console.log(someNum % w)
//       checknum = true
//     }
//   }
//   ;
// }
// let resultCheck = checknum ? `Число ${someNum} целое` : `Число ${someNum} не целое`
// console.log(resultCheck)
//




// Lesson 5 End



//Lesson 6

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let countPositivNum = 0;
arr.forEach(function(num) {
  if( num > 0 ) {
    countPositivNum++;
    sum += num;
  };
});
console.log(` Сумма положительных чисел = ${sum} -> Количество положительных чисел ${countPositivNum}`);


let minNum = arr [0];
arr.forEach(function(num){
  if(num < minNum){
    minNum = num;
  }
});
console.log(`Позиция минимального числа :${arr.indexOf(minNum)}, Минимальное число ${minNum}`);


let maxNum = arr [0];
arr.forEach(function(num){
  if(num > maxNum){
    maxNum = num;
  }
});
console.log(`Позиция максимального числа :${arr.indexOf(maxNum)}, Максимальное число ${maxNum}`);



let countNegativeNum = 0;
arr.forEach(function(num){
  if( num < 0 ){
    countNegativeNum += 1
  }
});
console.log(`Количество отрицательных чисел:${countNegativeNum}`);



let nonPairedPositiveNum = 0;
let sumNonPairedPositiveNum = 0;
arr.forEach(function(num){
  nonPairedPositiveNum > 0
  if( num % 3 === 0 ){
    nonPairedPositiveNum += 1
    sumNonPairedPositiveNum += num
  }
});
console.log(`Количество положительных не парных чисел:${nonPairedPositiveNum},сумма чисел:${sumNonPairedPositiveNum} `);


let pairedPositiveNum = 0;
let sumPairedPositiveNum = 0;
arr.forEach(function(num){
  pairedPositiveNum > 0
  if( num % 2 === 0 ){
    pairedPositiveNum   += 1
    sumPairedPositiveNum += num;
  }
});
console.log(`Количество парных положительных чисел:${pairedPositiveNum},сумма этих чисел :${sumPairedPositiveNum} `);


let productOfNum = 1;
arr.forEach(function(num) {
  if( num > 0 ) {
    productOfNum *= num
  }
})
console.log(`Произведение положительных чисел:${productOfNum}`);

let newArr = arr.map(function(num) {
  if( num !== maxNum ) {
   return num = 0
  }else{
    return num =  maxNum
  }
})
console.log(`Все кроме максимального будут нули: ${newArr}`)
//Lesson 6 end
