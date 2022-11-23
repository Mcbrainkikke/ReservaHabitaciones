import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import bedroom from './assets/imagenes/bedroom.jpg';
//import bedroom2 from './assets/imagenes/bedroom2.jpg';
//import bedroom3 from './assets/imagenes/bedroom3.jpg';
import QuienesSomos from './componentes/Quienessomos';
import Registrarse from'./componentes/registrarse';
import IniciarSesion from './componentes/Iniciarsesion';
import VerHabitacion1 from'./componentes/verhabitacion1';
import VerHabitacion2 from'./componentes/verhabitacion2';
import VerHabitacion3 from './componentes/verhabitacion3';
import Inicio from './componentes/inicio';


function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-link">
        <div class="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio </a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Quienessomos">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Registrarse">Registrarse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Iniciarsesion">Iniciar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>    
        <Route path='/' element={<Inicio/>} exact></Route>      
          <Route path='/Quienessomos' element={<QuienesSomos/>} exact></Route>          
          <Route path='/registrarse' element={<Registrarse/>} exact></Route>
          <Route path='/Iniciarsesion' element={<IniciarSesion/>} exact></Route>
          <Route path='/verhabitacion1' element={<VerHabitacion1/>} exact></Route>
          <Route path='/verhabitacion2' element={<VerHabitacion2/>} exact></Route>
          <Route path='/verhabitacion3' element={<VerHabitacion3/>} exact></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
