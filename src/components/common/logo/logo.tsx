import React from 'react';
import {Link} from "react-router";
import cn from "classnames";
import logoImg from '../../../assets/images/logo.svg';
import './_logo.scss';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({className}) => {
  return (
    <Link
      to={`/`}
      className={cn('logo', className)}
      title={"На главную"}
      aria-label={"На главную"}
    >
      <img
        className="logo__image"
        width={179}
        height={50}
        src={logoImg}
        alt={''}
      />
    </Link>
  )
}
