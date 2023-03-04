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

const form = document.getElementById( "myForm" );
let numbers = document.getElementById("numbers")
form.addEventListener( "submit", function ( event ) {
  event.preventDefault();
  let name = document.getElementById("name").value
  let lastName = document.getElementById("lastName").value
  let email = document.getElementById("email").value
  alert(`Имя:${name} Фамилия:${lastName} Почта:${email}`)
} );

let idk = prompt('Введи цифру', "123456");;
let probel = [].map.call(idk, function(x) {
  return x;
}).join(' ');
numbers.value = probel
// Lesson 3 End
