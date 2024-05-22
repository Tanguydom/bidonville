import React from 'react';
import logo from '../../assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import Nav from '../Navbar/Nav';
import './Header.css';

const Header: React.FC = () => {


    return (
        <header>
            <NavLink to="/">
            </NavLink>
            <Nav />
        </header>
    );
};

export default Header;