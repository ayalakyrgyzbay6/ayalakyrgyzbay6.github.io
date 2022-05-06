import './Header.css';
import React from "react";
import photo from "./img/logo.png";

class Header extends React.Component {
  render() {
    return (
        <div className='Header'>
            <div className="logo"><img src={photo} alt="No"/></div>
            <p className="Header-item">repetit.kz</p>
        </div>
    )
  }
}

export default Header;

