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

interface Advert {
    property: Property;
    "description": string,
    "dtAvailability": Date,
    "dtCreation": Date,
    "dtModification": Date,
    "idAdvert": number,
    "title": string
}

const Produit: React.FC = () => {
    //const [properties, setProperties] = useState<Property[]>([]);
    const [adverts, setAdverts] = useState<Advert[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minSurface, setMinSurface] = useState('');
    const [maxSurface, setMaxSurface] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5002/adverts')
            .then(response => {
                if (response.data.status === 'Success' && response.data.result) {
                    setAdverts(response.data.result);
                    console.log(response.data.result);
                }
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []);

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const request = 'http://localhost:5002/adverts/filter?';
        let request_partial ="";
        // Vérifier si minSurface existe et ajouter le paramètre à l'URL de requête
        if (minSurface) {
            request_partial = `surface_min=${minSurface}`;
        }
        if(maxSurface){
            if(request_partial.length !== 0){
                request_partial += "&";
            }
            request_partial += `surface_max=${maxSurface}`;
        }
        if(minPrice){
            if(request_partial.length !== 0){
                request_partial += "&";
            }
            request_partial += `price_min=${minPrice}`;
        }
        if(maxPrice){
            if(request_partial.length !== 0){
                request_partial += "&";
            }
            request_partial += `price_max=${maxPrice}`;
        }
        if(searchQuery){
            if(request_partial.length !== 0){
                request_partial += "&";
            }
            request_partial += `address=${searchQuery}`;
        }
        axios.get(request+request_partial)
            .then(response => {
                if (response.data.status === 'Success' && response.data.result) {
                    setAdverts(response.data.result);
                    console.log(response.data.result);
                }
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
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
                                    placeholder="Rechercher une ville"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Prix min"
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Prix max"
                                value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)}
                            />
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Surface min"
                                value={minSurface}
                                onChange={e => setMinSurface(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Surface max"
                                value={maxSurface}
                                onChange={e => setMaxSurface(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-success">Rechercher</button>
                        </div>
                    </div>
                </form>
                <div className="container">
                    <div className="row">
                        {adverts.map(advert => (
                            <div key={advert.idAdvert} className="col-md-4 mb-4">
                                <PropertyCard advert={advert}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produit;