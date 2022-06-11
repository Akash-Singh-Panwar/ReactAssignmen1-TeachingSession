import react from "react";
import reactDOM from "react-dom";
import "../src/Style/main.css"//fine
import NavBar from "./navigation/navBar.js"
import JumboTron from "./jumbotron/jumboTron.js"
import Feature from "./feature/feature.js"
import Section from "./section/section.js"
import Footer from "./footer/footer.js"
reactDOM.render(<NavBar/>, document.getElementById("navigation"));

reactDOM.render(<JumboTron heading = "App Looks Great 🤩"/>, document.querySelector(".jumbotron"));

reactDOM.render(<Feature heading = "Discover The Amazing New App"/>, document.querySelector("#section1"));

reactDOM.render(<Section/>, document.querySelector("#section2"))

reactDOM.render(<Footer/>, document.querySelector("footer"))