import React, {useState} from 'react'
import './header.css'


const Header = () => {
  /////////////////////////////////////   // toggle menu
    const [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
        <div className=" nav container">
            <a href='/' className='nav__logo'>Portfolio</a>
            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href='#' className='nav__link'>
                            <i class="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='#skills ' className='nav__link'>
                            <i class="uil uil-file-alt nav__icon"></i>Skills 
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='#qualification' className='nav__link'>
                            <i class="uil uil-scenery nav__icon"></i>Qualification 
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='#contact' className='nav__link'>
                            <i class="uil uil-message  nav__icon"></i>Contact 
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </div>
    </header>
  )
}

export default Header