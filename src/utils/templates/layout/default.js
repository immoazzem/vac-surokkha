import React from 'react';
import FontsCSS from './../../../assets/fonts/font.css';
import StyleCSS from './../../../assets/css/small-business.css';
import MainStyleCSS from './../../../assets/css/main.css';
// import BootstrapCSS from './../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import BootstrapCSS from './../../../assets/css/bootstrap.css';
// import BootstrapJS from './../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import Header from './header';
import Footer from './footer';


const Layout = (props) => {
    return (
        <>
            <link rel="stylesheet" href={FontsCSS} />
            <link rel="stylesheet" href={BootstrapCSS} />
            {/*<link rel="stylesheet" href={StyleCSS} />*/}
            <link rel="stylesheet" href={MainStyleCSS} />
            {/* <script src={BootstrapJS} type="text/javascript" /> */}

            <Header />
            
            {props.children}

            <Footer />
        
        </>
    );
} 

export default Layout;