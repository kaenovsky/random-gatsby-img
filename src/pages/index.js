import React from "react"
import Random from "../components/random"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `white` }}>
      <Header headerText="what a random pic" />
      <Random />
      <p>[ random images from <a href="https://unsplash.com" target="_blank">unsplash.com</a> ]</p>
      <Header headerText="but it's a component" />
      <h4> ¯\_(ツ)_/¯ </h4>
    </div>
  )
}