import React, { useReducer } from "react";

const initialState = {
  step: 1,
  name: "",
  email: "",
  username: "",
  password: "",
};

function reducer(state, action) {
  if (action.type === "CHANGE") {
    return { ...state, [action.field]: action.value };
  }

  if (action.type === "NEXT") {
    return { ...state, step: state.step + 1 };
  }

  if (action.type === "BACK") {
    return { ...state, step: state.step - 1 };
  }

  return state;
}

export default function ApplicationForm_useReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Step {state.step}</h3>

      {state.step === 1 && (
        <>
          <h3>Personal Detail</h3>
          Name:
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: "CHANGE",
                field: "name",
                value: e.target.value,
              })
            }
          />
          <br />
          Email:
          <input
            type="email"
            onChange={(e) =>
              dispatch({
                type: "CHANGE",
                field: "email",
                value: e.target.value,
              })
            }
          />
          <br />
          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </>
      )}

      {state.step === 2 && (
        <>
          <h3>Account Detail</h3>
          Username:
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: "CHANGE",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <br />
          Password:
          <input
            type="password"
            onChange={(e) =>
              dispatch({
                type: "CHANGE",
                field: "password",
                value: e.target.value,
              })
            }
          />
          <br />
          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </>
      )}

      {state.step === 3 && (
        <>
          <h3>Review</h3>
          <p>Name: {state.name}</p>
          <p>Email: {state.email}</p>
          <p>Username: {state.username}</p>

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>
        </>
      )}
    </div>
  );
}
