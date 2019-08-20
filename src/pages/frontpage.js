import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const headerStyle = { color: 'white'  }
const containerStyle = {
  backgroundImage: 'url("https://i.pinimg.com/originals/5b/20/3d/5b203d3a9278f4707aaf1f4580174127.jpg")',
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'cover',
  minHeight: '100vh',
  padding: '100px'
}

const color1 = 'rgba(130, 32, 74, 1)'
const color2 = 'rgba(85, 140, 140, 1)'
const color3 = 'rgba(2, 2, 2, 1)'
const color4 = 'rgba(232, 219, 125, 1)'
const color5 = 'rgba(239, 247, 255, 1)'

const expanseStyle = (color) => ({ color: 'white', backgroundColor: color, display: 'inline-block', height: '100%', transition: 'width .8s' })

export default () => {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
  <div style={containerStyle} >
    <h1 style={headerStyle} >Page</h1>
    <div style={{height: '400px', marginTop: '300px'}}>
      <p style={expanseStyle(color1)} className={selectedTab === 1 ? 'wide' : 'narrow'} onMouseOver={() => {setSelectedTab(1)}}>Projects</p>
      <p style={expanseStyle(color2)} className={selectedTab === 2 ? 'wide' : 'narrow'} onMouseOver={() => {setSelectedTab(2)}}>Stuff</p>
          <p style={expanseStyle(color4)} className={selectedTab === 4 ? 'wide' : 'narrow'} onMouseOver={() => {setSelectedTab(4)}}>Life</p>
          <p style={expanseStyle(color5)} className={selectedTab === 5 ? 'wide' : 'narrow'} onMouseOver={() => {setSelectedTab(5)}}>Things</p>
    </div>
  </div>
)}
