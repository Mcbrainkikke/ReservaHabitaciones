import React from 'react';


export default function Registrarse()
{
    return(
        <div className='container mt-5'>
            <div className='row'>                
                <div className='col-md-3'></div>
                <div className='col-md-6'>  
                <h2>Registrarse</h2>                  
                <form>                    
                    <div className='form-group'>
                        <label className='form-label'>Nombres</label>
                        <input type='text' className='form-control' placeholder='Nombres'></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Correo</label>
                        <input type='email' className='form-control' placeholder='Correo'></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Contraseña</label>
                        <input type='password' className='form-control' placeholder='Contraseña'></input>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Fecha de Nacimiento</label>
                        <input type='date' className='form-control' placeholder='Fecha'></input>
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
}