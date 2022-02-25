import React, { Component } from 'react'
import "../style.css"
import html from "../images/skillset/html-5.png"


export class GlassBox extends Component {
  render() {
    return (
      <div>
        <p>Glass Box</p>
        <div className="grid-container">
            <div className="grid-item row1">
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                
            </div>
            <div className="grid-item row2">            
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
            </div>
            <div className="grid-item row3">
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
                <img className='skill-icon' src={html} alt="Icono de "/>
            </div>
        </div>
      </div>
    )
  }
}

export class GlassCard extends Component {
    render() {
      return (
        <div>
          <p>Glass Card</p>
        </div>
      )
    }
  }
