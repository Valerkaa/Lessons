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


  let firstNumber = prompt("Введите первое число",0) || 0;
  let secondNumber = prompt("Введите второе число",22) || 22;
  let bothTrue;
  firstNumber && secondNumber ? bothTrue = 80 : bothTrue = 40;

  const user = {};

  if (firstNumber >= 90){
    user.size = "big";
  }else if(firstNumber <= 40){
    user.size = "small";
}else{
    user.size = "medium";
  }
let sizeValue;
switch (user.size) {
  case "big":
    sizeValue = 1000;
    break;
  case "small":
    sizeValue = 10;
    break;
  case "medium":
    sizeValue = 100;

}
    function haveResidual() {
      console.log(`${finishNumber} бебека`)
      }
    function doNotHaveResidual() {
      if (secondNumber > 50){
        alert(secondNumber)
      }else{
        console.log("Не 50,но не плохо)")
      }
    }
  let finishNumber = firstNumber * secondNumber * sizeValue;
  finishNumber % 2 ? haveResidual() : doNotHaveResidual();


// Lesson 4 End
