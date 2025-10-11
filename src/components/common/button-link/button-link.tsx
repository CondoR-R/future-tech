import React from 'react';
import cn from 'classnames';
import './_button-link.scss';

interface Props {
  className?: string;
  children: string | React.ReactNode;
  isAccent?: boolean;
  href: string;
}

export const ButtonLink: React.FC<Props> = ({
                                              className,
                                              children,
                                              isAccent = false,
                                              href = '/'
                                            }) => {
  return (
    <a
      href={href}
      className={cn('button', isAccent && 'button--accent', className)}
    >
      {children}
    </a>
  )
}