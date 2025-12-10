function CreateData(){
 fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {
    method: "POST",
    body: JSON.stringify({
      name: "Sakshi",
      rollno: 2
    })
  })  //firebase yaha hum.json add krenege 
.then((res)=>res.json())
.then((data)=>console.log("Data is added",data))
}

function GetData(){
fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {
    method: "GET",
})
.then((res)=>res.json())
.then((data)=>console.log("Get the data",data))
}

function UpdateData(){
fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/-OfUSzv6hZYNAE1AaPkw.json", {  //yaha .json hata krke jo change krna h uska unquie no jo firebase me genrate hua h usko copy krdena h then .json lagana h :-OfUSzv6hZYNAE1AaPkw yaha change krna h name and rollno  
    method: "PUT",
    body: JSON.stringify({
      name: "Shreya", //in place of roll no 2: GET UNIQUE NO we update the name of student
      rollno:2
    })
})
.then((res)=>res.json())
.then((data)=>console.log("Updated the data",data))
}

function DeleteData(){
fetch("https://masai-studentdata-default-rtdb.asia-southeast1.firebasedatabase.app/-OfUSzv6hZYNAE1AaPkw.json", {  //yaha .json hata krke jo change krna h uska unquie no jo firebase me genrate hua h usko copy krdena h then .json lagana h :-OfUSzv6hZYNAE1AaPkw yaha change krna h name and rollno  
    method: "DELETE"
})
.then((res)=>res.json())
.then((data)=>console.log("Delete the data",data))
}

// in update and delete we need that unique key generate by the firebase for prticular object in fetch so that only that will delete 