import React from 'react';
import {useTitle} from "../../../hooks/useTitle.ts";
import './_home.scss';

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({className}) => {
  useTitle("Home");

  return (
    <div className={className}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eius enim est ex magni minima omnis rem sed unde ut, voluptate? Cumque facere labore nam natus necessitatibus quae quaerat.</p>
    </div>
  )
}