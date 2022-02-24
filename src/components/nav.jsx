import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <>
      <div className='nav__div'>
        <a className='logo' href='#home'>RAMB.code</a>
        <nav>
            <ul>
                <a className='nav__item' href='#edu'>Education</a>
                <a className='nav__item' href='#exp'>Experience</a>
                <a className='nav__item' href='#projects'>Projects</a>
                <a className='nav__item' href='#about'>About me</a>
                <a className='nav__item' href='#contact'>Contact me</a>
            </ul>
        </nav>
      </div>
      </>
    )
  }
}

