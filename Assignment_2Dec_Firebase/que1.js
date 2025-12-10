function addBook(){
        let title=document.getElementById("title").value;
         let author = document.getElementById("author").value;
    let price = document.getElementById("price").value;
    let obj={title,author,price};
fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {
 method:"POST",
body:JSON.stringify(obj)
})
.then((res)=>res.json())
.then(()=>getBook());
}

function getBook(){
 fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {
 method:"GET"})
.then((res)=>res.json())
.then((data)=>renderBooks(data));   
}
function renderBooks(data) {
    let box = document.getElementById("card");
    box.innerHTML = "";

    for (let id in data) {
        let b = data[id];

        let div = document.createElement("div");
        div.className = "book";

        div.innerHTML = `
            <h3>${b.title}</h3>
            <p>Author: ${b.author}</p>
            <p>Price: Rs ${b.price}</p>
            <button onclick="updateAuthor('${id}')">Update Author</button>
            <button onclick="deleteBook('${id}')">Delete</button>
        `;

        box.appendChild(div);
    }
}

function updateAuthor(id) {
    let newAuthor = prompt("Enter new author name:");
    if (!newAuthor) return;

    fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/"+ id + ".json", {
        method: "PATCH",
        body: JSON.stringify({ author: newAuthor })
    })
    .then(() => getBook());
}

function deleteBook(id) {
    fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/" +id + ".json", {
        method: "DELETE"
    })
    .then(() => getBook());
}

getBook();