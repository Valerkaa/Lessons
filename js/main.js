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

form.addEventListener( "submit", function ( event ) {
  event.preventDefault();
  let name = document.getElementById("name").value
  let lastName = document.getElementById("lastName").value
  let email = document.getElementById("email").value
  alert(name +" " + lastName + " " + email)
} );
// Lesson 3 End
