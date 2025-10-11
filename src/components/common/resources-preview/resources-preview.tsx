import React from 'react';
import cn from "classnames";
import './_resources-preview.scss';
import {Team} from "../team/team.tsx";
import {heroTeam} from "../../../data/hero.data.ts";
import {ButtonLink} from "../button-link/button-link.tsx";
import {Icon} from "../icon/icon.tsx";

interface Props {
  className?: string;
}

export const ResourcesPreview: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('resources-preview', className)}>
      <Team
        className='resources-preview__team'
        images={heroTeam}
      />
      <div className="resources-preview__body">
        <h5 className="resources__preview-title h5">
          Изучите более 1000 ресурсов
        </h5>
        <p className="resources-preview__subtitle">
          Более 1000 статей о новых технологических тенденциях и прорывах.
        </p>
        <ButtonLink
          className='resources-preview__button'
          href={'/'}
        >
          <span>Исследовать ресурсы</span>
          <Icon type={'yellowArrow'} />
        </ButtonLink>
      </div>
    </div>
  )
}