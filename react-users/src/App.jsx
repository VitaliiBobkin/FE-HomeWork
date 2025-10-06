import React, { useState } from "react";
import ClassTimer from "./components/ClassTimer.jsx";
import FuncTimer from "./components/FuncTimer.jsx";

function App() {
  const [showClassTimer, setShowClassTimer] = useState(true);
  const [showFuncTimer, setShowFuncTimer] = useState(true);

  return (
    <div>
      <h1>Timers Demo</h1>

      <h2>Class Timer</h2>
      {showClassTimer && (
        <ClassTimer onUnmount={() => setShowClassTimer(false)} />
      )}
      {!showClassTimer && <button onClick={() => setShowClassTimer(true)}>Mount Class Timer</button>}

      <h2>Function Timer</h2>
      {showFuncTimer && (
        <FuncTimer onUnmount={() => setShowFuncTimer(false)} />
      )}
      {!showFuncTimer && <button onClick={() => setShowFuncTimer(true)}>Mount Func Timer</button>}
    </div>
  );
}

export default App;
