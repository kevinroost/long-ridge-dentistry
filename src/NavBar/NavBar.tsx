import {useState} from 'react'
import { NavLink } from "react-router-dom"

import './NavBar.css'

interface NavBarProps {
  fb: string;
  ig: string;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const {fb, ig} = props


  

  return (
    <nav>
      <section id="header-contact">
        <a href='tel:+15403372400'>Call! (540)337-2400</a>
        <p>Follow! &nbsp;&nbsp;&nbsp; <a href={ig} target='_blank'><img src="/Instagram.png" alt="ig" /></a> &nbsp;&nbsp;&nbsp; <a href={fb} target='_blank'><img src="/Facebook.png" alt="fb" /></a></p>
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