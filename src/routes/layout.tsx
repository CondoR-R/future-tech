import * as React from 'react';
import {Outlet} from "react-router";
import {Header} from "../components/layout/header/header.tsx";
import {Footer} from "../components/layout/footer/footer.tsx";


export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};