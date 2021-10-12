import { useState } from "react";
import "./App.css";

function Mobile() {
  const [charge, setCharge] = useState(100);
  const batteryDown = () => {
    if (charge > 0) {
      setCharge(charge - 10);
    } else {
      setCharge(0);
    }
  };
  return (
    <div className="mobile">
      <h1>Charge: {charge}%</h1>
      <button onClick={batteryDown}>battery down</button>
    </div>
  );
}

export default Mobile;
