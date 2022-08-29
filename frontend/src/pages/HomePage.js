import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
    <main className="holderHome row">
        <Navbar default="/" navBarHomeClass="active"></Navbar>
        <img src="../../img/neonHello copy.jpeg" className="neonHello"></img>
        <div className="homeBottom">
            <Footer></Footer>
        </div>
    </main>
    );
}

export default HomePage;
