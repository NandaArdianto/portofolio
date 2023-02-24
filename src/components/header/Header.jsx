import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm </h5>
        <h1>Nanda Ardianto</h1>
        <h5 className="text-alight">Full Stack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header