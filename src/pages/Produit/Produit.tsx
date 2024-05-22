import React, { useState, useEffect } from 'react';
import axios, {toFormData} from "axios";
import './Produit.css';
import {NavLink} from "react-router-dom";


const Produit: React.FC = () => {
    const [produits, setProduits] = useState([]); // tableau de produit

    useEffect(() => { // au chargement de la page
        getProduct();
    }, []);

    const getProduct = () => {
        axios.get('http://localhost:8080/api/produit')
            .then((res) => {
                setProduits(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleSelectedChange = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const type = formData.get('type');
        const nom = formData.get('name');

        console.log(type + " " + nom);

        if (type === "" && nom === "") {
            getProduct();
            return;
        }

        if (type === "") {
            axios.get("http://localhost:8080/api/produit/search?nom=" + nom)
            .then((res) => {
               setProduits(res.data)
            }
            )
            .catch((err) => {
                setProduits([])
              });
            return;
        }
        else {
            axios.get("http://localhost:8080/api/produit/search?nom=" + nom + "&type=" + type)
                .then((res) => {
                        setProduits(res.data)
                    }
                )
                .catch((err) => {
                    setProduits([])
                });
            return;
        }
    }

    const ProduitCard: React.FC<{ produit: any }> = ({ produit }) => {

        const imagePath = require(`../../assets/produit/${produit.image}`);

        return (
            <div className="col-md-4 mb-4">
                <NavLink className="nav-link" to={`/produit/${produit.id_produit}`} style={{ textDecoration: 'none' }}>
                    <div className="card shadow" style={{ height: '100%', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}>
                        <div className="row g-0">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <img
                                    src={imagePath}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    style={{ width: '70%', height: '80px' }}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{produit.nom}</h5>
                                    <p className="card-text">{produit.description}</p>
                                    <p className="card-text">Type : {produit.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    };


    return (
        <div className={"toto"}>
            <form onSubmit={handleSelectedChange}>
                <div className="row g-3 m-lg-3 mb-4">

                    <div className="col">
                        <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" name="name" placeholder={"Rechercher un nom"}  />
                        </div>
                    </div>

                    <div className="col">
                        <select className="form-select" aria-label="Default select example" name="type">
                            <option value="">Aucun</option>
                            <option value="camera">Caméra</option>
                            <option value="capteur">Capteur</option>
                            <option value="logiciel">Logiciel</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="lampadaire">Lampadaire</option>
                            <option value="Borne IRVE">Borne IRVE</option>
                            <option value="IA">IA</option>
                            <option value="autres">autres</option>
                        </select>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-outline-success">Rechercher</button>
                    </div>
                </div>
            </form>

            <div className="row row-cols-3 m-lg-3 m">
                {produits.map((produit: any) => (
                    <ProduitCard key={produit.id_produit} produit={produit} />
                ))}
            </div>
        </div>
    );
};

export default Produit;
