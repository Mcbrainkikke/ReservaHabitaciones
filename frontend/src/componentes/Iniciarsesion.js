import React from "react";

export default function IniciarSesion() {
    return (
        <div>
           <div className='row'>                              
                <div className='col-md-3'></div>
                <div className='col-md-6'> 
                <br></br>  
                <br></br>  
                <h2>Iniciar Sesion</h2>                   
                <form>
                    <div className='form-group'>
                        <label className='form-label'>Correo</label>
                        <input type='email' className='form-control' placeholder='Correo'></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Contraseña</label>
                        <input type='password' className='form-control' placeholder='Contraseña'></input>
                    </div>                                                    
                    <br></br>
                    <div className='form-group'>
                        <button type='type' className='btn btn-dark'>Guardar</button>                        
                        <button type='reset' className='btn btn-dark'>Regresar</button>
                    </div>
                </form>
                </div>
                <div className='col-md-6'></div>
            </div>
        </div>
    )
};