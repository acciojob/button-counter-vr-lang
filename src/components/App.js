import React, { useState } from "react";

function App() {
  // Initialize counter state to 0
  const [count, setCount] = useState(0);

  // Increment counter state
  const App = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times.</p>
      <button onClick={App}>Click Me</button>
    </div>
  );
}


export default App;
