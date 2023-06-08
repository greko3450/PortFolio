import React from "react";
import { Link } from "react-router-dom";
import navStyle from "./Nav.module.css"

class Nav extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <nav className={navStyle.navBar}>
        <ul>
          <Link to="./"><li>Home</li></Link>
          <Link to="./about"><li>About</li></Link>
          <Link to="./portfolio" ><li>Portfolio</li></Link>
          <Link to="./contact"><li>Contact</li></Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;
        