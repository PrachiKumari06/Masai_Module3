import { footer,navbar,displayTodo } from "./multifunction.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML=footer();

 if (document.getElementById("signup-btn")) {
    document.getElementById("signup-btn").addEventListener("click", signupform);
  }

  if (document.getElementById("login-btn")) {
    document.getElementById("login-btn").addEventListener("click", loginform);
  }

if (document.getElementById("todo-btn")) {
  document.getElementById("todo-btn").addEventListener("click", gettodo);
}

function signupform(){
 let user={
    name:document.getElementById("name").value,
 email:document.getElementById("email").value,
 password:document.getElementById("password").value
 }
if(!user.name || !user.email || !user.password){
    alert("All the field are required");
    return;
}
else{
       localStorage.setItem("userdetail",JSON.stringify(user))
   alert("User Signup Successfully");
   window.location.href="login.html"; 
}
}

function loginform() {
  let savedUser = JSON.parse(localStorage.getItem("userdetail"));

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!savedUser) {
    alert("No user found. Please signup first.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "todo.html";
  } else {
    alert("Invalid credentials");
  }
}
function gettodo(){
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "login.html";
}
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response=>response.json())
  .then(data=>{
    displayTodo(data);
  })
}
