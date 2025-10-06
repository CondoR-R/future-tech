import React from 'react';
import {useTitle} from "../../hooks/useTitle.ts";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({className}) => {
  useTitle("Home");

  return (
    <div className={className}>
      home
    </div>
  )
}