import './Navbar.css'
import {NetflixAvatar, TransparentLogo} from '../../images'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [show, handleShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', transitionNavbar)
      return () => {
        window.removeEventListener('scroll', transitionNavbar)
      }
    }, [])
    
  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
        <div className="nav__contents">
            <img src={TransparentLogo} alt="Logo" className='nav__logo' />
            <img src={NetflixAvatar} alt="Logo" className='nav__avatar' />
        </div>
    </div>
  )
}

export default Navbar