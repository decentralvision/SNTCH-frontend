import * as React from "react"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"
import {Animated} from "react-animated-css";





const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1400} animationOutDuration={1400} isVisible={false}>
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="50%" top="75%" />
        <Svg icon="circle" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="circle" width={8}  color="icon_darkest" left="25%" top="5%" />
        <Svg icon="circle" hiddenMobile width={24} color="black" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="circle" hiddenMobile width={16} color="icon_darkred" left="5%" top="80%" />
        <Svg icon="circle" width={12}  color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="circle" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="circle" width={6} color="black" left="10%" top="10%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="circle" width={8}  color="icon_darkest" left="80%" top="70%" />
    </Divider>
    
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>        
      
          <AboutMDX />
        
      </Inner>
    </Content>
    
  </div>
  </Animated>
)


export default About
