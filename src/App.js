import React, { useState } from 'react'
function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const changeColor = (e) => {
    setButtonColor(e.target.value);
  };
  return (
    <div>
      <div>
        <p test-id="btnColor" style={{ color: buttonColor }}>{buttonColor}</p>
      </div>
      <label>Red</label>
      <input
        type="radio"
        value="red"
        onChange={changeColor}
        checked={buttonColor === "red"}
      />
      <label>Green</label>
      <input
        type="radio"
        value="green"
        checked={buttonColor === "green"}
        onChange={changeColor}
      />
    </div>
    )
}

export default App;
