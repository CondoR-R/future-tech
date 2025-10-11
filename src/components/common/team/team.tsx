import React from 'react';
import './_team.scss';
import cn from "classnames";

interface Props {
  className?: string;
  images: string[];
}

export const Team: React.FC<Props> = ({className, images}) => {
  return (
    <div className={cn('team', className)}>
      {images.map((image, index) => (
        <img
          key={index}
          className="team__person"
          width={60}
          height={60}
          src={image}
          alt={''}
          loading="lazy"
        />))}

    </div>
  )
}