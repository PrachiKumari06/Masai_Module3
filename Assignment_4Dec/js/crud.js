import { footer,navbar } from "./multifunction.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML=footer();

 if (document.getElementById("signup-btn")) {
    document.getElementById("signup-btn").addEventListener("click", signupform);
  }

  if (document.getElementById("login-btn")) {
    document.getElementById("login-btn").addEventListener("click", loginform);
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
    window.location.href = "todos.html";
  } else {
    alert("Invalid credentials");
  }
}
