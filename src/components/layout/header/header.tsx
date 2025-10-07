import React from 'react';
import './_header.scss';
import cn from 'classnames';
import {Icon} from "../../common/icon/icon.tsx";
import {Logo} from "../../common/logo/logo.tsx";
import {NavLink} from "react-router-dom";
import {Button} from "../../common/button/button.tsx";
import {BurgerButton} from "../../common/burger-button/burger-button.tsx";
import {Link} from "react-router";

type NavMenuItemT = {
  text: string;
  link: string;
}

const navMenu: NavMenuItemT[] = [
  {
    text: 'Главная',
    link: '/'
  },
  {
    text: 'Новости',
    link: '/news'
  },
  {
    text: 'Подкасты',
    link: '/podcasts'
  },
  {
    text: 'Ресурсы',
    link: '/resources'
  }
]

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn('header', className)}>
      <div className="header__promo">
        <div className="header__promo-inner container">
          <Link
            className="header__promo-link"
            to="/"
          >
            <span>
              Подпишитесь на нашу рассылку, чтобы получать новые и последние блоги и ресурсы
            </span>
            <Icon type='yellowArrow' />
          </Link>
        </div>
      </div>
      <div className="header__body">
        <div className="header__body-inner container">
          <Logo className='header__logo' />
          <div className="header__overlay">
            <nav className="header__menu">
              <ul className="header__menu-list">
                {navMenu.map(({text, link}, i) => (
                  <li
                    key={i}
                    className="header__menu-item"
                  >
                    <NavLink
                      className="header__menu-link"
                      to={link}
                    >
                      {text}
                    </NavLink>
                  </li>))}

              </ul>
            </nav>
            <Button
              content={'Связаться с нами'}
              isAccent
            /></div>
          <BurgerButton className={'header__burger-button visible-mobile'} />
        </div>
      </div>
    </header>
  )
}