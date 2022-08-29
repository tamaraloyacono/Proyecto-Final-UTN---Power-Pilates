import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/layout/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            // const response = await axios.get('${process.env.REACT_APP_API_URL}/api.novedades');
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            // setLoading(false);
            // console.log(novedades)
        };
        cargarNovedades();
    })
    return (
        <section className="holderNovedades">
            <div className="novedadesNav">
                <Navbar default="/novedades">
                </Navbar>
            </div>
            <div className="mt-5">
                {/* {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
                )
                } */}

                <div id = "container" className="container">
                    <div className="row p-5">
                        {novedades.map((item) => 
                            // <div className="col-6">
                                <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />
                            // </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="novedadesBottom">
                <Footer></Footer>
            </div>
        </section>
    )
};

export default NovedadesPage;