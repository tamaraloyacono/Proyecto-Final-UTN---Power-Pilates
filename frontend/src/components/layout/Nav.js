import React from 'react'

import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/layout/Nav.css';

function Navbar(props){
  
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  
  return (
    // <Nav className ="navBar"fill variant="tabs" defaultActiveKey= {props.default}>
    //   <NavItem>
    //     <NavLink href="/"><span class = "navText">Home</span></NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink eventKey="/nosotros" href="/nosotros"><span class = "navText">Nosotros</span></NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink eventKey="/novedades" href="/novedades"><span class = "navText">Novedades</span></NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink eventKey="/contacto" href="/contacto"><span class = "navText">Contacto</span></NavLink>
    //   </NavItem>
    // </Nav>

/*{ <nav className="navBar">
  <ul className="lista">
      <li><a className="items" href="/" active="true">Home</a></li>
      <li ><a className="items" href="/nosotros">Nuestras clases</a></li>
      <li ><a className="items" href="/novedades">Mantente fit</a></li>
      <li><a className="items" href="/contacto">Contacto</a></li>
  </ul>
  <div className="logoNavBar">
    <img src="../../img/LOGO PILATES.png" className="logoPilates"></img>

  </div>
  
</nav> }*/

<Nav className="navBar" defaultActiveKey={props.default}>
  <ul className="lista">
      <NavItem><NavLink activeClass href="/"><a className= "items">Home</a></NavLink></NavItem>
      <NavLink href="/nosotros"><a className= "items"   >Nuestras clases</a></NavLink>
      <NavLink href="/novedades"><a className= "items"  >Mantente fit</a></NavLink>
      <NavLink href="/contacto"><a className= "items"  >Contacto</a></NavLink>
  </ul>
  <div className="logoNavBar">
    <img src="../../img/LOGO PILATES.png" className="logoPilates"></img>
  </div>
</Nav>


  )
};


export default Navbar;
