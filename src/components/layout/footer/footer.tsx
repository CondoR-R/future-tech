import React from 'react';
import cn from "classnames";
import {Link} from "react-router-dom";
import {
  footerExtraMenuItems,
  footerNav,
  resourcesList
} from "../../../data/footer.data.ts";
import {Badge} from "../../common/badge/badge.tsx";
import {Button} from "../../common/button/button.tsx";
import {Icon} from "../../common/icon/icon.tsx";
import {Socials} from "../../common/socials/socials.tsx";
import './_footer.scss'

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({className}) => {
  return (
    <footer className={cn('footer', className)}>
      <div className="footer__inner container">
        <div className="footer__body">
          <nav className="footer__menu">
            {footerNav.map(({text, link, list}, i) => (
              <div
                key={i}
                className="footer__menu-column"
              >
                <Link
                  className="footer__menu-main-link h6"
                  to={link}
                >
                  {text}
                </Link>
                <ul className="footer__menu-list">
                  {list.map(({text, link, isNew}, i) => (<li
                    key={i}
                    className={'footer__menu-item'}
                  >
                    <a
                      className="footer__menu-link"
                      href={link}
                    >
                      {text}
                    </a>
                    {isNew && (
                      <Badge>Новое</Badge>)}
                  </li>))}
                </ul>
              </div>
            ))}
            <div
              className="footer__menu-column"
            >
              <Link
                className="footer__menu-main-link h6"
                to={'/'}
              >
                Ресурсы
              </Link>
              <ul className="footer__menu-list">
                {resourcesList.map(({text, link}, i) => (
                  <li
                    key={i}
                    className={'footer__menu-item'}
                  >
                    <Button
                      className="footer__menu-link"
                      href={link}
                    >
                      <span>{text}</span>
                      <Icon type={'yellowArrow'} />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="footer__extra">
          <div className="footer__extra-menu">
            <ul className="footer__extra-menu-list">
              {footerExtraMenuItems.map(({text, link}, i) => (
                <li
                  key={i}
                  className="footer__extra-menu-item"
                >
                  <a
                    className="footer__extra-menu-link"
                    href={link}
                  >
                    {text}
                  </a>
                </li>))}
            </ul>
          </div>
          <Socials className={'footer__soc1als'} />
          <p className="footer__copyright">
            © <time dateTime={'2025'}>2025</time> FutureTech. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}