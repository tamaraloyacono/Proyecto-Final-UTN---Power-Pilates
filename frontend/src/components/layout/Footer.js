import React from 'react'
import '../../styles/components/layout/Footer.css' 
///Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/layout/Footer.css

const Footer = (props) => {
    return (
        <footer className="pie">
           <div className="columnas">
                <div className="col-7 leftFooter">
                    <ul className="datosContacto">
                        <li>Whatsapp: 600 41 17 89</li>
                        <li>Email: silviadannapowerpilates@gmail.com</li>
                        <li>Facebook: Silvia D'Anna Power Pilates</li>
                        <li>Instagram: <a href="https://www.instagram.com/silviadannapowerpilates/" target="_blank">Power Pilates Silvia D'Anna</a></li>
                    </ul>
                </div> 
                <div className="col-5 rightFooter">
                    <ul className="datosLocal">
                        <li>Lunes - Viernes</li>
                        <li>Espacio Coworking SpaceNatur</li>
                        <li>Rúa de Nicaragua 8, Vigo, Pontevedra</li>
                    </ul>
                </div>
          </div>
        </footer>
    );
}

export default Footer;