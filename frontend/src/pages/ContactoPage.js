import React from 'react';
import Navbar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
                const initialForm = {
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: ''
                } // preferencia horaria????///
        const [sending, setSending] = useState(false);
        const [msg, setMsg] = useState('');
        const [formData, setFormData] = useState(initialForm);

        const handleChange = e => {
            const { name, value } = e.target;
            setFormData(oldData => ({
                ...oldData,
                [name]: value
            }));
            console.log(formData)
        }

        const handleSubmit = async e => {
            console.log("submit test")
            e.preventDefault();
            setMsg('');
            setSending(true)
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm)
            }

        }


    return (
        // <main className="holderContacto">
       
            <main className="holderContacto" >
                <Navbar default="/contacto">
                </Navbar>
                <div className="row mb-5">
                    <div className="col-4 p-5 mt-5 mb-5 leftContact">
                        <br></br>
                        <p> ¿Qué estás esperando para cambiar tu cuerpo?</p>
                        <p> Déjanos tu mensaje con tu preferencia horaria y nos contactaremos contigo para concretar tu primera clase gratis!</p>
                        <p> Power Pilates - La forma más divertida de estar en forma</p>

                    </div>
                    <div className="offset-4 col-4 p-5 rightContact mb-5">
                        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                            <p>
                                <label for="name" className="label">Nombre</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="box" />
                            </p>
                            <p>
                                <label for="email" className="label">Email</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} className="box" />
                            </p>
                            <p>
                                <label for="telefono" className="label">Telefono</label>
                                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="box" />
                            </p>
                            <p>
                                <label for="preferencias" className="label">Preferencia Horaria</label>
                                <select name="preferencias" className="box" onChange={handleChange}>
                                    <option value="Mañana">Mañana</option>
                                    <option value="Tarde">Tarde</option>
                                </select>
                            </p>
                            <p>
                                <label for="mensaje" className="label">Mensaje</label>
                                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className="box"></textarea>
                            </p>
                            <p className="acciones"><input type="submit" className="boton"
                                value="Enviar" />
                            </p>
                        </form>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <br></br>
                    </div>
                    
                </div>
                <div className = "contactBottom">
                    <Footer></Footer>
                </div>
            </main>
        // </main >
    );
}

export default ContactoPage;