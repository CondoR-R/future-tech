import React from 'react';
import './_metrics.scss'
import cn from "classnames";
import type {MetricsT} from "../../../types/metrics.type.ts";

interface Props {
  className?: string;
  data: MetricsT[];
}

export const Metrics: React.FC<Props> = ({className, data}) => {
  return (
    <div className={cn('metrics', className)}>
      <dl className="metrics__list">
        {data.map(({key, value, sign}, i) =>
          <div
            key={i}
            className="metrics__item"
          >
            <dt className="metrics__key">{key}</dt>
            <dd className="metrics__value h3">
              {value}
              <span className="metrics__sign">{sign}</span>
            </dd>
          </div>)}
      </dl>
    </div>
  )
}