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
// let numbers = document.getElementById("numbers")
form.addEventListener( "submit", function ( event ) {
  event.preventDefault();
  let name = document.getElementById("name").value
  let lastName = document.getElementById("lastName").value
  let age = Number(document.getElementById("age").value);
  let town = document.getElementById("town").value
  function makeUser(name,lastName, age ,town) {
    return {
      name,
      lastName,
      town,
      age
    };
  }
  let user = makeUser( name, lastName, age, town);
  let agree = confirm("Разрешаете показывать ваши данные?")
  function showUser() {
    alert(`Имя:${user.name} Фамилия:${user.lastName}  Возраст:${user.age}  Городо:${user.town}`)
  }
  function hideUser() {
    alert("Пользователь не дал доступа");
  }

  agree ? showUser() : hideUser()

} );

// let idk = prompt('Введи цифру', "123456");;
// let probel = [].map.call(idk, function(x) {
//   return x;
// }).join(' ');
// numbers.value = probel
// Lesson 3 End
