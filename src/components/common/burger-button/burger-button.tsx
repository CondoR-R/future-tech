import React from 'react';
import cn from 'classnames';
import './_burger-button.scss';

interface Props {
  className?: string;
  onClick: () => void;
  isActive: boolean;
}

export const BurgerButton: React.FC<Props> = ({
                                                className,
                                                onClick,
                                                isActive
                                              }) => {
  return (
    <button
      className={cn('burger-button', isActive && 'is-active', className)}
      aria-label={'Открыть меню'}
      title={'Открыть меню'}
      onClick={onClick}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  )
}