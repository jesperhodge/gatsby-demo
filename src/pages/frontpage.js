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

export default () => (
  <div style={containerStyle} >
    <h1 style={headerStyle} >Page</h1>
    <div style={{height: '400px', marginTop: '300px'}}>
      <p style={{ backgroundColor: color1, display: 'inline-block', width: '600px', height: '100%' }} />
      <p style={{ backgroundColor: color2, display: 'inline-block', width: '100px', height: '100%' }} />
      <p style={{ backgroundColor: color4, display: 'inline-block', width: '100px', height: '100%' }} />
      <p style={{ backgroundColor: color5, display: 'inline-block', width: '100px', height: '100%' }} />
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDLK6YsNPqIJW7_wJDqeD58huaG4_YVLEfsG48GP2_GgZDKSd" />
  </div>
)
