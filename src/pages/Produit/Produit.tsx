import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Produit.css';
import { NavLink } from "react-router-dom";
import PropertyCard from './ProduitCard'; // Assurez-vous que le chemin est correct

interface Room {
    number: number;
    type: string;
}

interface Pricing {
    charge: number;
    price: number;
}

interface Property {
    address: string;
    idOwner: number;
    idProperty: number;
    internet: string;
    pricing: Pricing;
    rooms: Room[];
    surface: number;
    terrace: boolean;
}

const Produit: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [propertyType, setPropertyType] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5002/properties')
            .then(response => {
                if (response.data.status === 'Success') {
                    setProperties(response.data.result);
                    console.log(response.data.result);
                }
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []);

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Implement search logic here
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/properties">Properties</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="toto">
                <form onSubmit={handleSearchSubmit}>
                    <div className="row g-3 m-lg-3 mb-4">
                        <div className="col">
                            <div className="form-outline flex-fill mb-0">
                                <input
                                    type="text"
                                    id="form3Example1c"
                                    className="form-control"
                                    name="name"
                                    placeholder="Rechercher une adresse"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="type"
                                value={propertyType}
                                onChange={e => setPropertyType(e.target.value)}
                            >
                                <option value="">Aucun</option>
                                <option value="appartement">Appartement</option>
                                <option value="maison">Maison</option>
                                <option value="studio">Studio</option>
                                <option value="villa">Villa</option>
                                <option value="autres">Autres</option>
                            </select>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-success">Rechercher</button>
                        </div>
                    </div>
                </form>
                <div className="container">
                    <div className="row">
                        {properties.map(property => (
                            <div key={property.idProperty} className="col-md-4 mb-4">
                                <PropertyCard property={property} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produit;