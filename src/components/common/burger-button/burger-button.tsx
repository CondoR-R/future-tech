import React from 'react';
import cn from 'classnames';
import './_burger-button.scss';

interface Props {
  className?: string;
}

export const BurgerButton: React.FC<Props> = ({className}) => {
  return (
    <button
      className={cn('burger-button', className)}
      aria-label={'Открыть меню'}
      title={'Открыть меню'}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  )
}