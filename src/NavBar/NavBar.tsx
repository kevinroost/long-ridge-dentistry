import {useState} from 'react'
import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <section id="header-contact">
        <a href='tel:+15403372400'>Call! (540)337-2400</a>
        <p>Follow! &nbsp;&nbsp;&nbsp; <img src="/Instagram.png" alt="ig" /> &nbsp;&nbsp;&nbsp; <img src="/Facebook.png" alt="fb" /></p>
      </section>

      <section id='header'>
        <div>
          <NavLink to='/'>
            <img src="/Logo.png" alt="logo" id='logo'/>
          </NavLink>
        </div>

        <div id='menu' onClick={toggle}>
          <NavLink to='/'>
            <p>ABOUT</p>
          </NavLink>
          <NavLink to='/services'>
            <p>SERVICES</p>
          </NavLink>
          <NavLink to='/new'>
            <p>NEW PATIENTS</p>
          </NavLink>
        </div>
        <div id='hamburger-menu' onClick={toggle}>
          {isOpen ?
            <h2>=</h2>
            :
            <div id='drop-down'>
              <h2>{`x`}</h2>
              <NavLink to='/'>
                <p>ABOUT</p>
              </NavLink>
              <NavLink to='/services'>
                <p>SERVICES</p>
              </NavLink>
              <NavLink to='/new'>
                <p>NEW PATIENTS</p>
              </NavLink>
            </div>
          }
        </div>
      </section>
    </nav>
  )


}

export default NavBar