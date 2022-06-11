/*
    heading
    label
    buttons x 2
*/
import Button from "../button/button.js";
const feature = (props) => {
  return (
    <div id="feature">
      <h1>{props.heading}</h1>
      <label>
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?</b>
      </label>
      <div id = "inner">
        <Button name="Play Store" />
        <Button name="App Store" />
      </div>
    </div>
  );
};

export default feature;
