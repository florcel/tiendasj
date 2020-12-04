import React from 'react'
import CartIcon from './CartIcon'
import logo from '../img/logo-sj.jpg'
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        
        <nav  className='navbar  navbar-inverse'>
        <div  className='collapse navbar-collapse'>
                <ul className='nav navbar-nav'>
                <Link to={`/`}>
                <li className="nav-item"><img alt="img-logo" className="navbar-brand" src={logo}></img></li>
                </Link>
                <li className="nav-item active"><a href="">Inicio</a></li>
                <li className="nav-item"><a href="#">Productos</a></li>
                <li className="nav-item"><a href="#">Talles</a></li>
                <li className="nav-item"><a href="#">Contacto</a></li>
                <Link to={`/cart/`}>
                <CartIcon />
                </Link>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;