import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProduitDetail.css';

const ProduitDetail: React.FC = () => {
    const { id } = useParams();
    const [produit, setProduit] = useState<any | null>(null);

    useEffect(() => {
        getProduct(id);
    }, [id]);

    const getProduct = (id: any) => {
        axios.get(`http://localhost:8080/api/produit/${id}`)
            .then((res) => {
                setProduit(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    if (!produit) {
        return <p>Loading...</p>; // You can customize the loading state as needed
    }

    // Use the actual property that contains the image path in the produit object
    const imagePath = require(`../../assets/produit/${produit.image}`);

    return (
        <div className="card mb-3" style={{ marginTop: '100px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imagePath} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{produit.nom}</h5>
                        <p className="card-text">{produit.description}</p>
                        <p className="card-text">
                            <small className="text-muted">{produit.type}</small>
                        </p>
                        <p className="card-text">{produit.description_detail}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProduitDetail;
