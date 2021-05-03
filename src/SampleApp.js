import React, { useState } from "react";
const SampleApp = () => {
  //   build a simple page with two radio buttons:
  //one red, the other green.  create a div containing some text.
  //build functionality that the colour of the text is determined by
  //the user choice of the button
  // then build a unit test that makes sure this functionality works
  // the page should be built in ReactJ

  const [buttonColor, setButtonColor] = useState("red");
  const changeColor = (e) => {
    setButtonColor(e.target.value);
  };
  return (
    <div>
      <div>
        <p style={{ color: buttonColor }}>{buttonColor}</p>
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
  );
};

export default SampleApp;
