import React, { Component } from 'react'
import "../style.css"
import {GridSkills} from "./grid_skills.jsx"
import github from "../images/skillset/social/github.png"
import img__proj from "../images/54.png"
import projects__data from "../data/projects.json"

export class GlassBox extends Component {
  render() {
    return (
      <div>
        <div className="grid-container">
            <div>
              {/* Bloque de habilidades que manejo */}
              <GridSkills></GridSkills>
            </div>
        </div>
        <p className='block__text'>I worked on some projects where I developed a 
        complete environment following agile methodologies 
        such as the SCRUM and the waterfall methodology.</p>
      </div>
    )
  }
}

export class GlassCards extends Component {
  state={
    data:projects__data
  }
  render() {
    return (
      <div className='proj__conteiner'>
        {this.state.data.map((e, index)=>(
          <GlassCard value={e} key={index}></GlassCard>
        ))}
      </div>
    )
  }
}

export class GlassCard extends Component {

  render() {
    return (
      <div className='proj__card'>
        {/* {console.log(this.props.value)} */}
        <img className='proj__img' src={img__proj} alt="proyect"/>
        <p className='proj__name'>{this.props.value.name}</p>
        <p className='proj__desc'>{this.props.value.desc}</p>
        <div className='proj__footer'>
          <button className='proj__btn__demo'>Demo</button>
          <img className='proj__btn__git' src={github} alt="git" height="30px"/>
        </div>
      </div>
    )
  }
}