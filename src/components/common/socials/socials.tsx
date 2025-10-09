import React from 'react';
import './_socials.scss';
import cn from "classnames";
import {socials} from "../../../data/socials.data.ts";
import {Icon} from "../icon/icon.tsx";

interface Props {
  className?: string;
}

export const Socials: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('soc1als', className)}>
      <ul className="soc1als__list">
        {socials.map(({text, link, icon}, i) => (
          <li
            key={i}
            className="soc1als__item"
          >
            <a
              className="soc1als__link"
              href={link}
              target="_blank"
              title={text}
              aria-label={text}
            >
              <Icon type={icon} />
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
}