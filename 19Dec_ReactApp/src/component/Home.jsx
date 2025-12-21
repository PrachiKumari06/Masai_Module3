import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        navigate("/login")
    }
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Wlcome to Home Page</h2>
        <button style={styles.button} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },

  card: {
    padding: "10px",
    display:"flex",
    width: "400px",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "white",
  },

  title: {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid black",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6c63ff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    marginTop:"20px"
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