import * as React from "react"
import '../style.css'
import Nav from "../components/nav"
import {Home, Education, Experience, Projects, About, Contact} from "../components/home"

//https://emojipedia.org  
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Rafael Mejia</title>
      <Nav></Nav>
      <div className="index">
        <section id="home">
          <Home></Home>
        </section>
        <section id="edu">
          <Education></Education>
        </section>
        <section id="exp">
          <Experience></Experience>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
      </div>
    </main>
  )
}

export default IndexPage
