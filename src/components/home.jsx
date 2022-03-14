import React, { Component } from 'react'
import { GlassBox, GlassCards } from './glass'
import "../style.css"
import hero from '../images/undraw_programming_re_kg9v.svg'
import edu from '../images/undraw_graduation_re_gthn.svg'
import exp from '../images/undraw_developer_activity_re_39tg.svg'
import me from '../images/me.svg'
import contact from '../images/undraw_social_friends_re_7uaa.svg'

export class Home extends Component {
    render() {
        return (
            <>
                <div className='block' id='hero'>
                    <div className='hero__text'>
                        <p className='home__header'>Hi <span>✋🏻</span>!</p>
                        <p className='block__text'>I'm <span className='focus__name'>Rafael Mejia</span>. Software developer very passionate and professional.</p>
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
                <div className="block" id='edu'>
                    <h1 className='title__block'>Education</h1>
                    <div className='block__content'>
                        <img className='block__img' src={edu} alt="graduation" />
                        <p className='block__text'>I am an eighth-semester student of <span className='focus__name'>Software Technology Engineering</span> at the Autonomous 
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
                <div className="block" id='exp'>
                    <h1 className='title__block'>Experience</h1>
                    <div className="block__content">
                        <GlassBox></GlassBox>
                        <img className='block__img' src={exp} alt="graduation" />
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
                <div className="block__proj" id='proj'>
                    <h1 className='title__block'>Projects</h1>
                    <div className="block__carucel">
                        <GlassCards></GlassCards>
                    </div>
                </div>
            </>
        )
    }
}
export class About extends Component {
    render() {
        return (
            <>
                <div className="block" id='about'>
                    <h1 className='title__block'>About me</h1>
                    <div className='block__content'>
                        <img className='block__img' src={me} alt="graduation" />
                        <p className='block__text'>My goal is for the user to feel comfortable when interacting with my projects, being intuitives and with a minimalist design. 
                        If you are interested in contacting me, you can do so through my email or my cell phone number.
                        I'm excited about what we can accomplish together! </p>
                    </div>
                </div>
            </>
        )
    }
}
export class Contact extends Component {
    render() {
        return (
            <>
                <div className="block" id='cont'>
                    <h1 className='title__block'>Contact me</h1>
                    <div className='block__content'>
                        <div className='formulario'>
                            <form action=''>
                                <label for="email">Email 
                                    <input type="email" name="email" id="email" placeholder='Enter your email...'/>
                                </label>
                                <label for="name">Name 
                                    <input type="text" name="name" id="name" placeholder='Enter your name...'/>
                                </label>
                                <label for="tel">Phone number 
                                    <input type="tel" name="tel" id="tel" placeholder='Enter your phone number...'/>
                                </label>
                                <label for="mess">Message 
                                    <textarea name="mess" id="mess" placeholder='Enter your message...'/>
                                </label>
                                <div className='btn'>
                                    <button className='btn__cv justify__end' type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <img className='block__img' src={contact} alt="contacto" />
                    </div>
                </div>
            </>
        )
    }
}