export function navbar(){
   return `<nav style="background-color: purple; color: white; padding: 10px; border-radius: 20px;">
    <a href="index.html" style="margin: 10px;  color:white; text-decoration:none">Home</a>
        <a href="signup.html" style="margin: 10px;  color:white; text-decoration:none">Signup</a>
    <a href="login.html" style="margin: 10px;  color:white; text-decoration:none">Login</a>
        <a href="todo.html" style="margin: 10px;  color:white; text-decoration:none">Todo</a>

</nav>` 
}

export function footer(){
return `<div class="social-icons">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <div class="footer-text">
        &copy; 2025 Your Company. All rights reserved.
    </div>`   

}
export function displayTodo(todos){
    let todoContainer=document.getElementById("todo-container");
    todoContainer.innerHTML=""; 
    todos.forEach(item=>{
todoContainer.innerHTML+=`<div class="todo-item" style="border:1px solid black; margin:6px; padding:2px; border-radius:10px;">
    <p><strong>Title:</strong> ${item.title}</p>
    <p><strong>Completed:</strong> ${item.completed?"Yes":"No"}</p>
</div>`

    })

}