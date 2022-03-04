import React from 'react';
/* import { BsListCheck } from 'react-icons/bs'; */
import { MdDelete } from 'react-icons/md';
import "../styles/navbar.css"
import logo from '../assets/Logoflor.png';
import Button from 'react-bootstrap/Button';



const Navbar = () => {

return (
     
    <div  className="navbar">
      <div className="nav">
      <h1>Flores del Tambo</h1>
      <div className="icons">
     <MdDelete/>
     </div>
      </div>
      <img src={logo} alt={logo}/>
      <p>El éxito es la suma de pequeños esfuerzos repetidos un día sí y otro también. </p>
      <div className="d-grid gap-2">
        </div>
      </div>
      

  )
};

export default Navbar