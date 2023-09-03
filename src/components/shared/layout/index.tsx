import React from 'react';
import Header from '../header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section className="container">{props.children}</section>
    </>
  );
};

export default Layout;
