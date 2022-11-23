import React from "react";
import bedroom from '../assets/imagenes/bedroom.jpg';
import bedroom2 from '../assets/imagenes/bedroom2.jpg';
import bedroom3 from '../assets/imagenes/bedroom3.jpg';
import {Link} from 'react-router-dom';

export default function Inicio()
{
    return(
        <div className='row'>
            <br></br>
            <br></br>
            <h2 className="Titulo">Reserva de </h2>
            <h2 className="Titulo2">Habitaciones</h2>
            <h3 className="Subtitulo">Bogotá</h3>
        <br></br>
          <div className='col-md-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>
                    <div className='Habitacion1'>
                      <img src={bedroom} width="250px" height="250px" ></img>                      
                      <p className='Thabitacion1'>
                        Habitacion 1 Pet Friendly<br></br>dos personas<br></br>
                        Baño<br></br>WIFI
                      </p>
                      
                      <Link to={'/verhabitacion1'}>
                      <button type="button" class="btn btn-dark">Ver Habitacion</button>
                      </Link>
                    </div>
                  </th>
                  <th>
                    <div className='Habitacion2'>
                      <img src={bedroom2} width="250px" height="250px" ></img>
                      <p className='Thabitacion2'>
                        Habitacion 1 Pet Friendly<br></br>dos personas<br></br>
                        Baño<br></br>WIFI
                      </p>
                      <Link to={'verhabitacion2'}>
                      <button type="button" class="btn btn-dark">Ver Habitacion</button>
                      </Link>
                    </div>
                  </th>
                  <th>
                    <div className='Habitacion3'>
                      <img src={bedroom3} width="250px" height="250px" ></img>
                      <p className='Thabitacion3'>
                        Habitacion 1 Pet Friendly<br></br>dos personas<br></br>
                        Baño<br></br>WIFI
                      </p>
                      <Link to={'verhabitacion3'}>
                      <button type="button" class="btn btn-dark">Ver Habitacion</button>
                      </Link>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
};