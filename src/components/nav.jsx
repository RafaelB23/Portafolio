import React, { Component } from "react";
import Bars from "../images/bars.svg"

export default class Nav extends Component {
  render() {
    var setMenu = false
    
    function handleChanges(){
      var navBar = document.getElementById('nav')
      setMenu ? setMenu = false : setMenu = true
      setMenu ? navBar.style.visibility = 'visible' : navBar.style.visibility = 'hidden'

      return console.log(setMenu)         
    }
    return (
      <>
        <header className="header">
          <div className="nav-start">
            <a className="logo" href="#home">
              RAMB.code
            </a>
          </div>
          <div className="nav-center">
            <nav className="nav" id="nav">
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <a className="nav__item" href="#edu">
                    Education
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a className="nav__item" href="#exp">
                    Experience
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a className="nav__item" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a className="nav__item" href="#about">
                    About me
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a className="nav__item" href="#contact">
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-end">
            <button className="nav-btn" onClick={handleChanges}>          
              <img className="bars" src={Bars} alt="Menu" height={32}/>
            </button>
          </div>
        </header>
      </>
    );
  }
}
