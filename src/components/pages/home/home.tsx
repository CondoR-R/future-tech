import React from 'react';
import {useTitle} from "../../../hooks/useTitle.ts";
import './_home.scss';
import {Hero} from "../../common/hero/hero.tsx";

export const Home: React.FC = () => {
  useTitle("Home");

  return (
    <>
      <Hero />
    </>
  )
}