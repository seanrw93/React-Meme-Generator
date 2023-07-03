import React from 'react'
import Logo from '../assets/trollface.svg'

const Header = () => {
  return (
    <header>
        <div className='title-app'>
            <img src={Logo} alt="Troll face" />
            <h2>Meme Generator</h2>
        </div>
        <div className='title-course'>
            React Practice Project
        </div>
    </header>
  )
}

export default Header
