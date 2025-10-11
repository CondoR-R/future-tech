import React from 'react';
import {useTitle} from "../../../hooks/useTitle.ts";
import './_home.scss';
import {Hero} from "../../common/hero/hero.tsx";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({className}) => {
  useTitle("Home");

  return (
    <div className={className}>
      <Hero />
    </div>
  )
}