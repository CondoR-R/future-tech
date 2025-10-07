import React from 'react';
import cn from 'classnames';
import './_button.scss';

interface Props {
  className?: string;
  content: string | React.ReactNode;
  isAccent?: boolean;

}

export const Button: React.FC<Props> = ({
                                          className,
                                          content,
                                          isAccent = false
                                        }) => {
  return (
    <button className={cn('button', isAccent && 'button--accent', className)}>
      {content}
    </button>
  )
}