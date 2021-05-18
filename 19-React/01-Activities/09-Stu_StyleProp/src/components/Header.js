import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
var styles = {
  color: 'white',
  backgroundColor: 'red'
}
function Header() {
  return (
    <header style={styles} className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
