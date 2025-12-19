import React from "react";

export default function TodoCard({ userId, title, completed }) {
  return (
    <div>
      <p>UserId: {userId}</p>
      <p>Title: {title}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
      <hr />
    </div>
  );
}
