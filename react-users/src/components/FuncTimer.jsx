import React, { useState, useEffect } from "react";
import "../css/Timer.css";

function FuncTimer({ onUnmount }) {
  const savedTime = parseInt(localStorage.getItem("funcTimer")) || 0;
  const [seconds, setSeconds] = useState(savedTime);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    console.log(`Updated: ${seconds}`);
    localStorage.setItem("funcTimer", seconds.toString());
  }, [seconds]);

  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setSeconds(0);
    localStorage.removeItem("funcTimer");
  };

  return (
    <div className="timer-container">
      <h2 className={running ? "" : "stopped"}>Seconds: {seconds}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={onUnmount}>Unmount Timer</button>
    </div>
  );
}

export default FuncTimer;
