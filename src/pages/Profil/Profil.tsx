import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profil: React.FC = () => {
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = () => {
        const id = localStorage.getItem('id');

        axios.get('http://localhost:8080/api/client/getClientById/' + id)
            .then((res) => {
                setProfile(res.data);
            }
            )
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteAccount = () => {

        if(!window.confirm("êtes vous sûr de vouloir supprimer votre compte ?")) {
            console.log("compte non supprimé");
            return;
        }
        else{
            const id = localStorage.getItem('id');

            axios.delete('http://localhost:8080/api/client/deleteClientById/' + id)
                .then((res) => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('id');
                        window.location.href = '/';
                        console.log("compte supprimé");
                    }
                )
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleEditAccount = () => {
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <section className="vh-100" style={{ backgroundColor: '#f8f9fa', marginTop: '100px' }}>
            <div className="container">
                <div className="card shadow rounded-lg" style={{borderRadius: '20px'}}>
                    <div className="card-body p-5">
                        <h1 className="text-center mb-4" style={{ fontSize: '3rem', color: '#343a40' }}>
                            Profil
                        </h1>
                        <div className="mb-4">
                            <h5 className="card-title" style={{ fontSize: '1.8rem', color: '#343a40' }}>
                                Informations du profil
                            </h5>
                            <hr />
                            <p className="card-text" style={{ fontSize: '1.5rem', color: '#6c757d' }}>
                                <strong>Nom :</strong> {profile.nom_client}
                            </p>
                            <p className="card-text" style={{ fontSize: '1.5rem', color: '#6c757d' }}>
                                <strong>Email :</strong> {profile.adresse_mail}
                            </p>
                            <p className="card-text" style={{ fontSize: '1.5rem', color: '#6c757d' }}>
                                <strong>Entreprise :</strong> {profile.entreprise}
                            </p>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-danger" onClick={handleDeleteAccount}>
                                Supprimer mon compte
                            </button>
                            <button className="btn btn-success" onClick={handleEditAccount}>
                                Modifier mon compte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Profil;
