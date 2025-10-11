import React from 'react';
import cn from "classnames";
import './_advantege-card.scss';
import type {AdvantageT} from "../../../types/advantage.type.ts";

interface Props {
  className?: string;
  advantage: AdvantageT;
}

export const AdvantageCard: React.FC<Props> = ({className, advantage}) => {
  return (
    <div className={cn("advantage-card", className)}>
      <img
        className="advantage-card__image"
        width={50}
        height={50}
        src={advantage.image}
        alt={''}
        loading="lazy"
      />
      <a
        className="advantage-card__link"
        href="/"
      >
        <h3 className="advantage-card__title h6">{advantage.title}</h3>
        <p className="advantage-card__subtitle">{advantage.subtitle}</p>
      </a>
      <p className="advantage-card__details">{advantage.details}</p>
    </div>
  )
}