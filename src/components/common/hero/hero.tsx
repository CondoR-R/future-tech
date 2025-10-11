import React from 'react';
import './_hero.scss';
import cn from "classnames";
import {Metrics} from "../metrics/metrics.tsx";
import {heroAdvantages, heroMetrics} from "../../../data/hero.data.ts";
import {ResourcesPreview} from "../resources-preview/resources-preview.tsx";
import {AdvantageCard} from "../advantage-card/advantage-card.tsx";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({className}) => {
  return (
    <section className={cn('hero', className)}>
      <div className="hero__main container">
        <div className="hero__body">
          <p className="hero__subtitle">
            Ваше путешествие в Завтра Начинается Здесь
          </p>
          <h1 className="hero__title">
            Исследуйте границы искусственного интеллекта
          </h1>
          <div className="hero__description">
            <p>
              Добро пожаловать в эпицентр инноваций в области искусственного интеллекта. FutureTech AI News — ваш пропуск в мир, где машины думают, учатся и меняют будущее. Присоединяйтесь к нам в этом захватывающем путешествии в самое сердце искусственного интеллекта.
            </p>
          </div>
        </div>
        <Metrics
          data={heroMetrics}
          className="hero__metrics"
        />
        <ResourcesPreview className="hero__resources-preview" />
      </div>
      <div className="hero__advantages">
        <h2 className="visually-hidden">Наши преимущества</h2>
        <ul className="hero__advantages-list container">
          {heroAdvantages.map((advantage, i) => (
            <li
              key={i}
              className="hero__advantages-item"
            >
              <AdvantageCard advantage={advantage} />
            </li>))}

        </ul>
      </div>
    </section>
  )
}