import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from "react-router-dom";
import axios from "axios";
import './Nav.css';

const Nav: React.FC = () => {

    //déconnexion
    const handleLogout = () => {
        axios.defaults.headers.common['Authorization'] = undefined;
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    // récupere le token dans hautorisation
    const token = localStorage.getItem('token');

    if (token) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
                <img src={logo} alt="Logo" width="130" height="50" />
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/produit">Liste Produits</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/visite">Visite Virtuelle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profil">profil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={handleLogout} to="/">Se déconnecter</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }else{
        return (
            <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
                <img src={logo} alt="Logo" width="130" height="50" />
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/inscrire">S'inscrire</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/connexion">Se connecter</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Nav;