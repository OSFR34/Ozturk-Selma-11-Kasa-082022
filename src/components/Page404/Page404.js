import React, { Component } from 'react'
import Header from '../Header/Header';
import {NavLink} from 'react-router-dom';
import './page404.css';

class Page404 extends Component {
  render() {
    return (
      <div>
            <Header/>
            <div className='container d-flex align-items-center flex-column justify-content-center'>
                <h1 className='text-404'>404</h1>
                <p className='text-404-p'>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className="nav-link-404">Retourner sur la page d’accueil</NavLink>
            </div>
      </div>
    )
  }
}

export default Page404;