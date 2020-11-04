import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const headerStyle = {
  background:"red"
  
}

const h1Styles = {
  fontSize:"100px"
}

function Header() {
  return (
    <header className="header" style={headerStyle}>
      <h1 style={h1Styles}>Welcome</h1>
    </header>
  );
}

export default Header;
