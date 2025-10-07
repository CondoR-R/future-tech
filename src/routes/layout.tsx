import * as React from 'react';
import {Outlet} from "react-router";
import {Header} from "../components/layout/header/header.tsx";


export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};