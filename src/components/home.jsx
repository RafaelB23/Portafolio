import React, { Component } from 'react'
import "../style.css"
import hero from '../images/undraw_programming_re_kg9v.svg'

export class Home extends Component {
    render() {
        return (
            <>
                <div className='hero'>
                    <div className='hero__text'>
                        <p className='home__header'>Hi <span>✋🏻</span>!</p>
                        <p className='home__presentation'>I'm <span className='focus__name'>Rafael Mejia</span>. Software developer very passionate and professional.</p>
                    </div>
                    <img src={hero} alt="hero__programing" />
                </div>
                
            </>
        )
    }
}
export class Education extends Component {
    render() {
        return (
            <>
                <h1>Education</h1>
            </>
        )
    }
}
export class Experience extends Component {
    render() {
        return (
            <>
                <h1>Experience</h1>
            </>
        )
    }
}
export class Projects extends Component {
    render() {
        return (
            <>
                <h1>Projects</h1>
            </>
        )
    }
}
export class About extends Component {
    render() {
        return (
            <>
                <h1>About me</h1>
            </>
        )
    }
}
export class Contact extends Component {
    render() {
        return (
            <>
                <h1>Contact me</h1>
            </>
        )
    }
}