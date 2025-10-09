import React from 'react';
import cn from "classnames";
import './_badge.scss'

interface Props {
  className?: string;
  children: string;
}

export const Badge: React.FC<Props> = ({className, children}) => {
  return (
    <span className={cn('badge', className)}>
      {children}
    </span>
  )
}