import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
