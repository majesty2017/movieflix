import './Navbar.css'
import {NetflixAvatar, TransparentLogo} from '../../images'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [show, handleShow] = useState(false)

  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => {
      window.removeEventListener('scroll', transitionNavbar)
    }
  }, []);
    
  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <div className="nav__contents">
        <img onClick={() => navigate('/')} src={TransparentLogo} alt="Logo" className='nav__logo' />
        <img onClick={() => navigate('/profile')} src={NetflixAvatar} alt="Logo" className='nav__avatar' />
      </div>
    </div>
  )
}

export default Navbar