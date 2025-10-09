import React from 'react';
import cn from "classnames";
import {Link} from "react-router-dom";
import {footerNav} from "../../../data/footer-menu.data.ts";

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
                  className="footer__menu-main-link"
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
                    {isNew && (<span className='footer__menu-new'>Новое</span>)}
                  </li>))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}