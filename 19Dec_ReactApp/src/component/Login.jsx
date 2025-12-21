import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//controlled and uncontrolled : 

export default function Login() {
    const [username,setName]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    const [error,setError]=useState(""); //error

    const handleLogin=()=>{
        //checking crediantial
        if(username==="admin" && password==="1234"){
            navigate("/");
        }
        else{
           setError("Wrong User or Password");
        }
    }
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.title}>Login</div>
        <input  style={styles.input} type="text" placeholder="Enter UserName" onChange={(e) => setName(e.target.value)} />
        <input   style={styles.input} type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <button style={styles.button} onClick={handleLogin}>Login</button>
        {error && <p style={styles.error}>{error}</p>} 
      </div>
    </div>
  );
}

//css we applied 
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },

 card: {
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  width: "450px",
  borderRadius: "12px",
  textAlign: "center",
  backgroundColor: "white",
  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  border: "1px solid #eee",
},


  title: {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  input: {
  width: "95%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  outline: "none",
  fontSize: "14px",
},


  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6c63ff",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    color: "white",
    marginTop:"10px"
  },

  error: {
    color: "red",
    marginBottom: "10px",
  },

  hint: {
    marginTop: "15px",
    fontSize: "12px",
    color: "#555",
  },
};
