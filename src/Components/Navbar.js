import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  handleClick() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  render() {
    return (
      <div className="topnav">
        <div>
          <FontAwesomeIcon
            icon={faGripLines}
            size="2x"
            color="black"
            className="griplines"
          />
        </div>
        <img className="logo" src="logo.png" alt="logo"></img>
      </div>
    );
  }
}

export default Navbar;
