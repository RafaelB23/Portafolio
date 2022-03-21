import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <>
        <header className="header">
          <a className="logo" href="#home">
            RAMB.code
          </a>
          <nav className="nav">
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
          <a className="logo__ghost" href="#home">
            RAMB.code
          </a>
        </header>
      </>
    );
  }
}
