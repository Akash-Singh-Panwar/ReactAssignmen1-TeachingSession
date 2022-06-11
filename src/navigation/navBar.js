import Button from "../button/button.js"
const navBar = () => {
  return (
    <div id="navi">
      <div id="component1">
        <ul>
          <li style={{ color: "#28A745" }}>NavBar</li>
          <li style={{ color: "#E9ECEF" }}>Home</li>
          <li style={{ color: "#E9ECEF" }}>About Us</li>
          <li style={{ color: "#E9ECEF" }}>Products</li>
          <li style={{ color: "#E9ECEF" }}>Meeting</li>
        </ul>
      </div>

      <div id="component2">
        <input type="text" placeholder = "search"/>
        <Button name = "Search"/>
      </div>

    </div>
  );
};

export default navBar;
