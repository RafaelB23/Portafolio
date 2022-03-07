import html from "../images/skillset/html-5.png"
import css from "../images/skillset/css-3.png"
import js from "../images/skillset/js.png"
import nodejs from "../images/skillset/node-js.png"
import android from "../images/skillset/android.png"
import java from "../images/skillset/java.png"
import python from "../images/skillset/python.png"
import c from "../images/skillset/c-.png"
import figma from "../images/skillset/figma.png"
import git from "../images/skillset/git.png"
import github from "../images/skillset/social/github.png"
import reactjs from "../images/skillset/react.svg"
import React, { Component } from "react"

export class GridSkills extends Component{
    render(){
        return(
            <div className="grid-item">
                <img className='skill-icon' src={html} alt="Icono de html"/>
                <img className='skill-icon' src={css} alt="Icono de css"/>
                <img className='skill-icon' src={js} alt="Icono de js"/>
                <img className='skill-icon' src={nodejs} alt="Icono de nodejs"/>
                <img className='skill-icon' src={android} alt="Icono de android"/>
                <img className='skill-icon' src={java} alt="Icono de java"/>
                <img className='skill-icon' src={python} alt="Icono de python"/>
                <img className='skill-icon' src={c} alt="Icono de c"/>
                <img className='skill-icon' src={figma} alt="Icono de figma"/>
                <img className='skill-icon' src={git} alt="Icono de git"/>
                <img className='skill-icon' src={github} alt="Icono de github"/>
                <img className='skill-icon' src={reactjs} alt="Icono de react"/> 
            </div>
        )
    }
}