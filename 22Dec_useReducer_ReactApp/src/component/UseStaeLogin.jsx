import React, { useState, useReducer } from "react";

const initialState = {
  loading: false,
  success: false,
  error: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        loading: true,
        success: false,
        error: ""
      };

    case "SUCCESS":
      return {
        loading: false,
        success: true,
        error: ""
      };

    case "ERROR":
      return {
        loading: false,
        success: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default function UseStateLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleLogin() {
    dispatch({ type: "LOGIN" });

    setTimeout(() => {
      if (!name || !password) {
        dispatch({
          type: "ERROR",
          payload: "Please enter name and password"
        });
      } else if (name === "admin" && password === "admin123") {
        dispatch({ type: "SUCCESS" });
      } else {
        dispatch({
          type: "ERROR",
          payload: "Invalid credentials"
        });
      }
    }, 1000);
  }

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleLogin} disabled={state.loading}>
        Login
      </button>

      {state.loading && <p>Loading...</p>}
      {state.success && <p style={{ color: "green" }}>Login Successful</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
