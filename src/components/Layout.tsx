import Nav from '../components/Nav';
import React from 'react';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
    return (
        <>
            <Nav />

            {children}
        </>
    );
};

export default Layout;
