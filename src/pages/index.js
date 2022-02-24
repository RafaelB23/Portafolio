import * as React from "react"
import '../style.css'
import Nav from "../components/nav"


// markup
const IndexPage = () => {
  return (
    <main>
      <Nav></Nav>
      <div className="index">
        <section id="home">
          <h1>Home</h1>
        </section>
        <section id="edu">
          <h1>Education</h1>
        </section>
        <section id="exp">
          <h1>Experience</h1>
        </section>
        <section id="projects">
          <h1>Projects</h1>
        </section>
        <section id="about">
          <h1>About me</h1>
        </section>
        <section id="contact">
          <h1>Contact me</h1>
        </section>
      </div>
    </main>
  )
}

export default IndexPage
