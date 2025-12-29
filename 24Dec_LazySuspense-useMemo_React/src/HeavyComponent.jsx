import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  return (
    <div>
      <h2>Heavy Component</h2>
      <p>This is a heavy UI section</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
