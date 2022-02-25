import React, { Component } from 'react'
import { GlassBox, GlassCard } from './glass'
import "../style.css"
import hero from '../images/undraw_programming_re_kg9v.svg'
import edu from '../images/undraw_graduation_re_gthn.svg'
export class Home extends Component {
    render() {
        return (
            <>
                <div className='hero'>
                    <div className='hero__text'>
                        <p className='home__header'>Hi <span>✋🏻</span>!</p>
                        <p className='home__presentation'>I'm <span className='focus__name'>Rafael Mejia</span>. Software developer very passionate and professional.</p>
                        <p className='home__cvtxt'>Here you can download my CV...</p>
                        <button className='btn__cv'>Resume CV</button>
                    </div>
                    <img className='block__img' src={hero} alt="hero__programing" />
                </div>
                
            </>
        )
    }
}
export class Education extends Component {
    render() {
        return (
            <>
                <div className="block">
                    <h1 className='title__block'>Education</h1>
                    <div className='block__content'>
                        <img className='block__img' src={edu} alt="graduation" />
                        <p className='edu__text'>I am an eighth-semester student of <span className='focus__name'>Software Technology Engineering</span> at the Autonomous 
                            University of Nuevo León. With self-taught knowledge of front-end and back-end for 
                            web and mobile development and with a long way to continue learning.</p>
                    </div>
                </div>
            </>
        )
    }
}
export class Experience extends Component {
    render() {
        return (
            <>
                <div className="block">
                    <h1 className='title__block'>Experience</h1>
                    <div className="block__content">
                        <GlassBox></GlassBox>
                    </div>
                </div>
            </>
        )
    }
}
export class Projects extends Component {
    render() {
        return (
            <>
                <div className="block">
                    <h1 className='title__block'>Projects</h1>
                </div>
            </>
        )
    }
}
export class About extends Component {
    render() {
        return (
            <>
                <div className="block">
                    <h1 className='title__block'>About me</h1>
                </div>
            </>
        )
    }
}
export class Contact extends Component {
    render() {
        return (
            <>
                <div className="block">
                    <h1 className='title__block'>Contact me</h1>
                </div>
            </>
        )
    }
}