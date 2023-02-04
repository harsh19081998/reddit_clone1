import React from 'react';
import Navbar from '../Navbar';

const Layout:React.FC<{ children?: React.ReactNode }> = ({ children = null }) => {
    return(
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}
export default Layout;