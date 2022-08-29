import React from 'react';
import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/layout/NovedadesItem.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props; //chequear nombre IMAGEN por las dudas
    return (
        // <div class="card mb-5 mt-5 p-5">
        //     <img class="card-img-top" src={imagen} alt="Card image cap"/>
        //     <div class="card-body">
        //         <h5 class="card-title">{title}</h5>
        //         <p class="card-text">{body}</p>
        //         {/* <a href="#" class="btn btn-primary">View</a> */}
        //     </div>
        // </div>

        <div className="container card p-3 mb-5 mt-1 flex bg-white rounded shadow flex">
            <div className="row">
                <div className="col-4">
                    <img className="p-3" src={imagen} />
                </div>
                <div className="col-8 p-5" >
                    <h5 class="card-title mb-3"><b>{title}</b></h5> <hr></hr>
                    <p class="text-muted mb-3"><i>{subtitle}</i></p> 
                    <p dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            </div>
        </div>

        /* {<div className="novedades">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={imagen} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <hr />
        </div> }*/
    );
}

export default NovedadItem;