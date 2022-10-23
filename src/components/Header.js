import React, {useState} from 'react'; 
import logo from '../assets/images/logo.svg'; 
import {Link} from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleOpenSideMenu = () => {
    setIsOpen(!isOpen); 
  }
  
  return (
    <header className='header section-padding-m'>
      <div className='container header-nav'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div
          className={`hamburger-menu ${isOpen && 'close-btn'}`}
          onClick={handleOpenSideMenu}
        >
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
        </div>

        <nav className={`nav ${isOpen && 'show-nav'}`}>
          <ul className='nav__list'>
            <li className='nav__list--link'>
              <Link>Home</Link>
            </li>
            <li className='nav__list--link'>
              <Link>New</Link>
            </li>
            <li className='nav__list--link'>
              <Link>popular</Link>
            </li>
            <li className='nav__list--link'>
              <Link>trending</Link>
            </li>
            <li className='nav__list--link'>
              <Link>categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header
