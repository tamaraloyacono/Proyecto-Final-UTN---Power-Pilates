import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/pages//NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holderNosotros">
            <Navbar default="/nosotros">
            </Navbar>
            <div className="nosotrosBody">
                <div className="historia">
                    <h2 className ="mt-5 p-5"><b>Nuestras Clases</b></h2> 
                    <p>¿Te gusta hacer ejercicio pero te cuesta mantener una rutina?</p>
                    <p>Unas de las casuas más comunes del abondono de la actividad física diaria son el aburrimiento y la falta de motivación.</p>
                    <p>Ya sea por falta de instrucción o estímulo, la mayoría de las personas que abandonan la actividad física indican que no la disfrutan.
                        Por eso, hemos llegado a Vigo con un método innovador!
                        Escuchaste hablar del Pilates y sus beneficios?
                        Sabés lo que es un Pilates Reformer?
                        No te preocupes! De eso hablamos luego.
                        Power Pilates es una actividad divertida al ritmo de la música, enfocada en diversos grupos musculares dependiendo no sólo de las necesidades de las personas, sino también de sus objetivos físicos y de salud.
                        Un ambiente con luces led, videos musicales y aire acondicionado para pasar una hora intensa pero divertida.</p>

                    <p>Con más de 10 años de experiencia ayudando a concretar objetivos personales relacionados con el cuerpo y la salud, Silvia D'Anna Pilates llega a Vigo con este nuevo método enfocado en el goce, en el entrenamiento personalizado y en la rápida mejora del estado físico.
                    </p>
                    <p>¿Todavía no nos conocés? ¿Te gustaría saber más?
                        Vente a tu primera clase totalmente gratis y llevate tu primera impresión.
                    </p>
                    {/* quiero que la parte donde dice primer clase gratis lleve a la pagina de contacto */}


                    {/* ...Desde aqui, traer unos google reviews, fotos, testimonios y una breve descripcion de la profe */}
                </div>

            </div>
            <div className="nosotrosBottom">
                <Footer></Footer>
            </div>
        </main>
    );
}

export default NosotrosPage;