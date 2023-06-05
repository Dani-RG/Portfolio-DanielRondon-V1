import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'

export default function Navbar() {

  const [mobile, setMobile] = useState(false)

  return (
    <nav className='navbar'>
      <p className='nav_logo'>logo</p>
      <ul className={mobile ? 'nav_links_mobile' : 'nav_links'} onClick={() => setMobile(false)}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/skills'>Skills</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <button className='menu_burger_icon' onClick={() => setMobile(!mobile)}>
      {mobile ? <RxCross2 /> : <FiMenu />}
      </button>

    </nav>
  )
}
