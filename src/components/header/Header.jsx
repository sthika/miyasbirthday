import React, {useState} from 'react'
import './header.css'


const Header = () => {
  /////////////////////////////////////   // toggle menu
    const [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
        <div className=" nav container">
            <a href='#home' className='nav__logo'>Miyeon's party!</a>
            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href='#' className='nav__link'>
                            <i class="uil uil-estate nav__icon"></i>Главная
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='#contact__card ' className='nav__link'>
                            <i class="uil uil-file-alt nav__icon"></i>Где 
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='#contact__card' className='nav__link'>
                            <i class="uil uil-message  nav__icon"></i>Анкета 
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