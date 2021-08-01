import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Links from "../sections/links"
import {Animated} from "react-animated-css";




const Cara = () => (
  
  <Layout>
    <Parallax pages={7}>
      <Hero offset={0} factor={1}/>
      
      <About offset={1} factor={1} />
      
      <Projects offset={2.5} factor={1.2} />

      <Contact offset={5} factor={2} />
    </Parallax>
    
  </Layout>

)

export default Cara
