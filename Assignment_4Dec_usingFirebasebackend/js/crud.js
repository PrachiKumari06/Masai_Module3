import { navbar,url } from "./metadata.js";
document.getElementById("navbar").innerHTML = navbar();  //to call navbar 

const nameInput=document.getElementById("name"); //contact.html wale se liya h humne
const addBtn=document.getElementById("addbtn");
const list=document.getElementById("list");

//creation
addBtn.onclick=function(){
    const n=nameInput.value;
    fetch(url,{
        method:"POST",
        body:JSON.stringify({n})
    })
    .then(()=>{
        nameInput.value="";
    loadData();
});
}
function loadData(){
 fetch(url) 
 .then((res)=>res.json())
 .then(data=>{
    list.innerHTML="";
    for(let key in data){
        list.innerHTML+= `<li>${data[key].n}</li>`;
    }
 });
}
loadData();